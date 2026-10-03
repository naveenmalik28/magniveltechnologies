import type { Metadata } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/premium/custom-cursor";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.magnivel.com"),
  title: {
    default: "Magnivel Technologies | Custom Software, Web Apps & AI Development",
    template: "%s | Magnivel Technologies",
  },
  description:
    "Magnivel Technologies builds websites, web apps, mobile apps, SaaS platforms, and AI systems for startups and growing businesses worldwide.",
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
    title: "Magnivel Technologies | Custom Software, Web Apps & AI Development",
    description:
      "We build websites, web apps, mobile apps, SaaS platforms, and AI systems for startups and growing businesses.",
    url: "https://www.magnivel.com",
    siteName: "Magnivel Technologies",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.magnivel.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Magnivel Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnivel Technologies | Custom Software & AI Development",
    description: "Websites, web apps, mobile apps, SaaS platforms, and AI systems for growing businesses.",
    site: "@magnivelinc",
    images: ["https://www.magnivel.com/logo.jpg"],
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
    google: "24bLWaNZf7xr7kcMLhAajsTKXtq5RGVr_71V-CUAV3Q",
  },
  alternates: {
    canonical: "https://www.magnivel.com",
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.magnivel.com/#organization",
      name: "Magnivel Technologies",
      url: "https://www.magnivel.com",
      email: "contact@magnivel.com",
      description:
        "Software development company building websites, web applications, mobile apps, SaaS platforms, and custom AI systems for businesses worldwide.",
      foundingDate: "2021",
      areaServed: "Worldwide",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, #26-27, Pocket 11 Rohini, Sector 24",
        addressLocality: "Northwest Delhi",
        addressRegion: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
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
        "@id": "https://www.magnivel.com/#logo",
        url: "https://www.magnivel.com/logo.jpg",
        caption: "Magnivel Technologies Logo",
      },
      image: {
        "@id": "https://www.magnivel.com/#logo",
      },
      sameAs: [
        "https://twitter.com/magnivelinc",
        "https://www.linkedin.com/company/magnivel-technologies",
        "https://www.instagram.com/magniveltechnologies",
        "https://github.com/magnivel",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.magnivel.com/#website",
      url: "https://www.magnivel.com",
      name: "Magnivel Technologies",
      publisher: {
        "@id": "https://www.magnivel.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.magnivel.com/#service",
      name: "Magnivel Technologies",
      url: "https://www.magnivel.com",
      parentOrganization: {
        "@id": "https://www.magnivel.com/#organization",
      },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4th Floor, #26-27, Pocket 11 Rohini, Sector 24",
        addressLocality: "Northwest Delhi",
        addressRegion: "Delhi",
        postalCode: "110085",
        addressCountry: "IN",
      },
    },
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
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/15 selection:text-heading">
        <CustomCursor />
        <WebVitalsReporter />
        {children}
      </body>
    </html>
  );
}
