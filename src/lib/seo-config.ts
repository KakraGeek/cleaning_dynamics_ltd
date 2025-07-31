// Comprehensive SEO Configuration for Cleaning Dynamics Ltd
// Ghana-focused cleaning industry keywords and metadata

export const seoConfig = {
  // Primary Keywords (High Priority)
  primaryKeywords: [
    "cleaning services Ghana",
    "professional cleaning Accra",
    "domestic cleaning Ghana",
    "industrial cleaning services",
    "office cleaning Accra",
    "house cleaning Ghana",
    "commercial cleaning services",
    "janitorial services Ghana",
    "cleaning company Accra",
    "environmental management Ghana"
  ],

  // Service-Specific Keywords
  serviceKeywords: {
    domestic: [
      "domestic cleaning services",
      "house cleaning Accra",
      "home cleaning Ghana",
      "residential cleaning",
      "housekeeping services",
      "maid services Ghana",
      "home maintenance cleaning",
      "domestic help Ghana",
      "house cleaning near me",
      "residential janitorial"
    ],
    industrial: [
      "industrial cleaning Ghana",
      "factory cleaning services",
      "warehouse cleaning",
      "manufacturing facility cleaning",
      "industrial janitorial",
      "factory maintenance cleaning",
      "industrial hygiene services",
      "manufacturing cleaning Ghana",
      "warehouse maintenance",
      "industrial facility cleaning"
    ],
    postConstruction: [
      "post construction cleaning",
      "construction cleanup Ghana",
      "renovation cleaning services",
      "new building cleaning",
      "construction debris removal",
      "post renovation cleaning",
      "construction site cleanup",
      "new home cleaning Ghana",
      "building completion cleaning",
      "construction final cleaning"
    ],
    fumigation: [
      "fumigation services Ghana",
      "pest control Accra",
      "termite control Ghana",
      "rodent control services",
      "cockroach control Ghana",
      "mosquito control services",
      "pest management Ghana",
      "fumigation near me",
      "pest extermination Ghana",
      "insect control services"
    ],
    facilities: [
      "facilities management Ghana",
      "property management services",
      "estate management Accra",
      "facility maintenance Ghana",
      "property maintenance services",
      "estate cleaning Ghana",
      "facility management near me",
      "property care services",
      "estate maintenance Ghana",
      "facility operations management"
    ],
    wasteManagement: [
      "waste management Ghana",
      "solid waste disposal",
      "liquid waste management",
      "septic tank evacuation",
      "garbage collection Ghana",
      "waste disposal services",
      "recycling services Ghana",
      "waste removal Accra",
      "environmental waste management",
      "waste collection services"
    ],
    landscaping: [
      "landscape design Ghana",
      "garden maintenance Accra",
      "landscaping services Ghana",
      "turf installation",
      "garden design Ghana",
      "landscape maintenance",
      "outdoor space design",
      "garden care services",
      "landscape construction Ghana",
      "horticultural services"
    ]
  },

  // Location-Based Keywords
  locationKeywords: [
    "cleaning services Accra",
    "cleaning services Kumasi",
    "cleaning services Tamale",
    "cleaning services Cape Coast",
    "cleaning services Tema",
    "cleaning services Sekondi-Takoradi",
    "cleaning services Sunyani",
    "cleaning services Ho",
    "cleaning services Koforidua",
    "cleaning services Wa",
    "cleaning services Bolgatanga",
    "cleaning services Koforidua",
    "cleaning services all Ghana regions",
    "cleaning services Greater Accra",
    "cleaning services Ashanti Region",
    "cleaning services Northern Region",
    "cleaning services Central Region",
    "cleaning services Western Region",
    "cleaning services Eastern Region",
    "cleaning services Volta Region",
    "cleaning services Upper East",
    "cleaning services Upper West",
    "cleaning services Bono Region",
    "cleaning services Ahafo Region",
    "cleaning services Savannah Region",
    "cleaning services North East Region",
    "cleaning services Oti Region",
    "cleaning services Western North Region"
  ],

  // Industry-Specific Keywords
  industryKeywords: [
    "environmental services Ghana",
    "cleaning and maintenance",
    "sanitation services",
    "hygiene services Ghana",
    "cleaning solutions Ghana",
    "professional janitorial",
    "cleaning equipment Ghana",
    "eco-friendly cleaning",
    "green cleaning services",
    "sustainable cleaning Ghana",
    "cleaning chemicals Ghana",
    "cleaning supplies Ghana",
    "cleaning technology",
    "cleaning innovation Ghana",
    "cleaning standards Ghana",
    "Ghana Standards Authority cleaning",
    "certified cleaning services",
    "licensed cleaning company",
    "insured cleaning services",
    "bonded cleaning company"
  ],

  // Business Keywords
  businessKeywords: [
    "cleaning business Ghana",
    "cleaning contractor",
    "cleaning service provider",
    "cleaning company near me",
    "reliable cleaning services",
    "trusted cleaning company",
    "professional cleaning team",
    "experienced cleaning staff",
    "certified cleaning professionals",
    "licensed cleaning contractor",
    "insured cleaning services",
    "bonded cleaning company",
    "reputable cleaning services",
    "quality cleaning company",
    "affordable cleaning services",
    "competitive cleaning rates",
    "free cleaning quote",
    "cleaning consultation",
    "cleaning assessment",
    "cleaning estimate Ghana"
  ],

  // Long-tail Keywords
  longTailKeywords: [
    "best cleaning services in Accra Ghana",
    "professional house cleaning services near me",
    "reliable office cleaning company Ghana",
    "affordable industrial cleaning services Accra",
    "certified pest control services Ghana",
    "eco-friendly cleaning solutions Ghana",
    "post construction cleaning services Accra",
    "facilities management services Ghana",
    "waste management solutions Ghana",
    "landscape design and maintenance Ghana",
    "24/7 cleaning services Ghana",
    "emergency cleaning services Accra",
    "scheduled cleaning maintenance Ghana",
    "deep cleaning services Ghana",
    "carpet cleaning services Accra",
    "upholstery cleaning Ghana",
    "floor polishing services Ghana",
    "window cleaning services Accra",
    "kitchen deep cleaning Ghana",
    "bathroom cleaning services Ghana"
  ],

  // Meta Descriptions
  metaDescriptions: {
    home: "Your trusted cleaning and environmental management partner in Ghana since 2000. Premium janitorial, pest control, estate management, and landscaping services across all 16 regions. Call 0244369985 for free quote.",
    about: "Learn about Cleaning Dynamics Ltd - Ghana's leading cleaning and environmental services provider. Over 20 years of experience serving homes, offices, and industries across all 16 regions of Ghana.",
    team: "Meet the experienced management team at Cleaning Dynamics Ltd. Our certified professionals drive excellence in cleaning, pest control, and environmental management services across Ghana.",
    contact: "Contact Cleaning Dynamics Ltd for premium cleaning services in Ghana. Get free consultation and quote for domestic, industrial, pest control, and environmental management services. Call 0244369985."
  },

  // Page Titles
  pageTitles: {
    home: "CDL - Home",
    about: "CDL - About Us", 
    team: "CDL - Our Team",
    contact: "CDL - Contact Us"
  },

  // Open Graph Data
  openGraph: {
    title: "Cleaning Dynamics Ltd - Professional Cleaning Services Ghana",
    description: "Ghana's trusted cleaning and environmental management partner since 2000. Premium janitorial, pest control, and landscaping services across all 16 regions.",
    type: "website",
    locale: "en_US",
    siteName: "Cleaning Dynamics Ltd"
  },

  // Twitter Card Data
  twitterCard: {
    cardType: "summary_large_image",
    title: "Cleaning Dynamics Ltd - Professional Cleaning Services Ghana",
    description: "Your trusted cleaning and environmental management partner in Ghana since 2000.",
    creator: "@cleaningdynamics"
  }
};

// Helper function to generate keyword-rich descriptions
export function generateKeywordRichDescription(page: keyof typeof seoConfig.metaDescriptions, additionalKeywords: string[] = []): string {
  const baseDescription = seoConfig.metaDescriptions[page];
  const relevantKeywords = [
    ...seoConfig.primaryKeywords.slice(0, 3),
    ...additionalKeywords.slice(0, 2)
  ];
  
  return `${baseDescription} ${relevantKeywords.join(', ')}.`;
}

// Helper function to get all keywords for a specific service
export function getServiceKeywords(service: keyof typeof seoConfig.serviceKeywords): string[] {
  return seoConfig.serviceKeywords[service];
}

// Helper function to get location-specific keywords
export function getLocationKeywords(region?: string): string[] {
  if (region) {
    return seoConfig.locationKeywords.filter(keyword => 
      keyword.toLowerCase().includes(region.toLowerCase())
    );
  }
  return seoConfig.locationKeywords;
} 