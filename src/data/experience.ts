import { WorkExperience } from '../types';

export const workExperience: WorkExperience = {
  company: 'NextAct Solutions',
  role: {
    fr: 'Développeur Full Stack / Stagiaire',
    en: 'Full-Stack Developer / Intern',
  },
  period: '04/05/2026 – 31/08/2026',
  location: 'Maroc',
  phases: [
    {
      phaseNumber: 1,
      phaseLabel: {
        fr: 'Phase 1 — NextGestCo ERP',
        en: 'Phase 1 — NextGestCo ERP',
      },
      projectName: 'NextGestCo ERP',
      type: {
        fr: 'Système ERP d\'Entreprise',
        en: 'Enterprise ERP System',
      },
      description: {
        fr: 'Conception et développement complet de l\'application ERP interne pour automatiser la gestion d\'entreprise, le suivi des flux commerciaux et les audits financiers.',
        en: 'Design and comprehensive development of the internal company ERP application to automate enterprise management, commercial flows, and financial auditing.',
      },
      technologies: [
        'Laravel',
        'PHP',
        'React',
        'TypeScript',
        'SQL',
        'REST API',
        'Google Sheets Sync',
        'Laravel Queues',
        'RAG AI Assistant',
      ],
      features: {
        fr: [
          'Gestion des achats et approvisionnements',
          'Gestion des ventes, devis et facturation',
          'Gestion des stocks en temps réel',
          'Gestion des remboursements et avoirs',
          'Gestion de la relation client (CRM)',
          'Pilotage financier et états comptables',
          'Support multilingue complet',
          'Synchronisation bidirectionnelle Google Sheets via files d\'attente (Queues)',
          'Assistant intelligent basé sur le RAG pour l\'analyse des données ERP',
        ],
        en: [
          'Purchasing and procurement management',
          'Sales, quotations, and invoice management',
          'Real-time inventory and stock tracking',
          'Refunds and credit notes handling',
          'Customer relationship management (CRM)',
          'Financial auditing and accounting dashboards',
          'Full multilingual platform support',
          'Automated Google Sheets synchronization via background Queues',
          'Intelligent AI assistant using RAG for deep ERP data analytics',
        ],
      },
    },
    {
      phaseNumber: 2,
      phaseLabel: {
        fr: 'Phase 2 — Pneumatique Bousta',
        en: 'Phase 2 — Pneumatique Bousta',
      },
      projectName: 'Pneumatique Bousta',
      type: {
        fr: 'Application Mobile Métier',
        en: 'Business Mobile Application',
      },
      description: {
        fr: 'Développement d\'une application mobile Flutter sur-mesure pour un client, connectée à une API Laravel et une base SQL Server pour moderniser les opérations de terrain.',
        en: 'Development of a custom Flutter mobile application for a client, connected to a Laravel API and SQL Server database to modernize field operations.',
      },
      technologies: [
        'Flutter',
        'Dart',
        'Laravel',
        'REST API',
        'SQL Server',
        'Sanctum Auth',
      ],
      features: {
        fr: [
          'Gestion centralisée des stocks de pneumatiques',
          'Gestion et catégorisation des articles et références',
          'Suivi précis des inventaires multi-dépôts',
          'Gestion des encaissements et suivi des créances clients',
          'Authentification sécurisée avec gestion des rôles',
          'Circuit d\'approbation administrative des opérations sensibles',
        ],
        en: [
          'Centralized tire inventory and warehouse management',
          'Item cataloging, reference tracking, and product classification',
          'Multi-depot physical inventory tracking',
          'Collections and receivables management',
          'Secure role-based token authentication',
          'Administrative approval workflows for sensitive operations',
        ],
      },
    },
  ],
};
