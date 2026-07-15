import React from 'react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

const customizationCards = [
  {
    title: "Summer Heat Derating",
    desc: "Inverters Are Specified With Headroom For Sustained 40°C+ Rooftop Temperatures, We Don't Install On Capacity Limits.",
    col: 2,
    row: 1,
    isDark: true,
    delay: 0.1
  },
  {
    title: "Coastal Corrosion",
    desc: "Stainless Steel Mounting Hardware And Marine-Grade Fastenings On Coastal Installs From Fremantle To Yanchep.",
    col: 3,
    row: 1,
    isDark: false,
    delay: 0.2
  },
  {
    title: "Perth Roofing Stock",
    desc: "Dedicated Flashing And Penetration Specs For Concrete Tile, Terracotta, And Metal Roofs, No Generic Brackets.",
    col: 1,
    row: 2,
    isDark: false,
    delay: 0.15
  },
  {
    title: "Western Power Compliance",
    desc: "All Designs Respect Single-Phase 5 KW Inverter Limits And Export Constraints; DNSP Applications Handled In-House.",
    col: 2,
    row: 2,
    isDark: false,
    delay: 0.2
  },
  {
    title: "Debs Feed-In Optimisation",
    desc: "System Orientation And Battery Logic Tuned For The WA DEBS Tariff Structure, Maximising Peak-Period Self-Consumption.",
    col: 1,
    row: 3,
    isDark: false,
    delay: 0.3
  },
  {
    title: "Paperwork And Connection",
    desc: "Synergy, Western Power, DEBS, And STC Paperwork Is Managed End-To-End By Our Perth Office. You Never See A Form.",
    col: 3,
    row: 3,
    isDark: false,
    delay: 0.35
  }
];

const EngineeringCustomizations = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">

        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <Reveal>
            <span className="text-sm md:text-2xl uppercase tracking-tight font-medium mb-1 block">
              Designed For The Perth Climate
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] text-[#63B846] leading-none tracking-tight mb-6">
              Not A Generic Install
            </h2>
          </Reveal>
          <Fade delay={0.2}>
            <p className="text-sm md:text-base leading-tight max-w-3xl">
              Founded In Perth In 2003 By Dr. Nikhil Jayaraj, Regen Power Is Still Privately Owned And Engineer-Led.
              So When You Call Years Later — Updates, Tariffs, Upgrades — You&apos;re Talking To The People Who Built Your System.
            </p>
          </Fade>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(3,434px)] md:grid-rows-[repeat(3,280px)] gap-6 justify-center">
          {customizationCards.map((card, index) => {
            const gridClass = `md:col-start-${card.col} md:row-start-${card.row}`;
            const bgClass = card.isDark ? 'bg-[#3B3A36]' : 'bg-[#f6f6f6]';
            const descColor = card.isDark ? 'text-white/90' : 'text-black';

            return (
              <Reveal
                key={index}
                delay={card.delay}
                className={`${gridClass} ${bgClass} rounded-[14px] p-8 flex flex-col justify-center h-[280px] w-full max-w-[434px] mx-auto shadow-sm hover:shadow-md transition-shadow`}
              >
                <h3 className="text-[#63B846] text-[3.125rem] leading-[1.2] mb-12 tracking-tight">
                  {card.title}
                </h3>
                <p className={`text-base ${descColor} leading-tight`}>
                  {card.desc}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringCustomizations;
