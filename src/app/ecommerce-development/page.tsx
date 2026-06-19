import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "E-commerce Development Services | Magnivel Technologies",
  description: "Magnivel Technologies provides high-performance custom e-commerce development services, secure payment checkouts, dynamic inventory dashboards, and headless commerce setups.",
  keywords: ["ecommerce development", "online store builder", "custom ecommerce", "payment gateway developer", "headless commerce", "Next.js ecommerce"],
  alternates: {
    canonical: "https://magnivel.com/ecommerce-development",
  },
};

const benefits = [
  {
    title: "Optimized Catalog Speeds & Page Performance",
    desc: "A slow loading online store will directly hurt your conversion rates. We build statically generated e-commerce storefronts using Next.js with incremental static regeneration (ISR). This architecture pre-renders product catalog pages into static HTML files that load instantly. When you adjust prices or stock details, the database updates the static pages in the background, ensuring your store is fast, SEO-friendly, and ready for high traffic volumes.",
    icon: "zap",
  },
  {
    title: "Secure and Compliant Payment Checkouts",
    desc: "We integrate industry-standard payment checkouts to process customer cards securely. By utilizing tokenized checkout fields from providers like Stripe, Razorpay, or PayPal, sensitive card data is sent directly to the payment processor without passing through your servers. This setup guarantees complete PCI-DSS compliance, reduces data security risks, and provides customers with a safe checkout experience.",
    icon: "shield",
  },
  {
    title: "Centralized Product and Order Dashboards",
    desc: "We build intuitive admin dashboards allowing your operations team to manage catalog listings, track inventory levels, and process orders. You can configure variant rules (like size or color), track stock counts, and generate shipping slips. Our dashboards can connect directly to your external warehouse ERP or accounting software, keeping your inventory numbers accurate across channels.",
    icon: "layers",
  },
];

const features = [
  {
    title: "Dynamic Product Variants",
    desc: "Set up multiple product variants (sizes, colors, materials) with unique SKUs, pricing structures, and stock counts linked to your product catalog.",
  },
  {
    title: "Secure Checkout & Payment Tokenization",
    desc: "PCI-compliant checkout forms using payment gateways like Stripe, allowing users to save payment profiles safely for faster future checkouts.",
  },
  {
    title: "Real-Time Inventory Alerts",
    desc: "Automated stock tracking that warns your store managers when product counts drop below specific thresholds, preventing overselling.",
  },
  {
    title: "Interactive Order Management",
    desc: "Order processing dashboards where admin staff can review purchase details, update shipping statuses, print receipts, and issue customer refunds.",
  },
  {
    title: "Structured Schema for Rich Snippets",
    desc: "Injection of JSON-LD Product, Offer, and Review schemas to ensure Google displays prices, stock availability, and ratings directly in search listings.",
  },
  {
    title: "Automated Receipt & Status Emails",
    desc: "System emails triggered by database changes to instantly send order confirmations, receipts, invoice PDFs, and tracking links to customers.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirement Analysis",
    desc: "We review your product catalog volume, variation rules, payment gateways, and shipping workflows to plan the store architecture."
  },
  {
    step: 2,
    title: "Planning & Design",
    desc: "We sketch responsive catalog layouts, plan cart drawers, design checkout steps, and map database connections."
  },
  {
    step: 3,
    title: "Development",
    desc: "We build database tables, code shopping cart utilities, and integrate payment APIs in agile development sprints."
  },
  {
    step: 4,
    title: "Testing & QA",
    desc: "We run purchase testing scenarios, verify checkout security, test variant updates, and check Core Web Vitals speeds."
  },
  {
    step: 5,
    title: "Deployment",
    desc: "We configure secure hosting, set up production databases, connect domains, and activate payment processing links."
  },
  {
    step: 6,
    title: "Ongoing Support",
    desc: "We handle database performance tuning, update checkout keys, add catalog fields, and manage server scaling during peak sales."
  }
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma ORM",
  "Stripe API",
  "Redis Caching",
  "Vercel CDN",
  "Tailwind CSS",
];

const faqs = [
  {
    question: "Do you build custom stores or use Shopify/WooCommerce?",
    answer: "We build both depending on your catalog size and operational goals. For fast loading times, customized checkout flows, and search rankings, we build custom Next.js storefronts connected to a database (headless commerce). For merchants who want a standard admin setup, we develop custom Shopify templates or headless Shopify implementations, giving you the best of fast page performance and Shopify's administrative dashboard tools.",
  },
  {
    question: "How do you ensure customer payment details are kept secure?",
    answer: "We configure tokenized checkout processes where sensitive credit card data is collected directly by the payment gateway (like Stripe) using secure iframe overlays. Card numbers never touch your application server or database. This meets strict PCI-DSS security compliance rules and protects your business from data storage liability.",
  },
  {
    question: "Can our store connect with existing accounting and shipping tools?",
    answer: "Yes. We code backend integrations that connect your order database with shipping tools (like Shiprocket or FedEx) and accounting services (like QuickBooks). When an order status changes to 'paid' in your database, our server automatically triggers shipping label requests and records tax details in your accounting dashboard.",
  },
];

export default function EcommerceDevPage() {
  return (
    <ServicePageTemplate
      title="E-commerce Development Services"
      eyebrow="E-Commerce Engineering"
      description="Build an online store that converts. We build fast, secure custom e-commerce platforms with dynamic product catalogs and streamlined checkouts."
      overview={`What Do We Do?
Magnivel Technologies develops custom e-commerce storefronts, checkout flows, catalog databases, and order management consoles. We build high-performance shopping experiences using Next.js, React, and Node.js. We handle catalog filtering, persistent shopping carts, and secure payment processing.

Who Do We Help?
We work with retail brands, B2B wholesalers, and digital merchants who want to launch a custom online store. Our clients have outgrown basic web builders, struggle with slow catalog loads, and want to replace templates with a custom platform designed to increase checkout conversion rates.

How Do We Help?
We build statically optimized category and product pages that load immediately. We design shopping cart flows that work smoothly on mobile screens. We connect payment gateways and set up webhook listeners that automate inventory tracking, email receipts, and customer shipping slip generation.

Why Should Clients Trust Us?
We prioritize site speed, conversion usability, and code security. We provide clean, transparent development milestones and guarantee you own 100% of the custom codebase. We verify checkout security, configure SSL systems, and offer long-term support to help your digital commerce scale.`}
      benefits={benefits}
      features={features}
      process={process}
      techStack={techStack}
      faqs={faqs}
    />
  );
}
