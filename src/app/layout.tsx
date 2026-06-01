import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://magnivel.com"),
  title: {
    default: "Magnivel Technologies | Websites, Apps, SaaS and AI Solutions",
    template: "%s | Magnivel Technologies",
  },
  description:
    "Magnivel Technologies builds conversion-focused websites, web apps, mobile apps, SaaS products, AI solutions and custom software.",
  keywords: [
    "Magnivel Technologies",
    "website development",
    "SaaS development",
    "AI solutions",
    "custom software development",
  ],
  openGraph: {
    title: "Magnivel Technologies",
    description: "Premium software agency for websites, apps, SaaS and AI solutions.",
    url: "https://magnivel.com",
    siteName: "Magnivel Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
