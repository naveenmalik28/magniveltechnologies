import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
  title: {
    default: "Magnivel Technologies | AI-Powered Websites, Apps & SaaS Development",
    template: "%s | Magnivel Technologies",
  },
  description:
    "Magnivel Technologies builds AI-powered websites, web applications, mobile apps, SaaS platforms, and custom software solutions that drive growth and innovation for startups and enterprises.",
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
  openGraph: {
    title: "Magnivel Technologies | AI-Powered Digital Products",
    description:
      "We help startups, businesses and enterprises build scalable digital products that drive growth and innovation.",
    url: "https://magnivel.com",
    siteName: "Magnivel Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnivel Technologies",
    description: "Building AI-Powered Websites, Applications & SaaS Platforms",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Magnivel Technologies",
  url: "https://magnivel.com",
  email: "contact@magnivel.com",
  description:
    "Software development company specializing in AI-powered websites, web applications, mobile apps, SaaS platforms, and custom software solutions.",
  foundingDate: "2021",
  areaServed: "Worldwide",
  serviceType: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Development",
    "AI Solutions",
    "Custom Software Development",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
