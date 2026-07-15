"use client";

import React from 'react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

const EngineeringCustomizations = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] max-w-6xl mx-auto">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Header Block (takes place of Row 1 in Column 1) */}
            <div className="pb-4">
              <Reveal>
                <span className="text-sm md:text-base text-gray-500 uppercase tracking-wider font-medium mb-1 block">
                  Designed For The Perth Climate
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#63B846] leading-none tracking-tight mb-4">
                  Not A Generic Install
                </h2>
              </Reveal>
              <Fade delay={0.2}>
                <p className="text-[13px] md:text-sm text-gray-600 leading-relaxed font-light">
                  Founded In Perth In 2003 By Dr. Nikhil Jayaraj, Regen Power Is Still Privately Owned And Engineer-Led. 
                  So When You Call Years Later — Updates, Tariffs, Upgrades — You&apos;re Talking To The People Who Built Your System.
                </p>
              </Fade>
            </div>

            {/* Perth Roofing Stock (Row 2) */}
            <Reveal delay={0.15} className="bg-[#f6f6f6] rounded-[24px] p-8 flex flex-col justify-center min-h-[180px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#63B846] text-2xl font-medium mb-3">
                Perth Roofing Stock
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                Dedicated Flashing And Penetration Specs For Concrete Tile, Terracotta, And Metal Roofs, No Generic Brackets.
              </p>
            </Reveal>

            {/* Debs Feed-In Optimisation (Row 3) */}
            <Reveal delay={0.3} className="bg-[#f6f6f6] rounded-[24px] p-8 flex flex-col justify-center min-h-[180px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#63B846] text-2xl font-medium mb-3">
                Debs Feed-In Optimisation
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                System Orientation And Battery Logic Tuned For The WA DEBS Tariff Structure, Maximising Peak-Period Self-Consumption.
              </p>
            </Reveal>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 h-full">
            {/* Summer Heat Derating (Row 1 - Highlight Card) */}
            <Reveal delay={0.1} className="bg-[#3B3A36] text-white rounded-[24px] p-8 flex flex-col justify-center min-h-[180px] shadow-md hover:shadow-lg transition-all flex-grow">
              <h3 className="text-[#A0CF44] text-2xl font-semibold mb-3">
                Summer Heat Derating
              </h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed font-light">
                Inverters Are Specified With Headroom For Sustained 40°C+ Rooftop Temperatures, We Don&apos;t Install On Capacity Limits.
              </p>
            </Reveal>

            {/* Western Power Compliance (Row 2) */}
            <Reveal delay={0.2} className="bg-[#f6f6f6] rounded-[24px] p-8 flex flex-col justify-center min-h-[180px] shadow-sm hover:shadow-md transition-shadow flex-grow">
              <h3 className="text-[#63B846] text-2xl font-medium mb-3">
                Western Power Compliance
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                All Designs Respect Single-Phase 5 KW Inverter Limits And Export Constraints; DNSP Applications Handled In-House.
              </p>
            </Reveal>
            
            {/* Row 3 - Blank spacer to match staggering */}
            <div className="hidden md:block min-h-[100px]" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Coastal Corrosion (Row 1) */}
            <Reveal delay={0.2} className="bg-[#f6f6f6] rounded-[24px] p-8 flex flex-col justify-center min-h-[180px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#63B846] text-2xl font-medium mb-3">
                Coastal Corrosion
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                Stainless Steel Mounting Hardware And Marine-Grade Fastenings On Coastal Installs From Fremantle To Yanchep.
              </p>
            </Reveal>

            {/* Row 2 - Blank spacer */}
            <div className="hidden md:block min-h-[100px]" />

            {/* Paperwork And Connection (Row 3) */}
            <Reveal delay={0.35} className="bg-[#f6f6f6] rounded-[24px] p-8 flex flex-col justify-center min-h-[180px] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-[#63B846] text-2xl font-medium mb-3">
                Paperwork And Connection
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-light">
                Synergy, Western Power, DEBS, And STC Paperwork Is Managed End-To-End By Our Perth Office. You Never See A Form.
              </p>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EngineeringCustomizations;
