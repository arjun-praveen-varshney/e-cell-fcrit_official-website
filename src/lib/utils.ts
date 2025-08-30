// Utility functions for the application
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date utilities
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone number validation (Indian format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[91]?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Local storage utilities
export const storage = {
  get: (key: string) => {
    if (typeof window === "undefined") return null;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },
  set: (key: string, value: any) => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Handle quota exceeded error
    }
  },
  remove: (key: string) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  },
};

// Animation variants for Framer Motion (if we add it later)
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Social media link utilities
export function getSocialMediaIcon(platform: string) {
  const platforms: Record<string, string> = {
    facebook: "facebook",
    twitter: "twitter",
    instagram: "instagram",
    linkedin: "linkedin",
    youtube: "youtube",
    website: "external-link",
  };
  return platforms[platform.toLowerCase()] || "external-link";
}

// Contact form utilities
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: "general" | "collaboration" | "membership" | "speaker";
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // This would be replaced with actual API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // For now, just log the data
    console.log("Contact form submitted:", data);

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again.",
    };
  }
}

// Newsletter subscription
export async function subscribeToNewsletter(
  email: string
): Promise<{ success: boolean; message: string }> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Newsletter subscription:", email);

    return {
      success: true,
      message: "Successfully subscribed to our newsletter!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Subscription failed. Please try again.",
    };
  }
}

// Event registration
export async function registerForEvent(
  eventId: number,
  userData: any
): Promise<{ success: boolean; message: string }> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Event registration:", { eventId, userData });

    return {
      success: true,
      message: "Successfully registered for the event!",
    };
  } catch (error) {
    return {
      success: false,
      message: "Registration failed. Please try again.",
    };
  }
}
