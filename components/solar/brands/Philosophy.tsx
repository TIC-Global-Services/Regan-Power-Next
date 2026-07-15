import React from 'react';
import EditorialTextSection from '@/reuseables/EditorialTextSection';

const paragraphs = [
  {
    text: "The Solar Industry Carries Hundreds Of Panel Brands And Dozens Of Inverter Manufacturers. Most Installers Will Fit Whatever Their Wholesaler Has On Special That Week. That Approach Keeps The Quote Low, But It Pushes The Risk Onto Your Roof.",
    isSecondary: false
  },
  {
    text: "Our Approach Is The Opposite. We've Deliberately Narrowed Our Range To Six Tier-1 Panel Brands And Four Premium Hybrid Inverter Brands. Every Brand On This Page Has Been Installed By Us At Scale, Monitored For Real-World Performance In Perth Conditions, And Supported Through Warranty Cycles We've Actually Seen Play Out.",
    isSecondary: true
  }
];

const Philosophy = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white border-b border-gray-50 py-16 lg:py-0">
      <EditorialTextSection
        badge="PHILOSOPHY"
        subtitle="We Install Fewer Brands,"
        title="Deliberately."
        paragraphs={paragraphs}
        align="left"
        subtitleClass="text-lg md:text-2xl text-black font-normal"
        titleClass="text-4xl md:text-[5rem] text-[#63B846] leading-none font-normal tracking-tight"
        paragraphsClass="text-left max-w-4xl"
      />
    </section>
  );
};

export default Philosophy;
