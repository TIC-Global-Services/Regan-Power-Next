import type { StrapiMedia } from "@/lib/strapi";

export interface BrandsHeroData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface BrandsPhilosophyParagraph {
  id: number;
  text: string;
  isSecondary: boolean;
}

export interface BrandsPhilosophyData {
  badge: string | null;
  subtitle: string | null;
  title: string | null;
  paragraphs: BrandsPhilosophyParagraph[];
}

export interface BrandsTier1MeansData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  imagePosition: "left" | "right" | null;
  image: StrapiMedia | null;
}

export interface BrandsGridCard {
  id: number;
  title: string;
  subtitle: string | null;
  middleTitle: string | null;
  description: string | null;
  isDark: boolean;
}

export interface BrandsGridData {
  subtitle: string | null;
  title: string | null;
  badge: string | null;
  cards: BrandsGridCard[];
}

export interface BrandsHybridSpecialtyData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  image: StrapiMedia | null;
}

export interface BrandsInverter {
  id: number;
  name: string;
  origin: string | null;
  positioning: string | null;
  range: string | null;
  warranty: string | null;
}

export interface BrandsInvertersSliderData {
  subtitle: string | null;
  title: string | null;
  inverters: BrandsInverter[];
}

export interface BrandsCriteriaItem {
  id: number;
  title: string;
  description: string;
}

export interface BrandsCriteriaListData {
  subtitle: string | null;
  title: string | null;
  introText: string | null;
  items: BrandsCriteriaItem[];
}

export interface BrandsSpecColumn {
  id: number;
  brand: string;
  efficiency: string | null;
  tempCoeff: string | null;
  degradation: string | null;
  warranty: string | null;
}

export interface BrandsSpecsTableData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  columns: BrandsSpecColumn[];
}

export type BrandsSectionData =
  | (BrandsHeroData & { __component: "brands.hero" })
  | (BrandsPhilosophyData & { __component: "brands.philosophy" })
  | (BrandsTier1MeansData & { __component: "brands.tier1-means" })
  | (BrandsGridData & { __component: "brands.brands-grid" })
  | (BrandsSpecsTableData & { __component: "brands.specs-table" })
  | (BrandsHybridSpecialtyData & { __component: "brands.hybrid-specialty" })
  | (BrandsInvertersSliderData & { __component: "brands.inverters-slider" })
  | (BrandsCriteriaListData & { __component: "brands.criteria-list" });
