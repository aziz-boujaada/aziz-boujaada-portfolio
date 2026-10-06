import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Server, Layout, Smartphone, Database, Wrench
} from 'lucide-react';
import { TechIcon } from './TechIcon';
import { usePortfolio } from '../context';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const { t } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code className="w-4 h-4 text-emerald-500" />;
      case 'backend':
        return <Server className="w-4 h-4 text-emerald-500" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-emerald-500" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-emerald-500" />;
      case 'databases':
        return <Database className="w-4 h-4 text-emerald-500" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-emerald-500" />;
      default:
        return <Code className="w-4 h-4 text-emerald-500" />;
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <span>{t.skills.sectionKicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {t.skills.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400">
            {t.skills.sectionSubtitle}
          </p>
        </motion.div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-1.5 p-1.5 mb-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-fit"
        >
          <motion.button
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-white dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 shadow-xs'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
            }`}
          >
            {t.skills.filterAll}
          </motion.button>
          {skillCategories.map((cat) => (
            <motion.button
              whileTap={{ scale: 0.96 }}
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white dark:bg-neutral-800 text-emerald-700 dark:text-emerald-400 shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
              }`}
            >
              {cat.title[t.skills.categories[cat.id as keyof typeof t.skills.categories] ? (t.nav.home === 'Accueil' ? 'fr' : 'en') : 'fr']}
            </motion.button>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.35, delay: catIndex * 0.05 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-6 backdrop-blur-md transition-shadow duration-200 hover:border-emerald-500/40 hover:shadow-xl"
              >
                {/* Category Title */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-neutral-200/80 dark:border-neutral-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                    {category.title[t.nav.home === 'Accueil' ? 'fr' : 'en']}
                  </h3>
                </div>

                {/* Skills List in Category */}
                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-xs transition-colors cursor-default ${
                        skill.isKey
                          ? 'border-emerald-500/30 bg-white dark:bg-emerald-950/20 text-neutral-900 dark:text-neutral-100 font-semibold shadow-xs hover:border-emerald-500/60'
                          : 'border-neutral-200/90 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="w-4 h-4 shrink-0 flex items-center justify-center">
                        <TechIcon name={skill.name} className="w-4 h-4 shrink-0" />
                      </div>
                      <span className="truncate flex-1">{skill.name}</span>
                      {skill.isKey && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 ml-1" title="Compétence clé / Key Skill" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Notice explaining clean methodology */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">Spécialisation active :</span> Java & Spring Boot, Angular, Laravel, React, Flutter, SQL.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
