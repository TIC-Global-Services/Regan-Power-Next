'use client';

import React from 'react';
import Image from 'next/image';
import Fade from '@/reuseables/fade';
import Reveal from '@/reuseables/Reveal';

import sigenergy from '@/assets/evcharging/sigenergy_trustedinstaller-1.png';
import fronius from '@/assets/evcharging/fronius_trustedinstaller-2.png';
import goodwe from '@/assets/evcharging/goodwe_trustedinstaller-3.png';
import alphaess from '@/assets/evcharging/alphaess_trustedinstaller-4.png';

interface InstallerBrand {
  name: string;
  logo: any;
  title: string;
  description: string;
  specs?: string;
  colSpan: string;
}

const brands: InstallerBrand[] = [
  {
    name: 'Sigenergy',
    logo: sigenergy,
    title: 'Sigenergy, For The Buyer Thinking 10 Years Ahead',
    description: 'SigenStor Is An All-In-One Solar, Battery, And EV Charging System With Bidirectional Charging And Advanced Energy Management. Designed For Future-Ready Homes.',
    // specs: '7–22 KW AC | 25 KW DC Bidirectional | V2H & V2G Ready',
    colSpan: 'lg:col-span-8',
  },
  {
    name: 'Fronius',
    logo: fronius,
    title: 'Fronius Wattpilot Solar-Smart, Beautifully Built',
    description: 'Solar-integrated EV charging, built by Fronius.Up to 22 kW | Smart energy management',  
    colSpan: 'lg:col-span-4',
  },
  {
    name: 'Goodwe',
    logo: goodwe,
    title: 'Goodwe HCA G2 The Smart-Value All-Rounder',
    description: 'Smart EV Charging Built For Goodwe Solar Systems.',
    specs: 'Up To 22 KW | 5-Year Warranty',
    colSpan: 'lg:col-span-4',
  },
  {
    name: 'AlphaESS',
    logo: alphaess,
    title: 'Alpha ESS, For Alpha Battery Owners',
    description: 'Designed For Alpha ESS Battery Homes, The SMILE-G3-EVCT11 Brings Solar, Battery, And EV Charging Together In One AlphaCloud Platform. Intelligent Charging Modes Optimise Solar Usage, Off-Peak Tariffs, And Charging Performance.',
    colSpan: 'lg:col-span-8',
  },
];

const TrustedInstaller = () => {
  return (
    <Fade>
      <section className="py-16 md:py-24 bg-white">
        <div className="px-[5%]">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto flex flex-col gap-2">
            <div className="leading-[1.1]">
              <h2 className="text-sm md:text-2xl font-normal text-black  tracking-tighter">
                More Than Tesla-Five Charger Brands
              </h2>
              <p className="text-[#63B846] font-light text-[2.5rem] md:text-[3.5rem] lg:text-[4.375rem] tracking-tighter">
                One Trusted Installer
              </p>
            </div>
            <p className="text-xs md:text-sm leading-relaxed font-normal">
              Different Homes, Different EVs, Different Energy Setups. We Carry The Brands We Trust To Deliver — And We&apos;re Not Commission-Driven To Push One Over Another. Here&apos;s What Each Does Best.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {brands.map((brand, index) => (
              <Reveal key={index} delay={index * 0.1} className={brand.colSpan}>
                <div className="bg-[#EEF6EB] rounded-[24px] p-8 md:p-10 flex flex-col justify-between min-h-[340px] md:min-h-[380px] h-full hover:shadow-md transition-shadow duration-300">
                  {/* Top: Logo */}
                  <div className="relative w-36 h-14 mb-8">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-cover object-left"
                    />
                  </div>

                  {/* Bottom: Text Content */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <h3 className="text-xl md:text-[1.90rem] font-medium text-black tracking-tight leading-snug">
                      {brand.title}
                    </h3>
                    <p className="text-sm md:text-lg text-black/70 max-w-2xl leading-[1.2]">
                      {brand.description}
                    </p>
                    {/* {brand.specs && (
                      <p className="text-xs md:text-sm font-semibold text-black/80 mt-2 tracking-wide">
                        {brand.specs}
                      </p>
                    )} */}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default TrustedInstaller;