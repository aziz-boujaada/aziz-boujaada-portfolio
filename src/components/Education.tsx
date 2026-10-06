import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { usePortfolio } from '../context';
import { educationList, certificationsList } from '../data/education';

export const Education: React.FC = () => {
  const { t, language } = usePortfolio();

  return (
    <section
      id="education"
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
            <span>{t.education.sectionKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {t.education.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            {t.education.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Education Timeline (8 cols) */}
          <div className="lg:col-span-8 relative">
            
            {/* Timeline line */}
            <div
              className="absolute left-4 sm:left-6 top-4 bottom-4 w-0.5 bg-neutral-200 dark:bg-neutral-800"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {educationList.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  
                  {/* Timeline dot */}
                  <div
                    className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border z-10 transition-transform duration-200 group-hover:scale-105 ${
                      item.highlight
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                        : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Card Content */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-1 p-5 sm:p-6 rounded-2xl border backdrop-blur-sm transition-shadow duration-300 hover:shadow-lg ${
                      item.highlight
                        ? 'bg-white/90 dark:bg-neutral-900/90 border-emerald-500/40 shadow-sm ring-1 ring-emerald-500/20'
                        : 'bg-white/85 dark:bg-neutral-900/80 border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {item.institution}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {item.campus && (
                      <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span>{item.campus}</span>
                      </div>
                    )}

                    <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                      {item.title[language]}
                    </h4>

                    {item.description && (
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description[language]}
                      </p>
                    )}
                  </motion.div>

                </motion.div>
              ))}
            </div>

          </div>

          {/* Right: Certifications & Recognition (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xs space-y-4 hover:border-emerald-500/30 transition-colors"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100 pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <Award className="w-4 h-4 text-emerald-500" />
                <span>{t.education.certificationsTitle}</span>
              </div>

              <div className="space-y-3">
                {certificationsList.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-800/40 transition-colors hover:border-emerald-500/40"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                        {cert.title}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                        {cert.year}
                      </span>
                    </div>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      Organisme : {cert.issuer}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Academic Philosophy Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 text-xs text-neutral-600 dark:text-neutral-400 space-y-2"
            >
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                YouCode – UM6P (Université Mohammed VI Polytechnique)
              </p>
              <p className="leading-relaxed">
                Pédagogie active par projets axée sur les exigences du marché mondial de l'ingénierie logicielle, les architectures scalables et la rigueur algorithmique.
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
