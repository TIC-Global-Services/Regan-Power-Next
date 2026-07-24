import type { StrapiMedia } from "@/lib/strapi";

export interface SolarHeroData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface SolarTickerItem {
  id: number;
  text: string;
}

export interface SolarIntroParagraph {
  id: number;
  text: string;
  isSecondary: boolean;
}

export interface SolarStatsAndIntroData {
  introSubtitle: string | null;
  introTitle: string | null;
  tickerItems: SolarTickerItem[];
  introParagraphs: SolarIntroParagraph[];
}

export interface SolarProcessStep {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  image?: StrapiMedia | null;
}

export interface SolarProcessStepsData {
  subtitle: string | null;
  title: string | null;
  steps: SolarProcessStep[];
}

export interface SolarBrandRef {
  id: number;
  name: string;
  logo?: StrapiMedia | null;
}

export interface SolarBrandsGridData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  ctaText: string | null;
  ctaHref: string | null;
  brands: SolarBrandRef[];
}

export interface SolarInverterCard {
  label: string;
  text: string;
}

export interface SolarInverterRef {
  id: number;
  name: string;
  title: string;
  backgroundImage?: StrapiMedia | null;
  cards?: SolarInverterCard[];
}

export interface SolarInverterSliderData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  inverters: SolarInverterRef[];
}

export interface SolarSpecItem {
  id: number;
  title: string | null;
  value: string | null;
  description: string | null;
  image?: StrapiMedia | null;
}

export interface SolarSpecsTableData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  specs: SolarSpecItem[];
}

export interface SolarSizingTableRow {
  id: number;
  dailyUse: string;
  recommendedSize: string;
  typicalHousehold: string;
  phaseRequired: string;
}

export interface SolarSizingCard {
  id: number;
  title: string;
  description: string;
  image?: StrapiMedia | null;
}

export interface SolarSizingGuideData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  tableRows: SolarSizingTableRow[];
  sizingCards: SolarSizingCard[];
}

export interface SolarPackageItem {
  label: string;
  value: string;
}

export interface SolarPackage {
  id: number;
  title: string;
  description: string;
  bgClass?: string | null;
  features?: SolarPackageItem[];
}

export interface SolarPackagesData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  packages: SolarPackage[];
}

export interface SolarTimelineData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  consultationTitle: string | null;
  consultationText: string | null;
  image: StrapiMedia | null;
}

export interface SolarEngineeringItem {
  id: number;
  title: string;
  description: string;
  isDark: boolean;
}

export interface SolarEngineeringItemsData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  items: SolarEngineeringItem[];
}

export type SolarSectionData =
  | (SolarHeroData & { __component: "solar.hero" })
  | (SolarStatsAndIntroData & { __component: "solar.stats-and-intro" })
  | (SolarProcessStepsData & { __component: "solar.process-steps" })
  | (SolarBrandsGridData & { __component: "solar.brands-grid" })
  | (SolarInverterSliderData & { __component: "solar.inverter-slider" })
  | (SolarSpecsTableData & { __component: "solar.specs-table" })
  | (SolarSizingGuideData & { __component: "solar.sizing-guide" })
  | (SolarPackagesData & { __component: "solar.packages" })
  | (SolarTimelineData & { __component: "solar.timeline" })
  | (SolarEngineeringItemsData & { __component: "solar.engineering-items" });
