"use client";

import React from 'react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

const tickerItems = [
  "45,000+ Solar",
  "3000+ Storage Installations",
  "23 Years In Perth",
  "4.9★ Rating (Google + ProductReview)"
];

const SpacerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-black shrink-0 mx-2">
    <path d="M9.27282 4.18688C7.91735 5.54235 5.59314 5.41345 5.59314 5.41345C5.59314 5.41345 5.46423 3.08532 6.8197 1.72985C8.17517 0.374386 10.5033 0.503292 10.5033 0.503292C10.5033 0.503292 10.6283 2.83142 9.27282 4.18688Z" />
    <path d="M4.18689 1.73379C5.54236 3.08926 5.41345 5.41738 5.41345 5.41738C5.41345 5.41738 3.08923 5.54629 1.72985 4.19082C0.374386 2.83535 0.503292 0.511134 0.503292 0.511134C0.503292 0.511134 2.83142 0.378322 4.18689 1.73379Z" />
    <path d="M1.7335 6.8197C3.08897 5.46423 5.41319 5.59314 5.41319 5.59314C5.41319 5.59314 5.54209 7.92126 4.18662 9.27673C2.83116 10.6322 0.503031 10.5033 0.503031 10.5033C0.503031 10.5033 0.378031 8.17517 1.7335 6.8197Z" />
    <path d="M6.81579 9.27282C5.46032 7.91735 5.58923 5.58923 5.58923 5.58923C5.58923 5.58923 7.91735 5.46032 9.27282 6.81579C10.6283 8.17126 10.4994 10.4994 10.4994 10.4994C10.4994 10.4994 8.17517 10.6283 6.81579 9.27282Z" />
  </svg>
);

const SolarStatsAndIntro = () => {
  const renderMarqueeList = (ariaHidden = false) => (
    <div 
      className="flex shrink-0 items-center gap-6 md:gap-8 px-3 md:px-4" 
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {tickerItems.map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-3 text-black text-xl md:text-3xl font-normal tracking-tight">
            <span className="text-[#63B846] font-normal">{item.split(" ")[0]}</span>
            <span className="text-black font-normal">{item.split(" ").slice(1).join(" ")}</span>
          </div>
          <SpacerIcon />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <section className="bg-white overflow-hidden py-10 md:py-16">
      {/* Custom Styles for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }
      `}} />

      {/* Horizontal Ticker */}
      <div className="relative w-full bg-white py-4 overflow-hidden select-none">
        {/* Fades at the ends */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        {/* Scrolling Content Track */}
        <div className="animate-marquee-scroll">
          {renderMarqueeList(false)}
          {renderMarqueeList(true)}
        </div>
      </div>

      {/* Concept Introduction Text Block */}
      <div className="px-[5%] max-w-5xl mx-auto mt-16 md:mt-24 text-center">
        <Reveal>
          <span className="text-sm md:text-base text-gray-500 uppercase tracking-wider font-medium mb-2 block">
            A Solar System Is Two Things
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[4rem] font-bold text-[#63B846] leading-none tracking-tight mb-8">
            Working Together.
          </h2>
        </Reveal>

        <Fade delay={0.2} duration={0.8}>
          <div className="text-black text-lg md:text-2xl font-light leading-relaxed tracking-wide text-left max-w-4xl mx-auto space-y-6">
            <p>
              At its simplest, a rooftop solar system is a partnership between two pieces of hardware:
              the panels that generate energy from the sun, and the inverter that converts it into power your
              home can actually use. Everything else — mounting rails, isolators, monitoring, cabling — exists
              to support those two components.
            </p>
            <p>
              The quality of the panels decides <span className="font-medium text-black">how much energy you generate</span>. The quality of
              the inverter decides <span className="font-medium text-black">how much of that energy reaches your appliances</span>,
              year after year, through 40°C Perth summers.
            </p>
            <p className="text-black/60">
              Getting both right is the difference between a system that pays back in five years and one that
              underperforms for twenty-five. Regen Power only installs Tier-1 panels paired with premium
              European inverters — no compromises, no budget substitutes.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default SolarStatsAndIntro;
