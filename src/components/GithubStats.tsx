import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GitCommit, Star, GitFork, BookOpen, Users, 
  ExternalLink, Calendar, Flame, Code2, Sparkles, CheckCircle2, Pin
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { usePortfolio } from '../context';
import { initialGithubData } from '../data/githubData';
import { GithubStatsData, GithubContributionDay } from '../types';

export const GithubStats: React.FC = () => {
  const { language } = usePortfolio();
  const [data, setData] = useState<GithubStatsData>(initialGithubData);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);

  // Fetch live stats from API route with initial data fallback
  useEffect(() => {
    let isMounted = true;
    fetch('/api/github/stats')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load GitHub stats');
        return res.json();
      })
      .then((liveData) => {
        if (isMounted && liveData && liveData.username) {
          setData(liveData);
        }
      })
      .catch((err) => {
        console.warn('Using seeded GitHub stats:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Filter contributions by selected year
  const filteredContributions = useMemo(() => {
    if (!data.contributions || data.contributions.length === 0) return [];
    if (selectedYear === 'all') {
      return data.contributions;
    }
    return data.contributions.filter((d: GithubContributionDay) => d.date.startsWith(selectedYear));
  }, [data.contributions, selectedYear]);

  // Group contributions into 7-day columns (weeks) for heatmap
  const weeks = useMemo(() => {
    const result: GithubContributionDay[][] = [];
    let currentWeek: GithubContributionDay[] = [];

    filteredContributions.forEach((day: GithubContributionDay, index: number) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === filteredContributions.length - 1) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });

    return result;
  }, [filteredContributions]);

  const totalAllTime = useMemo(() => {
    return Object.values(data.totalContributions).reduce((a, b) => a + b, 0);
  }, [data.totalContributions]);

  // Total commits in selected period
  const totalInSelectedPeriod = useMemo(() => {
    if (selectedYear === 'all') {
      const sum = filteredContributions.reduce((acc, curr) => acc + curr.count, 0);
      return sum || totalAllTime;
    }
    return data.totalContributions[selectedYear] || filteredContributions.reduce((acc, curr) => acc + curr.count, 0);
  }, [filteredContributions, selectedYear, data.totalContributions, totalAllTime]);

  // Calculate Language percentages (HTML removed & merged into Java, Blade removed & merged into PHP)
  const languagesDistribution = useMemo(() => {
    const raw: Record<string, number> = { ...data.languages };
    const bladeCount = raw['Blade'] || 0;
    const htmlCount = raw['HTML'] || 0;

    if (bladeCount > 0) {
      raw['PHP'] = (raw['PHP'] || 0) + bladeCount;
    }
    if (htmlCount > 0) {
      raw['Java'] = (raw['Java'] || 0) + htmlCount;
    }

    delete raw['Blade'];
    delete raw['HTML'];

    const totalRepos = Object.values(raw).reduce((a, b) => a + b, 0) || 1;
    const colors: Record<string, string> = {
      PHP: '#777bb4',
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Java: '#f89820',
      C: '#555555',
    };

    return Object.entries(raw)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({
        name,
        count,
        percent: Math.round((count / totalRepos) * 100),
        color: colors[name] || '#10b981',
      }));
  }, [data.languages]);

  // Color helper for contribution cells
  const getCellColor = (level: number, count: number) => {
    if (count === 0 || level === 0) {
      return 'bg-neutral-100 dark:bg-neutral-800/60 border-neutral-200/50 dark:border-neutral-700/40';
    }
    if (level === 1) {
      return 'bg-emerald-500/35 border-emerald-500/40 dark:bg-emerald-500/30';
    }
    if (level === 2) {
      return 'bg-emerald-500/65 border-emerald-500/70 dark:bg-emerald-500/60';
    }
    if (level === 3) {
      return 'bg-emerald-500/85 border-emerald-500/90 dark:bg-emerald-500/80';
    }
    return 'bg-emerald-500 border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section
      id="activity"
      className="py-20 md:py-28 bg-transparent transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'fr' ? 'Activité Open Source' : 'Open Source Activity'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {language === 'fr' ? 'Statistiques & Commits GitHub' : 'GitHub Analytics & Contributions'}
            </h2>
            <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
              {language === 'fr'
                ? 'Données synchronisées en direct avec mon profil GitHub officiel (@aziz-boujaada).'
                : 'Live telemetry synced directly with my official GitHub profile (@aziz-boujaada).'}
            </p>
          </motion.div>

          {/* Profile CTA Pill */}
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={`https://github.com/${data.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-lg transition-all text-xs font-semibold text-neutral-800 dark:text-neutral-200 shrink-0 self-start md:self-auto"
          >
            <GithubIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>github.com/{data.username}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </motion.a>
        </div>

        {/* 1. Key Metrics Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          
          {/* Metric 1: Total Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {language === 'fr' ? 'Total Contributions' : 'Total Contributions'}
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <GitCommit className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              {totalAllTime}+
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <Flame className="w-3.5 h-3.5" />
              <span>{data.totalContributions['2026'] || 611} en 2026</span>
            </div>
          </motion.div>

          {/* Metric 2: Public Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {language === 'fr' ? 'Dépôts Publics' : 'Public Repositories'}
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              {data.publicRepos}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-neutral-500">
              <Code2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Projets & librairies open-source</span>
            </div>
          </motion.div>

          {/* Metric 3: Total Stars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {language === 'fr' ? 'Étoiles Reçues' : 'Stars Earned'}
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Star className="w-4 h-4 fill-amber-500/20" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              {data.totalStars} ★
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-neutral-500">
              <GitFork className="w-3.5 h-3.5 text-neutral-400" />
              <span>Reconnaissance communauté</span>
            </div>
          </motion.div>

          {/* Metric 4: Followers & Network */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-xs hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                {language === 'fr' ? 'Réseau Développeurs' : 'Dev Network'}
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              {data.followers} <span className="text-xs font-normal text-neutral-500">abonnés</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-[11px] font-mono text-neutral-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{data.following} abonnements actifs</span>
            </div>
          </motion.div>

        </div>

        {/* 2. Interactive Commit Calendar (Heatmap) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-sm mb-10"
        >
          {/* Heatmap Top Bar with Period Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200/80 dark:border-neutral-800 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-500" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {language === 'fr' ? 'Calendrier de Contributions' : 'Contribution Calendar'}
                </h3>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">{totalInSelectedPeriod} contributions</span> {selectedYear === 'all' ? (language === 'fr' ? 'au total (toutes années confondues)' : 'all-time total contributions') : (language === 'fr' ? `en ${selectedYear}` : `in ${selectedYear}`)}
              </p>
            </div>

            {/* Year Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/80 self-start sm:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedYear('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedYear === 'all'
                    ? 'bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {language === 'fr' ? 'Tout' : 'All'}
              </button>
              {['2026', '2025', '2024'].map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    selectedYear === yr
                      ? 'bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Heatmap Grid Container with horizontal scrolling on smaller screens */}
          <div className="relative overflow-x-auto pb-4 pt-1">
            <div className="min-w-[760px] select-none">
              
              {/* Weeks Grid */}
              <div className="flex gap-[3.5px]">
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3.5px]">
                    {week.map((day, dIndex) => (
                      <div
                        key={dIndex}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            date: day.date,
                            count: day.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top - 8,
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-[11px] h-[11px] rounded-[2.5px] border transition-transform duration-100 hover:scale-125 hover:z-20 ${getCellColor(
                          day.level,
                          day.count
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Legend & Summary Footer */}
              <div className="flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <span className="font-mono">
                  {language === 'fr' ? 'Chaque carré représente un jour de code' : 'Each cell represents a day of code'}
                </span>

                <div className="flex items-center gap-2">
                  <span>{language === 'fr' ? 'Moins' : 'Less'}</span>
                  <div className="flex items-center gap-[3px]">
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500/35 border border-emerald-500/40" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500/65 border border-emerald-500/70" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500/85 border border-emerald-500/90" />
                    <div className="w-[10px] h-[10px] rounded-[2px] bg-emerald-500 border border-emerald-400" />
                  </div>
                  <span>{language === 'fr' ? 'Plus' : 'More'}</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 3. Languages Breakdown & Top Open Source Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Languages Breakdown (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 sm:p-7 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-sm space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Code2 className="w-4 h-4 text-emerald-500" />
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {language === 'fr' ? 'Langages les Plus Utilisés' : 'Most Used Languages'}
                </h3>
              </div>
            
            </div>

            {/* Combined Segmented Progress Bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-neutral-100 dark:bg-neutral-800 p-0.5 gap-0.5 shadow-inner">
              {languagesDistribution.map((lang) => (
                <div
                  key={lang.name}
                  style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                  className="h-full rounded-xs transition-all duration-500"
                  title={`${lang.name}: ${lang.percent}% (${lang.count} dépôts)`}
                />
              ))}
            </div>

            {/* Language Breakdown Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {languagesDistribution.map((lang) => (
                <motion.div
                  key={lang.name}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="p-3 rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-950/50 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">{lang.name}</span>
                  </div>
                  <span className="font-mono text-neutral-500 font-semibold">{lang.percent}%</span>
                </motion.div>
              ))}
            </div>

            {/* Engineering Highlights */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-xs text-neutral-700 dark:text-neutral-300 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Polyvalence Full-Stack</span>
              </div>
              <p className="leading-relaxed text-[11px] text-neutral-600 dark:text-neutral-400">
                Maîtrise équilibrée entre architectures backend (PHP/Laravel, Java/Spring Boot) et frontend moderne réactif (TypeScript, React, Angular).
              </p>
            </div>
          </motion.div>

          {/* Right: Featured Pinned Repositories (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center justify-between pb-2">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                  <Pin className="w-4 h-4 text-emerald-500 rotate-45" />
                  <span>{language === 'fr' ? 'Dépôts Épinglés sur GitHub' : 'Pinned GitHub Repositories'}</span>
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {language === 'fr' ? 'Projets et architectures mis en avant sur mon profil GitHub (@aziz-boujaada).' : 'Key projects and systems pinned on my GitHub profile (@aziz-boujaada).'}
                </p>
              </div>
            </div>

            {/* Repositories Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.topRepos.map((repo) => {
                const displayLang = repo.language === 'Blade' ? 'PHP' : repo.language === 'HTML' ? 'Java' : (repo.language || 'Projet');
                return (
                  <motion.a
                    key={repo.name}
                    whileHover={{ y: -5, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md shadow-xs hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Pin className="w-3.5 h-3.5 text-emerald-500 shrink-0 rotate-45" />
                          <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                            {repo.name}
                          </span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-500 shrink-0 transition-colors" />
                      </div>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 mt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] font-mono text-neutral-500">
                      <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>{displayLang}</span>
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                        {language === 'fr' ? 'Épinglé' : 'Pinned'}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Floating Tooltip for Hovered Calendar Day */}
      <AnimatePresence>
        {hoveredDay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'fixed',
              left: `${hoveredDay.x}px`,
              top: `${hoveredDay.y}px`,
              transform: 'translate(-50%, -100%)',
              pointerEvents: 'none',
              zIndex: 100,
            }}
            className="px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[11px] font-medium shadow-xl whitespace-nowrap"
          >
            <span className="font-bold text-emerald-400 dark:text-emerald-600">
              {hoveredDay.count} contribution{hoveredDay.count > 1 ? 's' : ''}
            </span>{' '}
            le {formatDate(hoveredDay.date)}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
