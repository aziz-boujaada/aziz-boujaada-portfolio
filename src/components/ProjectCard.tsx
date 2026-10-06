import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, Info, Layers, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';
import { TechIcon } from './TechIcon';
import { Project } from '../types';
import { usePortfolio } from '../context';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, t, setSelectedProject } = usePortfolio();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden flex flex-col transition-shadow duration-300 hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-emerald-950/20 h-full"
    >
      
      {/* Project Image Placeholder Container */}
      <div className="relative aspect-video w-full border-b border-neutral-100 dark:border-neutral-800/80 bg-neutral-100/80 dark:bg-neutral-950/70 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10 dark:opacity-20 pointer-events-none" />

        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <p className="font-mono text-xs font-bold text-neutral-800 dark:text-neutral-200 tracking-wider">
              {project.imagePlaceholder}
            </p>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400">
              {project.type[language]}
            </span>
          </div>
        )}

        {/* Quick view details overlay on hover */}
        <button
          type="button"
          onClick={() => setSelectedProject(project)}
          className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-[2px]"
          aria-label={`${t.projects.viewDetails} - ${project.title}`}
        >
          <Eye className="w-4 h-4 text-emerald-400" />
          <span>{t.projects.viewDetails}</span>
        </button>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Unboxed Metadata: Type & Category */}
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            <span>{project.type[language]}</span>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
            {project.shortDescription[language]}
          </p>
        </div>

        {/* Technologies List */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05, y: -1 }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/80 cursor-default"
              >
                <TechIcon name={tech} className="w-3 h-3 shrink-0" />
                <span>{tech}</span>
              </motion.span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-1.5 py-0.5 text-[10px] font-mono text-neutral-500 self-center">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {project.isGithubPrivate ? (
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60"
                  title={project.githubPlaceholder || 'Dépôt privé'}
                >
                  <Lock className="w-3 h-3 text-neutral-400" />
                  <span>{t.projects.privateGithub}</span>
                </div>
              ) : (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubUrl || 'https://github.com/aziz-boujaada'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </motion.a>
              )}

              {project.demoUrl && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Demo</span>
                </motion.a>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              <span>{t.projects.viewDetails}</span>
              <Info className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

      </div>

    </motion.div>
  );
};
