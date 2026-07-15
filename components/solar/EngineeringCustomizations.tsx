import React from 'react';
import Reveal from '@/reuseables/Reveal';
import SectionHeader from '@/reuseables/SectionHeader';

const column1Cards = [
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
];

const column2Cards = [
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
  }
];

const column3Cards = [
  {
    title: "Coastal Corrosion",
    desc: "Stainless Steel Mounting Hardware And Marine-Grade Fastenings On Coastal Installs From Fremantle To Yanchep.",
    delay: 0.2
  },
  {
    title: "Paperwork And Connection",
    desc: "Synergy, Western Power, DEBS, And STC Paperwork Is Managed End-To-End By Our Perth Office. You Never See A Form.",
    delay: 0.35
  }
];

const EngineeringCustomizations = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">

        {/* Header Block */}
        <SectionHeader
          subtitle="Designed For The Perth Climate"
          title="Not A Generic Install"
          description="Founded In Perth In 2003 By Dr. Nikhil Jayaraj, Regen Power Is Still Privately Owned And Engineer-Led. So When You Call Years Later — Updates, Tariffs, Upgrades — You're Talking To The People Who Built Your System."
          align="left"
          className="max-w-3xl mb-12"
        />

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr mx-auto">

          {/* Column 1 */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Blank spacer to match staggering (takes place of Row 1) */}
            <div className="hidden md:block h-[280px]" />

            {column1Cards.map((card, index) => (
              <Reveal
                key={index}
                delay={card.delay}
                className="bg-[#f6f6f6] rounded-[14px] p-6 md:p-7 flex flex-col justify-between h-[280px] w-full max-w-[434px] mx-auto shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-[#63B846] text-[3.125rem] leading-[1.0] tracking-tighter mb-2">
                  {card.title}
                </h3>
                <p className="text-base text-black leading-snug mt-auto">
                  {card.desc}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 h-full">
            {column2Cards.map((card, index) => {
              const bgClass = card.isDark ? 'bg-[#3B3A36]' : 'bg-[#f6f6f6]';
              const descColor = card.isDark ? 'text-white/90' : 'text-black';

              return (
                <Reveal
                  key={index}
                  delay={card.delay}
                  className={`${bgClass} rounded-[14px] p-6 md:p-7 flex flex-col justify-between h-[280px] w-full max-w-[434px] mx-auto shadow-sm hover:shadow-md transition-shadow`}
                >
                  <h3 className="text-[#63B846] text-[3.125rem] leading-[1.0] tracking-tighter mb-2">
                    {card.title}
                  </h3>
                  <p className={`text-base ${descColor} leading-snug mt-auto`}>
                    {card.desc}
                  </p>
                </Reveal>
              );
            })}
            {/* Row 3 - Blank spacer to match staggering */}
            <div className="hidden md:block h-[280px]" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Coastal Corrosion (Row 1) */}
            <Reveal
              delay={column3Cards[0].delay}
              className="bg-[#f6f6f6] rounded-[14px] p-6 md:p-7 flex flex-col justify-between h-[280px] w-full max-w-[434px] mx-auto shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-[#63B846] text-[3.125rem] leading-[1.0] tracking-tighter mb-2">
                {column3Cards[0].title}
              </h3>
              <p className="text-base text-black leading-snug mt-auto">
                {column3Cards[0].desc}
              </p>
            </Reveal>

            {/* Row 2 - Blank spacer */}
            <div className="hidden md:block h-[280px]" />

            {/* Paperwork And Connection (Row 3) */}
            <Reveal
              delay={column3Cards[1].delay}
              className="bg-[#f6f6f6] rounded-[14px] p-6 md:p-7 flex flex-col justify-between h-[280px] w-full max-w-[434px] mx-auto shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-[#63B846] text-[3.125rem] leading-[1.0] tracking-tighter mb-2">
                {column3Cards[1].title}
              </h3>
              <p className="text-base text-black leading-tight mt-auto">
                {column3Cards[1].desc}
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringCustomizations;
