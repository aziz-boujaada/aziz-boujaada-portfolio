import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderGit2, Mail, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechIcon } from './TechIcon';
import { usePortfolio } from '../context';
import profilePhoto from '../assets/images/aziz.png';

export const Hero: React.FC = () => {
  const { t } = usePortfolio();

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-transparent"
    >
      {/* Subtle background glow effect */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-sm font-semibold tracking-wide uppercase text-neutral-500 dark:text-neutral-400"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-[1.1]"
              >
                {t.hero.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="inline-block mt-2"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Core Tech Stack inline highlight */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300"
            >
              <span className="text-neutral-400 dark:text-neutral-500 font-sans">{t.hero.stackSummary} :</span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 font-semibold text-emerald-600 dark:text-emerald-400 cursor-default">
                <TechIcon name="Java" className="w-3.5 h-3.5" />
                <span>Java / Spring Boot</span>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 font-semibold text-emerald-600 dark:text-emerald-400 cursor-default">
                <TechIcon name="Angular" className="w-3.5 h-3.5" />
                <span>Angular</span>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 cursor-default">
                <TechIcon name="Laravel" className="w-3.5 h-3.5" />
                <span>Laravel</span>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 cursor-default">
                <TechIcon name="React" className="w-3.5 h-3.5" />
                <span>React</span>
              </motion.span>
              <motion.span whileHover={{ scale: 1.05, y: -2 }} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 cursor-default">
                <TechIcon name="Flutter" className="w-3.5 h-3.5" />
                <span>Flutter</span>
              </motion.span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              {/* Primary CTA: View Projects */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 transition-colors shadow-md shadow-emerald-950/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>{t.hero.ctaProjects}</span>
              </motion.a>

              {/* Secondary CTA: Contact me */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800/90 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{t.hero.ctaContact}</span>
              </motion.a>

              {/* GitHub CTA */}
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/aziz-boujaada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-800 transition-colors whitespace-nowrap"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.hero.ctaGithub}</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Element / Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              
              {/* Outer decorative card */}
              <div className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 p-5 sm:p-6 backdrop-blur-sm shadow-xl dark:shadow-2xl">
                
                {/* Header bar of the visual */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                    <span>developer.profile</span>
                  </div>
                </div>

                {/* Developer Profile Portrait */}
                <div className="relative my-4 aspect-square max-w-[300px] mx-auto rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700/80 shadow-md group">
                  <img
                    src={profilePhoto}
                    alt="Aziz Boujaada — Développeur Full Stack"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/aziz.png';
                    }}
                  />

                  {/* Gradient Scrim for crisp contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <span className="text-xs font-bold tracking-tight block">
                        Aziz Boujaada
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono block">
                        Full-Stack Developer
                      </span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shadow-xs" title="Disponible pour opportunités" />
                  </div>
                </div>

                {/* Quick stats/features underneath */}
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Formation</span>
                    <span className="font-semibold text-neutral-800 dark:text-neutral-200">YouCode · UM6P</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Focus</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Java & Angular</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Down arrow anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <span>En savoir plus</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
