export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'VLSI / RTL' | 'Robotics & Embedded';
  status: string;
  highlights: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  images?: {
    src: string;
    caption: string;
  }[];
  specifications?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  color: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g., 'Advanced', 'Proficient', 'Exploring'
    iconName?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  location: string;
  description: string;
  coursesOrHighlights: string[];
  color: string;
}

export interface AchievementItem {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  category: 'Academics' | 'Engineering' | 'Competitive' | 'Vision';
  icon: string;
  color: string;
}
