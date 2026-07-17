import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/premium/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://magnivel.com"),
  title: "Magnivel Technologies",
  description:
    "Web Development, Mobile Apps, AI Solutions and Custom Software Development",
  keywords: [
    "Magnivel Technologies",
    "software development company",
    "website development",
    "web application development",
    "mobile app development",
    "SaaS development",
    "AI solutions",
    "custom software development",
    "Next.js development",
    "React development",
    "full stack development",
    "digital product agency",
  ],
  authors: [{ name: "Magnivel Technologies" }],
  creator: "Magnivel Technologies",
  publisher: "Magnivel Technologies",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Magnivel Technologies | AI-Powered Digital Products",
    description:
      "We help startups, businesses and enterprises build scalable digital products that drive growth and innovation.",
    url: "https://magnivel.com",
    siteName: "Magnivel Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://magnivel.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Magnivel Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnivel Technologies",
    description: "Building AI-Powered Websites, Applications & SaaS Platforms",
    site: "@magnivelinc",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code
    google: "24bLWaNZf7xr7kcMLhAajsTKXtq5RGVr_71V-CUAV3Q",
  },
  alternates: {
    canonical: "https://magnivel.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://magnivel.com/#organization",
  name: "Magnivel Technologies",
  url: "https://magnivel.com",
  email: "contact@magnivel.com",
  description:
    "Software development company specializing in AI-powered websites, web applications, mobile apps, SaaS platforms, and custom software solutions.",
  foundingDate: "2021",
  areaServed: "Worldwide",
  knowsAbout: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Development",
    "AI Solutions",
    "Custom Software Development",
  ],
  serviceType: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Development",
    "AI Solutions",
    "Custom Software Development",
  ],
  logo: {
    "@type": "ImageObject",
    url: "https://magnivel.com/logo.jpg",
    width: 200,
    height: 200,
  },
  sameAs: [
    "https://twitter.com/magnivelinc",
    "https://www.linkedin.com/company/magnivel-technologies",
    "https://www.instagram.com/magniveltechnologies",
    "https://github.com/magnivel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Web Vitals Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.vitalsUrl = "https://api.web-vitals.dev/v1/report";
              
              function getConnectionSpeed() {
                return 'connection' in navigator &&
                  navigator['connection'] &&
                  'effectiveType' in navigator['connection']
                  ? navigator['connection']['effectiveType']
                  : '';
              }
              
              function sendToAnalytics(metric) {
                const analyticsData = {
                  dsn: "https://YOUR_ANALYTICS_KEY",
                  id: "YOUR_SITE_ID",
                  name: metric.name,
                  value: metric.value.toString(),
                  delta: metric.delta.toString(),
                  rating: metric.rating,
                  tag: metric.id,
                  speed: getConnectionSpeed(),
                };
                
                // Send to your analytics service
                if (window.location.hostname !== 'localhost') {
                  navigator.sendBeacon(window.vitalsUrl, JSON.stringify(analyticsData));
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-secondary/30 selection:text-white">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
