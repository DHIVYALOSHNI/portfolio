export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface CapabilityBlock {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  status: string;
  prCount: number;
  location: string;
  description: string;
  metrics: MetricItem[];
  githubUrl: string;
  contributions: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  hasLiveDemo: boolean;
  liveDemoUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: string;
  stats?: {
    accuracy?: string;
    queries?: string;
    model?: string;
  };
  demoDetails?: {
    architecture: string;
    sampleInput: string;
    sampleOutput: string;
    keyMetric: string;
  };
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  organization?: string;
  highlight?: string;
  description: string;
}

export interface LearningItem {
  id: string;
  title: string;
  status: 'Completed' | 'Learning';
  platform?: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  year: string;
  category: 'Competition' | 'Debate' | 'Hackathon' | 'Leadership';
  description?: string;
}

export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  isPrimary: boolean;
  highlights?: string[];
}
