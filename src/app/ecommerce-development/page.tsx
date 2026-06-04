import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Ecommerce Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides high-performance e-commerce development services. Secure checkout gateways, dynamic product catalogs, and inventory management.",
  keywords: ["ecommerce development services", "online store builder", "custom ecommerce platform", "payment gateway developer", "Shopify headless developer"],
  alternates: {
    canonical: "https://magnivel.com/ecommerce-development",
  },
};

const benefits = [
  {
    title: "Blazing Catalog Speeds",
    desc: "We use static generation (SSG) and incremental regeneration (ISR) to load large catalogs and products instantly.",
    icon: "zap",
  },
  {
    title: "Secure Payment Gateways",
    desc: "Seamlessly integrate PCI-compliant systems like Stripe, Razorpay, and PayPal for frictionless checkout flows.",
    icon: "shield",
  },
  {
    title: "Conversion-Rate Boosts",
    desc: "Optimized touch targets, streamlined checkouts, smart search bars, and clear layout sections to maximize sales.",
    icon: "target",
  },
];

const features = [
  { title: "Dynamic Product Options", desc: "Configure size variants, color variants, pricing grids, and live inventory stock counters easily." },
  { title: "Granular Cart & Checkout", desc: "Guest checkout support, persistent shopping carts, discount coupons, and shipping tax calculations." },
  { title: "Merchant Dashboard", desc: "Manage product listings, review customer orders, export CSV sheets, and track monthly sales graphs." },
  { title: "Frictionless Search & Filters", desc: "Build instant search query bars, brand filters, pricing sliders, and tag categories tabs." },
  { title: "E-Commerce Schema Markup", desc: "Inject Product, Offer, and Review schemas so Google displays ratings and prices in search search listings." },
  { title: "Auto Invoice & Emails", desc: "Trigger HTML receipt emails, order confirmation alerts, and delivery update notifications automatically." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Clarify SKU sizes, variants requirements, payment preferences, shipping workflows, and SEO goals." },
  { step: 2, title: "UX Layout Blueprint", desc: "Design category paths, product details layouts, cart drawers, and secure checkout steps." },
  { step: 3, title: "Catalog & DB Coding", desc: "Structure relational databases, set up variations logic, and integrate the shopping cart." },
  { step: 4, title: "Payment Integration", desc: "Connect card payment endpoints, configure tax calculators, and set up shipping webhooks." },
  { step: 5, title: "Speed Tuneup & Launch", desc: "Run load audits, check security, verify SSL setups, publish sitemaps, and launch." },
];

const faqs = [
  {
    question: "Do you build custom stores or use Shopify/WooCommerce?",
    answer: "We build both. We build custom Next.js stores (headless e-commerce) for fast load times, and integrate or build standard Shopify/WooCommerce architectures depending on catalog sizes.",
  },
  {
    question: "Are payment pages secure?",
    answer: "Yes, we integrate tokenized checkout widgets where credit card data never touches your servers, ensuring PCI-DSS compliance.",
  },
  {
    question: "Can I manage inventory stock levels in the dashboard?",
    answer: "Absolutely. We build admin inventory dashboards where you can adjust stock counts, set low-stock thresholds, and receive email alerts when stock runs low.",
  },
];

export default function EcommerceServicesPage() {
  return (
    <ServicePageTemplate
      title="High-Performance E-Commerce Development Services"
      eyebrow="E-Commerce Engineering"
      description="Build an online store that converts. We build fast, responsive, and secure e-commerce platforms with dynamic catalogs and checkout systems."
      overview="Slow loading product pages kill e-commerce sales. Magnivel Technologies builds statically optimized product grids, responsive cart drawers, and secure checkout pages. We connect payment gateways, inventory databases, and CRM tools to automate order processing and increase your conversion rate."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
