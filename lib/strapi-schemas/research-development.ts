import type { StrapiMedia } from "@/lib/strapi";
import type { SharedEditorialSectionData, SharedCtaBannerData } from "./commercial";

export interface ResearchDevelopmentHeroData {
  __component: "research-and-development.hero";
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface EnergySolutionItemData {
  id: number;
  title: string;
  description: string;
  image: StrapiMedia | null;
  href: string;
}

export interface EnergySolutionsSectionData {
  __component: "research-and-development.energy-solutions-section";
  subtitle: string | null;
  title: string | null;
  items: EnergySolutionItemData[];
}

export interface AchievementItemData {
  id: number;
  title: string;
  description: string;
  image: StrapiMedia | null;
  href: string;
}

export interface CoreAchievementsSectionData {
  __component: "research-and-development.core-achievements-section";
  subtitle: string | null;
  title: string | null;
  items: AchievementItemData[];
}

export type ResearchDevelopmentSectionData =
  | ResearchDevelopmentHeroData
  | SharedEditorialSectionData
  | EnergySolutionsSectionData
  | CoreAchievementsSectionData
  | SharedCtaBannerData;
