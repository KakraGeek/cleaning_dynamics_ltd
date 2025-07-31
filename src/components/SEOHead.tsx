import Head from 'next/head';
import { seoConfig } from '../lib/seo-config';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export default function SEOHead({
  title = seoConfig.pageTitles.home,
  description = seoConfig.metaDescriptions.home,
  keywords = seoConfig.primaryKeywords,
  canonicalUrl,
  ogImage = '/Images/clean_dyn_logo2.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false,
  noFollow = false
}: SEOHeadProps) {
  
  // Generate structured data for the business
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cleaning Dynamics Ltd",
    "description": "Professional cleaning and environmental management services in Ghana since 2000",
    "url": "https://cleaningdynamics.com",
    "telephone": "+233244369985",
    "email": "cleaning_dynamics@yahoo.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ghana",
      "addressRegion": "Greater Accra",
      "addressLocality": "Accra"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.5600",
      "longitude": "-0.2057"
    },
    "openingHours": "Mo-Su 06:00-22:00",
    "priceRange": "$$",
    "paymentAccepted": "Cash, Bank Transfer, Mobile Money",
    "currenciesAccepted": "GHS, USD",
    "areaServed": [
      "Ghana",
      "Accra",
      "Kumasi", 
      "Tamale",
      "Cape Coast",
      "Tema",
      "Sekondi-Takoradi",
      "Sunyani",
      "Ho",
      "Koforidua",
      "Wa",
      "Bolgatanga"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Ghana"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic & Industrial Cleaning",
            "description": "Professional cleaning services for homes, offices, and industrial facilities"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Post-Construction Cleaning",
            "description": "Specialized cleaning services for newly built or renovated properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Fumigation & Pest Control",
            "description": "Safe pest control and fumigation services approved by Ghana Standards Authority"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facilities Management", 
            "description": "Complete facility management including cleaning, security, and maintenance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solid & Liquid Waste Management",
            "description": "Environmentally responsible waste collection and disposal services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscape Design & Maintenance",
            "description": "Professional landscaping and garden maintenance services"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "foundingDate": "2000",
    "numberOfEmployees": "50-100",
    "slogan": "Cleanliness is next to godliness",
    "knowsAbout": [
      "Professional Cleaning",
      "Pest Control",
      "Environmental Management", 
      "Facilities Management",
      "Waste Management",
      "Landscaping"
    ],
    "award": [
      "Ghana Standards Authority Certified",
      "20+ Years of Excellence",
      "Serving All 16 Regions of Ghana"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Cleaning Dynamics Ltd" />
      <meta name="robots" content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://cleaningdynamics.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Cleaning Dynamics Ltd - Professional Cleaning Services Ghana" />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seoConfig.twitterCard.cardType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={seoConfig.twitterCard.creator} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#8BC34A" />
      <meta name="msapplication-TileColor" content="#8BC34A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Cleaning Dynamics Ltd" />
      
      {/* Language and Region */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="GH" />
      <meta name="geo.country" content="Ghana" />
      <meta name="geo.placename" content="Accra" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Accra, Ghana" />
      <meta name="business:contact_data:country_name" content="Ghana" />
      <meta name="business:contact_data:phone_number" content="+233244369985" />
      <meta name="business:contact_data:email" content="cleaning_dynamics@yahoo.com" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(finalStructuredData)
        }}
      />
      
      {/* Additional Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cleaning Dynamics Ltd",
            "url": "https://cleaningdynamics.com",
            "logo": "https://cleaningdynamics.com/Images/clean_dyn_logo2.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+233244369985",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "sameAs": [
              "https://facebook.com/cleaningdynamics",
              "https://twitter.com/cleaningdynamics",
              "https://linkedin.com/company/cleaning-dynamics-ltd"
            ]
          })
        }}
      />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
} 