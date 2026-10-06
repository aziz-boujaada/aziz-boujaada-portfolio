import { createContext } from 'react';
import { Language, Theme, Project } from '../types';
import { fr } from '../locales/fr';

export interface PortfolioContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: typeof fr;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);
