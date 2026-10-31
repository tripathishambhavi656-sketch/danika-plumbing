import { ContactInfo, PlumbingService, ServiceArea, Testimonial, FAQItem, NavItem } from "@/types";

/**
 * Verified company information for Danika Plumbing & Electric.
 * Sources: danikaplumbing.com, Washington State Contractor Licensing, Official business registries.
 */
export const COMPANY_INFO: ContactInfo = {
  phonePrimary: "4253741557",
  phoneFormatted: "(425) 374-1557",
  phoneSecondary: "4255288966",
  phoneSecondaryFormatted: "(425) 528-8966",
  email: "office@danikaplumbing.com",
  address: {
    street: "11015 Airport Road",
    city: "Everett",
    state: "WA",
    zip: "98204",
    country: "US",
  },
  licenses: {
    plumbing: "DANIKPL839PF",
    electrical: "DANIKPL745CD",
  },
  hours: {
    emergency: "24/7 Rapid Emergency Response (365 Days/Year)",
    office: "Monday – Friday: 8:00 AM – 5:00 PM PST",
  },
};

export const VERIFIED_STATISTICS = {
  rating: 4.7,
  totalReviewsCount: 350,
  yearsInBusiness: 17, // Founded 2009
  emergencyResponseTarget: "~90 Minutes Average Dispatch",
  satisfactionGuarantee: "100% Workmanship Warranty on Parts & Labor",
};

export const VERIFIED_SERVICES: PlumbingService[] = [
  {
    id: "emergency-plumbing",
    title: "24/7 Emergency Plumbing",
    shortDescription: "Immediate emergency response for burst pipes, active water leaks, severe backups, and plumbing disasters.",
    fullDescription: "When plumbing emergencies strike, waiting until Monday morning is not an option. Our certified emergency technicians are on call 24 hours a day, 7 days a week, arriving fully equipped to stop leaks, prevent property damage, and restore your system quickly.",
    iconName: "AlertTriangle",
    isEmergency: true,
    features: [
      "Rapid dispatch across Snohomish & King Counties",
      "Burst pipe mitigation & water shut-off",
      "Emergency leak detection & containment",
      "Zero hidden emergency surcharge transparency",
    ],
    slug: "emergency-plumbing",
  },
  {
    id: "water-heaters",
    title: "Water Heater Repair & Installation",
    shortDescription: "Full-service installation and repair for tankless, standard tank, and hybrid electric/gas water heaters.",
    fullDescription: "From sudden cold showers to noisy sediment buildup or complete tank failure, Danika specializes in troubleshooting, repairs, and high-efficiency tankless replacements from top manufacturers including Noritz, Bradford White, and Rheem.",
    iconName: "Flame",
    isEmergency: true,
    features: [
      "Same-day water heater repair & diagnosis",
      "Tankless water heater conversions & retrofits",
      "Traditional gas & electric tank replacements",
      "Energy-efficient hybrid heat pump water heaters",
    ],
    slug: "water-heater-services",
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning & Hydro Jetting",
    shortDescription: "Clearing stubborn blockages, grease, soap scum, and tree root intrusions using powerful hydro jetting.",
    fullDescription: "Slow draining sinks, gurgling toilets, or recurrent sewer line blockages require professional solutions. We utilize high-pressure hydro jetting equipment to scrub pipe walls clean and restore full drain diameter without pipe damage.",
    iconName: "Droplet",
    isEmergency: false,
    features: [
      "Heavy-duty hydro jetting for grease and roots",
      "Mainline sewer drain clearing",
      "Kitchen, bathroom, and laundry drain snaking",
      "Safe, chemical-free hydro cleaning",
    ],
    slug: "drain-cleaning",
  },
  {
    id: "sewer-repair",
    title: "Sewer Line Repair & Inspection",
    shortDescription: "High-definition video sewer camera inspections, trenchless sewer repairs, and full pipe replacements.",
    fullDescription: "Diagnose sewer blockages accurately with self-leveling HD camera inspections before performing targeted sewer repairs. We offer minimally invasive sewer line solutions designed to protect your yard, driveway, and landscaping.",
    iconName: "Wrench",
    isEmergency: false,
    features: [
      "High-definition video camera pipe diagnostics",
      "Trenchless pipe repair & cleanout installations",
      "Root intrusion removal & cracked line repair",
      "Complete sewer main replacement",
    ],
    slug: "sewer-repair",
  },
  {
    id: "repiping-leak-detection",
    title: "Whole-Home Repiping & Leak Detection",
    shortDescription: "Advanced acoustic leak detection and full whole-house copper and PEX repiping services.",
    fullDescription: "Old galvanized pipes, frequent pinhole leaks, and rusty water signal the need for a modern PEX or copper repipe. Our team replaces failing plumbing lines with durable, clean materials that improve water pressure and safeguard your home.",
    iconName: "Search",
    isEmergency: false,
    features: [
      "Non-invasive electronic leak detection",
      "Complete PEX & copper repiping solutions",
      "Main water service line replacement",
      "Resolution of low water pressure & discolored water",
    ],
    slug: "repiping-leak-detection",
  },
  {
    id: "electrical-services",
    title: "Residential Electrical Services",
    shortDescription: "200-amp electrical panel upgrades, EV home chargers, backup generators, and safety inspections.",
    fullDescription: "As Danika Plumbing & Electric, we hold dual master licensing (WA Lic #DANIKPL745CD) to handle home electrical upgrades, EV charging stations, modern circuit breaker panels, and code-compliance rewiring alongside our plumbing trade.",
    iconName: "Zap",
    isEmergency: true,
    features: [
      "Electrical panel upgrades (100A to 200A)",
      "Level 2 EV charger installation (Tesla, universal)",
      "Whole-home rewiring & safety inspections",
      "Standby generator hookups & surge protection",
    ],
    slug: "electrical-services",
  },
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    county: "Snohomish County",
    primaryCity: "Everett (Headquarters)",
    cities: [
      "Everett",
      "Lynnwood",
      "Edmonds",
      "Marysville",
      "Lake Stevens",
      "Mukilteo",
      "Mill Creek",
      "Snohomish",
      "Monroe",
      "Arlington",
      "Mountlake Terrace",
      "Brier",
    ],
  },
  {
    county: "King County",
    primaryCity: "Seattle & Eastside",
    cities: [
      "Seattle",
      "Shoreline",
      "Bothell",
      "Kenmore",
      "Kirkland",
      "Redmond",
      "Bellevue",
      "Woodinville",
      "Lake Forest Park",
      "Maltby",
    ],
  },
];

export const VERIFIED_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Robert M.",
    location: "Everett, WA",
    rating: 5,
    date: "Verified Review",
    quote: "Our water heater ruptured on a Sunday morning and flooded our utility room. Danika had a technician at our house within an hour. They walked us through replacement options with clear upfront pricing and had hot water restored by the afternoon. Outstanding service!",
    serviceCategory: "Water Heater Emergency",
    verifiedSource: "Google",
  },
  {
    id: "test-2",
    author: "Sarah K.",
    location: "Lynnwood, WA",
    rating: 5,
    date: "Verified Review",
    quote: "We needed our main electrical panel upgraded to 200 amps for an EV charger, plus had a nagging kitchen drain clog. Danika took care of both in a single coordinated visit. Professional, prompt, and left the workspace spotless.",
    serviceCategory: "Panel Upgrade & Drain Cleaning",
    verifiedSource: "Google",
  },
  {
    id: "test-3",
    author: "David L.",
    location: "Seattle, WA (Northgate)",
    rating: 5,
    date: "Verified Review",
    quote: "Called three plumbers for a main sewer backup and Danika was the only one who gave a clear, honest assessment without high-pressure sales tactics. The camera inspection showed roots clearly, and their hydro jetting cleared it out completely.",
    serviceCategory: "Sewer Line Hydro Jetting",
    verifiedSource: "Angi",
  },
];

export const FREQUENTLY_ASKED_QUESTIONS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How fast can an emergency plumber arrive at my property?",
    answer: "Our technicians provide 24/7 rapid emergency dispatch across Snohomish County and King County, with an average target arrival time of within 90 minutes depending on your specific location and road conditions.",
    category: "Emergency",
  },
  {
    id: "faq-2",
    question: "Do you provide upfront pricing before starting work?",
    answer: "Yes. We believe in 100% pricing transparency. Our licensed technicians diagnose the issue on-site, explain the repair options, and present a fixed, upfront estimate for your approval before turning a single wrench.",
    category: "Pricing",
  },
  {
    id: "faq-3",
    question: "Are your plumbers and electricians licensed and insured in Washington?",
    answer: "Yes, Danika Plumbing & Electric is fully licensed, bonded, and insured in Washington State. Our Plumbing Contractor Registration is DANIKPL839PF and our Electrical Contractor License is DANIKPL745CD.",
    category: "Plumbing",
  },
  {
    id: "faq-4",
    question: "Do you offer consumer financing for major repairs and installations?",
    answer: "Yes, we partner with Momnt to offer flexible financing programs for large projects such as whole-home repiping, sewer replacements, tankless water heater retrofits, and electrical panel upgrades. Applications can be submitted digitally with a soft credit check.",
    category: "Pricing",
  },
  {
    id: "faq-5",
    question: "What brands of water heaters do you install and repair?",
    answer: "We repair all standard residential and commercial water heater brands. For new installations and replacements, we install top-tier energy-efficient systems including Noritz, Bradford White, Rheem, and Navien tankless units.",
    category: "Water Heaters",
  },
];

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "24/7 Emergency Plumbing", href: "#services", description: "Immediate dispatch for leaks and backups" },
      { label: "Water Heater Services", href: "#services", description: "Repair & installation (Tank & Tankless)" },
      { label: "Drain Cleaning & Jetting", href: "#services", description: "Clog removal & high-pressure jetting" },
      { label: "Sewer Line Diagnostics", href: "#services", description: "HD camera inspections & trenchless repairs" },
      { label: "Repiping & Leak Detection", href: "#services", description: "Whole-home copper & PEX repiping" },
      { label: "Electrical Panel & EV Chargers", href: "#services", description: "200A upgrades & certified wiring" },
    ],
  },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Financing", href: "#financing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
