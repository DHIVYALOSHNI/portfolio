import {
  NavItem,
  CapabilityBlock,
  ExperienceData,
  ProjectItem,
  SkillCategory,
  JourneyItem,
  LearningItem,
  Achievement,
  EducationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'S. DHIVYALOSHNI',
  displayLastName: 'DHIVYALOSHNI',
  degreeLine: 'B.TECH — ARTIFICIAL INTELLIGENCE & DATA SCIENCE',
  headline: 'BUILDING INTELLIGENT SYSTEMS.',
  headlineSecond: 'FOR REAL-WORLD PROBLEMS.',
  supportingText:
    'AI & Data Science student exploring artificial intelligence, machine learning, generative AI, data analytics and intelligent software systems.',
  batch: '2023 — 2027',
  institution: 'Dhanalakshmi Srinivasan University',
  location: 'Samayapuram, Tamil Nadu, India',
  cgpa: '8.57 / 10',
  role: 'AI & Data Science Student / Aspiring AI Engineer',
  email: 'dhv2404@gmail.com',
  github: 'https://github.com/Dhivyaloshni-S',
  linkedin: 'https://linkedin.com/in/dhivyaloshni-s',
  bottomMetadata: 'AI • DATA • ENGINEERING',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'WORK', href: '#work', id: 'work' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'JOURNEY', href: '#journey', id: 'journey' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const ABOUT_INFO = {
  label: '02 — ABOUT',
  heading: 'CURIOUS. PROJECT-DRIVEN.\nCONTINUOUSLY LEARNING.',
  summary:
    'I am a B.Tech Artificial Intelligence and Data Science student who learns by building practical systems.',
  paragraphs: [
    'I am an undergraduate student exploring the convergence of artificial intelligence, applied machine learning, generative workflows, data analytics, and intelligent software engineering.',
    'Rather than treating AI as purely theoretical equations, I focus on hands-on system building: from training predictive regressors and orchestrating multi-turn Gemini reasoning chains, to contributing to real-world open-source repositories and building responsive user interfaces.',
  ],
};

export const CAPABILITY_AREAS: CapabilityBlock[] = [
  {
    number: '01',
    title: 'ARTIFICIAL INTELLIGENCE',
    description:
      'Designing predictive models, classification algorithms, and supervised learning pipelines that extract actionable decisions from structured data.',
    iconName: 'Brain',
    tags: ['Machine Learning', 'Predictive Modeling', 'scikit-learn', 'Algorithms'],
  },
  {
    number: '02',
    title: 'GENERATIVE AI',
    description:
      'Building contextual reasoning loops, multi-turn AI interactions, and structured prompt pipelines leveraging modern LLMs and Google AI Studio.',
    iconName: 'Sparkles',
    tags: ['Gemini API', 'LLM Chains', 'Context Management', 'Prompt Engineering'],
  },
  {
    number: '03',
    title: 'DATA SCIENCE & ANALYTICS',
    description:
      'Transforming raw datasets into strategic intelligence through rigorous data preprocessing, SQL queries, statistical validation, and Power BI dashboards.',
    iconName: 'BarChart3',
    tags: ['Data Analytics', 'SQL', 'Pandas', 'Power BI', 'Exploratory Data Analysis'],
  },
  {
    number: '04',
    title: 'INTELLIGENT SOFTWARE',
    description:
      'Engineering performant, accessible client interfaces in React and TypeScript integrated with serverless backends like Firebase and Cloud Run.',
    iconName: 'Code2',
    tags: ['React', 'TypeScript', 'Node.js', 'Flask', 'Firebase'],
  },
];

export const WORK_EXPERIENCE: ExperienceData = {
  company: 'HUSHH TECHNOLOGIES',
  role: 'OPEN SOURCE CONTRIBUTOR',
  period: 'COMPLETED — MAY 2026',
  status: 'Completed in May 2026',
  prCount: 38,
  location: 'Remote Ecosystem',
  description:
    'Contributed to the Hushh open-source ecosystem while working with modern web technologies, collaborative version control standards, and research-oriented modules.',
  metrics: [
    {
      value: '38',
      label: 'Pull Requests Merged',
      detail: 'Clean, verified production commits merged across codebase branches.',
    },
    {
      value: '80 / 1000',
      label: 'Cohort Selection',
      detail: 'Selected as one of 80 contributors from an initial 1000-member applicant pool.',
    },
    {
      value: 'May 2026',
      label: 'Milestone Status',
      detail: 'Successfully finalized and completed all designated contributor deliverables.',
    },
  ],
  githubUrl: 'https://github.com/hushh-ai',
  contributions: [
    'Authored 38 merged pull requests across frontend component repositories, UI state refactors, and test coverage improvements.',
    'Collaborated in real-world asynchronous Git workflows: branch management, PR code reviews, and resolving merge conflicts.',
    'Engineered modular React interfaces and styling consistency adhering to ecosystem design requirements.',
  ],
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'cognitive-reflection',
    title: 'Cognitive Reflection & Growth Journal',
    tagline: 'AI-Powered Mental Clarity & Insight Journal',
    category: 'Generative AI / Intelligent Application',
    description:
      'An AI-powered personal reflection and growth journal designed to transform everyday unstructured thoughts into meaningful cognitive self-reflection, pattern identification, and constructive insights.',
    technologies: [
      'Google Gemini',
      'React',
      'TypeScript',
      'Firebase Authentication',
      'Firestore',
      'Google AI Studio',
    ],
    features: [
      'AI-powered reflective journaling with Gemini reasoning',
      'Automated cognitive pattern & recurring theme identification',
      'Contextual longitudinal insights synthesized across journal history',
      'Multi-turn conversational reflection and guided follow-up prompts',
      'Strict user-isolated Firestore document privacy and owner-bound access',
    ],
    hasLiveDemo: true,
    githubUrl: 'https://github.com/Dhivyaloshni-S',
    featured: true,
    stats: {
      model: 'Gemini Flash',
      accuracy: 'Sub-second inference',
      queries: 'Multi-turn context',
    },
    demoDetails: {
      architecture: 'Client (React/TS) → Auth Guard → Gemini Structured Prompt Engine → Owner Firestore Storage',
      sampleInput: 'Felt overwhelmed balancing university hackathon prep and algorithm coursework today.',
      sampleOutput: 'Pattern: Task-Switching Latency. Recommendation: Implement 90-minute single-focus blocks.',
      keyMetric: 'Built for Google APAC Gen AI Academy / Ideathon Context',
    },
  },
  {
    id: 'hushh-ambassify',
    title: 'Hushh Ambassify Growth Dashboard',
    tagline: 'Ambassador Performance & Activity Interface',
    category: 'Growth & Analytics / Web Application',
    description:
      'A responsive analytics and growth interface developed for ambassador-oriented performance visualization, contributor tracking, and community telemetry within the Hushh ecosystem.',
    technologies: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Data Analytics'],
    features: [
      'Growth metric tracking and contributor milestone dashboards',
      'Interactive visual performance charts and engagement analytics',
      'Modular component hierarchy with optimized state caching',
      'Responsive interface adapting to mobile and desktop screens',
    ],
    hasLiveDemo: false,
    githubUrl: 'https://github.com/Dhivyaloshni-S',
    featured: true,
    stats: {
      model: 'Frontend Analytics',
      queries: 'Cohort Metrics',
    },
  },
  {
    id: 'climate-smart-agriculture',
    title: 'Climate Smart Agriculture',
    tagline: 'ML-Assisted Agricultural Decision Support',
    category: 'Machine Learning / Agriculture',
    description:
      'An intelligent agriculture platform focused on supporting farmer decision-making through crop yield predictions, crop recommendations based on soil/climate parameters, and future agricultural price insights.',
    technologies: [
      'Python',
      'Flask',
      'React',
      'Machine Learning',
      'Random Forest',
      'Pandas',
    ],
    features: [
      'Supervised Random Forest regressor for regional crop yield prediction',
      'Soil nutrient (N, P, K), rainfall, and temperature recommendation engine',
      'Future crop price trajectory modeling for informed harvest planning',
      'Lightweight Flask REST microservice interfacing with interactive frontend',
    ],
    hasLiveDemo: true,
    githubUrl: 'https://github.com/Dhivyaloshni-S',
    featured: true,
    stats: {
      model: 'Random Forest Regressor',
      accuracy: '94.2% R² Accuracy',
      queries: 'Multi-parameter evaluation',
    },
    demoDetails: {
      architecture: 'Soil & Climate Parameters → Scikit-Learn Random Forest Pipeline → REST API → Decision Interface',
      sampleInput: 'Rainfall: 1100mm, Temp: 28°C, Soil: Clay Loam, N-P-K: 85-42-40',
      sampleOutput: 'Optimal Crop: Paddy / Rice (Yield: 4.85 T/Ha, Forecast: ₹2,450/Q)',
      keyMetric: 'Trained on 10,000+ Regional Agricultural Samples',
    },
  },
  {
    id: 'smart-crop-rover',
    title: 'Smart Crop Protection Rover',
    tagline: 'IoT Autonomous Field Sentinel',
    category: 'IoT / Smart Agriculture',
    description:
      'A practical hardware and embedded technology project focusing on intelligent crop monitoring, intrusion deterrence, and environmental field telemetry.',
    technologies: ['IoT', 'Arduino & ESP32', 'Python', 'Sensors', 'Embedded Systems'],
    features: [
      'Ultrasonic and thermal intrusion detection with active deterrent triggers',
      'Real-time ambient field temperature and humidity sensor telemetry',
      'Low-power microcontroller firmware optimized for continuous deployment',
      'Practical hardware-software telemetry bridge',
    ],
    hasLiveDemo: false,
    githubUrl: 'https://github.com/Dhivyaloshni-S',
    featured: false,
  },
  {
    id: 'smart-campus-navigation',
    title: 'Smart Campus Navigation System',
    tagline: 'Algorithmic Wayfinding & Facility Locator',
    category: 'Campus Technology / Application',
    description:
      'An academic project focused on interactive indoor and outdoor campus navigation, routing algorithms, and location discovery across university facilities.',
    technologies: ['React', 'JavaScript', 'Graph Algorithms', 'HTML & CSS'],
    features: [
      'Graph-based shortest path calculation between academic departments and laboratories',
      'Interactive spatial map markers and searchable building directory',
      'Lightweight client-side rendering accessible on mobile devices',
    ],
    hasLiveDemo: false,
    githubUrl: 'https://github.com/Dhivyaloshni-S',
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & MACHINE LEARNING',
    categoryKey: 'ai-ml',
    skills: [
      { name: 'Python', level: 'Primary Language', highlight: true },
      { name: 'Machine Learning', level: 'Algorithms & Models', highlight: true },
      { name: 'Generative AI', level: 'LLMs & Prompt Pipelines', highlight: true },
    ],
  },
  {
    title: 'DATA',
    categoryKey: 'data',
    skills: [
      { name: 'Data Analytics', level: 'Core Competency', highlight: true },
      { name: 'SQL', level: 'Relational Queries', highlight: true },
      { name: 'Power BI', level: 'Dashboards & Reports' },
      { name: 'Excel', level: 'Formulas & Data Analysis' },
      { name: 'Data Management', level: 'Pipelines & Hygiene' },
    ],
  },
  {
    title: 'DEVELOPMENT',
    categoryKey: 'dev',
    skills: [
      { name: 'React', level: 'Frontend Engineering', highlight: true },
      { name: 'JavaScript', level: 'Modern ES6+' },
      { name: 'Node.js', level: 'Runtime & APIs' },
      { name: 'Flask', level: 'Python Microservices' },
    ],
  },
  {
    title: 'TOOLS & PLATFORMS',
    categoryKey: 'tools',
    skills: [
      { name: 'GitHub', level: 'Version Control & Open Source', highlight: true },
      { name: 'Firebase', level: 'Auth & Firestore' },
      { name: 'Google AI Studio', level: 'Gemini Prototyping', highlight: true },
      { name: 'Cloud Run', level: 'Container Deployment' },
    ],
  },
];

export const JOURNEY_TIMELINE: JourneyItem[] = [
  {
    id: 'journey-2023',
    year: '2023',
    title: 'Started B.Tech in Artificial Intelligence & Data Science',
    organization: 'Dhanalakshmi Srinivasan University',
    description:
      'Began undergraduate journey focusing on computer science fundamentals, data structures, mathematics, and artificial intelligence.',
  },
  {
    id: 'journey-2025-vdart',
    year: '2025',
    title: 'Data Analytics Internship',
    organization: 'VDART',
    description:
      'Applied analytical methodologies and visualization workflows to evaluate corporate datasets, streamline reporting metrics, and synthesize strategic summaries.',
  },
  {
    id: 'journey-2025-iitm',
    year: '2025',
    title: 'Generative AI Workshop',
    organization: 'IIT Madras',
    description:
      'Immersive training in foundational transformer architectures, large language model deployment, and context-aware generation.',
  },
  {
    id: 'journey-2025-hackathon',
    year: '2025',
    title: 'TNWISE Hackathon — Crop Yield Prediction',
    organization: 'TANCAM & State Engineering Forum',
    description:
      'Engineered and presented machine learning predictive models for regional agricultural crop yields, earning evaluation honors.',
  },
  {
    id: 'journey-2026-hushh',
    year: '2026',
    title: 'Hushh Open Source Contribution — 38 PRs',
    organization: 'Hushh Technologies (Remote)',
    highlight: 'Completed May 2026',
    description:
      'Selected from a 1000-member cohort (top 80) to author 38 merged pull requests across web components and open-source modules.',
  },
  {
    id: 'journey-2026-cognitive',
    year: '2026',
    title: 'Cognitive Reflection & Growth Journal',
    organization: 'Google APAC Gen AI Academy Ideathon',
    description:
      'Conceptualized and engineered an AI-powered personal reflection journal utilizing Google Gemini and Firestore.',
  },
];

export const LEARNING_ITEMS: LearningItem[] = [
  {
    id: 'learn-nptel-java',
    title: 'NPTEL — Programming in Java',
    status: 'Completed',
    platform: 'IIT Kharagpur / SWAYAM',
    description: 'Comprehensive certification in object-oriented paradigms, multithreading, and standard Java libraries.',
  },
  {
    id: 'learn-deep-learning',
    title: 'Deep Learning',
    status: 'Learning',
    platform: 'Autonomous & Academic Studies',
    description: 'Exploring convolutional networks, recurrent architectures, backpropagation mathematics, and tensor frameworks.',
  },
  {
    id: 'learn-gis',
    title: 'Remote Sensing & GIS',
    status: 'Learning',
    platform: 'Academic Specialization Track',
    description: 'Investigating geospatial data analysis, multispectral satellite imagery, and spatial pattern modeling.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: '2nd Prize — AI Solution',
    event: "Neurax'25 National Technical Symposium",
    year: '2025',
    category: 'Competition',
    description:
      'Demonstrated an applied artificial intelligence architecture evaluated on accuracy, technical implementation, and real-world viability.',
  },
  {
    id: 'ach-2',
    title: 'Best Speaker Award',
    event: 'University Debate League',
    year: '2024',
    category: 'Debate',
    description:
      'Awarded for structured argumentation, articulation, and persuasive delivery on technology ethics and societal impact.',
  },
  {
    id: 'ach-3',
    title: 'TNWISE Hackathon Finalist',
    event: 'TANCAM State Innovation Challenge',
    year: '2025',
    category: 'Hackathon',
    description:
      'Built and defended machine learning crop yield models within intensive competition sprint constraints.',
  },
  {
    id: 'ach-4',
    title: 'The Catalyst 2026 — Project Showcase',
    event: 'IIT Madras Research Park',
    year: '2026',
    category: 'Competition',
    description:
      'Selected and felicitated at IIT Madras Research Park for high-impact student engineering prototypes.',
  },
  {
    id: 'ach-5',
    title: 'National Hackathon Volunteer Recognition',
    event: 'SMARTATHON National Level Hackathon',
    year: '2024',
    category: 'Leadership',
    description:
      'Coordinated technical logistics and participant mentorship tracks for a national engineering hackathon.',
  },
];

export const EDUCATION_DATA = {
  primary: {
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    institution: 'Dhanalakshmi Srinivasan University',
    location: 'Samayapuram, Tamil Nadu, India',
    period: '2023 — 2027',
    cgpa: '8.57 / 10',
    coursework: [
      'Machine Learning',
      'Data Structures & Algorithms',
      'Deep Learning',
      'Database Management Systems',
      'Linear Algebra & Probability',
      'Natural Language Processing',
    ],
  },
  secondary: [
    {
      level: 'Class XII (Higher Secondary)',
      school: 'Holy Cross Matric Higher Secondary School',
      location: 'Tamil Nadu, India',
      score: '79%',
      period: '2022 — 2023',
    },
    {
      level: 'Class X (Secondary School)',
      school: 'Holy Cross Matric Higher Secondary School',
      location: 'Tamil Nadu, India',
      score: '100%',
      period: '2020 — 2021',
    },
  ],
  items: [
    {
      degree: 'B.Tech — Artificial Intelligence and Data Science',
      field: 'School of Engineering & Technology',
      institution: 'Dhanalakshmi Srinivasan University',
      location: 'Samayapuram, Tamil Nadu, India',
      period: '2023 — 2027',
      score: '8.57 / 10',
      scoreLabel: 'CGPA',
      isPrimary: true,
      highlights: [
        'Core coursework: Machine Learning, Data Structures & Algorithms, Deep Learning, Database Management Systems, Linear Algebra, Probability & Statistics.',
        'Active participant and leader in academic research forums, technical symposiums, and national hackathons.',
      ],
    },
    {
      degree: 'Class XII (Higher Secondary)',
      institution: 'Holy Cross Matric Higher Secondary School',
      location: 'Tamil Nadu, India',
      period: '2022 — 2023',
      score: '79%',
      scoreLabel: 'Percentage',
      isPrimary: false,
      highlights: ['Specialization in Mathematics, Physics, Chemistry, and Computer Science.'],
    },
    {
      degree: 'Class X (Secondary School)',
      institution: 'Holy Cross Matric Higher Secondary School',
      location: 'Tamil Nadu, India',
      period: '2020 — 2021',
      score: '100%',
      scoreLabel: 'Percentage',
      isPrimary: false,
      highlights: ['Centum aggregate achievement reflecting foundational academic rigor and discipline.'],
    },
  ] as EducationItem[],
};
