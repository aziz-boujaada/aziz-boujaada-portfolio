import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, ShieldCheck, Globe, CheckCircle2, UserCheck } from 'lucide-react';
import { usePortfolio } from '../context';

export const About: React.FC = () => {
  const { t } = usePortfolio();

  return (
    <section
      id="about"
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
            <span>{t.about.sectionKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {t.about.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story & Prose (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>

            {/* Architecture philosophy cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.about.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-4 rounded-xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-xs transition-shadow hover:shadow-md hover:border-emerald-500/40"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                    {index === 0 ? <Layers className="w-4 h-4" /> : index === 1 ? <Database className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Soft Skills & Languages & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Soft skills card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                <UserCheck className="w-4 h-4 text-emerald-500" />
                <span>{t.about.softSkillsTitle}</span>
              </div>
              <ul className="space-y-2.5">
                {t.about.softSkills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Spoken Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>{t.about.languagesTitle}</span>
              </div>
              <div className="space-y-3">
                {t.about.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{lang.name}</span>
                    <span className="text-neutral-500 dark:text-neutral-400 font-mono text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Link Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 flex items-center justify-between"
            >
              <div className="text-xs">
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">Intéressé par mon profil ?</p>
                <p className="text-neutral-600 dark:text-neutral-400">Échangeons sur vos opportunités techniques.</p>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors whitespace-nowrap shadow-xs"
              >
                Contact
              </motion.a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
