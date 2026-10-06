import React, { useEffect, useRef } from 'react';
import { usePortfolio } from '../context';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = usePortfolio();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (interpolated for responsive smoothness)
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
      isActive: false,
    };

    const ripples: Ripple[] = [];
    const particles: Particle[] = [];

    // Fewer particles for a cleaner, non-cluttered look that preserves full readability
    const calculateParticleCount = () => {
      const area = width * height;
      if (width < 640) return Math.min(24, Math.max(16, Math.floor(area / 32000)));
      if (width < 1024) return Math.min(34, Math.max(22, Math.floor(area / 28000)));
      return Math.min(44, Math.max(28, Math.floor(area / 24000)));
    };

    const initParticles = () => {
      particles.length = 0;
      const count = calculateParticleCount();

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.2 + 2.0, // Clean, distinct particle size (2.0 - 3.2px)
          alpha: Math.random() * 0.25 + 0.75, // Confident, readable opacity
        });
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        maxRadius: 180,
        alpha: 0.75,
      });
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick, { passive: true });

    initParticles();

    // Theme calibration:
    const isDark = theme === 'dark';

    // In dark mode: neon mint/emerald (RGB 52, 211, 153)
    // In light mode: deep, crisp forest-emerald (RGB 5, 122, 85) that does not wash out or clutter text
    const particleRGB = isDark ? '52, 211, 153' : '5, 122, 85';
    const lineRGB = isDark ? '52, 211, 153' : '5, 122, 85';
    
    // Controlled distance so lines only bridge truly close neighbors
    const maxConnectDist = isDark ? 110 : 95;
    const maxConnectionsPerParticle = 2; // Strict limit: keeps line count minimal and intentional

    let lastTime = performance.now();

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // Subtle ambient cursor glow
      if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
        const glowRadius = isDark ? 220 : 160;
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          glowRadius
        );
        glow.addColorStop(
          0,
          isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(5, 122, 85, 0.05)'
        );
        glow.addColorStop(
          0.6,
          isDark ? 'rgba(5, 150, 105, 0.04)' : 'rgba(5, 122, 85, 0.015)'
        );
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw click ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 150 * dt;
        r.alpha -= 0.8 * dt;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${lineRGB}, ${Math.max(0, r.alpha * (isDark ? 0.7 : 0.5))})`;
        ctx.lineWidth = isDark ? 1.8 : 1.3;
        ctx.stroke();
        ctx.restore();
      }

      // Track connection counts per particle to avoid dense spiderwebs
      const len = particles.length;
      const connectionCount = new Uint8Array(len);

      // Track closest particles to mouse (max 3 lines to cursor)
      const mouseCandidates: { idx: number; dist: number }[] = [];

      // 1. Update positions and draw particle dots
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce gently off boundaries
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Gentle cursor repulsion
        if (mouse.isActive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0.001) {
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (mouse.radius - dist) / mouse.radius;
            const pushFactor = force * 2.8;
            p.x -= forceDirectionX * pushFactor;
            p.y -= forceDirectionY * pushFactor;

            // Collect candidate for mouse laser line
            mouseCandidates.push({ idx: i, dist });
          }
        }

        // Draw particle node
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleRGB}, ${p.alpha})`;

        if (isDark) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#34d399';
        } else {
          // Sharp, clean dot in light mode without muddy blurry halos
          ctx.shadowBlur = 2;
          ctx.shadowColor = '#059669';
        }
        ctx.fill();
        ctx.restore();
      }

      // 2. Draw minimal, elegant node-to-node lines (capped at max 2 connections per node)
      for (let i = 0; i < len; i++) {
        if (connectionCount[i] >= maxConnectionsPerParticle) continue;
        const p = particles[i];

        for (let j = i + 1; j < len; j++) {
          if (connectionCount[i] >= maxConnectionsPerParticle) break;
          if (connectionCount[j] >= maxConnectionsPerParticle) continue;

          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist < maxConnectDist) {
            connectionCount[i]++;
            connectionCount[j]++;

            // Crisp yet unobtrusive line opacity
            const edgeAlpha = (1 - dist / maxConnectDist) * (isDark ? 0.35 : 0.22);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineRGB}, ${edgeAlpha})`;
            ctx.lineWidth = isDark ? 1.1 : 0.95; // Finer hairline in light mode
            ctx.stroke();
          }
        }
      }

      // 3. Draw mouse connections (only to the closest 3 particles max)
      if (mouse.isActive && mouseCandidates.length > 0) {
        mouseCandidates.sort((a, b) => a.dist - b.dist);
        const topCandidates = mouseCandidates.slice(0, 3);

        for (const candidate of topCandidates) {
          const p = particles[candidate.idx];
          const mouseLineAlpha = (1 - candidate.dist / mouse.radius) * (isDark ? 0.65 : 0.45);

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${lineRGB}, ${mouseLineAlpha})`;
          ctx.lineWidth = isDark ? 1.3 : 1.0;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [theme]);

  return (
    // Rendered at z-30 (above page elements) with pointer-events-none so it doesn't block interactions
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};
