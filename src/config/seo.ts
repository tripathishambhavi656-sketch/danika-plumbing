import { Metadata } from "next";
import { COMPANY_INFO, VERIFIED_STATISTICS, VERIFIED_SERVICES } from "@/data/company";

export const SITE_CONFIG = {
  name: "Danika Plumbing & Electric",
  legalName: "Danika Plumbing LLC",
  url: "https://danikaplumbing.com",
  ogImage: "https://danikaplumbing.com/hero-plumbing.jpg",
  description:
    "Licensed, bonded & insured plumbing and electrical contractor serving Snohomish County and King County, WA. 24/7 emergency response, upfront flat-rate pricing, and guaranteed workmanship.",
};

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  title: {
    default: "Danika Plumbing & Electric | 24/7 Plumber & Electrician in Everett & Seattle, WA",
    template: "%s | Danika Plumbing & Electric",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "plumber Everett WA",
    "emergency plumber Seattle",
    "24 hour plumbing service Snohomish County",
    "water heater repair Everett",
    "tankless water heater installation",
    "drain cleaning hydro jetting",
    "sewer line repair camera inspection",
    "whole house repiping plumber",
    "electrical panel upgrade 200 amp",
    "EV charger installation Everett",
    "Danika Plumbing",
    "Danika Plumbing & Electric",
  ],
  authors: [{ name: "Danika Plumbing & Electric" }],
  creator: "Danika Plumbing & Electric",
  publisher: "Danika Plumbing & Electric",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Danika Plumbing & Electric | 24/7 Plumber & Electrician in Everett & Seattle, WA",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Danika Plumbing & Electric — Everett & Seattle 24/7 Multi-Trade Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danika Plumbing & Electric | 24/7 Plumber & Electrician in Everett & Seattle, WA",
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Generates verified JSON-LD structured data for Google Local Business / PlumbingContractor
 */
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["PlumbingContractor", "Electrician"],
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    telephone: `+1-${COMPANY_INFO.phonePrimary}`,
    email: COMPANY_INFO.email,
    image: `${SITE_CONFIG.url}/hero-plumbing.jpg`,
    priceRange: "$$",
    foundingDate: "2009",
    currenciesAccepted: "USD",
    paymentAccepted: ["Cash", "Credit Card", "Momnt Consumer Financing"],
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zip,
      addressCountry: COMPANY_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.9015,
      longitude: -122.2573,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: VERIFIED_STATISTICS.rating.toString(),
      reviewCount: VERIFIED_STATISTICS.totalReviewsCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Everett" },
      { "@type": "City", name: "Seattle" },
      { "@type": "City", name: "Lynnwood" },
      { "@type": "City", name: "Edmonds" },
      { "@type": "City", name: "Marysville" },
      { "@type": "City", name: "Lake Stevens" },
      { "@type": "City", name: "Bothell" },
      { "@type": "City", name: "Shoreline" },
      { "@type": "AdministrativeArea", name: "Snohomish County" },
      { "@type": "AdministrativeArea", name: "King County" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing & Electrical Services",
      itemListElement: VERIFIED_SERVICES.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
        },
        position: index + 1,
      })),
    },
  };
}
