"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';
import stringBg from '@/assets/solar/string.png';
import hybridBg from '@/assets/solar_battery_charging.png'; // Using related high-quality asset for hybrid
import microBg from '@/assets/5_way.png'; // Using related high-quality asset for micro

const inverterData = [
  {
    id: 'string',
    name: 'String Inverter',
    title: 'String',
    bg: stringBg,
    cards: [
      { label: 'How It Works', text: 'One Central Inverter That Handles Both Solar Conversion And Battery Charging In A Single Unit.' },
      { label: 'Best For', text: 'Straightforward Roofs With A Single Orientation. No Battery Planned.' },
      { label: 'Efficiency', text: 'Achieves 96.5–98% Efficiency, Maximizing Energy Output With Minimal Power Loss.' },
      { label: 'Brands We Install', text: 'Fronius Primo / Symo, SMA Sunny Boy, Sungrow' },
      { label: 'Monitoring', text: 'Whole-System (String-Level) Via Inverter App.' }
    ]
  },
  {
    id: 'hybrid',
    name: 'Hybrid Inverter',
    title: 'Hybrid',
    bg: hybridBg,
    cards: [
      { label: 'How It Works', text: 'A Central Inverter That Converts Solar Energy And Directs It to Appliances, Grid, Or Stores It In A Battery.' },
      { label: 'Best For', text: 'Homes Installing Solar And A Battery Together, Or Planning to Add a Battery Soon.' },
      { label: 'Efficiency', text: 'Typically 97%+ Efficiency, With Integrated Battery Charging Protocols.' },
      { label: 'Brands We Install', text: 'Fronius GEN24, Sungrow SH, Sigenergy' },
      { label: 'Monitoring', text: 'Whole-System + Battery Charging/Discharging Status In Real Time.' }
    ]
  },
  {
    id: 'micro',
    name: 'Micro Inverter',
    title: 'Micro',
    bg: microBg,
    cards: [
      { label: 'How It Works', text: 'Small Inverters Attached to Each Individual Solar Panel, Converting DC to AC On the Roof.' },
      { label: 'Best For', text: 'Complex Roofs With Multiple Orientations, Or Shadow Obstructions from Trees/Chimneys.' },
      { label: 'Efficiency', text: '96.5%+ Efficiency, Preventing One Shaded Panel from Dragging Down the Entire System.' },
      { label: 'Brands We Install', text: 'Enphase IQ8 Series' },
      { label: 'Monitoring', text: 'Panel-Level Monitoring, Allowing You to See the Performance of Every Single Panel.' }
    ]
  }
];

const InverterSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="px-[5%]">

        {/* Split Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-12">
          <div className="lg:max-w-2xl">
            <Reveal>
              <span className="text-sm md:text-2xl uppercase tracking-wider font-medium mb-1 block">
                String, Hybrid Or Micro
              </span>
              <h2 className="text-4xl md:text-5xl text-[#63B846] leading-none tracking-tight">
                Which Inverter Is Right For You
              </h2>
            </Reveal>
          </div>
          <div className="lg:max-w-xl">
            <Fade delay={0.2}>
              <p className="text-sm leading-tight">
                The Inverter Is The Brain Of Your Solar System — Turning DC From Panels Into Usable AC Power.
                It Also Manages Energy Flow, Battery Charging, And EV Integration. There Are Three Main Types,
                And The Right One Depends On Your Roof, Battery Plans, And Future Energy Needs.
              </p>
            </Fade>
          </div>
        </div>


        {/* Slide Frame */}
        <div className="relative rounded-[32px] overflow-hidden min-h-[550px] md:h-[580px] flex flex-col justify-between p-6 md:p-10 z-10">

          {/* Backdrop Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={inverterData[activeTab].bg}
              alt={inverterData[activeTab].name}
              fill
              className="object-cover transition-all duration-700 ease-in-out"
              placeholder="blur"
            />
            {/* Dark/Gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/35" />
          </div>

          {/* Large Header Title inside slide */}
          <div className="relative z-10 mt-4">
            <h3 className="text-white text-5xl md:text-7xl lg:text-[6rem] tracking-tight">
              {inverterData[activeTab].title}
            </h3>
          </div>

          {/* Frosted Glass Information Cards Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-auto">
            {inverterData[activeTab].cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/30 backdrop-blur-md border border-white/15 rounded-2xl p-5 hover:bg-white/15 transition-colors"
              >
                <h4 className="text-white text-xl uppercase tracking-tight mb-2">
                  {card.label}
                </h4>
                <p className="text-white text-sm leading-tight">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {inverterData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`h-2.5 rounded-full transition-all duration-300
                ${activeTab === index ? 'w-8 bg-[#63B846]' : 'w-2.5 bg-gray-300'}
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default InverterSlider;
