import type { StrapiMedia } from "@/lib/strapi";

export interface RebatesHeroData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: StrapiMedia | null;
}

export interface RebatesProgram {
  id: number;
  label: string;
  title: string;
  summary: string;
  badge: string | null;
  image: StrapiMedia | null;
}

export interface RebatesRebateProgramsData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  programs: RebatesProgram[];
}

export interface RebatesIntroParagraph {
  id: number;
  text: string;
  isSecondary: boolean;
}

export interface RebatesStcExplainerData {
  subtitle: string | null;
  title: string | null;
  paragraphs: RebatesIntroParagraph[];
}

export interface RebatesUtilityCard {
  id: number;
  name: string;
  logo: StrapiMedia | null;
  perKwh: string | null;
  cap: string | null;
  maximumRebate: string | null;
}

export interface RebatesUtilityCardsData {
  badge: string | null;
  title: string | null;
  description: string | null;
  cards: RebatesUtilityCard[];
}

export interface RebatesLoanBenefit {
  id: number;
  title: string;
  description: string;
}

export interface RebatesLoanBenefitsData {
  badge: string | null;
  subtitle: string | null;
  title: string | null;
  description: string | null;
  backgroundImage: StrapiMedia | null;
  benefits: RebatesLoanBenefit[];
}

export interface RebatesEligibilityQuestion {
  id: number;
  questionId: string;
  question: string;
  helperText: string;
  loanOnly: boolean;
}

export interface RebatesEligibilityResult {
  id: number;
  key: "eligible-stack" | "eligible-rebates-only" | "not-eligible";
  title: string;
  description: string;
}

export interface RebatesEligibilityCheckerData {
  badge: string | null;
  title: string | null;
  description: string | null;
  questions: RebatesEligibilityQuestion[];
  results: RebatesEligibilityResult[];
}

export interface RebatesSplitSectionData {
  subtitle: string | null;
  title: string | null;
  description: string | null;
  image: StrapiMedia | null;
  imagePosition: "left" | "right" | null;
  badge: string | null;
}

export interface RebatesFaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface RebatesFaqData {
  title: string | null;
  sectionTitle: string | null;
  listTitle: string | null;
  image: StrapiMedia | null;
  items: RebatesFaqItem[];
}

export interface RebatesCtaBannerData {
  subtitle: string | null;
  mainTitle: string | null;
  description: string | null;
  buttonText: string | null;
  buttonHref: string | null;
  backgroundImage: StrapiMedia | null;
}
