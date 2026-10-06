import { EducationItem, CertificationItem } from '../types';

export const educationList: EducationItem[] = [
  {
    id: 'youcode-um6p',
    institution: 'École YouCode – UM6P',
    campus: 'Campus Youssoufia',
    period: '2025 – Présent',
    title: {
      fr: '2ᵉ année – Spécialité Java / Spring Boot & Angular',
      en: 'Second year – Java / Spring Boot & Angular specialization',
    },
    description: {
      fr: 'Formation d\'excellence en développement web full stack, architectures distribuées, microservices Java / Spring Boot, Angular et méthodologies agiles.',
      en: 'High-standard curriculum in full-stack web engineering, distributed architectures, Java / Spring Boot microservices, Angular, and agile workflows.',
    },
    highlight: true,
  },
  {
    id: 'autoformation',
    institution: 'Autoformation & Pratique intensive',
    period: '2024 – 2025',
    title: {
      fr: 'Bases du développement web',
      en: 'Web Development Fundamentals',
    },
    description: {
      fr: 'Apprentissage rigoureux des fondamentaux de l\'ingénierie web, algorithmique, programmation orientée objet, PHP, JavaScript et modélisation SQL.',
      en: 'Rigorous self-directed mastering of web engineering fundamentals, algorithms, object-oriented programming, PHP, JavaScript, and relational SQL modeling.',
    },
  },
  {
    id: 'fssm-marrakech',
    institution: 'Faculté des Sciences Semlalia',
    campus: 'Marrakech',
    period: '2022 – 2024',
    title: {
      fr: 'DEUG – Sciences Physiques',
      en: 'DEUG – Physical Sciences',
    },
    description: {
      fr: 'Formation universitaire scientifique développant une grande rigueur analytique, mathématique et logique.',
      en: 'Rigorous university scientific background fostering analytical precision, applied mathematics, and logical modeling.',
    },
  },
  {
    id: 'lycee-al-farahidi',
    institution: 'Lycée Al-Farahidi',
    campus: 'Amizmiz',
    period: '2021 – 2022',
    title: {
      fr: 'Baccalauréat – Sciences Physiques',
      en: 'Baccalaureate – Physical Sciences',
    },
    description: {
      fr: 'Obtention du baccalauréat scientifique avec mention.',
      en: 'High school graduation diploma in physical and exact sciences with honors.',
    },
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'cert-php-sql',
    title: 'PHP & SQL Certification',
    issuer: 'Great Learning',
    year: '2025',
  },
];
