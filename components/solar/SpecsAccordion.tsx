import React from 'react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

const specItems = [
  {
    id: 1,
    title: "Panel Wattage",
    value: "440–510W",
    desc: "The Rated Output Of A Single Panel Under Ideal Conditions. Higher Wattage = More Power Per Square Metre Of Roof. Matters Most When Roof Space Is Tight.",
    showImage: true
  },
  {
    id: 2,
    title: "Panel Efficiency",
    value: "22%–24%",
    desc: "The Percentage Of Sunlight Converted Into Electricity. Premium Panels Sit At 21–22.5%. This Is Different From Wattage, It's Output Per Area, Not Per Panel."
  },
  {
    id: 3,
    title: "Temperature Coefficient",
    value: "0.26% TO –0.34% / °C",
    desc: "How Much Output Drops Per Degree Above 25°C. Critical In Perth — Rooftop Panels Regularly Hit 60°C+ In Summer. Lower (More Negative) Is Worse. N-Type TOPCon Is Meaningfully Better Than P-Type PERC Here."
  },
  {
    id: 4,
    title: "Annual Degradation Rate",
    value: "0.3–0.5%/YR (N-TYPE)",
    desc: "How Much The Panel's Output Falls Each Year As It Ages. Over 25 Years, The Difference Between 0.3%/Yr And 0.7%/Yr Compounds Into Thousands Of KWh Of Lost Generation."
  },
  {
    id: 5,
    title: "Product Vs Performance Warranty",
    value: "25 YR PRODUCT + 25–30 YR PERFORMANCE",
    desc: "These Are Two Different Things. Product Warranty Covers Defects In The Panel Itself. Performance Warranty Guarantees A Minimum Output Level Over Time. Always Check Both, Some Budget Panels Bundle A Long Performance Warranty With A Short Product Warranty."
  }
];

const SpecsAccordion = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="px-[5%] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <Reveal>
            <span className="text-sm md:text-2xl uppercase tracking-tight font-medium mb-1 block">
              Five Specs That Actually
            </span>
            <h2 className="text-4xl md:text-5xl text-[#63B846] leading-none tracking-tight mb-4">
              Affects Your Returns
            </h2>
          </Reveal>
          <Fade delay={0.2}>
            <p className="text-sm md:text-sm leading-tight max-w-3xl">
              Most Solar Brochures List A Dozen Specifications, Half Of Which Have No Meaningful Impact On Your Long-Term Savings.
              These Five Are The Ones Worth Understanding.
            </p>
          </Fade>
        </div>

        {/* Tabular Layout */}
        <div className="flex flex-col border-t border-gray-100">
          {specItems.map((spec) => (
            <div
              key={spec.id}
              className="border-b border-gray-100 py-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Column 1: Title */}
                <div className="lg:w-[280px] shrink-0">
                  <h3 className="text-2xl md:text-3xl font-medium text-black leading-tight">
                    {spec.title}
                  </h3>
                </div>

                {/* Column 2: Value & Description */}
                <div className="flex-grow max-w-xl">
                  <span className="text-xl md:text-2xl font-semibold text-black block mb-3 font-[var(--font-aeonik)]">
                    {spec.value}
                  </span>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                    {spec.desc}
                  </p>
                </div>

                {/* Column 3: Visual Graphic (if showImage) */}
                <div className="lg:w-[280px] shrink-0 flex lg:justify-end items-center">
                  {spec.showImage ? (
                    <div className="relative bg-gradient-to-br from-[#D7E6F5] to-[#EEF5FC] rounded-[20px] p-4 w-[280px] h-[120px] flex items-center justify-between border border-blue-100/30 shadow-sm">
                      {/* 3D-angled Solar Panel SVG */}
                      <div className="relative w-[110px] h-[90px] flex items-center justify-center">
                        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                          {/* Panel Frame */}
                          <polygon points="10,60 50,15 90,30 50,75" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                          <polygon points="12,58 49,17 88,31 51,72" fill="#0f172a" />
                          {/* Panel Grid Lines */}
                          <line x1="30" y1="37" x2="70" y2="52" stroke="#334155" strokeWidth="1" />
                          <line x1="20" y1="49" x2="60" y2="64" stroke="#334155" strokeWidth="1" />
                          <line x1="40" y1="26" x2="80" y2="41" stroke="#334155" strokeWidth="1" />

                          <line x1="30" y1="37" x2="30" y2="60" stroke="#334155" strokeWidth="1" />
                          <line x1="50" y1="15" x2="50" y2="75" stroke="#334155" strokeWidth="1" />
                          <line x1="70" y1="30" x2="70" y2="53" stroke="#334155" strokeWidth="1" />
                        </svg>
                      </div>

                      {/* Badge and lightning icon */}
                      <div className="flex flex-col items-center gap-2 pr-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                          <span className="text-blue-600 text-xs">⚡</span>
                        </div>
                        <span className="bg-white border border-[#D7E6F5] rounded-full px-2 py-0.5 text-[10px] font-semibold text-[#2563eb] shadow-sm font-[var(--font-aeonik)] whitespace-nowrap">
                          {spec.value.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Spacer to maintain alignment if no image (hidden on mobile, visible on desktop to keep columns aligned)
                    <div className="hidden lg:block w-[280px]" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecsAccordion;
