// ============================================================
// PORTFOLIO CONTENT
// Toutes les informations affichées sur le site sont centralisées
// ici. Remplacez les placeholders (liens GitHub/demo, captures)
// par vos vraies données — rien n'est inventé côté contenu.
// ============================================================

export const profile = {
  name: "Adji Deguene Diagne",
  role: "Développeuse Web & IA Appliquée",
  tagline:
    "Je conçois, développe et déploie des solutions web modernes en intégrant intelligemment l'intelligence artificielle.",
  location: "Dakar, Sénégal",
  email: "adjideguene30@gmail.com", // placeholder — à remplacer
  linkedin: "https://www.linkedin.com/in/adji-deguene-diagne-8263b3365/", // placeholder
  github: "https://github.com/adjideguene-diagne", // placeholder
  whatsapp: "", // placeholder — laisser vide pour masquer le lien
  cvUrl: "", // placeholder — lien vers le CV PDF, laisser vide pour masquer le bouton
};

export type Skill = { name: string };
export type SkillGroup = { category: string; items: Skill[] };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
  },
  {
    category: "Bases de données",
    items: [{ name: "MySQL" }, { name: "PostgreSQL" }, { name: "Prisma" }],
  },
  {
    category: "IA & Computer Vision",
    items: [
      { name: "Python" },
      { name: "OpenCV" },
      { name: "YOLOv8" },
      { name: "EasyOCR" },
      { name: "Tesseract" },
      { name: "LLM / APIs d'IA" },
      { name: "Text-to-SQL" },
    ],
  },
  {
    category: "Outils",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "XAMPP" },
    ],
  },
];

export type ProjectType = "professional" | "personal" | "academic" | "client";

export type Project = {
  id: string; // identifiant stable du projet (utilisé aussi comme slug d'URL)
  slug: string;
  title: string;
  category: string;
  type: ProjectType; // "academic" | "professional" (stage) | "personal" | "client" — prépare l'affichage futur, pas encore utilisé dans le design actuel
  short: string;
  cover: string; // chemin de l'image de couverture — remplacez ce chemin par votre vraie capture quand vous l'aurez (voir /public/images/projects/)
  imageFit?: "cover" | "contain"; 
  imagePosition?: "top" | "center" | "bottom";
  tech: string[];
  role: string;
  problem: string;
  solution: string;
  architecture?: string;
  features?: string[];
  pipeline?: string[];
  results?: string;
  github?: string; // uniquement si une URL réelle est fournie — laissez vide/absent sinon (aucun bouton GitHub ne s'affiche alors)
  demo?: string; // URL du projet en ligne (production) si disponible — laissez vide/absent sinon
  featured: "large" | "medium" | "small";
};

export const projects: Project[] = [
  {
    id: "anpr",
    slug: "anpr",
    title: "ANPR — Automatic Number Plate Recognition",
    category: "Computer Vision · IA appliquée",
    type: "professional",
    short:
      "Système de reconnaissance automatique de plaques d'immatriculation combinant détection, traitement d'image, OCR et validation.",
    cover: "/images/projects/anpr-real.png",
    tech: ["Python", "YOLOv8", "OpenCV", "EasyOCR", "Tesseract", "REST API"],
    role: "Membre de l'équipe, chargée notamment de la partie OCR et validation.",
    problem:
      "Identifier automatiquement les plaques d'immatriculation à partir d'images ou de flux vidéo, dans des conditions réelles variables (luminosité, angle, qualité d'image).",
    solution:
      "Un pipeline complet allant de la détection de véhicule/plaque jusqu'à l'extraction du texte, avec une étape de validation pour fiabiliser le résultat final.",
    architecture:
      "Détection (YOLOv8) → prétraitement d'image (OpenCV) → extraction de texte (EasyOCR / Tesseract) → validation → exposition via une API REST.",
    pipeline: [
      "Détection des plaques sur l'image ou la frame vidéo",
      "Prétraitement (recadrage, normalisation, amélioration du contraste)",
      "OCR pour extraire les caractères de la plaque",
      "Validation du format et du résultat",
      "Retour du résultat via l'API",
    ],
    results:
      "Un système fonctionnel capable de détecter, lire et valider des plaques d'immatriculation de bout en bout.",
    github: "https://github.com/seydina-dioum/ANPR-project", // placeholder — à remplacer par le vrai lien
    featured: "large",
  },
  {
    id: "sensante",
    slug: "sensante",
    title: "SénSanté",
    category: "Application web · IA",
    type: "academic",
    short:
      "Application web de santé intégrant des fonctionnalités d'intelligence artificielle pour accompagner les utilisateurs.",
    cover: "/images/projects/sensante-deal.png",
    imageFit: "cover",
    imagePosition: "top",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Groq", "NextAuth"],
    role: "Conception et développement de l'application.",
    problem:
      "Proposer une application web de santé moderne, avec une couche d'intelligence artificielle apportant une réelle valeur ajoutée aux utilisateurs.",
    solution:
      "Une application Next.js full-stack avec authentification, base de données relationnelle via Prisma, et intégration d'un modèle d'IA (Groq) pour enrichir l'expérience.",
    architecture:
      "Frontend et backend unifiés dans Next.js, authentification via NextAuth, persistance avec Prisma/PostgreSQL, appels au modèle d'IA via l'API Groq.",
    features: [
      "Authentification sécurisée des utilisateurs",
      "Gestion des données via Prisma / PostgreSQL",
      "Fonctionnalités assistées par IA (Groq)",
    ],
    github: "https://github.com/khalil-lool/sensante", // placeholder — à remplacer par le vrai lien
    featured: "medium",
  },
  {
    id: "transpobot",
    slug: "transpobot",
    title: "TranspoBot",
    category: "IA · Text-to-SQL",
    type: "academic",
    short:
      "Assistant permettant d'interroger une base de données en langage naturel grâce à un modèle d'IA générant des requêtes SQL.",
    cover: "/images/projects/transpobot-real-43.png",
    imageFit: "cover",
    imagePosition: "top",
    tech: ["MySQL", "Express.js", "Gemini", "Text-to-SQL"],
    role: "Conception et développement du backend et de l'intégration IA.",
    problem:
      "Permettre à un utilisateur non technique d'interroger une base de données sans écrire de SQL.",
    solution:
      "Un backend Express.js qui transforme une question en langage naturel en requête SQL via le modèle Gemini, l'exécute sur MySQL, puis renvoie une réponse compréhensible.",
    architecture:
      "Requête utilisateur → génération de requête SQL (Gemini) → exécution sur MySQL → mise en forme de la réponse.",
    features: [
      "Génération de requêtes SQL à partir du langage naturel",
      "Exécution sécurisée sur la base de données",
      "API backend avec Express.js",
    ],
    github: "https://github.com/seynabou926/transpobot", // placeholder — à remplacer par le vrai lien
    featured: "medium",
  },
  {
    id: "easyqueue",
    slug: "easyqueue",
    title: "EasyQueue",
    category: "Application mobile",
    type: "academic",
    short: "Application mobile de gestion de files d'attente.",
    cover: "/images/projects/easyqueue-real-43.png",
    imageFit: "cover",
    imagePosition: "top",
    tech: ["Flutter", "Dart"],
    role: "Développement de l'application mobile.",
    problem:
      "Simplifier la gestion des files d'attente pour les utilisateurs et les établissements.",
    solution:
      "Une application mobile développée avec Flutter, offrant une expérience fluide sur iOS et Android.",
    featured: "small",
  },
  {
    id: "gestion-bibliotheque",
    slug: "gestion-bibliotheque",
    title: "Gestion de bibliothèque",
    category: "Application web",
    type: "academic",
    short:
      "Système de gestion de bibliothèque : livres, utilisateurs, emprunts et retours.",
    cover: "/images/projects/bibliotheque-deal-54.png",
    imageFit: "cover",
    imagePosition: "top",
    tech: ["PHP", "MySQL"],
    role: "Conception et développement de l'application.",
    problem:
      "Faciliter la gestion quotidienne d'une bibliothèque : catalogue, utilisateurs et cycle de prêt.",
    solution:
      "Une application web permettant de gérer les livres, les utilisateurs, les emprunts, les retours et la recherche dans le catalogue.",
    features: [
      "Gestion des livres et du catalogue",
      "Gestion des utilisateurs",
      "Emprunts et retours",
      "Recherche",
    ],
    github: "https://github.com/babasd0/Syst-me-de-gestion-de-biblioth-que-", // placeholder — à remplacer par le vrai lien
    featured: "small",
  },
  {
    id: "gestion-scolaire",
    slug: "gestion-scolaire",
    title: "Application de gestion scolaire",
    category: "Application web",
    type: "academic",
    short:
      "Plateforme de gestion scolaire avec rôles multiples : administration, enseignement et suivi pédagogique.",
    cover: "/images/projects/scolaire-real.png",
    tech: ["Laravel", "PHP", "MySQL"],
    role: "Conception et développement de l'application.",
    problem:
      "Centraliser la gestion administrative et pédagogique d'un établissement scolaire pour plusieurs profils d'utilisateurs.",
    solution:
      "Une application Laravel structurée autour de rôles (administrateur, enseignant, étudiant, responsable), couvrant la gestion des utilisateurs, des emplois du temps et du cahier de textes.",
    features: [
      "Gestion des utilisateurs et des rôles",
      "Emplois du temps",
      "Cahier de textes",
      "Espaces dédiés par rôle : administrateur, enseignant, étudiant, responsable",
    ],
    featured: "small",
  },
];

export const process = [
  {
    n: "01",
    title: "Comprendre",
    text: "Analyser le besoin et le problème.",
  },
  {
    n: "02",
    title: "Concevoir",
    text: "Définir l'architecture et choisir les technologies adaptées.",
  },
  {
    n: "03",
    title: "Développer",
    text: "Construire la solution frontend/backend.",
  },
  {
    n: "04",
    title: "Intégrer",
    text: "Connecter APIs, bases de données et IA lorsque cela apporte une réelle valeur.",
  },
  {
    n: "05",
    title: "Tester & déployer",
    text: "Tester, améliorer et mettre la solution à disposition.",
  },
];

export type TimelineItem = {
  period: string; // placeholder — dates à préciser
  title: string;
  org: string;
  points: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "2026",
    title: "Licence Génie Logiciel & Systèmes d'Information",
    org: "École Supérieure Polytechnique — UCAD, Dakar",
    points: [
      "Formation complète en développement logiciel, bases de données et systèmes d'information.",
    ],
  },
  {
    period: "Stage",
    title: "Stagiaire — Système ANPR",
    org: "Gitech Sénégal",
    points: [
      "Coordinatrice d'équipe et spécialiste OCR/validation sur un système de reconnaissance de plaques (YOLOv8, EasyOCR, FastAPI, Python).",
      "Travail en équipe, Git/GitHub, résolution de problèmes techniques.",
    ],
  },
  {
    period: "Stage",
    title: "Stagiaire — Développement web",
    org: "ISFAD",
    points: ["Développement web avec Laravel."],
  },
];
