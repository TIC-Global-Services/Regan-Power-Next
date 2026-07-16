import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/reuseables/SectionHeader';
import Reveal from '@/reuseables/Reveal';

import specPanelWattage from '@/assets/solar/specs_panel_wattage.png';
import specEfficiency from '@/assets/solar/specs_efficiency.png';
import specTemperature from '@/assets/solar/specs_temperature.png';
import specAnnual from '@/assets/solar/specs_annual.png';
import specWarranty from '@/assets/solar/specs_warranty.png';

const specItems = [
  {
    id: 1,
    title: "Panel Wattage",
    value: "440–510W",
    desc: "The Rated Output Of A Single Panel Under Ideal Conditions. Higher Wattage = More Power Per Square Metre Of Roof. Matters Most When Roof Space Is Tight.",
    image: specPanelWattage
  },
  {
    id: 2,
    title: "Panel Efficiency",
    value: "22%–24%",
    desc: "The Percentage Of Sunlight Converted Into Electricity. Premium Panels Sit At 21–22.5%. This Is Different From Wattage, It's Output Per Area, Not Per Panel.",
    image: specEfficiency
  },
  {
    id: 3,
    title: "Temperature Coefficient",
    value: "0.26% TO –0.34% / °C",
    desc: "How Much Output Drops Per Degree Above 25°C. Critical In Perth — Rooftop Panels Regularly Hit 60°C+ In Summer. Lower (More Negative) Is Worse. N-Type TOPCon Is Meaningfully Better Than P-Type PERC Here.",
    image: specTemperature
  },
  {
    id: 4,
    title: "Annual Degradation Rate",
    value: "0.3–0.5%/YR (N-TYPE)",
    desc: "How Much The Panel's Output Falls Each Year As It Ages. Over 25 Years, The Difference Between 0.3%/Yr And 0.7%/Yr Compounds Into Thousands Of KWh Of Lost Generation.",
    image: specAnnual
  },
  {
    id: 5,
    title: "Product Vs Performance Warranty",
    value: "25 YR PRODUCT + 25–30 YR PERFORMANCE",
    desc: "These Are Two Different Things. Product Warranty Covers Defects In The Panel Itself. Performance Warranty Guarantees A Minimum Output Level Over Time. Always Check Both, Some Budget Panels Bundle A Long Performance Warranty With A Short Product Warranty.",
    image: specWarranty
  }
];

const SpecsAccordion = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-300">
      <div className="px-[5%] mx-auto">

        {/* Header */}
        <SectionHeader
          subtitle="Five Specs That Actually"
          title="Affects Your Returns"
          description="Most Solar Brochures List A Dozen Specifications, Half Of Which Have No Meaningful Impact On Your Long-Term Savings. These Five Are The Ones Worth Understanding."
          align="left"
          className="mb-16"
        />

        {/* Tabular Layout */}
        <div className="flex flex-col border-t border-gray-300">
          {specItems.map((spec, idx) => (
            <Reveal key={spec.id} delay={idx * 0.1}>
              <div
                className="border-b border-gray-300 py-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Column 1: Title */}
                  <div className="lg:w-[280px] shrink-0">
                    <h3 className="text-2xl md:text-[2.5rem] text-black leading-tight">
                      {spec.title}
                    </h3>
                  </div>

                  {/* Column 2: Value & Description */}
                  <div className="flex-grow max-w-md">
                    <span className="text-xl md:text-2xl text-black block mb-3 font-[var(--font-aeonik)]">
                      {spec.value}
                    </span>
                    <p className="text-sm md:text-base leading-tight">
                      {spec.desc}
                    </p>
                  </div>

                  {/* Column 3: Visual Graphic */}
                  <div className="lg:w-[280px] shrink-0 flex lg:justify-end items-center">
                    <div className="relative w-[280px] h-[120px] rounded-[20px] overflow-hidden">
                      <Image
                        src={spec.image}
                        alt={spec.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecsAccordion;
