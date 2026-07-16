"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';
import CtaButton from '@/reuseables/CtaButton';
import SectionHeader from '@/reuseables/SectionHeader';

import consultationImg from '@/assets/solar/consultation.png';

const TimelineSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">

            {/* Top: Header + CTA */}
            <div>
              <SectionHeader
                subtitle="From First Call To Switch-On"
                title="Often In Two Weeks"
                description="Every Regen Power Install Follows The Same Six-Step Process. Our In-House Team Handles The Engineering, Paperwork, And Physical Installation — There's No Subcontracting And No Handoff Between Companies."
                align="left"
              />

              <Reveal className="mt-8">
                <CtaButton
                  href="#quote-form"
                  text="Start With A Free Consultation"
                  textColor="text-black"
                />
              </Reveal>
            </div>

            {/* Bottom: Free Consultation blurb */}
            <Fade delay={0.3}>
              <div className="mt-16 lg:mt-24">
                <h3 className="text-2xl md:text-[2rem] font-normal text-black mb-3 tracking-tight">
                  Free Consultation
                </h3>
                <p className="text-sm md:text-xl leading-tight tracking-tight max-w-md">
                  A 15-Minute Call With A Regen Energy Advisor. We Review Your Bill, Household Setup, And Goals. No Pressure, No Sales Script.
                </p>
              </div>
            </Fade>

          </div>

          {/* Right Column: Portrait Image */}
          <div className="lg:sticky lg:top-28 flex justify-center">
            <div className="relative w-full aspect-[4/6] max-h-[770px] max-w-[660px] rounded-[20px] overflow-hidden shadow-md">
              <Image
                src={consultationImg}
                alt="Free consultation with a Regen Energy Advisor"
                fill
                className="object-cover"
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
