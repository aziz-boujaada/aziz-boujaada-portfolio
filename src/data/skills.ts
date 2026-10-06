import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: {
      fr: 'Langages de programmation',
      en: 'Programming Languages',
    },
    skills: [
      { name: 'Java', isKey: true },
      { name: 'PHP', isKey: true },
      { name: 'TypeScript', isKey: true },
      { name: 'JavaScript' },
      { name: 'Dart' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'backend',
    title: {
      fr: 'Architecture Backend',
      en: 'Backend Architecture',
    },
    skills: [
      { name: 'Spring Boot', isKey: true },
      { name: 'Laravel', isKey: true },
      { name: 'REST APIs', isKey: true },
      { name: 'JPA / Hibernate' },
      { name: 'PHP' },
    ],
  },
  {
    id: 'frontend',
    title: {
      fr: 'Frontend & UI',
      en: 'Frontend & UI',
    },
    skills: [
      { name: 'Angular', isKey: true },
      { name: 'React', isKey: true },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    id: 'mobile',
    title: {
      fr: 'Développement Mobile',
      en: 'Mobile Engineering',
    },
    skills: [
      { name: 'Flutter', isKey: true },
      { name: 'Dart', isKey: true },
    ],
  },
  {
    id: 'databases',
    title: {
      fr: 'Bases de données & ORM',
      en: 'Databases & ORM',
    },
    skills: [
      { name: 'PostgreSQL', isKey: true },
      { name: 'SQL Server', isKey: true },
      { name: 'MySQL', isKey: true },
    ],
  },
  {
    id: 'tools',
    title: {
      fr: 'Outils & Environnements',
      en: 'Tools & DevOps',
    },
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Docker' },
      { name: 'Maven' },
      { name: 'Linux' },
      { name: 'IntelliJ IDEA' },
      { name: 'VS Code' },
    ],
  },
];
