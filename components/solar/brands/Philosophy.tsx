import React from 'react';
import EditorialTextSection from '@/reuseables/EditorialTextSection';

const paragraphs = [
  {
    text: "The Solar Industry Carries Hundreds Of Panel Brands And Dozens Of Inverter Manufacturers. Most Installers Will Fit Whatever Their Wholesaler Has On Special That Week. That Approach Keeps The Quote Low, But It Pushes The Risk Onto Your Roof. Our Approach Is The Opposite. We've Deliberately Narrowed Our Range To Six Tier-1 Panel Brands And Four Premium Hybrid Inverter Brands. Every Brand On This Page Has Been Installed By Us At Scale, Monitored For Real-World Performance In Perth Conditions, And Supported Through Warranty Cycles We've Actually Seen Play Out.",
    isSecondary: false
  }
];

const Philosophy = () => {
  return (
    <EditorialTextSection
      badge="PHILOSOPHY"
      subtitle="We Install Fewer Brands,"
      title="Deliberately."
      paragraphs={paragraphs}
      align="left"
      subtitleClass="text-lg md:text-2xl text-black font-normal"
      paragraphsClass="text-left max-w-4xl"
      revealEffect
    />
  );
};

export default Philosophy;
