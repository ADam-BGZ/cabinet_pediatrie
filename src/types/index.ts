export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderData {
  phone: string;
  address: string;
  hours: string;
  navLinks: NavLink[];
}

export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  services: string[];
}

export interface AboutData {
  tag: string;
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  ctaText: string;
  ctaLink: string;
}


export interface StatItem {
  value: string;
  label: string;
}

export interface StatsData {
  tag: string;
  title: string;
  subtitle: string;
  stats: StatItem[];
}

export interface CtaData {
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface TestimonialsData {
  tag: string;
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export interface EmergencyData {
  phone: string;
  tag: string;
  title: string;
  subtitle: string;
  features: { icon: string; text: string }[];
}

export interface FooterData {
  socialLinks: { label: string; href: string; icon: string }[];
  contact: {
    phone: string;
    email: string;
    address: string;
    hours: string;
  };
  copyright: string;
}
