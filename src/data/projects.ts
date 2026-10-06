import { Project } from '../types';

import nextgestcoImg from '../assets/images/project_nextgestco_erp_1790867140713.jpg';
import boustaImg from '../assets/images/project_bousta_mobile_1790867153388.jpg';
import mawaterImg from '../assets/images/project_mawater_app_1790867163905.jpg';
import makecvImg from '../assets/images/project_makecv_builder_1790867175025.jpg';
import atlasHotelImg from '../assets/images/project_atlas_hotel_1790867185678.jpg';

export const projectsList: Project[] = [
  {
    id: 'nextgestco',
    title: 'NextGestCo ERP',
    type: {
      fr: 'ERP / Application Web',
      en: 'ERP / Web Application',
    },
    shortDescription: {
      fr: 'Application ERP d\'entreprise conçue pour centraliser la gestion commerciale, les stocks et les opérations financières avec intégration d\'IA RAG.',
      en: 'Enterprise ERP application built to centralize inventory, sales, purchasing, and financial operations with integrated RAG AI assistant.',
    },
    fullDescription: {
      fr: 'Développé durant mon expérience chez NextAct Solutions, NextGestCo est un progiciel de gestion intégré complet. Il automatise la gestion des flux d\'achats, de ventes, d\'inventaires et intègre un assistant IA exploitant le RAG (Retrieval-Augmented Generation) pour fournir des analyses intelligentes basées sur les données métier en temps réel.',
      en: 'Engineered during my internship at NextAct Solutions, NextGestCo is a comprehensive enterprise resource planning system. It centralizes procurement, quotation cycles, real-time inventory management, automated Google Sheets background synchronization, and a custom RAG-powered AI assistant for conversational analytics over business telemetry.',
    },
    technologies: ['Laravel', 'PHP', 'React', 'TypeScript', 'SQL', 'RAG AI', 'Queues', 'REST API'],
    imagePlaceholder: '[PROJECT_IMAGE_PLACEHOLDER]',
    imageUrl: nextgestcoImg,
    githubPlaceholder: '[GITHUB_NEXTGESTCO]',
    githubUrl: '',
    isGithubPrivate: true,
    category: 'erp',
    features: {
      fr: [
        'Gestion complète du cycle Achats & Approvisionnements',
        'Gestion des Ventes, Facturation et Devis',
        'Suivi des stocks en temps réel & gestion des avoirs',
        'Synchronisation bidirectionnelle Google Sheets via files d\'attente Laravel',
        'Assistant intelligent basé sur le RAG pour l\'interrogation en langage naturel',
        'Architecture multilingue & tableau de bord financier',
      ],
      en: [
        'End-to-end procurement and supplier management',
        'Sales orders, quotation workflows, and invoice generation',
        'Real-time inventory levels and refund processing',
        'Automated background Google Sheets synchronization using Laravel queues',
        'RAG-based AI assistant for interactive natural language data querying',
        'Multilingual platform support and executive financial auditing',
      ],
    },
  },
  {
    id: 'pneumatique-bousta',
    title: 'Pneumatique Bousta',
    type: {
      fr: 'Application Mobile',
      en: 'Mobile Application',
    },
    shortDescription: {
      fr: 'Application mobile Flutter développée pour un client afin de piloter l\'inventaire de pneumatiques et le recouvrement des créances.',
      en: 'Flutter mobile application developed for a business client to oversee tire stock inventory and customer receivables.',
    },
    fullDescription: {
      fr: 'Conçue pour un client professionnel dans le secteur automobile, cette solution mobile Flutter permet aux équipes sur le terrain de contrôler les stocks d\'articles, d\'enregistrer les encaissements et de synchroniser les transactions avec une architecture de bases SQL Server centralisée via une API Laravel sécurisée.',
      en: 'Created for a commercial client in the automotive tire sector, this Flutter application enables warehouse personnel and field representatives to track tire stock across depots, record client payments, and safely interact with centralized SQL Server databases through a secure Laravel REST API.',
    },
    technologies: ['Flutter', 'Dart', 'Laravel', 'SQL Server', 'REST API', 'Sanctum'],
    imagePlaceholder: '[PROJECT_IMAGE_PNEUMATIQUE_BOUSTA]',
    imageUrl: boustaImg,
    githubPlaceholder: '[GITHUB_PNEUMATIQUE_BOUSTA]',
    githubUrl: '',
    isGithubPrivate: true,
    category: 'mobile',
    features: {
      fr: [
        'Gestion multi-dépôts des stocks de pneumatiques',
        'Fiches articles détaillées et recherche rapide par dimensions et marques',
        'Enregistrement et suivi des encaissements et créances clients',
        'Authentification par jetons avec gestion rigoureuse des permissions',
        'Circuit d\'approbation administrative pour les modifications sensibles',
      ],
      en: [
        'Multi-depot tire stock tracking and warehouse movement',
        'Detailed article cards with dimension and brand searching',
        'Client collections and payment receivables tracking',
        'Token-based authentication with strict role permissions',
        'Administrative approval step for sensitive adjustments',
      ],
    },
  },
  {
    id: 'mawater',
    title: 'Mawater',
    type: {
      fr: 'Application Web',
      en: 'Web Application',
    },
    shortDescription: {
      fr: 'Application web développée pour l\'association Ayt Daoud pour gérer les compteurs d\'eau et la facturation.',
      en: 'Web application developed for the Ayt Daoud association to manage water meters and automated customer billing.',
    },
    fullDescription: {
      fr: 'Plateforme de gestion informatisée créée pour l\'association locale Ayt Daoud. Elle a permis de substituer la gestion manuelle sur papier par une solution web moderne, centralisant le relevé des compteurs d\'eau, l\'historique de consommation par foyer, le calcul automatisé des redevances et l\'émission des factures.',
      en: 'Computerized management platform developed for the local Ayt Daoud community association. It successfully transitioned traditional paper recordkeeping into a modern, robust web system, automating meter reading logging, household consumption tracking, tariff calculations, and invoice issuance.',
    },
    technologies: ['Laravel', 'Blade', 'Tailwind CSS', 'PostgreSQL / SQL', 'REST API'],
    imagePlaceholder: '[PROJECT_IMAGE_MAWATER]',
    imageUrl: mawaterImg,
    githubPlaceholder: '[GITHUB_MAWATER]',
    githubUrl: 'https://github.com/aziz-boujaada',
    isGithubPrivate: false,
    category: 'web',
    features: {
      fr: [
        'Gestion des abonnés et des compteurs d\'eau par zone',
        'Saisie et vérification des relevés de consommation mensuels',
        'Calcul automatique des factures et gestion des tranches de consommation',
        'Suivi des règlements et alertes d\'impayés',
        'Exportation de rapports et synthèses comptables pour l\'association',
      ],
      en: [
        'Zone-based subscriber and meter inventory management',
        'Monthly consumption index input and automated audit validation',
        'Tiered billing calculation and invoice generation',
        'Payment status tracking and outstanding balance reminders',
        'Comprehensive reporting and accounting exports for association boards',
      ],
    },
  },
  {
    id: 'makecv',
    title: 'MakeCV — Générateur de CV',
    type: {
      fr: 'Application Web Frontend',
      en: 'Frontend Web Application',
    },
    shortDescription: {
      fr: 'Outil interactif de création de CV via un formulaire multi-étapes avec validation en direct et export.',
      en: 'Interactive resume builder featuring multi-step form workflows, live preview validation, and export.',
    },
    fullDescription: {
      fr: 'Application frontend intuitive permettant de générer des CV professionnels élégants. Comporte un formulaire guidé étape par étape, une prévisualisation réactive en direct et un moteur d\'exportation propre.',
      en: 'Intuitive frontend application designed for effortless resume creation. Features a stepped wizard interface, dynamic live updates, clean typography templates, and ready-to-print export capabilities.',
    },
    technologies: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
    imagePlaceholder: '[PROJECT_IMAGE_MAKECV]',
    imageUrl: makecvImg,
    githubUrl: 'https://github.com/aziz-boujaada',
    isGithubPrivate: false,
    category: 'web',
    features: {
      fr: [
        'Formulaire guidé multi-étapes (état civil, expériences, formation, compétences)',
        'Prévisualisation instantanée réactive',
        'Contrôles de validation des données utilisateur',
        'Mise en page optimisée pour l\'impression et l\'export',
      ],
      en: [
        'Multi-step guided wizard (personal info, experience, education, skills)',
        'Instant live rendering and reactive preview',
        'Real-time input validation and formatting',
        'Print-ready typography and document styling',
      ],
    },
  },
  {
    id: 'atlas-view-hotel',
    title: 'Atlas View Hotel',
    type: {
      fr: 'Plateforme Web Hôtelière',
      en: 'Hotel Booking Platform',
    },
    shortDescription: {
      fr: 'Site web hôtelier moderne et responsive avec moteur de réservation et navigation fluide.',
      en: 'Modern responsive hotel portal with booking system, interactive amenities showcase, and routing.',
    },
    fullDescription: {
      fr: 'Plateforme web complète pour établissement hôtelier combinant une interface visuelle raffinée avec des modules de sélection de chambres, vérification de disponibilités et gestion des réservations.',
      en: 'Full-featured hospitality web platform combining refined visual design with room availability checking, amenities showcase, and reservation flow.',
    },
    technologies: ['React.js', 'Tailwind CSS', 'React Router', 'PHP', 'SQL'],
    imagePlaceholder: '[PROJECT_IMAGE_ATLAS_HOTEL]',
    imageUrl: atlasHotelImg,
    githubUrl: 'https://github.com/aziz-boujaada',
    isGithubPrivate: false,
    category: 'fullstack',
    features: {
      fr: [
        'Catalogue interactif des chambres et suites avec filtres',
        'Tunnel de réservation et formulaire de disponibilité',
        'Navigation fluide avec React Router',
        'Design responsive soigné et optimisé pour mobile',
      ],
      en: [
        'Interactive room and suite catalog with dynamic filters',
        'Reservation tunnel with date availability validation',
        'Fluid single-page navigation via React Router',
        'Refined responsive layout designed for mobile and desktop',
      ],
    },
  },
];
