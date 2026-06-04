import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";

export const metadata: Metadata = {
  title: "AWS Cloud & DevOps Services | Magnivel Technologies",
  description: "Magnivel Technologies provides professional AWS development and DevOps services. Scalable cloud infrastructure, EC2/S3 setups, secure RDS databases, and CI/CD pipelines.",
  keywords: ["aws development services", "cloud devops engineer", "aws s3 storage setup", "rds database configuration", "github actions cicd"],
  alternates: {
    canonical: "https://magnivel.com/aws-development",
  },
};

const benefits = [
  {
    title: "99.99% Cloud Uptime",
    desc: "We configure multi-zone backup replication to prevent server crashes and maintain high app availability.",
    icon: "shield",
  },
  {
    title: "Optimized Infrastructure Bills",
    desc: "We size EC2/RDS instances and set auto-scaling rules to prevent over-paying for cloud servers.",
    icon: "zap",
  },
  {
    title: "Frictionless Code Deploy",
    desc: "Deploy files instantly via Github Actions CI/CD pipelines that compile, test, and host automatically.",
    icon: "layers",
  },
];

const features = [
  { title: "EC2 & ECS Hosting", desc: "Configure Virtual Private Cloud (VPC) instances, set security firewall rules, and host Docker containers." },
  { title: "RDS Database Configuration", desc: "Establish secure PostgreSQL/MySQL database clusters with automated snapshot backups." },
  { title: "S3 Storage Setup", desc: "Build private/public buckets for user file uploads, configure lifecycle policies and compression." },
  { title: "Route 53 DNS Setup", desc: "Manage domain mapping configurations, set up SSL certificates, and configure Cloudflare." },
  { title: "CI/CD Deployment Pipelines", desc: "Program automated Github Actions loops to compile code, run tests, and host." },
  { title: "CloudWatch Logs Monitor", desc: "Track application logs, CPU utilisation profiles, and trigger alerts on error spikes." },
];

const process = [
  { step: 1, title: "Discovery", desc: "Analyze application bandwidth, file storage rules, database scale, and budget limits." },
  { step: 2, title: "Architecture Blueprint", desc: "Draft VPC boundaries, EC2 instances sizes, DB backups rules, and CD keys." },
  { step: 3, title: "Infrastructure Build", desc: "Configure AWS console nodes, create S3 storage buckets, and link databases." },
  { step: 4, title: "CI/CD Pipeline Setup", desc: "Write GitHub Actions workflow files to automate compile, check, and deployment." },
  { step: 5, title: "QA Load Review & Launch", desc: "Verify backup triggers, test failovers, audit security group permissions, and launch." },
];

const faqs = [
  {
    question: "Do you configure security policies for AWS accounts?",
    answer: "Yes, we apply AWS Identity and Access Management (IAM) best practices, configuring narrow roles and multi-factor authentication (MFA) to secure accounts.",
  },
  {
    question: "What is the monthly cost of running on AWS?",
    answer: "For early startups, AWS databases and hosting can be configured within the Free Tier or under $40/month, scaling up as traffic grows.",
  },
  {
    question: "Do you support Docker and containerized deploys?",
    answer: "Yes, we write custom Dockerfiles and deploy containers onto AWS Elastic Container Service (ECS) or Elastic Beanstalk for ease of scaling.",
  },
];

export default function AWSTechPage() {
  return (
    <ServicePageTemplate
      title="AWS Cloud Architecture & DevOps Services"
      eyebrow="Engineering Stack"
      description="Deploy securely. We configure scalable AWS cloud server networks, Postgres RDS database clusters, S3 buckets, and CI/CD pipelines."
      overview="Poorly configured cloud servers leak database records and waste budgets. Magnivel Technologies engineers optimized AWS environments featuring strict firewall groups, automated database snapshots, and instant deployment pipelines."
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
    />
  );
}
