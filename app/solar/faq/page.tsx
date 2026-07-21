import type { Metadata } from "next";

import CategorizedFAQ from "@/components/solar/faq/CategorizedFAQ";
import GetSolar from "@/reuseables/getsolar";
import Hero from "@/reuseables/Hero";
import faqHeroImg from "@/assets/solar/faq/hero.png";
import getSolarBg from '@/assets/solar/footer.png';

export const metadata: Metadata = {
  title: "Solar FAQ | Regen Power",
  description:
    "Browse engineer-written answers to common Perth solar questions across panels, inverters, batteries, installation, and rebates.",
};

export default function SolarFaqPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero
        mediaSrc={faqHeroImg}
        mediaType="image"
        topSubtitle={
          <>
            Solar Questions, Answered By Engineers
            <br />
            Who&apos;ve Been Doing This In
          </>
        }
        mainTitle="Perth For 23 Years."
        description="Forty-plus questions Perth homeowners have asked over the last year, grouped so you can find the topic you are looking for fast. If yours is not here, a five-minute phone call usually does the trick."
        ctaText="Get Your Free Quote"
        ctaLink="#quote-form"
        subtitleColor="text-white"
        titleColor="text-[#63B846]"
        descriptionColor="text-white/95"
        showOverlay
        heightClass="h-[600px]"
      />

      <CategorizedFAQ />
      <GetSolar
        subtitle="A Five-Minute Call Is Worth A Hundred"
        mainTitle="FAQ Pages."
        description="Nothing above answers your exact question like one of our Perth-based energy advisors. No sales script, no pressure, and no obligation. Just a proper engineering conversation about what would work for your home."
        buttonText="Book A Free Consultation"
        bgImage={getSolarBg}
      />
    </div>
  );
}
