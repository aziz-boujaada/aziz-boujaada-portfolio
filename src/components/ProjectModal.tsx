import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Lock, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechIcon } from './TechIcon';
import { usePortfolio } from '../context';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, language, t } = usePortfolio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, setSelectedProject]);

  return (
    <AnimatePresence>
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 z-10 space-y-6"
          >
            {/* Top bar with close button */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-1">
                  <span>{selectedProject.type[language]}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label={t.projects.closeModal}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Project Image Container */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950/70 relative">
              {selectedProject.imageUrl ? (
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                    <Layers className="w-6 h-6" />
                  </div>
                  <p className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200 tracking-wider">
                    {selectedProject.imagePlaceholder}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-sm">
                    {t.projects.imagePlaceholderNotice}
                  </p>
                </div>
              )}
            </div>

            {/* Detailed description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
                {t.projects.overview}
              </h4>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {selectedProject.fullDescription[language]}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                {t.projects.technologies}
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-2xs cursor-default"
                  >
                    <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                    <span>{tech}</span>
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                {t.projects.keyFeatures}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.features[language].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions & Links */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                {selectedProject.isGithubPrivate ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                    <Lock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t.projects.privateGithub}</span>
                    {selectedProject.githubPlaceholder && (
                      <span className="text-[10px] font-mono opacity-60">({selectedProject.githubPlaceholder})</span>
                    )}
                  </div>
                ) : (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.githubUrl || 'https://github.com/aziz-boujaada'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>{t.projects.viewGithub}</span>
                  </motion.a>
                )}

                {selectedProject.demoUrl && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.projects.viewDemo}</span>
                  </motion.a>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                {t.projects.closeModal}
              </motion.button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
