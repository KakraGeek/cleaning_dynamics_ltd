import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CDL - Contact Us",
  description: "Contact Cleaning Dynamics Ltd for premium cleaning services in Ghana. Get free consultation and quote for domestic, industrial, pest control, and environmental management services. Call 0244369985.",
  keywords: "contact cleaning dynamics, cleaning services contact Ghana, cleaning quote Ghana, cleaning consultation Accra, cleaning estimate Ghana, cleaning services phone Ghana, cleaning company contact, cleaning services email Ghana",
  openGraph: {
    title: "CDL - Contact Us",
    description: "Contact Cleaning Dynamics Ltd for premium cleaning services in Ghana. Get free consultation and quote for domestic, industrial, pest control, and environmental management services. Call 0244369985.",
    type: "website",
    locale: "en_US",
    siteName: "Cleaning Dynamics Ltd",
    images: [
      {
        url: "/Images/clean_dyn_logo2.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Cleaning Dynamics Ltd - Professional Cleaning Services Ghana"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CDL - Contact Us",
    description: "Contact Cleaning Dynamics Ltd for premium cleaning services in Ghana.",
    images: ["/Images/clean_dyn_logo2.jpg"]
  },
  alternates: {
    canonical: "https://cleaningdynamics.com/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 