export interface Project {
  id: string;
  title: string;
  role: string;
  dates?: string;
  description: string;
  tags: string[];
  color: string;
  logoColor?: string;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  level: string;
  iconName: string; // Using string to map to icons in component
  color: string;
}

export interface Interest {
  id: string;
  title: string;
  subtitle: string;
  stat: string;
  iconName: string; // Using string to map to icons in component
  color: string;
}

export interface HeroData {
  name: string;
  role: string;
  location: string;
  level: number;
  status: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export interface OriginStoryData {
  title: string;
  description: string;
}

export interface VisitorData {
  count: number | null;
  loading: boolean;
  error?: string | null;
}
