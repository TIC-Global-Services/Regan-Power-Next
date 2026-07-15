import React from 'react';
import StaggeredCardsGrid, { ColumnConfig } from '@/reuseables/StaggeredCardsGrid';

const gridColumns: ColumnConfig[] = [
  {
    items: [
      'spacer',
      {
        title: "Perth Roofing Stock",
        desc: "Dedicated Flashing And Penetration Specs For Concrete Tile, Terracotta, And Metal Roofs, No Generic Brackets.",
        delay: 0.15
      },
      {
        title: "Debs Feed-In Optimisation",
        desc: "System Orientation And Battery Logic Tuned For The WA DEBS Tariff Structure, Maximising Peak-Period Self-Consumption.",
        delay: 0.3
      }
    ]
  },
  {
    items: [
      {
        title: "Summer Heat Derating",
        desc: "Inverters Are Specified With Headroom For Sustained 40°C+ Rooftop Temperatures, We Don't Install On Capacity Limits.",
        isDark: true,
        delay: 0.1
      },
      {
        title: "Western Power Compliance",
        desc: "All Designs Respect Single-Phase 5 KW Inverter Limits And Export Constraints; DNSP Applications Handled In-House.",
        isDark: false,
        delay: 0.2
      },
      'spacer'
    ]
  },
  {
    items: [
      {
        title: "Coastal Corrosion",
        desc: "Stainless Steel Mounting Hardware And Marine-Grade Fastenings On Coastal Installs From Fremantle To Yanchep.",
        delay: 0.2
      },
      'spacer',
      {
        title: "Paperwork And Connection",
        desc: "Synergy, Western Power, DEBS, And STC Paperwork Is Managed End-To-End By Our Perth Office. You Never See A Form.",
        delay: 0.35
      }
    ]
  }
];

const EngineeringCustomizations = () => {
  return (
    <StaggeredCardsGrid
      subtitle="Designed For The Perth Climate"
      title="Not A Generic Install"
      description="Founded In Perth In 2003 By Dr. Nikhil Jayaraj, Regen Power Is Still Privately Owned And Engineer-Led. So When You Call Years Later — Updates, Tariffs, Upgrades — You're Talking To The People Who Built Your System."
      columns={gridColumns}
      align="left"
      className="border-t border-gray-50"
    />
  );
};

export default EngineeringCustomizations;
