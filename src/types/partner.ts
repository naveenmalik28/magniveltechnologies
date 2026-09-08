export type PartnerStatus =
  | "Technology Ecosystem"
  | "Platform Integration"
  | "Technology Used"
  | "Certified"
  | "Official Partner"
  | "Strategic Partner";

export type PartnerCategory =
  | "Digital Marketing & Advertising"
  | "Cloud & Infrastructure"
  | "E-commerce & Business Platforms"
  | "Payments & Communication"
  | "Development & Technology Ecosystem";

export interface PartnerPlatform {
  id: string;
  name: string;
  category: PartnerCategory;
  description: string;
  website?: string;
  status: PartnerStatus;
  officialPartner: boolean;
  badge?: string;
  displayOrder: number;
  altText: string;
  color?: string;
}
