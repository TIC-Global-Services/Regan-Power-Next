"use client";

import React from 'react';
import FAQ from '@/reuseables/faq';
import GetSolar from '@/reuseables/getsolar';
import faqSectionImg from '@/assets/solar/faq.png';
import getSolarBg from '@/assets/solar/footer.png';

// Section imports
import HeroSection from '@/components/solar/Hero';
import SolarStatsAndIntro from '@/components/solar/SolarStatsAndIntro';
import SolarProcessFlow from '@/components/solar/SolarProcessFlow';
import SolarBrandsGrid from '@/components/solar/SolarBrandsGrid';
import InverterSlider from '@/components/solar/InverterSlider';
import SpecsAccordion from '@/components/solar/SpecsAccordion';
import SizingGuide from '@/components/solar/SizingGuide';
import SolarPackages from '@/components/solar/SolarPackages';
import TimelineSection from '@/components/solar/TimelineSection';
import EngineeringCustomizations from '@/components/solar/EngineeringCustomizations';
import LeadCaptureForm from '@/components/solar/LeadCaptureForm';

const solarFAQItems = [
  {
    question: "Q1. How Much Will A Solar System Save Me In Perth?",
    answer: "Savings depend on your usage and system size, but the average Perth home with a 6.6 kW system saves $1,800–$2,400 per year on electricity — enough to pay back the system in around 4–5 years. A tailored estimate based on your Synergy bill takes about 10 minutes on a call."
  },
  {
    question: "Q2. What Size Solar System Do I Need?",
    answer: "For most Perth homes, a 6.6 kW system (paired with a 5 kW inverter) is the standard and offers the best return on investment. If you have a pool, ducted air-con, or run high afternoon loads, a 10 kW or 13 kW system is highly recommended."
  },
  {
    question: "Q3. What's The Difference Between A Hybrid And A String Inverter?",
    answer: "A string inverter is standard and converts solar power for immediate household consumption. A hybrid inverter is battery-ready, meaning it can route solar power directly into a battery storage unit without needing a separate battery inverter later."
  },
  {
    question: "Q4. Do I Need A Battery?",
    answer: "Batteries are excellent for keeping your self-generated power for nighttime use, especially with Synergy’s DEBS buyback rates dropping. If your main consumption is during peak evening hours, adding a battery yields substantial additional bill savings."
  },
  {
    question: "Q5. What Warranty Do I Get?",
    answer: "We provide a 25-year manufacturer product warranty on panels, 25-30 year performance warranty, 10-year warranty on premium inverters, and an industry-leading 10-year workmanship warranty backed by our local service team."
  },
  {
    question: "Q6. How Long Does Installation Take?",
    answer: "Standard residential installations are completed in a single day. Our team usually arrives by 7:30 am and has the system fully mounted, wired, and tested by mid-afternoon."
  },
  {
    question: "Q7. Will My System Work If There's A Blackout?",
    answer: "Standard string inverters automatically shut down during blackouts to protect grid workers. If you require backup power during outages, you need a hybrid inverter with a battery system configured for emergency power supply (EPS)."
  },
  {
    question: "Q8. How Much Is The Federal STC Rebate In 2026?",
    answer: "The Federal STC subsidy reduces gradually each year on January 1st until it phases out completely in 2030. For a standard 6.6 kW system installed in Perth in 2026, the upfront rebate value is approximately $2,000–$2,200, which we apply directly as an upfront discount on your quote."
  }
];

export default function SolarPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Stats Ticker & Concept Introduction */}
      <SolarStatsAndIntro />

      {/* Section 3: Four Steps */}
      <SolarProcessFlow />

      {/* Section 4: Six Tier-1 Panel Brands */}
      <SolarBrandsGrid />

      {/* Section 5: Inverters Slider */}
      <InverterSlider />

      {/* Section 6: Five Specs */}
      <SpecsAccordion />

      {/* Section 7: Sizing Guide */}
      <SizingGuide />

      {/* Section 8: Packages Tiers */}
      <SolarPackages />

      {/* Section 9: Timeline Stepper */}
      <TimelineSection />

      {/* Section 10: Staggered Customizations */}
      <EngineeringCustomizations />

      {/* Section 11: FAQ Accordions */}
      <FAQ
        topTitle="Solar System"
        title="FAQ"
        listTitle="Frequently Asked Questions"
        image={faqSectionImg}
        items={solarFAQItems}
      />

      {/* Section 12: Lead Capture Intake Quote Form */}
      <LeadCaptureForm />

      {/* Section 13: Bottom CTA Banner */}
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
