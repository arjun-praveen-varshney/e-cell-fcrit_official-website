export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  bio?: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  category: "core" | "senior" | "junior" | "alumni" | "advisor";
  memberType: "current" | "past" | "advisor";
  joinYear: number;
  skills?: string[];
  order?: number;
}

export interface Event {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  date: string;
  endDate?: string;
  location: string;
  participants?: number;
  category:
    | "workshop"
    | "competition"
    | "seminar"
    | "networking"
    | "summit"
    | "ideathon";
  status: "upcoming" | "ongoing" | "completed" | "cancelled";
  featured: boolean;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  highlights?: string[];
  gallery?: Array<{
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  }>;
  speakers?: Speaker[];
  sponsors?: Sponsor[];
  registrationLink?: string;
}

export interface Speaker {
  _id: string;
  name: string;
  role: string;
  company?: string;
  bio?: string;
  image?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  expertise?: string[];
  achievements?: string[];
  testimonial?: string;
  eventsSpokeAt?: Event[];
  featured?: boolean;
  order?: number;
}

export interface Sponsor {
  _id: string;
  name: string;
  logo: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  category:
    | "title"
    | "platinum"
    | "gold"
    | "silver"
    | "bronze"
    | "knowledge"
    | "media"
    | "community";
  website?: string;
  description?: string;
  yearPartnered?: number;
  active: boolean;
  featured?: boolean;
  order?: number;
}

export interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  subject?: string;
  phone?: string;
  message: string;
  type: "general" | "event" | "partnership" | "media" | "alumni" | "student";
  submittedAt: string;
  status: "new" | "in_progress" | "responded" | "resolved" | "archived";
  notes?: string;
}

export interface SiteSettings {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: {
    asset: {
      _id: string;
      url: string;
    };
  };
  contactEmail: string;
  phone?: string;
  address?: string;
  socialMedia?: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
  footerText?: string;
}

export interface LinkedInPost {
  id: string;
  text: string;
  authorDisplayName: string;
  publishedAt: string;
  likeCount: number;
  commentCount: number;
  url: string;
  images?: string[];
}
