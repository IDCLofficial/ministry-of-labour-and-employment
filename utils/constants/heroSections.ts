export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}

export const HERO_CONFIGS = {
  HOME: {
    title: "Empowering the Imo Workforce",
    subtitle: "Skills. Jobs. Productivity. Prosperity.",
    description: "The Ministry of Labour and Employment drives job creation, skill development, and workforce empowerment through innovative training programs and public-private partnerships.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Our Projects & Programs",
    description: "Empowering the people of Imo State through impactful labour and employment programs that build a productive, inclusive, and economically vibrant workforce.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet the dedicated professionals driving Imo State's labour and employment initiatives, including Hon. Commissioner Prof. Boniface G. Nworgu and the directors of key departments.",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Services",
    description: "Supporting decent work, social justice, and inclusive economic growth in Imo State through comprehensive labour and employment services.",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "Newsroom / Press Releases / Announcements",
    description: "Stay informed with the latest updates, programs, and events from the Ministry of Labour and Employment.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Media Gallery & Success Stories",
    description: "Explore our visual journey of training programs, employment initiatives, and success stories from beneficiaries across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Upcoming Events & Programs",
    description: "Join us for skills training sessions, job fairs, and community engagements across Imo State",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Labour and Employment",
    description: "At the heart of Imo State's economic development is a robust and future-focused labour force. Our ministry is committed to nurturing, equipping, and empowering every citizen with the tools for decent work, entrepreneurial success, and self-reliance.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
