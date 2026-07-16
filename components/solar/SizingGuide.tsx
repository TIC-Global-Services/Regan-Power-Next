"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import CtaButton from '@/reuseables/CtaButton';
import SectionHeader from '@/reuseables/SectionHeader';

import dailyPowerImg from '@/assets/solar/howbig/dailypower.png';
import householdProfileImg from '@/assets/solar/howbig/householdprofile.png';
import singleOrThreePhaseImg from '@/assets/solar/howbig/singleorthreephase.png';
import roofSpaceImg from '@/assets/solar/howbig/roofspace.png';

const tableRows = [
  { dailyUse: "Under 15 kWh/day", size: "5 kW system", household: "1–2 people, gas hot water, modest a/c", phase: "Single-phase" },
  { dailyUse: "15–25 kWh/day", size: "6.6 kW system", household: "3–4 people, ducted a/c, average Perth home", phase: "Single-phase (standard)" },
  { dailyUse: "25–35 kWh/day", size: "10 kW system", household: "4–5 people, pool, electric hot water, full a/c", phase: "Three-phase required" },
  { dailyUse: "35+ kWh/day", size: "13 kW+ system", household: "Large home, EV charging, multiple heat pumps", phase: "Three-phase required" }
];

const cards = [
  {
    title: "Your Daily Power Use (KWh/Day)",
    desc: "Look At Your Most Recent Synergy Bill. The Total KWh Used ÷ Days In The Billing Period = Your Average Daily Use. Typical Perth Households Sit Between 15 And 30 KWh/Day.",
    img: dailyPowerImg
  },
  {
    title: "Your Household Profile",
    desc: "Household Size, Daytime Occupancy, Ducted Vs Split-System A/C, Pool Pumps, Electric Hot Water, And EV Charging, Even One Of These Can Noticeably Increase Energy Use.",
    img: householdProfileImg
  },
  {
    title: "Single Or Three-Phase?",
    desc: "One Main Switch = Single-Phase; Three Main Switches In A Row = Three-Phase. This Determines The Maximum Solar System Size We Can Install.",
    img: singleOrThreePhaseImg
  },
  {
    title: "Available Roof Space",
    desc: "Modern 440W Panels Are Roughly 1.95m × 1.1m, Or About 2.15m² Each. A 6.6kW System Needs ~32m² Of Usable, Unshaded North-Leaning Roof Space.",
    img: roofSpaceImg
  }
];

const SizingGuide = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">

        {/* Header Block */}
        <SectionHeader
          subtitle="How Big Should My"
          title="Solar System Be?"
          description="The Right System Size Depends On Four Things: Your Daily Power Use, Your Household Size, The Phase Type Of Your Home's Power Supply, And How Much Usable Roof Space You Have. Here's How To Work It Out."
          align="center"
          className="mx-auto mb-8"

        />

        {/* CTA Link */}
        <div className="text-center">
          <Reveal delay={0.3} className="inline-block">
            <CtaButton
              href="#quote-form"
              text="Get A Sizing Recommendation For My Home"
              textColor="text-black"
            />
          </Reveal>
        </div>

        {/* Table layout */}
        <div className="overflow-x-auto rounded-[24px] mt-12 mb-16 max-w-4xl mx-auto overflow-hidden">
          <table className="w-full border-collapse text-center bg-white">
            <thead>
              <tr className="bg-[#A0CF44] text-black font-[var(--font-aeonik)]">
                <th className="p-5 text-lg md:text-2xl font-normal border-r border-b border-black w-1/4">Daily use</th>
                <th className="p-5 text-lg md:text-2xl font-normal border-r border-b border-black w-1/4">Recommended size</th>
                <th className="p-5 text-lg md:text-2xl font-normal border-r border-b border-black w-1/4">Typical household</th>
                <th className="p-5 text-lg md:text-2xl font-normal border-b border-black w-1/4">Phase required</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, idx) => {
                const isLastRow = idx === tableRows.length - 1;
                return (
                  <tr key={idx} className="bg-[#EEF6EB]">
                    <td className={`p-5 text-xl text-black border-r border-black ${isLastRow ? '' : 'border-b'}`}>{row.dailyUse}</td>
                    <td className={`p-5 text-xl text-black border-r border-black ${isLastRow ? '' : 'border-b'}`}>{row.size}</td>
                    <td className={`p-5 text-xl text-black font-light border-r border-black ${isLastRow ? '' : 'border-b'}`}>{row.household}</td>
                    <td className={`p-5 text-xl text-black font-light ${isLastRow ? '' : 'border-b border-black'}`}>{row.phase}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.15}
              className="relative flex flex-col justify-end rounded-[24px] overflow-hidden group min-h-[380px]"
            >
              {/* Card Image - Full Card Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                />
                {/* Dark gradient overlay to make white text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>

              {/* Card Content - Glassmorphic Overlay sitting flush at bottom */}
              <div className="relative z-10 w-full bg-black/5 backdrop-blur-md p-5 mt-auto text-left">
                <h4 className="text-white text-xl leading-tight mb-2">
                  {card.title}
                </h4>
                <p className="text-base text-white leading-tight font-light">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SizingGuide;
