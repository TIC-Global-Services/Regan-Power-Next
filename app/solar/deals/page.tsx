"use client";

import React from 'react';
import Hero from '@/reuseables/Hero';
import FullscreenSplitSection from '@/reuseables/FullscreenSplitSection';
import ReusableFAQ from '@/reuseables/faq';
import GetSolar from '@/reuseables/getsolar';
import LeadCaptureForm from '@/components/solar/LeadCaptureForm';

// Section imports
import Philosophy from '@/components/solar/deals/Philosophy';
import DealsGrid from '@/components/solar/deals/DealsGrid';
import SolarOnlyPackages from '@/components/solar/deals/SolarOnlyPackages';
import WaysToPay from '@/components/solar/deals/WaysToPay';
import WhyMattersChecklist from '@/components/solar/deals/WhyMattersChecklist';

// Image assets
import dealsHeroBg from '@/assets/solar/deals/hero.png';
import dealOfBg from '@/assets/solar/deals/dealof.png';
import whyMattersBg from '@/assets/solar/deals/whythatmatters.png';
import faqBg from '@/assets/solar/faq.png';
import getSolarBg from '@/assets/solar/footer.png';

const faqItems = [
  {
    question: "Q1. Why Don't You Show Prices On Your Deals Page?",
    answer: "Because a generic price is almost always misleading. Perth roofs differ in angle, shading, electrical phase (single vs. three-phase), and switchboard condition. Stating a single flat rate leads to unexpected variation fees during installation. Instead, we provide fixed, itemized quotes tailored to your exact property after a brief verification."
  },
  {
    question: "Q2. Do your deals include the federal and WA rebates?",
    answer: "Yes. Every Quote We Produce Applies All Eligible Rebates As Upfront Discounts On Your System Price. Federal STCs (Solar), Federal Cheaper Home Batteries (Battery), And The WA Residential Battery Scheme Are All Deducted From Your Quoted Total Before You Pay."
  },
  {
    question: "Q3. Can I Use A Plenti No-Interest Loan On My Install?",
    answer: "Yes. Regen Power is an authorized partner. We can structure your payment package using the zero-interest Plenti loan for eligible system sizes, meaning you pay $0 upfront and spread the cost over convenient monthly terms."
  },
  {
    question: "Q4. Will Prices Go Up After 1 May 2026?",
    answer: "Yes. On 1 May 2026, the federal STC rebate values are scheduled for a step-down adjustment. Locking in your design and deposit before this date guarantees you receive the higher rebate tier, saving you hundreds of dollars on the final purchase price."
  },
  {
    question: "Q5. Do You Price-Match Other Quotes?",
    answer: "We don't price-match budget flyers using generic components or subcontracted crews. However, if you have a written quote for identical, premium-tier components (e.g. Jinko panels + Sungrow inverter installed by in-house accredited electricians), we will match it."
  },
  {
    question: "Q6. What Happens After I Request A Quote?",
    answer: "One of our Perth-based engineers will review your roof outline using high-resolution aerial mapping. We'll send you an initial panel placement render and system output simulation, followed by a quick call to answer any questions and verify your electrical setup. No pressure, no obligations."
  }
];

export default function SolarDealsPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      
      {/* 1. Hero Banner */}
      <Hero
        mediaSrc={dealsHeroBg}
        mediaType="image"
        topSubtitle="Solar Deals, Engineered For Value"
        mainTitle="Not Built On The Lowest Price."
        description="Tier-1 Panels, Premium Hybrid Inverters, And Our 23-Year Workmanship Track Record — Bundled With Every Federal And WA Rebate We Can Stack. See What's On Right Now, And Lock In 2026 Rebate Values Before The 1 May Step-Down."
        ctaText="Get My Tailored Quote"
        ctaLink="#quote-form"
        subtitleColor="text-white"
        titleColor="text-[#63B846]"
        descriptionColor="text-white/90"
        showOverlay={true}
      />

      {/* 2. Philosophy */}
      <Philosophy />

      {/* 3. What's On Right Now Promotions Grid */}
      <DealsGrid />

      {/* 4. Fullscreen Split: Is The Deal of 2026 */}
      <FullscreenSplitSection
        subtitle="Why Solar Plus Battery"
        title="Is The Deal Of 2026."
        description="A Solar-Only System Saves You Money During The Day. A Solar-Plus-Battery System Saves You Money Around The Clock — And Right Now, In 2026, The Rebate Stack On A Battery Is The Strongest It Has Ever Been In Western Australia, Or Likely Will Be Again. Three Rebates, A No-Interest Loan, And Premium Components From A Single Installer. That's The Bundle We'd Recommend To Most Perth Households Installing In 2026."
        image={dealOfBg}
        imageAlt="Solar Plus Battery Setup"
        imagePosition="left"
        textArrangement="split"
      />

      {/* 5. Three Solar-Only Packages Grid */}
      <SolarOnlyPackages />

      {/* 6. Three Ways To Pay Grid */}
      <WaysToPay />

      {/* 7. Fullscreen Split: Why Our Deals Aren't Cheapest */}
      <FullscreenSplitSection
        subtitle="Why Our Deals Aren't The Cheapest In Perth"
        title="And Why That Matters."
        description={<WhyMattersChecklist />}
        image={whyMattersBg}
        imageAlt="Why Our Deals Matter"
        imagePosition="right"
        textArrangement="split"
      />

      {/* 8. FAQ Accordion Section */}
      <ReusableFAQ
        topTitle="FAQ"
        title="Entries"
        listTitle="Frequently Asked Questions"
        image={faqBg}
        items={faqItems}
      />

      {/* 9. Lead Capture Quote Form */}
      <div id="quote-form">
        <LeadCaptureForm />
      </div>

      {/* 10. Bottom CTA Banner */}
      <GetSolar
        subtitle="Get A Solar System Designed"
        mainTitle="For Your Home"
        description="Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls — just a proper engineering recommendation."
        buttonText="Get My Free Quote"
        bgImage={getSolarBg}
      />

    </div>
  );
}
