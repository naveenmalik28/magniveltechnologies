export interface WebsiteTemplate {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  priceUsd: number;
  priceInr: number;
  liveDemoUrl: string;
  badges: string[];
  deliveryDays: string;
  shortDesc: string;
  overview: string;
  weReplace: string[];
  features: string[];
  whatsIncluded: string[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
  };
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  count: number;
  isComingSoon?: boolean;
}

export const CATEGORIES: Category[] = [
  { name: "All Websites", slug: "all", icon: "layers", count: 2 },
  { name: "Restaurant", slug: "restaurant", icon: "clock", count: 1 },
  { name: "E-commerce & Multi Vendor", slug: "ecommerce", icon: "smartphone", count: 1 },
  { name: "Hospital & Medical", slug: "medical", icon: "shield", count: 0, isComingSoon: true },
  { name: "School & University", slug: "education", icon: "book", count: 0, isComingSoon: true },
  { name: "Real Estate & Architecture", slug: "real-estate", icon: "map-pin", count: 0, isComingSoon: true },
  { name: "Hotel & Travel", slug: "travel", icon: "globe", count: 0, isComingSoon: true },
  { name: "Gym, Salon & Spa", slug: "wellness", icon: "zap", count: 0, isComingSoon: true },
  { name: "Corporate & Law Firm", slug: "corporate", icon: "server", count: 0, isComingSoon: true },
  { name: "SaaS Dashboard & CRM", slug: "saas", icon: "brain", count: 0, isComingSoon: true },
];

export const TEMPLATES: WebsiteTemplate[] = [
  {
    slug: "restaurant-website-template",
    title: "Professional Restaurant Website Template",
    category: "Restaurant Website",
    categorySlug: "restaurant",
    priceUsd: 899,
    priceInr: 69000,
    liveDemoUrl: "https://fish-at-the-rocks.vercel.app/",
    badges: ["Best Seller", "Premium Template", "Ready to Launch"],
    deliveryDays: "5–7",
    shortDesc: "Launch your restaurant, café, or fine dining business online with a modern, fast-loading, and conversion-focused web experience.",
    overview: "Launch your restaurant website with a modern, elegant, and conversion-focused design. This premium template is perfect for restaurants, cafés, hotels, food chains, bakeries, bars, cloud kitchens, and fine dining businesses.\n\nThis is a ready-made website that can be customized according to your business branding. We will handle all the setup, deployment, and content replacements, leaving you with a fully branded, highly performant web presence.",
    weReplace: [
      "Business Name",
      "Logo",
      "Brand Colors",
      "Images",
      "Menu & Pricing",
      "Contact Information",
      "Physical Address",
      "Social Media Links",
      "Business Content & Copy",
      "Gallery Photos",
      "Reservation Details"
    ],
    features: [
      "Modern Premium UI",
      "Fully Responsive (Mobile-First)",
      "SEO Optimized Structuring",
      "Fast Loading & High Performance",
      "Google Friendly Clean Code",
      "Interactive Contact Form",
      "Food Gallery Carousel",
      "Dynamic Food Menu",
      "About Page Structure",
      "Reservation Section",
      "Google Maps Integration",
      "Customer Testimonials",
      "Blog Ready Structure",
      "WhatsApp Chat Integration",
      "Social Media Integrations",
      "CMS Ready Setup",
      "Admin Panel Available (Optional)",
      "Google Analytics Integration",
      "Google Search Console Ready",
      "Google Business Profile Setup Ready"
    ],
    whatsIncluded: [
      "Complete Website Setup",
      "Brand Color Customization",
      "Logo Replacement & Resizing",
      "Full Content Replacement",
      "Next.js Image Optimization",
      "Contact Form Configuration",
      "Google Maps API Setup",
      "On-Page SEO Configuration",
      "Core Web Vitals Optimization",
      "1 Month Free Technical Support",
      "Vercel/Cloud Deployment Assistance"
    ],
    faqs: [
      {
        question: "Can you change the logo?",
        answer: "Yes, we will replace the default logo with your business logo and ensure it is properly scaled for mobile and desktop screens."
      },
      {
        question: "Can you change colors?",
        answer: "Yes, we will customize the CSS styling variables to match your restaurant's brand identity and primary color palette."
      },
      {
        question: "Can you change content?",
        answer: "Yes, we will completely replace all placeholder text, images, menus, pricing, contact details, and copy with your actual business content."
      },
      {
        question: "Can you add more pages?",
        answer: "Yes, we can expand the template by adding custom pages (e.g., catering, careers, history, specific food categories) as part of our customization requests."
      },
      {
        question: "Can you integrate online ordering?",
        answer: "Yes, we can integrate popular online food ordering systems, POS systems, or embed third-party delivery options (like Toast, UberEats, Zomato, Swiggy) into your site."
      },
      {
        question: "Can you connect payment gateways?",
        answer: "Yes, we can configure secure payment gateways (like Stripe, Razorpay, or PayPal) to allow advance reservation deposits or direct food purchases."
      },
      {
        question: "Can you add an admin panel?",
        answer: "Yes, we offer an optional Content Management System (CMS) or admin panel dashboard to let you easily update menus, prices, gallery images, and blog posts without touching code."
      },
      {
        question: "Can you redesign sections?",
        answer: "Yes, our engineering team can modify layout designs, rearrange sections, or construct new visual layouts according to your business needs."
      }
    ],
    seo: {
      title: "Restaurant Website Template for Sale | Premium Restaurant Website | Magnivel Technologies",
      description: "Buy a premium restaurant website template from Magnivel Technologies. Fully responsive, SEO optimized, mobile-friendly restaurant website with customization, branding, and fast delivery.",
      keywords: [
        "restaurant website template",
        "restaurant website for sale",
        "restaurant website development",
        "restaurant web design",
        "food website template",
        "restaurant website India",
        "restaurant website USA",
        "restaurant website with admin panel",
        "restaurant website responsive",
        "restaurant website SEO",
        "restaurant booking website",
        "restaurant landing page",
        "buy restaurant website",
        "restaurant website customization",
        "restaurant website developer",
        "Magnivel Technologies"
      ],
      canonicalUrl: "https://magnivel.com/ready-websites/restaurant-website-template"
    }
  },
  {
    slug: "dairy-brand-ecommerce-template",
    title: "Dairy & Organic Foods E-commerce Template",
    category: "E-commerce Website",
    categorySlug: "ecommerce",
    priceUsd: 1499,
    priceInr: 99999,
    liveDemoUrl: "https://namo-narayana.vercel.app/",
    badges: ["Premium Template", "E-commerce Ready", "Dairy & Organic"],
    deliveryDays: "5–7",
    shortDesc: "Launch a high-conversion online store for your dairy brand, organic farm, or fresh foods delivery business with secure checkout and payment integrations.",
    overview: "Launch your direct-to-consumer online store with a premium, secure, and modern design. Originally crafted for organic dairy brands, local milk operations, ghee/butter distribution, and fresh farm products, this robust e-commerce template is highly versatile and can be configured to sell any direct-to-consumer brand items.\n\nWe will customize the catalog with your logo and branding, upload your products (milk, paneer, cheese, butter, or other catalog products), configure shopping carts, and launch your e-commerce storefront in 5-7 business days.",
    weReplace: [
      "Business Name",
      "Logo & Brand Colors",
      "Product Catalog (dairy or any retail product categories)",
      "Descriptions, Custom Images, & Pricing",
      "Direct Checkout Payment Settings",
      "Delivery & Shipping Rates Setup",
      "Customer Cart Configurations",
      "Physical Address & Map Integration",
      "Contact Info & Support Forms",
      "Social Media Accounts Connection"
    ],
    features: [
      "Modern Premium Storefront",
      "Fully Responsive (Mobile-First Checkout)",
      "SEO Optimized Product Directories",
      "High-Performance Fast Loading",
      "Direct Shopping Cart Integration",
      "Clean Code Architecture",
      "Secure Checkout Flow Layout",
      "Product Image Zoom Galleries",
      "WhatsApp Support Chat Integration",
      "Dynamic Product Filters",
      "Location Map Integration",
      "Customer Reviews & Ratings Carousel",
      "Admin Panel CMS Ready (Optional)",
      "Google Analytics E-commerce Integration",
      "Google Search Console Connected",
      "Direct Lead Capture Inquiries Form"
    ],
    whatsIncluded: [
      "Store Setup & Domain Connection",
      "Branding Colors Customization",
      "Logo integration",
      "Initial Product Catalog Upload (Up to 15 products)",
      "Next.js Image Optimization Setup",
      "Secure Payment Gateway Configuration",
      "Google Maps Integration",
      "Product Schema & On-Page SEO",
      "Core Web Vitals Optimization",
      "1 Month Free Technical Support",
      "Cloud Deployment & Launch Assistance"
    ],
    faqs: [
      {
        question: "Can we use this for other brands besides dairy?",
        answer: "Yes, this template is built on a highly modular product schema. We can easily adapt the colors, images, and content to sell cosmetics, beverages, organic grains, local grocery, or any other retail goods."
      },
      {
        question: "Can you connect Credit Card, Net Banking, and UPI payments?",
        answer: "Yes, we integrate payment gateways like Stripe, Razorpay, or PayPal so you can accept credit cards, debit cards, bank transfers, and mobile UPI apps."
      },
      {
        question: "Can I manage inventory and add products myself?",
        answer: "Yes, we can connect this template with a Headless CMS (like Sanity) or custom admin dashboard, allowing you to edit descriptions, adjust inventory levels, change pricing, and add new products."
      },
      {
        question: "How long does it take to go live?",
        answer: "We typically configure, customize, connect the payment gateway, upload your initial products, and deploy the site live to production in 5 to 7 business days."
      },
      {
        question: "Can we add subscription options for milk delivery?",
        answer: "Yes, we can customize the template to support weekly/monthly product subscriptions (recurring billing) for daily milk, bread, or dairy product deliveries."
      }
    ],
    seo: {
      title: "Dairy Brand E-commerce Website Template for Sale | Magnivel Technologies",
      description: "Buy a premium, secure, responsive dairy and organic farm e-commerce website template from Magnivel Technologies. Features payment gateway, cart, and customizations.",
      keywords: [
        "dairy e-commerce website template",
        "organic food website for sale",
        "milk delivery website development",
        "buy online dairy shop",
        "e-commerce template India",
        "dairy brand web design",
        "organic farm website template",
        "direct to consumer food store",
        "Magnivel Technologies"
      ],
      canonicalUrl: "https://magnivel.com/ready-websites/dairy-brand-ecommerce-template"
    }
  }
];

// Helper to get template by slug
export function getTemplateBySlug(slug: string): WebsiteTemplate | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}

// All future/upcoming categories to list
export const FUTURE_CATEGORIES = [
  "E-commerce",
  "Hospital",
  "Clinic",
  "School",
  "College",
  "University",
  "Gym",
  "Salon",
  "Spa",
  "Real Estate",
  "Hotel",
  "Travel Agency",
  "NGO",
  "Corporate",
  "Portfolio",
  "Law Firm",
  "Construction",
  "Interior Design",
  "Architecture",
  "Finance",
  "Accounting",
  "Logistics",
  "Manufacturing",
  "Automobile",
  "Wedding Planner",
  "Event Management",
  "Dental Clinic",
  "Medical",
  "Pet Shop",
  "Jewellery",
  "Fashion",
  "Electronics",
  "Marketplace",
  "Multi Vendor",
  "SaaS Dashboard",
  "CRM",
  "ERP",
  "HRMS",
  "Booking System",
  "Appointment System",
  "Learning Management System"
];
