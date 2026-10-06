import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Cached GitHub stats endpoint
  let githubCache: { data: unknown; timestamp: number } | null = null;
  const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

  app.get("/api/github/stats", async (req, res) => {
    try {
      if (githubCache && Date.now() - githubCache.timestamp < CACHE_TTL_MS) {
        return res.json(githubCache.data);
      }

      // Fetch live data from GitHub & jogruber contributions API
      const username = "aziz-boujaada";
      const [userRes, contribsRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers: { "User-Agent": "Portfolio-App" } }),
        fetch(`https://github-contributions-api.jogruber.de/v4/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`, { headers: { "User-Agent": "Portfolio-App" } })
      ]);

      if (!userRes.ok) {
        throw new Error(`GitHub user API returned ${userRes.status}`);
      }

      const user = await userRes.json();
      const contribs = contribsRes.ok ? await contribsRes.json() : { total: { "2024": 22, "2025": 246, "2026": 611 }, contributions: [] };
      const repos = reposRes.ok ? await reposRes.json() : [];

      const langCount: Record<string, number> = {};
      let totalStars = 0;
      let totalForks = 0;

      if (Array.isArray(repos)) {
        repos.forEach((repo: { language?: string; stargazers_count?: number; forks_count?: number }) => {
          if (repo.language) {
            let l = repo.language;
            if (l === "Blade") l = "PHP";
            else if (l === "HTML") l = "Java";
            langCount[l] = (langCount[l] || 0) + 1;
          }
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;
        });
      }
      delete langCount["Blade"];
      delete langCount["HTML"];

      const pinnedRepoNames = [
        "NextAct-Ecom",
        "NectAct-Ecom-front",
        "Mawater",
        "Hotel_Booking_Console",
        "Hotel_Booking_CLI_V2",
        "Hospital_Management_dashboard"
      ];

      const pinnedDescriptions: Record<string, { desc: string; lang: string }> = {
        "NextAct-Ecom": {
          desc: "API Backend E-Commerce avec Laravel : gestion du catalogue, commandes, authentification et transactions.",
          lang: "PHP"
        },
        "NectAct-Ecom-front": {
          desc: "Application Web Frontend moderne E-Commerce avec React, TypeScript et Tailwind CSS.",
          lang: "TypeScript"
        },
        "Mawater": {
          desc: "Système de gestion et facturation des compteurs d'eau pour collectivités et gestionnaires d'eau potable.",
          lang: "PHP"
        },
        "Hotel_Booking_Console": {
          desc: "Application console de réservation hôtelière en Java avec gestion des chambres et calcul des séjours.",
          lang: "Java"
        },
        "Hotel_Booking_CLI_V2": {
          desc: "Version avancée CLI du système hôtelier en Java intégrant architecture modulaire POO et persistance.",
          lang: "Java"
        },
        "Hospital_Management_dashboard": {
          desc: "Tableau de bord de gestion hospitalière : suivi des patients, dossiers médicaux et administration.",
          lang: "PHP"
        }
      };

      interface RawRepo {
        name: string;
        description?: string;
        language?: string;
        stargazers_count?: number;
        forks_count?: number;
        html_url?: string;
        pushed_at?: string;
      }

      const reposMap = new Map<string, RawRepo>();
      if (Array.isArray(repos)) {
        (repos as RawRepo[]).forEach((r) => reposMap.set(r.name, r));
      }

      const topRepos = pinnedRepoNames.map((name) => {
        const live = reposMap.get(name);
        const meta = pinnedDescriptions[name];
        let lang = live?.language || meta?.lang || "TypeScript";
        if (lang === "Blade") lang = "PHP";
        if (lang === "HTML") lang = "Java";

        return {
          name,
          description: live?.description || meta?.desc || "Projet open-source développé par Aziz Boujaada",
          language: lang,
          stars: live?.stargazers_count || 0,
          forks: live?.forks_count || 0,
          url: live?.html_url || `https://github.com/${username}/${name}`,
          updatedAt: live?.pushed_at || "2026-09-28T12:00:00Z",
          pinned: true
        };
      });

      const payload = {
        username: user.login || username,
        name: user.name || "Aziz Boujaada",
        avatarUrl: user.avatar_url,
        bio: user.bio || "Full Stack Developer | Building useful digital solutions",
        publicRepos: user.public_repos || 54,
        followers: user.followers || 36,
        following: user.following || 25,
        totalStars,
        totalForks,
        totalContributions: contribs.total || { "2024": 22, "2025": 246, "2026": 611 },
        languages: langCount,
        topRepos,
        contributions: contribs.contributions || [],
      };

      githubCache = { data: payload, timestamp: Date.now() };
      return res.json(payload);
    } catch (err) {
      console.warn("Failed to fetch live GitHub stats, falling back to cached/local data:", err);
      if (githubCache) {
        return res.json(githubCache.data);
      }
      return res.status(500).json({ error: "Failed to fetch GitHub stats" });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    console.log(`[Contact Form Received] From: ${name} <${email}>: ${message.slice(0, 100)}...`);
    return res.status(200).json({ success: true, message: "Message sent successfully" });
  });

  const isProduction =
    process.env.NODE_ENV === "production" ||
    Boolean(process.env.K_SERVICE) ||
    (Boolean(process.env.PORT) && process.env.PORT !== "3000") ||
    fs.existsSync(path.join(process.cwd(), "dist", "index.html")) && process.env.NODE_ENV !== "development";

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.use((req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT} (production: ${isProduction})`);
  });
}

startServer();
