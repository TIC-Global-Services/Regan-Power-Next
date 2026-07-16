"use client";

import React from 'react';
import PackagesGrid from '@/reuseables/PackagesGrid';

const packages = [
  {
    title: "Essentials",
    desc: "Reliable, rebate-ready, and built to last 25 years.",
    bgClass: "bg-[#EEF6EB] text-black",
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
    bgClass: "bg-[#A0CF44] text-black",
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
    <PackagesGrid
      subtitle="Three Standards"
      title="One Regen Installation Quality"
      description="Every Regen Power System Is Built Around The Same Principle: Tier-1 Panels, Premium Inverters, And A WA-Licensed Install Crew. Our Three Package Tiers Differ In Component Brand, Inverter Capability, And Future-Readiness — Not In Installation Standards Or After-Sales Support."
      packages={packages}
    />
  );
};

export default SolarPackages;
