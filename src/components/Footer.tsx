import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { usePortfolio } from '../context';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Footer: React.FC = () => {
  const { t } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-50 dark:bg-neutral-950 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs">
              AB
            </span>
            <div>
              <p className="font-bold text-neutral-900 dark:text-white">
                Aziz Boujaada
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Développeur Full Stack · Java / Spring Boot & Angular · Laravel · React
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aziz-boujaada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com/in/aziz-boujaada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href="mailto:boujaadaaziz2911@gmail.com"
              className="p-2.5 rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>

            <div className="h-4 w-px bg-neutral-300 dark:bg-neutral-700 mx-1" />

            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>{t.footer.rights}</p>

          <p className="flex items-center gap-1.5">
            <span>{t.footer.builtWith}</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

