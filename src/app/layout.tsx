import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteDescription, siteName, siteTagline, siteUrl } from "@/data/siteConfig";
import "./globals.css";

const title = `${siteName} | ${siteTagline}`;
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
  keywords: [
    "human augmentation",
    "neural interface",
    "wearable robotics",
    "exoskeleton",
    "EEG EMG wearable",
    "NeuroOS",
    "brain computer interface",
    "industrial safety technology",
    "South Africa deep tech",
  ],
  creator: "Civitas BioTech",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050914",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  email: "info@civitasbiotech.com",
  areaServed: {
    "@type": "Country",
    name: "South Africa",
  },
  knowsAbout: [
    "Neural interfaces",
    "Wearable robotics",
    "Human-robot control",
    "AI signal processing",
    "Industrial safety technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
