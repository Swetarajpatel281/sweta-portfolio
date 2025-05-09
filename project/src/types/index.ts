export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

export interface TimelineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: string;
}

export interface ThemeState {
  darkMode: boolean;
}