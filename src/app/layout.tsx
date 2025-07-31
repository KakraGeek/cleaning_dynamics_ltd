import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cleaning Dynamics Ltd",
  description: "Your trusted cleaning and environmental management partner in Ghana since 2000. Premium janitorial, pest control, estate management, and landscaping services across all 16 regions.",
  keywords: "cleaning services Ghana, professional cleaning Accra, domestic cleaning Ghana, industrial cleaning services, office cleaning Accra, house cleaning Ghana, commercial cleaning services, janitorial services Ghana, cleaning company Accra, environmental management Ghana, pest control Ghana, fumigation services, facilities management Ghana, waste management Ghana, landscaping Ghana",
  authors: [{ name: "Cleaning Dynamics Ltd" }],
  creator: "Cleaning Dynamics Ltd",
  publisher: "Cleaning Dynamics Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cleaningdynamics.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cleaningdynamics.com',
    title: 'Cleaning Dynamics Ltd - Professional Cleaning Services Ghana',
    description: "Ghana's trusted cleaning and environmental management partner since 2000. Premium janitorial, pest control, and landscaping services across all 16 regions.",
    siteName: 'Cleaning Dynamics Ltd',
    images: [
      {
        url: '/Images/clean_dyn_logo2.jpg',
        width: 1200,
        height: 630,
        alt: 'Cleaning Dynamics Ltd - Professional Cleaning Services Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Dynamics Ltd - Professional Cleaning Services Ghana',
    description: "Your trusted cleaning and environmental management partner in Ghana since 2000.",
    images: ['/Images/clean_dyn_logo2.jpg'],
    creator: '@cleaningdynamics',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
