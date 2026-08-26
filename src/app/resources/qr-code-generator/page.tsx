import { Metadata } from "next";
import { QrGeneratorClient } from "./qr-generator-client";

export const metadata: Metadata = {
  title: "Custom QR Code Generator | Magnivel Technologies",
  description:
    "Generate dynamic, high-resolution QR codes with customizable brand colors for websites, products, and links.",
  keywords: [
    "QR Code Generator",
    "Custom Color QR Codes",
    "Dynamic QR Code Tool",
    "Free QR Builder",
  ],
  alternates: {
    canonical: "https://magnivel.com/resources/qr-code-generator",
  },
  openGraph: {
    title: "Custom QR Code Generator | Magnivel Technologies",
    description:
      "Generate dynamic, high-resolution QR codes with customizable brand colors for websites, products, and links.",
    url: "https://magnivel.com/resources/qr-code-generator",
    type: "website",
  },
};

export default function QRCodeGenerator() {
  return <QrGeneratorClient />;
}
