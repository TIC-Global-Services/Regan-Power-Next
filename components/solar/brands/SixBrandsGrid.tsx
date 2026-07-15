import React from 'react';
import StaggeredCardsGrid, { ColumnConfig } from '@/reuseables/StaggeredCardsGrid';

const gridColumns: ColumnConfig[] = [
  {
    items: [
      {
        title: "Jinko Solar",
        subtitle: "China · Global",
        middleTitle: "Tiger Neo N-Type TOPCon · 440W–460W",
        desc: "The World's Largest Module Manufacturer. Their Tiger Neo Series 2 Is The Most-Installed N-Type Panel In Australia — Reliable, Proven, And Supported By Extensive Local Service Infrastructure.",
        delay: 0.15
      },
      'spacer',
      {
        title: "Risen Energy",
        subtitle: "China · Global",
        middleTitle: "Titan Series — 430W–450W",
        desc: "A Long-Serving Tier-1 With A Quiet Track Record. The Titan Series Combines Heterojunction And TOPCon Formats, And Risen Has Invested Heavily In Australian Service Partnerships.",
        delay: 0.3
      }
    ]
  },
  {
    items: [
      {
        title: "LONGi",
        subtitle: "China · Global",
        middleTitle: "Hi-MO 7 & Hi-MO X10 — 440W–450W",
        desc: "The R&D Leader In Monocrystalline Technology. LONGi's Hi-MO X10 Range Uses Back-Contact (HPBC) Cell Design For Top-Tier Efficiency And A Cleaner, Grid-Free Aesthetic.",
        isDark: true,
        delay: 0.1
      },
      {
        title: "Canadian Solar",
        subtitle: "Canada · Global",
        middleTitle: "TOPHiKu6 & TOPBiHiKu6 — 435W–450W",
        desc: "Thirty Years In The Industry. Canadian Solar's TOPBiHiKu Lines Offer Bifacial Performance And One Of The Best Temperature Coefficients In Its Class — Particularly Relevant In Perth.",
        isDark: false,
        delay: 0.2
      },
      'spacer'
    ]
  },
  {
    items: [
      'spacer',
      {
        title: "JA Solar",
        subtitle: "China · Global",
        middleTitle: "DeepBlue 4.0 Pro — 425W–450W",
        desc: "Consistently Ranked Top-3 Globally For Shipments And Bankability. The DeepBlue 4.0 Pro Delivers Strong Performance-Per-Dollar With Solid Warranty Support.",
        delay: 0.2
      },
      {
        title: "Trina Solar",
        subtitle: "China · Global",
        middleTitle: "Vertex S+ — 430W–450W",
        desc: "One Of The Strongest Local Service Networks In WA. The Vertex S+ All-Black Line Is A Popular Choice For Homeowners Who Care About How The Array Looks From The Street.",
        delay: 0.35
      }
    ]
  }
];

const SixBrandsGrid = () => {
  return (
    <StaggeredCardsGrid
      subtitle="Six Tier-1 Panel Brands"
      title="All Built For Perth."
      badge="SIX TIER-1 BRAND CARDS"
      columns={gridColumns}
      align="center"
      className="border-t border-gray-50"
      spacerHeightClass="h-[310px]"
      cardHeightClass="h-[310px] md:h-[320px]"
    />
  );
};

export default SixBrandsGrid;
