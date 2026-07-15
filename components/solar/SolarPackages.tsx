"use client";

import React from 'react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

const packages = [
  {
    title: "Essentials",
    desc: "Reliable, rebate-ready, and built to last 25 years.",
    bgClass: "bg-[#EEF6EB] text-black",
    highlight: false,
    items: [
      { label: "Panels", value: "Tier-1 (Jinko, Canadian Solar or Risen)" },
      { label: "Inverter", value: "String — Sungrow or SMA" },
      { label: "Warranty", value: "25 yr panel product, 10 yr inverter, 10 yr Regen workmanship" },
      { label: "Monitoring", value: "whole-system via app" },
      { label: "Battery-Ready", value: "no (string inverter)" }
    ]
  },
  {
    title: "Premium",
    desc: "Higher-output N-type panels and a battery-ready hybrid inverter.",
    bgClass: "bg-[#A0CF44] text-black border-2 border-[#63B846]/20",
    highlight: true,
    items: [
      { label: "Panels", value: "Tier-1 premium (LONGi or JA Solar)" },
      { label: "Inverter", value: "Hybrid — Fronius GEN24 or Sungrow SH" },
      { label: "Warranty", value: "25 yr panel product, 10 yr inverter, 10 yr Regen workmanship" },
      { label: "Monitoring", value: "whole-system + battery status" },
      { label: "Battery-Ready", value: "yes-add anytime" }
    ]
  },
  {
    title: "Signature",
    desc: "Top-tier panels, full smart-home integration, Tesla-ready.",
    bgClass: "bg-[#EEF6EB] text-black",
    highlight: false,
    items: [
      { label: "Panels", value: "Top-tier (LONGi Hi-MO or Trina Vertex S+)" },
      { label: "Inverter", value: "Premium hybrid — Fronius GEN24 Plus or Sigenergy" },
      { label: "Warranty", value: "25 yr panel product, 10 yr inverter (to 20 yr), 10 yr Regen workmanship" },
      { label: "Monitoring", value: "Panel-level + battery + smart-home integration" },
      { label: "Battery-Ready", value: "Yes — Tesla Powerwall certified" }
    ]
  }
];

const SolarPackages = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-sm md:text-2xl uppercase tracking-tight mb-1 block">
              Three Standards
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] text-[#63B846] leading-none tracking-tight mb-6">
              One Regen Installation Quality
            </h2>
          </Reveal>

          <Fade delay={0.2}>
            <p className="text-sm md:text-sm leading-tight">
              Every Regen Power System Is Built Around The Same Principle: Tier-1 Panels, Premium Inverters,
              And A WA-Licensed Install Crew. Our Three Package Tiers Differ In Component Brand, Inverter Capability,
              And Future-Readiness — Not In Installation Standards Or After-Sales Support.
            </p>
          </Fade>
        </div>

        {/* 3-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.1}
              className={`rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg
                ${pkg.bgClass}
                ${pkg.highlight ? 'scale-102 z-10 md:-translate-y-2' : ''}
              `}
            >
              {/* Title & Desc */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  {pkg.title}
                </h3>
                <p className={`text-xs md:text-base leading-tight ${pkg.highlight ? 'text-black/85' : 'text-gray-600'}`}>
                  {pkg.desc}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-6 flex-grow mb-8">
                {pkg.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <h4 className="text-xs md:text-xl uppercase tracking-tight text-black mb-1">
                      {item.label}
                    </h4>
                    <p className="text-xs md:text-base leading-tight">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>


            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolarPackages;
