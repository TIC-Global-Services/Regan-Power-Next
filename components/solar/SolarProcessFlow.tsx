"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import SectionHeader from '@/reuseables/SectionHeader';
import img01 from '@/assets/solar/foursteps/01.png';
import img02 from '@/assets/solar/foursteps/02.png';
import img03 from '@/assets/solar/foursteps/03.png';
import img04 from '@/assets/solar/foursteps/04.png';

const steps = [
  {
    num: "01",
    title: "Sunlight Hits The Panels",
    desc: "Photovoltaic Cells Inside Each Panel Absorb Sunlight And Convert It Into Direct Current (DC) Electricity. A Typical Modern Panel Generates 420–450 Watts Under Peak Sun Conditions.",
    img: img01,
  },
  {
    num: "02",
    title: "DC Flows To The Inverter",
    desc: "DC Electricity Travels Down The String Cables To Your Inverter. The Inverter Converts DC Into Alternating Current (AC) — The Form Of Electricity Your Appliances, Air-Conditioning, And Lights Actually Use.",
    img: img02,
  },
  {
    num: "03",
    title: "Your Home Uses It First",
    desc: "AC Power Flows Into Your Switchboard And Powers Whatever's Running Right Now — Fridge, Pool Pump, Air-Con, EV Charger. This Is Where You Save The Most, Because You're Replacing Grid Electricity In Real Time.",
    img: img03,
  },
  {
    num: "04",
    title: "Surplus Exports To Grid",
    desc: "Anything Your Home Isn't Using Is Exported To Synergy For A Feed-In Credit (DEBS) — Or, If You Have A Battery, Stored For Use After Sundown. A Well-Designed System Maximises Self-Consumption Before Export.",
    img: img04,
  }
];

const SolarProcessFlow = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-[5%]">
        {/* Section Header */}
        <SectionHeader
          subtitle="Sun To Synergy Bill"
          title="In Four Steps"
          align="center"
          className="mb-16"
        />

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.15} className="flex flex-col h-full">
              {/* Graphic container */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  className="object-contain"
                  placeholder="blur"
                />
              </div>

              {/* Text detail */}
              <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 flex-grow">
                {/* Row 1 Col 1: Number */}
                <div className="text-2xl text-[#63B846] font-semibold leading-none self-baseline">
                  {step.num}
                </div>
                {/* Row 1 Col 2: Title */}
                <h3 className="text-lg md:text-xl font-medium text-black leading-tight self-baseline">
                  <span>{step.title}</span>
                  {index < steps.length - 1 && (
                    <span className="hidden lg:inline text-black font-bold tracking-tighter text-3xl ml-2">≫</span>
                  )}
                </h3>
                {/* Row 2 Col 1: Spacer */}
                <div />
                {/* Row 2 Col 2: Description */}
                <p className="text-base text-black leading-tight font-normal">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProcessFlow;
