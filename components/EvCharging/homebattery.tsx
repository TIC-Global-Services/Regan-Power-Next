'use client';

import React from 'react';
import Image from 'next/image';
import Fade from '@/reuseables/fade';
import Reveal from '@/reuseables/Reveal';
import CtaButton from '@/reuseables/CtaButton';

import sigenSetup from '@/assets/evcharging/home_battery_img.png';

const bulletPoints = [
  '25 KW Bidirectional Power',
  'Up To 100+ KWh Of Vehicle Storage As Backup',
  'V2H + V2G Ready',
];

const HomeBattery = () => {
  return (
    <Fade>
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
            {/* Left Side: Product Render Image */}
            <Reveal>
              <div className="relative w-full aspect-[3/3] max-w-[500px] mx-auto pointer-events-none">
                <Image
                  src={sigenSetup}
                  alt="Sigenergy SigenStor Home Battery and EV Charger setup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>

            {/* Right Side: Text & Details */}
            <Reveal delay={0.15}>
              <div className="flex flex-col gap-2 max-w-[620px] justify-start">
                {/* Heading */}
                <div className="leading-[1.1]">
                  <h2 className="text-2xl md:text-[2.125rem] font-medium text-black tracking-tight mb-1">
                    Your EV Becomes
                  </h2>
                  <p className="text-[#63B846] font-light text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tighter leading-none">
                    A Home Battery
                  </p>
                </div>

                {/* Description Paragraphs */}
                <div className="flex flex-col gap-4 text-sm md:text-sm  leading-[1.2] font-normal">
                  <p>
                    Vehicle-To-Home (V2H) Lets Your Car Push Energy Back Into Your Home — Or Even Back
                    To The Grid. With A 75–100 KWh Battery On Wheels, Your EV Can Power The House For
                    Days During An Outage, Or Shift Load Away From Peak Grid Pricing Automatically.
                  </p>
                  <p>
                    Sigenergy&apos;s SigenStor With The EV DC Charging Module Is The Only System In
                    Our Range That Supports True Bidirectional 25kW DC Charging Today. It&apos;s
                    V2X-Ready, Which Means As Carmakers Roll Out V2H/V2G Firmware To Compatible
                    Vehicles, Your System Already Speaks The Language.
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="flex flex-col my-2">
                  {bulletPoints.map((point, index) => (
                    <li
                      key={index}
                      className="text-sm md:text-sm font-semibold text-black tracking-tight flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-2">
                  <CtaButton
                    href="#contact"
                    text="Talk To Us About Sigenergy"
                    textColor="text-black"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default HomeBattery;