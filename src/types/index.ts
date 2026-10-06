export type Language = 'fr' | 'en';
export type Theme = 'light' | 'dark';

export interface Project {
  id: string;
  title: string;
  type: {
    fr: string;
    en: string;
  };
  shortDescription: {
    fr: string;
    en: string;
  };
  fullDescription: {
    fr: string;
    en: string;
  };
  technologies: string[];
  imagePlaceholder: string;
  imageUrl?: string;
  githubPlaceholder?: string;
  githubUrl?: string;
  isGithubPrivate?: boolean;
  demoUrl?: string;
  category: 'all' | 'fullstack' | 'web' | 'mobile' | 'erp';
  features: {
    fr: string[];
    en: string[];
  };
}

export interface SkillItem {
  name: string;
  iconName?: string;
  isKey?: boolean;
}

export interface SkillCategory {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  skills: SkillItem[];
}

export interface ExperiencePhase {
  phaseNumber: number;
  phaseLabel: {
    fr: string;
    en: string;
  };
  projectName: string;
  type: {
    fr: string;
    en: string;
  };
  technologies: string[];
  description: {
    fr: string;
    en: string;
  };
  features: {
    fr: string[];
    en: string[];
  };
}

export interface WorkExperience {
  company: string;
  role: {
    fr: string;
    en: string;
  };
  period: string;
  location: string;
  phases: ExperiencePhase[];
}

export interface EducationItem {
  id: string;
  institution: string;
  campus?: string;
  period: string;
  title: {
    fr: string;
    en: string;
  };
  description?: {
    fr: string;
    en: string;
  };
  highlight?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export interface GithubContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface GithubRepoItem {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updatedAt: string;
  pinned?: boolean;
}

export interface GithubStatsData {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  totalContributions: Record<string, number>;
  languages: Record<string, number>;
  topRepos: GithubRepoItem[];
  contributions: GithubContributionDay[];
}
