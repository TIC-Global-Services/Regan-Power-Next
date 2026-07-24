import type { StrapiMedia } from "@/lib/strapi";

export interface CommercialSystemsHeroData {
  __component: "commercial-systems.hero";
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface StatItemData {
  id: number;
  value: string;
  label: string;
}

export interface CommercialSystemsStatsCardGridData {
  __component: "commercial-systems.stats-card-grid";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  cardBackground: StrapiMedia | null;
  stats: StatItemData[];
}

export interface TierDetailData {
  id: number;
  label: string;
  value: string;
}

export interface TierData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: StrapiMedia | null;
  ctaText: string;
  ctaHref: string;
  details: TierDetailData[];
}

export interface CommercialSystemsTiersSectionData {
  __component: "commercial-systems.tiers-section";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  tiers: TierData[];
}

export interface ComponentItemData {
  id: number;
  letter: string;
  title: string;
}

export interface CommercialSystemsComponentsSectionData {
  __component: "commercial-systems.components-section";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  backgroundImage: StrapiMedia | null;
  items: ComponentItemData[];
}

export interface IndustryData {
  id: number;
  title: string;
  description: string;
  caseStudy: string;
  icon: StrapiMedia | null;
}

export interface CommercialSystemsIndustriesSectionData {
  __component: "commercial-systems.industries-section";
  subtitle: string | null;
  title: string | null;
  industries: IndustryData[];
}

export interface FeatureCardData {
  id: number;
  title: string;
  description: string;
  image: StrapiMedia | null;
  textPosition: "top" | "bottom" | null;
  footerTitle: string | null;
  footerDescription: string | null;
}

export interface CommercialSystemsFeatureCardGridData {
  __component: "commercial-systems.feature-card-grid";
  topSubtitle: string | null;
  title: string | null;
  bottomSubtitle: string | null;
  cards: FeatureCardData[];
}

export interface TextBlockData {
  id: number;
  text: string;
}

export interface CommercialSystemsWatchSystemSectionData {
  __component: "commercial-systems.watch-system-section";
  subtitle: string | null;
  title: string | null;
  ctaText: string | null;
  ctaHref: string | null;
  image: StrapiMedia | null;
  paragraphs: TextBlockData[];
}

export interface PackageItemData {
  id: number;
  label: string;
  value: string;
}

export interface PackageData {
  id: number;
  title: string;
  desc: string;
  bgClass: string;
  items: PackageItemData[];
}

export interface CommercialSystemsPackagesGridData {
  __component: "commercial-systems.packages-grid";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  packages: PackageData[];
}

export interface StepItemData {
  id: number;
  stepNumber: number;
  title: string;
  description: string;
  image: StrapiMedia | null;
}

export interface CommercialSystemsProcessFlowData {
  __component: "commercial-systems.process-flow";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  steps: StepItemData[];
}

export interface FiveThingItemData {
  id: number;
  number: number;
  title: string;
  description: string;
  highlight: boolean | null;
}

export interface CommercialSystemsFiveThingsSectionData {
  __component: "commercial-systems.five-things-section";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  items: FiveThingItemData[];
}

export interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

export interface SharedFaqData {
  __component: "shared.faq";
  title: string | null;
  sectionTitle: string | null;
  listTitle: string | null;
  image: StrapiMedia | null;
  items: FaqItemData[];
}

export interface CommercialSystemsCommercialFormData {
  __component: "commercial-systems.commercial-form";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  image: StrapiMedia | null;
}

export interface SharedCtaBannerData {
  __component: "shared.cta-banner";
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  buttonText: string | null;
  buttonHref: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface CommercialOffGridHeroData {
  __component: "commercial-off-grid.hero";
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface IntroParagraphData {
  id: number;
  text: string;
  isSecondary: boolean;
}

export interface SharedEditorialSectionData {
  __component: "shared.editorial-section";
  subtitle: string | null;
  title: string | null;
  align: "left" | "center" | "right" | null;
  paragraphs: IntroParagraphData[];
}

export interface PortfolioCardData {
  id: number;
  type: "text" | "image";
  variant: "light-gray" | "light-green" | "dark";
  title: string;
  description: string;
  specs: string | null;
  image: StrapiMedia | null;
}

export interface CommercialOffGridSolutionsPortfolioData {
  __component: "commercial-off-grid.solutions-portfolio";
  subtitle: string | null;
  title: string | null;
  description: string | null;
  layout: number | null;
  cards: PortfolioCardData[];
}

export type CommercialSystemsSectionData =
  | CommercialSystemsHeroData
  | CommercialSystemsStatsCardGridData
  | CommercialSystemsTiersSectionData
  | CommercialSystemsComponentsSectionData
  | CommercialSystemsIndustriesSectionData
  | CommercialSystemsFeatureCardGridData
  | CommercialSystemsWatchSystemSectionData
  | CommercialSystemsPackagesGridData
  | CommercialSystemsProcessFlowData
  | CommercialSystemsFiveThingsSectionData
  | SharedFaqData
  | CommercialSystemsCommercialFormData
  | SharedCtaBannerData;

export type CommercialOffGridSectionData =
  | CommercialOffGridHeroData
  | SharedEditorialSectionData
  | CommercialOffGridSolutionsPortfolioData
  | SharedCtaBannerData;
