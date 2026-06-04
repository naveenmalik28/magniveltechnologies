import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "Real Estate Software Solutions | Magnivel Technologies",
  description: "Magnivel Technologies builds custom real estate software. Property listing portals, broker CRM dashboards, interactive maps, and lead management databases.",
  keywords: ["real estate software", "property portal developer", "broker crm system", "interactive property map", "real estate website builder"],
  alternates: {
    canonical: "https://magnivel.com/software-for-real-estate",
  },
};

const benefits = [
  {
    title: "Accelerated Lead Catching",
    desc: "We build intuitive query filters, image carousels, and WhatsApp contact buttons to maximize broker lead counts.",
    icon: "target",
  },
  {
    title: "Centralized Listing Hub",
    desc: "Brokers manage property categories, update pricing, upload images, and track listings in one dashboard.",
    icon: "layers",
  },
  {
    title: "Interactive Maps Integration",
    desc: "Plot property pins dynamically on maps (Google Maps/Mapbox) to show neighborhood listings.",
    icon: "zap",
  },
];

const features = [
  { title: "Dynamic Property Filters", desc: "Enable users to search by price range, bedroom counts, location tags, and amenities lists." },
  { title: "Broker CRM Panels", desc: "Track client viewing schedules, store contact details, assign leads, and monitor sales metrics." },
  { title: "Interactive Listing Map", desc: "Plot listings dynamically using geographic coordinates with popup card summaries." },
  { title: "Automated PDF Pamphlets", desc: "Allows agents to download clean property brochures containing description text and photos automatically." },
  { title: "Online Booking Calendar", desc: "Schedule physical site visits, send email reminders, and assign agents to tours." },
  { title: "Dynamic SEO Headers", desc: "Generate custom meta tags and product schemas automatically for every property listing." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Audit property listing parameters, broker workflows, map API needs, and branding goals." },
  { step: 2, title: "Database & UI Design", desc: "Model database relationships (Properties, Agents, Contacts) and draft layout screens." },
  { step: 3, title: "Core Portal Development", desc: "Set up the backend, write property listing models, and establish search APIs." },
  { step: 4, title: "Map & CRM Connections", desc: "Integrate Mapbox/Google Maps, configure SMS reminders, and build CRM charts." },
  { step: 5, title: "QA Testing & Launch", desc: "Verify file uploads compression, test mobile responsiveness, publish on cloud, and launch." },
];

const faqs = [
  {
    question: "Can we sync property listings automatically with external listing sites?",
    answer: "Yes, we build XML/JSON feed integrations to pull listings from external real estate boards or push listings to third-party databases automatically.",
  },
  {
    question: "Do you support virtual tour video embeds?",
    answer: "Yes, we support YouTube embeds, Vimeo links, 3D Matterport embeds, and custom video uploads directly inside property details templates.",
  },
  {
    question: "Are images compressed automatically for fast loading?",
    answer: "Yes, we integrate cloud compression pipelines (using Next.js Image or Cloudinary) to shrink large property photos without losing visual clarity.",
  },
];

export default function RealEstateSoftwarePage() {
  return (
    <ServicePageTemplate
      title="Custom Real Estate Software & Broker CRM Portals"
      eyebrow="Industry Solutions"
      description="List properties, track leads, map listing locations, and coordinate broker schedules with a premium custom real estate platform."
      overview="Standing out in the real estate market requires visual elegance and high catalog speeds. Magnivel Technologies builds optimized property listing sites, agent dashboards, and database directories designed to convert page visits into inquiries."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
