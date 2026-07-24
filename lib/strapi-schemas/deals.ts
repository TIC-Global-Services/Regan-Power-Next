import type { StrapiMedia } from "@/lib/strapi";

export interface DealsHeroData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface DealsIntroParagraph {
  id: number;
  text: string;
  isSecondary: boolean;
}

export interface DealsPhilosophyData {
  badge: string | null;
  subtitle: string | null;
  title: string | null;
  paragraphs: DealsIntroParagraph[];
}

export interface DealsPromotion {
  id: number;
  title: string;
  description: string;
}

export interface DealsGridData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  promotions: DealsPromotion[];
  ctaText: string | null;
}

export interface DealsSplitSectionData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  image: StrapiMedia | null;
  imagePosition: "left" | "right" | null;
  badge: string | null;
}

export interface DealsPaymentCard {
  id: number;
  title: string;
  description: string;
  footerTitle: string | null;
  footerDescription: string | null;
  image: StrapiMedia | null;
}

export interface DealsWaysToPayData {
  topSubtitle: string | null;
  title: string | null;
  bottomSubtitle: string | null;
  cards: DealsPaymentCard[];
}

export interface DealsFeatureItem {
  id: number;
  title: string;
  description: string;
  image: StrapiMedia | null;
}

export interface DealsWhyMattersData {
  subtitle: string | null;
  heading: string | null;
  introText: string | null;
  items: DealsFeatureItem[];
}

export interface DealsFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface DealsFaqData {
  title: string | null;
  sectionTitle: string | null;
  listTitle: string | null;
  image: StrapiMedia | null;
  items: DealsFaqItem[];
}

export interface DealsCtaBannerData {
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  buttonText: string | null;
  buttonHref: string | null;
  backgroundImage: StrapiMedia | null;
}
