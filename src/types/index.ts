export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Theme {
  mode: 'light' | 'dark';
  colors: Record<string, string>;
}
