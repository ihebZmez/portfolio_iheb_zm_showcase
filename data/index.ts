export const navItems = [
  { name: "Accueil", link: "#" },
  { name: "À Propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Compétences", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Je Privilégie La Collaboration Et La Communication Ouverte Avec Les Clients.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Je m'adapte Aisément À Divers Fuseaux Horaires Et Environnements De Travail.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
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

export const projects = [
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
    linkProject: "http://invoicepro.cfacgroup.com/login",
  },
  {
    id: 2,
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
    linkProject:
      "http://espaceclient.cfacgroup.com/cfac_workflow_pro/pages/UI.php",
  },
  {
    id: 3,
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
    linkProject: "https://daaquam.monentreprisevirtuelle.com/",
  },
  {
    id: 4,
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
    id: 5,
    title: "« Chambre Syndicale des Producteurs de Photovoltaïque (CSPV) »",
    des: "Corriger et optimiser le site web pour ce groupe qui prend en charge l'organisation des événements et l'accompagnement. Promouvoir l'adhésion de nouveaux membres et mener des actions marketing pour informer les Tunisiens des avantages de l'installation de systèmes photovoltaïques.",
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
  {
    id: 6,
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
    id: 7,
    title: "Application « de réservation »",
    des: "Application permettant de réserver des séances dans la salle de sport de '4fit bardo' pour minimiser les frais.",
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
    title: "Développeur principal - CFAC",
    desc: "Responsable sur le développement de cinq applications web en améliorant l'interactivité.",
    tasks_desc:
      "Développer une application web de facturation, la réception de paiements, suivi des dépenses, tâches facturables,  pour toutes les 11 entreprises.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Secrétaire Général - CSPV - UTICA",
    desc: "Responsable sur le développement, le désigne et la mise à jour de site web en utilisant WordPress et Photoshop ainsi la commercialisation.",
    tasks_desc:
      "Aide au développement d'une plate-forme Web, transmettre les courriers et les e-mails et la responsabilité administrative et financière améliorant l'interactivité.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projet de développement d'applications indépendant",
    desc: "Développer un site WordPress pour une agence de communication.",
    tasks_desc:
      "Choisir un thème, Personnaliser le design, Intégrer du contenu, Hébergement, Google analytique, moteurs de recherche",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Projet de développement d'applications indépendant",
    desc: "Développer un site pour la publicité, la réservation de chalets, de terrains de camping et de randonnées pour toutes les saisons de l'année au Canada.",
    tasks_desc:
      "Choix de la plateforme et du domaine, Conception de l'architecture, développement du site, Intégration de fonctionnalités supplémentaires, Mise en place la gestion des réservations.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 5,
    title: "Projet de développement d'applications indépendant",
    desc: "Développer mon site Web Next.js. Mettre en place les animations, contenu de site, les notifications par la section de contact.",
    tasks_desc:
      "À l'aide de Next.js, React.js, Three.js, Framer Motion, Tailwind CSS et Figma, je développe des sites web innovants et performants. En utilisant les meilleures pratiques et technologies pour offrir une expérience utilisateur exceptionnelle.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 6,
    title: "Développeur Full Stack - Arem Group",
    desc: "Aide au développement d'une application de gestion de stocks. Qu'elle permet de Manipuler (les articles, les bons de livraison, les expéditions...)",
    tasks_desc:
      "Développement d'une partie du cycle interne d'une plateforme web utilisant Spring Boot, Angular, ainsi que la modélisation UML.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ihebZmez",
  },
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
