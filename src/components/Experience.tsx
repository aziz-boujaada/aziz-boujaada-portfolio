import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Layers, Smartphone } from 'lucide-react';
import { TechIcon } from './TechIcon';
import { usePortfolio } from '../context';
import { workExperience } from '../data/experience';

export const Experience: React.FC = () => {
  const { t, language } = usePortfolio();
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-neutral-50/60 dark:bg-neutral-900/40 border-y border-neutral-200/70 dark:border-neutral-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <span>{t.experience.sectionKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {t.experience.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            {t.experience.sectionSubtitle}
          </p>
        </motion.div>

        {/* Company Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {workExperience.company}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {workExperience.role[language]}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400 sm:self-center">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>{workExperience.period}</span>
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{workExperience.location}</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {workExperience.phases.map((phase) => {
            const isSelected = selectedPhase === phase.phaseNumber;
            return (
              <motion.button
                key={phase.phaseNumber}
                type="button"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedPhase(phase.phaseNumber)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'border-emerald-500 bg-white dark:bg-neutral-900 shadow-md ring-1 ring-emerald-500/30'
                    : 'border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    isSelected ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-400'
                  }`}>
                    {phase.phaseLabel[language]}
                  </span>
                  {phase.phaseNumber === 1 ? (
                    <Layers className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Smartphone className="w-4 h-4 text-emerald-500" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  {phase.projectName}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {phase.type[language]}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Detailed Phase Content Box */}
        <AnimatePresence mode="wait">
          {workExperience.phases.map((phase) => {
            if (phase.phaseNumber !== selectedPhase) return null;
            return (
              <motion.div
                key={phase.phaseNumber}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 shadow-sm transition-all"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                      {phase.phaseLabel[language]}
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-700">·</span>
                    <span className="text-xs text-neutral-500">{phase.type[language]}</span>
                  </div>
                  <h4 className="text-2xl font-extrabold text-neutral-900 dark:text-white">
                    {phase.projectName}
                  </h4>
                  <p className="mt-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-4xl">
                    {phase.description[language]}
                  </p>
                </div>

                {/* Technologies Grid */}
                <div className="mb-8 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                  <h5 className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 mb-3 tracking-wider">
                    {t.experience.techLabel}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {phase.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow-2xs cursor-default"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                        <span>{tech}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                  <h5 className="text-xs font-mono uppercase text-neutral-500 dark:text-neutral-400 mb-4 tracking-wider">
                    {t.experience.featuresLabel}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {phase.features[language].map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
};
