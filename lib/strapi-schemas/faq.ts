import type { StrapiMedia } from "@/lib/strapi";

export interface FaqHeroData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: number;
  categoryId: string;
  label: string;
  items: FaqItem[];
}

export interface FaqCategorizedFaqData {
  categories: FaqCategory[];
}

export interface FaqCtaBannerData {
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  buttonText: string | null;
  buttonHref: string | null;
  backgroundImage: StrapiMedia | null;
}
