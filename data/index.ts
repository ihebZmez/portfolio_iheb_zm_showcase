import { FaGlobe, FaShoppingCart, FaTools, FaServer, FaSass, FaBeer } from "react-icons/fa";

export const navItems = [
  { name: "Accueil", link: "#" },
  { name: "À Propos", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projets SaaS", link: "#projectsSaaS" },
  { name: "Projets Web", link: "#projectsWeb" },
  { name: "Compétences", link: "#skills" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Entreprises de Niche", link: "#nicheBusiness" },
  { name: "Parcours", link: "#journey" },
  { name: "Approche", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridServicesItems = [
  {
    id: 1,
    title: "Développement Web",
    icon: FaGlobe,
    color: "from-blue-500/20 to-cyan-500/10",
    sections: [
      {
        title: "Introduction",
        content:
          "Un site web est votre vitrine digitale qui représente votre entreprise 24/7.",
      },
      {
        title: "Types de sites",
        content:
          "Landing page, site vitrine, site business, portfolio professionnel.",
      },
      {
        title: "Avantages",
        content:
          "Améliore votre visibilité et transforme vos visiteurs en clients.",
      },
      {
        title: "Responsive Design",
        content:
          "Compatible mobile, tablette et desktop avec performance optimisée.",
      },
    ],
  },

  {
    id: 2,
    title: "E-Commerce",
    icon: FaShoppingCart,
    color: "from-green-500/20 to-emerald-500/10",
    sections: [
      {
        title: "Introduction",
        content:
          "Une boutique en ligne vous permet de vendre vos produits 24/7.",
      },
      {
        title: "Fonctionnalités",
        content:
          "Panier, paiement sécurisé, gestion produits et commandes.",
      },
      {
        title: "Avantages",
        content:
          "Augmente vos ventes sans limite géographique.",
      },
    ],
  },

  {
    id: 3,
    title: "Plateformes SaaS & Intégration",
    icon: FaSass,
    color: "from-orange-500/20 to-yellow-500/10",
    sections: [
      {
        title: "Introduction",
        content:
          "Une plateforme SaaS permet de centraliser vos processus métier dans une application accessible en ligne, évolutive et sécurisée.",
      },
      {
        title: "Fonctionnalités",
        content:
          "Gestion des utilisateurs, automatisation des workflows, tableaux de bord, API d’intégration, gestion des données et modules métiers personnalisés.",
      },
      {
        title: "Intégrations",
        content:
          "Connexion avec vos systèmes existants, synchronisation des données, automatisation entre services et interopérabilité des outils métier.",
      },
      {
        title: "Avantages",
        content:
          "Réduction des tâches manuelles, vision centralisée de l’activité, meilleure prise de décision et forte scalabilité pour la croissance.",
      },
    ],
  },

  {
    id: 4,
    title: "Maintenance Web",
    icon: FaTools,
    color: "from-teal-500/20 to-cyan-500/10",
    sections: [
      {
        title: "Introduction",
        content:
          "Assurer la stabilité et la sécurité de votre site en continu.",
      },
      {
        title: "Services",
        content:
          "Mises à jour, correction de bugs, optimisation des performances.",
      },
      {
        title: "Importance",
        content:
          "Un site non maintenu perd en sécurité et en performance.",
      },
    ],
  },

  {
    id: 5,
    title: "Hébergement & Déploiement",
    icon: FaServer,
    color: "from-rose-500/20 to-pink-500/10",
    sections: [
      {
        title: "Introduction",
        content:
          "Mettre votre application en ligne de manière sécurisée.",
      },
      {
        title: "Infrastructure",
        content:
          "Serveurs, domaines, SSL et configuration cloud.",
      },
      {
        title: "Performance",
        content:
          "Optimisation vitesse et disponibilité 24/7.",
      },
    ],
  },

  {
    id: 6,
    title: "n8n Automation Platform",
    icon: FaBeer,
    color: "from-emerald-500/20 to-teal-500/10",
    sections: [
      {
        title: "Overview",
        content: "n8n is a powerful workflow automation tool that enables seamless integration between applications, services, and APIs through an intuitive visual interface."
      },
      {
        title: "Workflow Automation",
        content: "Create, deploy, and manage automated workflows connecting 400+ apps. From simple data transfers to complex business logic orchestration."
      },
      {
        title: "Deployment Options",
        content: "• Self-hosted (Docker, npm)\n• n8n.cloud (SaaS)\n• Enterprise (on-premise/virtual)\n• Embedded in your applications"
      }
    ]
  }
];

export const gridItemsPersonel = [
  {
    id: 1,
    title: "Communication claire et solutions adaptées à vos objectifs.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]",
    imgClassName: "w-full h-full object-contain p-2 sm:p-4 md:p-8",
    titleClassName: "justify-end items-end p-3 sm:p-4 md:p-6 lg:p-8",
    img: "/Iheb_Zmerli_Welcome.jpg",
  },
  {
    id: 2,
    title: "Adaptation rapide aux fuseaux horaires et aux environnements internationaux.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]",
    imgClassName: "",
    titleClassName: "justify-start items-start p-3 sm:p-4 md:p-6 lg:p-8",
    img: "",
    spareImg: "",
  },
];

export const gridItemsOptions = [
  {
    id: 5,
    title: "Finances & Comptabilité",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "/Finances_Comptabilite_resized.svg",
  },
  {
    id: 3,
    title: "Compétences & Expériences",
    description: "Différents Outils",
    className: "lg:col-span-3 md:col-span-3 md:row-span-3",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "Meilleur prix sur le marché de la technologie",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Administration & Gestion",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/Administration_Gestion.svg",
  },
  {
    id: 8,
    title: "Informatique & Sécurité",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 9,
    title: "Formuler & Développer",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 10,
    title: "Meilleure Qualité De Code Pour Un Futur Évolutif",
    description: "Meilleures Modélisations",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 11,
    title: "Ventes & Marketing",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 12,
    title: "Laissez-moi Vous Aider à Réaliser vos Projets",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },

  {
    id: 6,
    title: "Comment me Contacter",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
];

export const projectsSaaS = [
  {
    id: 1,
    title: "Application « De Facturation Pour Les Petites Entreprises »",
    des: "Explorez les merveilles de notre système de gestion des stocks avec cette solution captivante. Gérez vos factures et paiements, projets et tâches, dépenses et fournisseurs.",
    img: "/project_display/accounting-financial-main.svg",
    iconLists: [
      "/Tech/php-icon.svg",
      "/Tech/laravel-icon.svg",
      "/Tech/mysql-icon.svg",
      "/Tech/css-icon.svg",
      "/Tech/github-icon.svg",
    ],
    linkName: "Invoice Pro",
    linkProject: "http://invoice.cfacgroup.com:8848/login",
  },
  {
    id: 2,
    title: "Application MyCPAC - Gestion de la comptabilité, RH et Audit",
    des: "Toutes les fonctionnalités automatisées en une seule et unique application pour la comptabilité générale, paie, déclaration CNSS, liasse fiscale, immobilisation, déclaration employeur et états financiers.",
    img: "/project_display/processus-fiscal-audit-concept-comptable.jpg",
    iconLists: [
      "/Tech/spring-icon.svg",
      "/Tech/angular-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/intellij-idea-icon.svg",
      "/Tech/Liquibase-icon.svg",
    ],
    linkName: "Espace Client",
    linkProject: "https://espaceclient.cfacgroup.com/",
  },
  {
    id: 3,
    title: "Application « Gestion de services et d'assistance »",
    des: "Application web entièrement paramétrable,d'un système d'assistance et d'un outil des documentaire, Gestion Services & Contrats, Automatisation, Synchronisation des données, Rapports",
    img: "/project_display/CRM-workflow-pro.jpg",
    iconLists: [
      "/Tech/symfony-icon.svg",
      "/Tech/php-icon.svg",
      "/Tech/apache-icon.svg",
      "/Tech/github-icon.svg",
      "/Tech/mysql-icon.svg",
    ],
    linkName: "WorkFlow Pro",
    linkProject: "http://http://workflow.cfacgroup.com/",
  },
  {
    "id": 4,
    "title": "Application de Comptabilité et Paie",
    "des": "Application complète de gestion de comptabilité et de paie développée pour AXEANE. Solution intégrée avec portail d'authentification multi-rôles, module de gestion des congés avec workflow d'approbation, automatisation OCR des relevés bancaires et moteur de calcul de paie intelligent, réduisant les traitements manuels de 20h/mois avec une précision de 98,9%.",
    "img": "/project_display/axeane-accounting.png",
    "iconLists": [
      "/Tech/spring-icon.svg",
      "/Tech/angular-icon.svg",
      "/Tech/java-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/docker-icon.svg"
    ],
    "linkName": "Espace Client",
    "linkProject": "https://espaceclient.cfacgroup.com"
  },
  {
    id: 5,
    title: "Application « Gestion des Expéditions, Livraisons et Commandes »",
    des: "Optimisez votre logistique avec notre application innovante. Suivez vos expéditions en temps réel, gérez vos livraisons efficacement et surveillez vos commandes depuis une interface conviviale.",
    img: "/project_display/gestion_livraisons_expedition.png",
    iconLists: [
      "/Tech/react-icon.svg",
      "/Tech/nodejs-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/docker-icon.svg",
    ],
    linkName: "LogistiTrack",
    linkProject: "http://logistitrack.cfacgroup.com/login",
  },
  {
    id: 6,
    title: "Application « Gestion de réservation salle de sport »",
    des: "Application permettant de réserver des séances pour toutes les activités dans la salle de sport de '4fit bardo' dans la période de covid pour organiser la participation des personnes et minimiser les frais.",
    img: "/project_display/gestion_fitness appointment.png",
    iconLists: [
      "/Tech/react-icon.svg",
      "/Tech/nodejs-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/docker-icon.svg",
    ],
    linkName: "LogistiTrack",
    linkProject: "http://logistitrack.cfacgroup.com/login",
  },
  {
    id: 7,
    title: "Modules Odoo pour Comptabilité & RH (Tunisie)",
    des: "Développement et personnalisation de modules Odoo adaptés au contexte tunisien : comptabilité, finance, audit, RH et automatisation des processus métiers (OCR, rapprochement bancaire, reporting). Objectif : digitaliser et simplifier les opérations des cabinets et entreprises locales.",
    img: "/project_display/odoo_tunisia_erp.png",
    iconLists: [
      "/Tech/python-icon.svg",
      "/Tech/odoo-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/docker-icon.svg",
      "/Tech/javascript-icon.svg"
    ],
    linkName: "ERP Solutions",
    linkProject: "#"
  },
  {
    id: 8,
    title: "Générateur de Signatures Email Automatisé",
    des: "Application web permettant de générer des signatures email professionnelles dynamiques selon l'organisation. Chaque utilisateur peut créer une signature cohérente avec le branding de l'entreprise (logo, poste, contacts, réseaux sociaux) et l’exporter facilement pour Outlook ou Gmail.",
    img: "/project_display/email_signature_generator.png",
    iconLists: [
      "/Tech/react-icon.svg",
      "/Tech/nodejs-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/mysql-icon.svg"
    ],
    linkName: "Email Signatures",
    linkProject: "#"
  },
  {
    id: 9,
    title: "Simulateur de Reporting Prestataires & Clients",
    des: "Plateforme de simulation et d’analyse des rapports entre prestataires et clients finaux. Permet d’optimiser la validation des livrables, suivre les performances et réduire jusqu’à 6 heures de gestion hebdomadaire grâce à l’automatisation des rapports et workflows.",
    img: "/project_display/reporting_simulator.png",
    iconLists: [
      "/Tech/react-icon.svg",
      "/Tech/springboot-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/docker-icon.svg"
    ],
    linkName: "Report Optimizer",
    linkProject: "#"
  }
];

export const projectsWeb = [
  {
    "id": 1,
    "title": "Padel & Sports Center Website",
    "des": "Complete booking and management platform for padel courts with real-time availability, online reservations, tournament management, and player community features.",
    "img": "/project_display/padel-house-banner.jpg",
    "iconLists": [
      "/Tech/react-icon.svg",
      "/Tech/gsap-greensock.svg",
      "/Tech/vitejs-svgrepo-com.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/websocket-icon.svg"
    ],
    "linkName": "PadelPro",
    "linkProject": "https://padelpro.example.com"
  },
  {
    "id": 2,
    "title": "Fast Food Restaurant Command System",
    "des": "Digital ordering platform for fast food restaurants featuring online ordering, QR code table scanning, real-time order tracking, kitchen display system, and loyalty program integration.",
    "img": "/project_display/fastfood-ordering.png",
    "iconLists": [
      "/Tech/react-icon.svg",
      "/Tech/websocket-icon.svg",
      "/Tech/gsap-greensock.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/vitejs-svgrepo-com.svg"
    ],
    "linkName": "FoodOrder",
    "linkProject": "https://foodorder.example.com"
  },
  {
    "id": 3,
    "title": "Coaching & Mentoring Platform",
    "des": "Professional coaching platform connecting certified coaches with clients. Features include session scheduling, video conferencing, goal tracking, progress analytics, and secure payment processing.",
    "img": "/project_display/coaching-platform.png",
    "iconLists": [
      "/Tech/react-icon.svg",
      "/Tech/nextjs-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/gsap-greensock.svg",
    ],
    "linkName": "CoachConnect",
    "linkProject": "https://coachconnect.example.com"
  },
  {
    "id": 4,
    "title": "BabyCare - Childcare Management Platform",
    "des": "Comprehensive childcare management system for parents and daycare centers. Includes daily reports, milestone tracking, photo sharing, real-time communication, emergency contacts, and vaccination reminders.",
    "img": "/project_display/babycare-platform.png",
    "iconLists": [
      "/Tech/nextjs-icon.svg",
      "/Tech/typescript-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/vitejs-svgrepo-com.svg",
      "/Tech/docker-icon.svg"
    ],
    "linkName": "BabyCare",
    "linkProject": "https://babycare.example.com"
  },
  {
    "id": 5,
    "title": "Personal Trainer Fitness Website",
    "des": "All-in-one fitness platform for personal trainers to manage clients, create workout plans, track progress, schedule sessions, provide nutrition guidance, and offer virtual training sessions.",
    "img": "/project_display/personal-trainer.png",
    "iconLists": [
      "/Tech/react-icon.svg",
      "/Tech/nodejs-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/gsap-greensock.svg"
    ],
    "linkName": "TrainerPro",
    "linkProject": "https://trainerpro.example.com"
  },
  {
    "id": 6,
    "title": "Professional Portfolio & Personal Brand",
    "des": "Modern, interactive portfolio website showcasing professional work, skills, projects, and achievements. Features dynamic content management, project filtering, client testimonials, and contact forms.",
    "img": "/project_display/portfolio-personnel.png",
    "iconLists": [
      "/Tech/nextjs-icon.svg",
      "/Tech/typescript-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/vitejs-svgrepo-com.svg",
      "/Tech/docker-icon.svg"
    ],
    "linkName": "Portfolio",
    "linkProject": "https://portfolio.example.com"
  },
  {
    "id": 7,
    "title": "Marketing Agency Website",
    "des": "Full-service digital marketing agency website with portfolio showcase, case studies, client dashboard, campaign management tools, analytics integration, and lead generation system.",
    "img": "/project_display/marketing-agency.png",
    "iconLists": [
      "/Tech/react-icon.svg",
      "/Tech/nodejs-icon.svg",
      "/Tech/postgresql-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/docker-icon.svg"
    ],
    "linkName": "AgencyPro",
    "linkProject": "https://agencypro.example.com"
  },
  {
    "id": 8,
    "title": "Law Firm & Legal Consulting Website",
    "des": "Professional legal services platform with practice area showcases, attorney profiles, case management, appointment scheduling, secure client portal, document sharing, and legal resource library.",
    "img": "/project_display/law-firm.png",
    "iconLists": [
      "/Tech/nextjs-icon.svg",
      "/Tech/typescript-icon.svg",
      "/Tech/tailwindcss-icon-svgrepo-com.svg",
      "/Tech/vitejs-svgrepo-com.svg",
      "/Tech/docker-icon.svg"
    ],
    "linkName": "LegalConsult",
    "linkProject": "https://legalconsult.example.com"
  },
  {
    id: 9,
    title: "Application « Daaquam Monentre Prisevirtuelle Canada »",
    des: "site pour la publicité, la réservation de chalets, de terrains de camping et de randonnées pour toutes les saisons de l'année au Canada. Conception et Intégration des fonctionnalités,Mise en place des réservations",
    img: "/project_display/daaquam.png",
    iconLists: [
      "/Tech/wordpress-icon.svg",
      "/Tech/avada-icon.svg",
      "/Tech/photoshop-icon.svg",
      "/Tech/canva-icon.svg",
      "/Tech/css-icon.svg",
    ],
    linkName: "Daaquam Canada",
    linkProject2: "https://daaquam.monentreprisevirtuelle.com/",
    linkProject: "https://daaquam.qc.ca/",
  },
  {
    id: 10,
    title: "site « WordPress pour une agence de communication »",
    des: "Développer un site Freelance WordPress pour une agence de communication au Canada. Personnaliser le design, le thème et Intégrer du contenu, mettre les animations...",
    img: "/project_display/communication-agency-icon.jpg",
    iconLists: [
      "/Tech/wordpress-icon.svg",
      "/Tech/avada-icon.svg",
      "/Tech/photoshop-icon.svg",
      "/Tech/canva-icon.svg",
      "/Tech/css-icon.svg",
    ],
    linkName: "Annie Janelle",
    linkProject: "https://anniejanelle.monentreprisevirtuelle.com/",
  },
  {
    id: 11,
    title: "« Chambre Syndicale des Producteurs de Photovoltaïque (CSPV) »",
    des: "Corriger et optimiser le site web pour ce groupe qui prend en charge l'organisation des événements. Promouvoir l'adhésion de nouveaux membres et mener des actions marketing pour informer les Tunisiens des avantages de l'installation photovoltaïques.",
    img: "/project_display/photovoltaique-cspv.jpg",
    iconLists: [
      "/Tech/wordpress-icon.svg",
      "/Tech/elementor-icon.svg",
      "/Tech/photoshop-icon.svg",
      "/Tech/canva-icon.svg",
      "/Tech/css-icon.svg",
    ],
    linkName: "CSPV UTICA",
    linkProject: "http://cspv.tn/",
  },
];

export const testimonials = [
  {
    quote:
      "Travailler avec Iheb a été un véritable plaisir. Son professionnalisme, sa rapidité et son dévouement à fournir des résultats exceptionnels étaient évidents tout au long de notre projet. L'enthousiasme d'Adrian pour chaque aspect du développement est remarquable. Si vous souhaitez améliorer votre site web et rehausser votre marque, Iheb est le partenaire idéal.",
    name: "Ali KANZARI",
    title:
      "Président de Chambre syndicale du photovoltaïque | Solar Energy Systems",
    image_profil: "/Ali-KANZARI.png",
  },
  {
    quote:
      "Iheb est un développeur full stack fiable, réactif et doté d'un vrai sens du professionnalisme. Nous bénéficions de ses conseils et de son accompagnement en matière de développement web, d'architecture logicielle et de solutions techniques. Un accompagnement de qualité, marqué par la rigueur, la fiabilité et la bienveillance d'Iheb. Aujourd'hui, Iheb est un véritable partenaire de notre société, acteur de notre croissance.",
    name: "Anis MSAHLI",
    title:
      "CEO & Founder CFAC Group | Ingénieur Financier | Commissaire Aux Comptes | Directeur des systèmes d'information | Auditeur Tierce Partie",
    image_profil: "/Anis-MSAHLI.png",
  },
  {
    quote:
      "Sans conteste, Iheb est l'un des programmeurs les plus talentueux du marché. Lorsque je me trouve face à des défis complexes, je fais systématiquement appel à ses compétences, et il répond toujours à mes attentes. Doté d'une intelligence remarquable, d'une grande fiabilité et d'un professionnalisme exemplaire, il ne vous décevra pas.",
    name: "Mohamed AYARI",
    title: "AI/ML Engineer | Building real-world ML products",
    image_profil: "/Mohamed-AYARI.png",
  },
  {
    quote:
      "Personnel jeune et dynamique, toujours ponctuel, accueillant et doté d'une grande empathie pour identifier et anticiper les difficultés, en proposant systématiquement des alternatives concrètes. - Marchetto Giovanni & Pollani Liberto, Directeur de l'usine et Avocat général d'Elettro BCA.",
    name: "Karem BELKHIRIA",
    title: "Chef d'entreprise - domotech",
    image_profil: "/Karem-BELKHIRIA.png",
  },
  {
    quote:
      "Du début du projet jusqu'à son achèvement, Iheb nous a accompagné et a dépassé nos attentes à tous points de vue. Non seulement notre expérience a été personnelle et amicale, mais sa capacité à identifier et à présenter nos messages clés de manière imaginative et créative nous a donné une énorme confiance en lui.",
    name: "Feres FOUDHAILI",
    title: "Architecte De Solutions Cloud",
    image_profil: "/Feres-FOUDHAILI.png",
  },
];

export const programmer_skills = [
  {
    id: 1,
    name: "Java",
    designation: "",
    image: "/Tech/java-icon.svg",
  },
  {
    id: 2,
    name: "JavaScript",
    designation: "",
    image: "/Tech/javascript-icon.svg",
  },
  {
    id: 3,
    name: "PHP",
    designation: "",
    image: "/Tech/php-icon.svg",
  },
  {
    id: 4,
    name: "Node JS",
    designation: "",
    image: "/Tech/node-js-icon.svg",
  },
  {
    id: 5,
    name: "C#",
    designation: "",
    image: "/Tech/c-sharp-icon.svg",
  },
  {
    id: 6,
    name: "HTML",
    designation: "",
    image: "/Tech/html-icon.svg",
  },
  {
    id: 7,
    name: "CSS",
    designation: "",
    image: "/Tech/css-icon.svg",
  },
];

export const framework_skills = [
  {
    id: 1,
    name: "Angular",
    designation: "",
    image: "/Tech/angular-icon.svg",
  },
  {
    id: 2,
    name: ".NET",
    designation: "",
    image: "/Tech/NET-icon.svg",
  },
  {
    id: 3,
    name: "Laravel",
    designation: "",
    image: "/Tech/laravel-icon.svg",
  },
  {
    id: 4,
    name: "React",
    designation: "",
    image: "/Tech/react-icon.svg",
  },
  {
    id: 5,
    name: "Next JS",
    designation: "",
    image: "/Tech/nextjs-icon.svg",
  },
  {
    id: 6,
    name: "Spring",
    designation: "",
    image: "/Tech/spring-icon.svg",
  },
  {
    id: 7,
    name: "Symfony",
    designation: "",
    image: "/Tech/symfony-icon.svg",
  },
  {
    id: 8,
    name: "Flutter",
    designation: "",
    image: "/Tech/flutter-icon.svg",
  },
  {
    id: 9,
    name: "Ruby",
    designation: "",
    image: "/Tech/ruby-icon.svg",
  },
];

export const database_skills = [
  {
    id: 1,
    name: "MariaDB",
    designation: "",
    image: "/Tech/mariadb-icon.svg",
  },
  {
    id: 2,
    name: "Mongo",
    designation: "",
    image: "/Tech/mongo-icon.svg",
  },
  {
    id: 3,
    name: "MySql",
    designation: "",
    image: "/Tech/mysql-icon.svg",
  },
  {
    id: 4,
    name: "PostgreSQL",
    designation: "",
    image: "/Tech/postgresql-icon.svg",
  },
  {
    id: 5,
    name: "Liquibase",
    designation: "",
    image: "/Tech/Liquibase-icon.svg",
  },
];

export const tools_on_skills = [
  {
    id: 1,
    name: "Maven",
    designation: "",
    image: "/Tech/maven-icon.svg",
  },
  {
    id: 2,
    name: "Redux",
    designation: "",
    image: "/Tech/redux-icon.svg",
  },
  {
    id: 3,
    name: "NPM",
    designation: "",
    image: "/Tech/npm-icon.svg",
  },
];

export const know_some_skills = [
  {
    id: 1,
    name: "Kubernetes",
    designation: "",
    image: "/Tech/kubernetes-icon.svg",
  },
  {
    id: 2,
    name: "Jenkins",
    designation: "",
    image: "/Tech/jenkins-icon.svg",
  },
  {
    id: 3,
    name: "Ansible",
    designation: "",
    image: "/Tech/ansible-icon.svg",
  },
  {
    id: 4,
    name: "Prometheus",
    designation: "",
    image: "/Tech/prometheus-icon.svg",
  },
  {
    id: 5,
    name: "Grafana",
    designation: "",
    image: "/Tech/grafana-icon.svg",
  },
  {
    id: 6,
    name: "Webmin",
    designation: "",
    image: "/Tech/webmin-icon.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    designation: "",
    image: "/companies_display/cloud.svg",
    img: "/companies_display/cloud.svg",
    nameImg: "/companies_display/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    designation: "",
    image: "/companies_display/app.svg",
    img: "/companies_display/app.svg",
    nameImg: "/companies_display/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    designation: "",
    image: "/companies_display/host.svg",
    img: "/companies_display/host.svg",
    nameImg: "/companies_display/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    designation: "",
    image: "/companies_display/s.svg",
    img: "/companies_display/s.svg",
    nameImg: "/companies_display/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    designation: "",
    image: "/companies_display/dock.svg",
    img: "/companies_display/dock.svg",
    nameImg: "/companies_display/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Ingénieur en Architecture Logicielle - HayServ",
    desc: "Responsable de développement et déploiement de six applications web majeures :",
    tasks_desc:
      "Gestion Financière | Gestion Humaines | Administration de system et cloud | Flux Automatisés | Système De Gestion Des Tickets.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur Full Stack - Axeane",
    desc: "Conception de solutions automatisées pour l’intégration des relevés bancaires, sécurisation d’un portail dédié aux salariés pour le suivi des bulletins de paie et la gestion des absences.",
    tasks_desc:
      "Ressources Humaines | Portail d'Accès | Controle des role et des permission.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Développeur principal - CFAC Group",
    desc: "Responsable de développement et déploiement de six applications web majeures :",
    tasks_desc:
      "Gestion Financière | Ressources Humaines | Portail d'Accès | Site Web Institutionnel | Application De Gestion Juridique | Système De Gestion Des Tickets.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 4,
    title: "Secrétaire Général - CSPV - UTICA",
    desc: "Responsable sur le développement, le désigne et la mise à jour de site web :",
    tasks_desc:
      "Développement Web Avec WordPress | Gestion Administrative Et Financière | Communication et Marketing Digital.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 5,
    title: "Développeur Web Indépendant",
    desc: "Responsable d'un site personnalisé pour une agence de communication :",
    tasks_desc:
      "Personnaliser Le Design | Intégration Du Contenu | Hébergement | Google Analytique | Moteurs De Recherche",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp5.svg",
  },
];

export const socialMedia = [
  /*
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ihebZmez",
  },
  */
  {
    id: 2,
    img: "/x-icon.svg",
    link: "https://x.com/IhebZmerli",
  },
  {
    id: 3,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/zmerli-i-5499b3110/",
  },
];
