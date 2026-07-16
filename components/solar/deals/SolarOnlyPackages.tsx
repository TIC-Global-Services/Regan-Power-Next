import React from 'react';
import PackagesGrid from '@/reuseables/PackagesGrid';

const solarPackages = [
  {
    title: "Essentials",
    desc: "Reliable, rebate-ready, and built to last 25 years.",
    bgClass: "bg-[#EEF6EB]/50 border border-gray-100",
    items: [
      { label: "Panels", value: "Tier-1 (Jinko, Canadian Solar, Risen)" },
      { label: "Inverter", value: "String — Sungrow or GoodWe" },
      { label: "Monitoring", value: "Whole-system" },
      { label: "Battery-Ready", value: "No" }
    ]
  },
  {
    title: "Premium",
    desc: "Higher-output N-type panels and a battery-ready hybrid inverter.",
    bgClass: "bg-[#A0CF44] text-black",
    items: [
      { label: "Panels", value: "Tier-1 premium (LONGi or JA Solar)" },
      { label: "Inverter", value: "Hybrid — Sungrow SH or GoodWe ET" },
      { label: "Monitoring", value: "Whole-system + battery-ready" },
      { label: "Battery-Ready", value: "Yes" }
    ]
  },
  {
    title: "Signature",
    desc: "Top-tier panels, full smart-home integration, Tesla-ready.",
    bgClass: "bg-[#EEF6EB]/50 border border-gray-100",
    items: [
      { label: "Panels", value: "Top-tier (LONGi Hi-MO X10 or Trina Vertex S+)" },
      { label: "Inverter", value: "Fronius GEN24 Plus" },
      { label: "Monitoring", value: "Panel-level + smart-home" },
      { label: "Battery-Ready", value: "Yes — Tesla-certified" }
    ]
  }
];

const SolarOnlyPackages = () => {
  return (
    <PackagesGrid
      subtitle="Three Solar-Only Packages"
      title="All Premium"
      description="If You're Not Adding A Battery This Cycle, Our Solar-Only Packages Carry The Same Quality Bar As Our Bundled Systems — Just Without The Battery Hardware. Every System Is Tier-1, CEC-Certified, And Comes With Our 10-Year Workmanship Guarantee."
      packages={solarPackages}
    />
  );
};

export default SolarOnlyPackages;
