"use client";

import React from 'react';
import GetSolar from '@/reuseables/getsolar';
import getSolarBg from '@/assets/solar/footer.png';

// Section imports
import Hero from '@/components/solar/brands/Hero';
import Philosophy from '@/components/solar/brands/Philosophy';
import Tier1Means from '@/components/solar/brands/Tier1Means';
import SixBrandsGrid from '@/components/solar/brands/SixBrandsGrid';
import SpecsTable from '@/components/solar/brands/SpecsTable';
import HybridSpecialty from '@/components/solar/brands/HybridSpecialty';
import InvertersSlider from '@/components/solar/brands/InvertersSlider';
import CriteriaShortlist from '@/components/solar/brands/CriteriaShortlist';
import FAQ from '@/components/solar/brands/FAQ';
import LeadCaptureForm from '@/components/solar/LeadCaptureForm';

export default function SolarBrandsPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Philosophy */}
      <Philosophy />

      {/* 3. What Tier-1 Means */}
      <Tier1Means />

      {/* 4. Six Tier-1 Panel Brands */}
      <SixBrandsGrid />

      {/* 5. Side By Side Specs Table */}
      <SpecsTable />

      {/* 6. Specializing in Hybrid Inverters */}
      <HybridSpecialty />

      {/* 7. Brand Cards Slider (Inverters) */}
      <InvertersSlider />

      {/* 8. Shortlist Criteria */}
      <CriteriaShortlist />

      {/* 9. FAQ Accordions */}
      <FAQ />

      {/* 10. Lead Capture Quote Form */}
      <div id="quote-form">
        <LeadCaptureForm />
      </div>

      {/* 11. Bottom CTA Banner */}
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
