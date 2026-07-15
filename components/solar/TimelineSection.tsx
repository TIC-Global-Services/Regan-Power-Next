"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';
import CtaButton from '@/reuseables/CtaButton';

import consultationImg from '@/assets/solar/consultation.png';
import installImg from '@/assets/solar_battery_charging.png'; // fallback or related visual

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "A 15-Minute Call With A Regen Energy Advisor. We Review Your Bill, Household Setup, And Goals. No Pressure, No Sales Script.",
    img: consultationImg
  },
  {
    num: "02",
    title: "Engineering & Design",
    desc: "Our CEC-accredited design team maps out your roof using high-res satellite imagery to size panels, strings, and inverter placement for maximum output.",
    img: installImg
  },
  {
    num: "03",
    title: "Grid Approval & Paperwork",
    desc: "We handle all grid connection applications and approvals with Synergy and Western Power, securing your export limit and feed-in approval.",
    img: consultationImg
  },
  {
    num: "04",
    title: "Licensed Installation",
    desc: "A WA-licensed installer crew completes your system installation in a single day. All work meets or exceeds clean energy council standards.",
    img: installImg
  },
  {
    num: "05",
    title: "Safety Inspection",
    desc: "An independent electrical inspector verifies the system meets WA electrical safety regulations before grid connection.",
    img: consultationImg
  },
  {
    num: "06",
    title: "Switch-On & Handover",
    desc: "We program the inverter, set up your mobile monitoring app, and switch your system on. You begin generating clean energy immediately.",
    img: installImg
  }
];

const TimelineSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

          {/* Left Column: Timeline List */}
          <div>
            <Reveal>
              <span className="text-sm md:text-2xl uppercase tracking-tight mb-1 block">
                From First Call To Switch-On
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] text-[#63B846] tracking-tight mb-6">
                Often In Two Weeks
              </h2>
            </Reveal>

            <Fade delay={0.2}>
              <p className="text-sm md:text-base leading-tight mb-8">
                Every Regen Power Install Follows The Same Six-Step Process. Our In-House Team Handles The Engineering,
                Paperwork, And Physical Installation — There&apos;s No Subcontracting And No Handoff Between Companies.
              </p>
            </Fade>



            {/* CTA Button */}
            <Reveal className="mt-8">
              <CtaButton
                href="#quote-form"
                text="Start With A Free Consultation"
                textColor="text-white"
                bgClass="bg-[#63B846]/50 backdrop-blur-md"
                borderClass="border border-white/20"
                hoverClass="hover:bg-[#63B846]"
                className="shadow-lg"
              />
            </Reveal>
          </div>

          {/* Right Column: Dynamic Portrait Image Frame */}
          <div className="lg:sticky lg:top-28 flex justify-center">
            <div className="relative w-full aspect-[4/5] max-h-[660px] max-w-[770px] rounded-[20px] overflow-hidden shadow-md">
              <Image
                src={steps[activeStep].img}
                alt={steps[activeStep].title}
                fill
                className="object-cover transition-all duration-700 ease-in-out scale-100 hover:scale-103"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
