/**
 * Core type definitions for Danika Plumbing & Electric application.
 * Defines structured schemas for services, testimonials, service areas, and navigation.
 */

export interface ContactInfo {
  phonePrimary: string;
  phoneFormatted: string;
  phoneSecondary: string;
  phoneSecondaryFormatted: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  licenses: {
    plumbing: string;
    electrical: string;
  };
  hours: {
    emergency: string;
    office: string;
  };
}

export interface PlumbingService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  isEmergency: boolean;
  features: string[];
  slug: string;
}

export interface ServiceArea {
  county: string;
  primaryCity: string;
  cities: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  quote: string;
  serviceCategory: string;
  verifiedSource: "Google" | "Angi" | "Thumbtack";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Plumbing" | "Water Heaters" | "Emergency" | "Electrical" | "Pricing";
}

export interface NavItem {
  label: string;
  href: string;
  isEmergency?: boolean;
  children?: { label: string; href: string; description?: string }[];
}
