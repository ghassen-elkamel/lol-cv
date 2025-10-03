export interface Ability {
  key: 'Q' | 'W' | 'E' | 'R' | 'Passive';
  name: string;
  description: string;
  color: string;
  technologies: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  tier: string;
  period: string;
  achievements: string[];
  patch: string;
}

export interface Project {
  name: string;
  status: 'Victory' | 'Defeat';
  duration: string;
  kda: {
    performance: string;
    speed: string;
    impact: string;
  };
  technologies: string[];
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
  type: 'primary' | 'secondary' | 'shard';
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  rank: string;
}

export interface Champion {
  name: string;
  title: string;
  level: number;
  region: string;
  stats: {
    frontend: number;
    backend: number;
    devops: number;
    speed: number;
    scale: number;
  };
  abilities: Ability[];
  skins: WorkExperience[];
  matchHistory: Project[];
  runes: Skill[];
  summonerProfile: Education;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    location: string;
  };
}

export const championData: Champion = {
  name: "AYMEN KHANFIR",
  title: "The Full-Stack Summoner",
  level: 2,
  region: "Tunisia / Remote",
  stats: {
    frontend: 8,
    backend: 9,
    devops: 7,
    speed: 9,
    scale: 8,
  },
  abilities: [
    {
      key: 'Passive',
      name: 'Continuous Learner',
      description: 'Constantly evolving and adapting to new technologies. Gains knowledge stacks with each project completion.',
      color: '#C8AA6E',
      technologies: ['Quick Learner', 'Problem Solver', 'Team Player', 'Agile Mindset'],
    },
    {
      key: 'Q',
      name: 'Frontend Mastery',
      description: 'Unleashes beautiful, responsive user interfaces with modern frameworks and cutting-edge design systems.',
      color: '#4A9FD8',
      technologies: ['React 19', 'Next.js', 'Flutter', 'Vue.js', 'Shadcn/ui', 'TanStack Query', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      key: 'W',
      name: 'Backend Sorcery',
      description: 'Crafts robust, scalable server-side architectures with enterprise-grade security and performance.',
      color: '#8B5FBF',
      technologies: ['Laravel', 'NestJS', 'Express.js', 'Go', 'PostgreSQL', 'MySQL', 'Redis', 'RESTful APIs'],
    },
    {
      key: 'E',
      name: 'DevOps Engineering',
      description: 'Automates deployment pipelines and orchestrates cloud infrastructure for maximum efficiency.',
      color: '#F0A93C',
      technologies: ['Docker', 'CI/CD', 'GitLab', 'AWS', 'Google Cloud', 'Vercel', 'GitHub Actions', 'Terraform'],
    },
    {
      key: 'R',
      name: 'ULTIMATE: Full-Stack Domination',
      description: 'Combines all abilities to deliver complete end-to-end solutions. Massive impact on business metrics and user satisfaction.',
      color: '#E74856',
      technologies: ['Microservices', 'System Design', 'Performance Optimization', 'Security Best Practices', 'Scalability', 'Clean Architecture'],
    },
  ],
  skins: [
    {
      company: 'EPILIA',
      role: 'Full-Stack Developer',
      tier: 'Legendary',
      period: 'Jul 2025 - Present',
      patch: 'Patch 2025.7',
      achievements: [
        'Architected OAuth2 security infrastructure for medical platform',
        'Managed 10,000+ patient records with advanced data protection',
        'Reduced booking conflicts by 40% through smart scheduling',
        'Built responsive dashboard with Flutter for cross-platform access',
      ],
    },
    {
      company: 'SANDRA REAL ESTATE',
      role: 'Full-Stack Developer',
      tier: 'Epic',
      period: 'Nov 2024 - Feb 2025',
      patch: 'Patch 2024.11',
      achievements: [
        'Achieved 98% Lighthouse performance score',
        'Reduced page load times by 40% through optimization',
        'Decreased development time by 35% with modern stack',
        'Implemented RBAC, PDF generation, and real-time analytics',
      ],
    },
    {
      company: 'FREELANCE',
      role: 'Full-Stack Developer',
      tier: 'Rare',
      period: '2023 - 2024',
      patch: 'Patch 2023.1',
      achievements: [
        'Delivered 15+ projects across various industries',
        'Maintained 95%+ client satisfaction rate',
        'Built custom CMS and e-commerce solutions',
        'Specialized in rapid prototyping and MVP development',
      ],
    },
  ],
  matchHistory: [
    {
      name: 'EPILIA Medical Platform',
      status: 'Victory',
      duration: 'Jul 2025 - Present',
      kda: {
        performance: '99.9% Uptime',
        speed: '40% Faster Processing',
        impact: '10k+ Patients Managed',
      },
      technologies: ['Flutter', 'Laravel', 'OAuth2', 'MySQL', 'AWS'],
      highlights: [
        'Enterprise-grade security implementation',
        'Real-time appointment scheduling',
        'HIPAA-compliant data management',
      ],
    },
    {
      name: 'Sandra Real Estate Platform',
      status: 'Victory',
      duration: 'Nov 2024 - Feb 2025',
      kda: {
        performance: '98% Lighthouse',
        speed: '40% Faster Loads',
        impact: '35% Dev Time Reduced',
      },
      technologies: ['React', 'Laravel', 'AWS', 'Vercel', 'PostgreSQL'],
      highlights: [
        'Role-based access control (RBAC)',
        'Automated PDF generation',
        'Real-time analytics dashboard',
      ],
    },
    {
      name: 'E-Commerce Multi-Vendor Platform',
      status: 'Victory',
      duration: 'Jun 2024 - Sep 2024',
      kda: {
        performance: '95% Performance',
        speed: '50% Faster Checkout',
        impact: '1000+ Daily Orders',
      },
      technologies: ['Next.js', 'NestJS', 'Stripe', 'Redis', 'PostgreSQL'],
      highlights: [
        'Multi-vendor marketplace',
        'Payment gateway integration',
        'Inventory management system',
      ],
    },
    {
      name: 'Healthcare Booking System',
      status: 'Victory',
      duration: 'Mar 2024 - May 2024',
      kda: {
        performance: '99% Availability',
        speed: '60% Booking Speed',
        impact: '5k+ Appointments',
      },
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
      highlights: [
        'Real-time availability checking',
        'SMS/Email notifications',
        'Calendar integration',
      ],
    },
  ],
  runes: [
    {
      category: 'Programming Languages',
      type: 'primary',
      items: ['TypeScript', 'JavaScript', 'PHP', 'Dart', 'Go', 'Python', 'SQL'],
    },
    {
      category: 'Frontend Frameworks',
      type: 'primary',
      items: ['React', 'Next.js', 'Vue.js', 'Flutter', 'Svelte'],
    },
    {
      category: 'Backend Frameworks',
      type: 'secondary',
      items: ['Laravel', 'NestJS', 'Express.js', 'FastAPI'],
    },
    {
      category: 'Databases',
      type: 'secondary',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'],
    },
    {
      category: 'DevOps & Cloud',
      type: 'shard',
      items: ['Docker', 'AWS', 'Google Cloud', 'Vercel', 'CI/CD', 'GitLab', 'GitHub Actions'],
    },
    {
      category: 'Tools & Testing',
      type: 'shard',
      items: ['Git', 'Jest', 'Vitest', 'Cypress', 'Postman', 'Figma'],
    },
  ],
  summonerProfile: {
    institution: 'CTI - Carthage Technology Institute',
    degree: 'Software Engineering',
    period: '2020 - 2023',
    rank: 'Challenger Tier',
  },
  contact: {
    email: 'aymen.khanfir@example.com',
    github: 'https://github.com/aymenkhanfir',
    linkedin: 'https://linkedin.com/in/aymenkhanfir',
    location: 'Tunisia / Remote',
  },
};
