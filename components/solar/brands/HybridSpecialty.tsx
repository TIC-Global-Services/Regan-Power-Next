import React from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';
import SectionHeader from '@/reuseables/SectionHeader';
import hybridImg from '@/assets/solar/brands-tech/hybridinverters.png';

const HybridSpecialty = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Heading and Explanation */}
          <div className="flex flex-col justify-center text-left">
            <SectionHeader
              subtitle="Why We Specialize In"
              title="Hybrid Inverters"
              align="left"
              subtitleClass="text-base md:text-2xl font-medium normal-case"
              titleClass="text-4xl md:text-5xl lg:text-[4.5rem] font-normal leading-none tracking-tight mb-6 text-[#63B846]"
            />
            <Fade delay={0.2}>
              <p className="text-sm md:text-xl leading-tight">
                Solar Today Is More Than Panels — It’s Batteries, EVs, And Smarter Energy Use. Hybrid Inverters Bring It All Together. We’ve Narrowed Our Range To A Few Premium Hybrid Brands — Compliant, Battery-Ready, And Locally Supported. If A Battery Isn’t Needed, We Use Proven String Inverters Instead. We&apos;ll Guide You To The Right Setup.
              </p>
            </Fade>
          </div>

          {/* Right Column: Wall Renders Image */}
          <Reveal className="relative w-full aspect-[5/5] rounded-[14px] overflow-hidden ">
            <Image
              src={hybridImg}
              alt="Hybrid Inverters Wall Setup"
              fill
              className="object-cover"
            />
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default HybridSpecialty;
