import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Restaurant Software Solutions | Magnivel Technologies",
  description: "Magnivel Technologies builds custom restaurant management software. Online ordering systems, digital QR menus, table booking portals, and POS integrations.",
  keywords: ["restaurant management software", "online food ordering system", "digital qr menu builder", "table reservation portal", "pos integration developer"],
  alternates: {
    canonical: "https://magnivel.com/software-for-restaurants",
  },
};

const benefits = [
  {
    title: "Commission-Free Orders",
    desc: "Own your customer database and orders pipeline, eliminating expensive third-party food portal commissions.",
    icon: "zap",
  },
  {
    title: "Dynamic Menu Management",
    desc: "Update items, pricing variants, out-of-stock tags, and daily specials in real-time via an admin dashboard.",
    icon: "layers",
  },
  {
    title: "Faster Table Reservations",
    desc: "Interactive calendars allow patrons to book tables and select time slots, reducing booking errors.",
    icon: "clock",
  },
];

const features = [
  { title: "Online Ordering System", desc: "Digital cart drawer, delivery zone checkout, and secure gateway integrations." },
  { title: "Digital QR Menus", desc: "Fast-loading menus optimized for QR code scans at dining tables." },
  { title: "Table Reservation Grid", desc: "Table maps layouts, booking forms, status tags, and SMS confirmation notifications." },
  { title: "Admin Order Dashboard", desc: "Manage kitchen order queues, assign delivery riders, and print receipt formats." },
  { title: "Dynamic Promo Coupons", desc: "Configure discount codes, happy hour thresholds, and free delivery metrics." },
  { title: "POS Integrations Support", desc: "Connect web menus directly to your local billing systems or printers via custom APIs." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Audit menu items, pricing rules, delivery zones, and payment gates preferences." },
  { step: 2, title: "Database & UI Design", desc: "Model relational database tables (Menu, Orders, Bookings) and wireframe dashboards." },
  { step: 3, title: "Backend Ordering Code", desc: "Code secure cart actions, checkout handlers, and database notification systems." },
  { step: 4, title: "Payment & QR Setup", desc: "Connect local payment cards UPIs, setup QR scanners links, and test dashboard charts." },
  { step: 5, title: "Kitchen QA & Launch", desc: "Run order throughput audits, check mobile layouts, publish, and support." },
];

const faqs = [
  {
    question: "Do you charge transaction fees on food orders?",
    answer: "No, we build custom commission-free platforms. You receive all order funds directly to your merchant accounts (like Stripe or Razorpay) with zero middleman cuts.",
  },
  {
    question: "Can customers place orders without downloading an app?",
    answer: "Yes, our web-ordering portals are responsive and fast. Customers simply scan the QR code to open the site, select items, and checkout in their browser.",
  },
  {
    question: "Do you integrate with thermal receipt printers?",
    answer: "Yes, we write custom webhook integrations to output order details to CloudPRNT or standard thermal receipt printer APIs automatically.",
  },
];

export default function RestaurantsSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom Restaurant Ordering & QR Menu Software"
      eyebrow="Industry Solutions"
      description="Launch commission-free online food ordering, table reservations, and digital QR menus with a custom restaurant management platform."
      overview="Third-party delivery portals take up to 30% of order totals. Magnivel Technologies designs and builds bespoke online food ordering platforms and table reservation databases that help restaurants increase margins and capture customer data directly."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
