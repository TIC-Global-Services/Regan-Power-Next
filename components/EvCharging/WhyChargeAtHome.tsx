'use client';

import React from 'react';
import Image from 'next/image';
import Fade from '@/reuseables/fade';
import Reveal from '@/reuseables/Reveal';

import cheaperPerKm from '@/assets/evcharging/cheaper_per_km.png';
import alwaysFullCharge from '@/assets/evcharging/always_fullchargein_morning.png';
import youAreInControl from '@/assets/evcharging/you_arein_control.png';
import batteryBoost from '@/assets/evcharging/battery_bost.png';

const benefits = [
  {
    title: 'Cheaper Per Km Than Petrol',
    description: 'Charging at home is dramatically cheaper than petrol — even more so when you re charging from your own solar. Daytime solar charging effectively brings your fuel cost to zero',
    image: cheaperPerKm,
  },
  {
    title: 'Always A Full Charge In The Morning',
    description: 'Plug in when you get home, wake up to a full battery. A 7kW home charger adds about 45 km of range per hour — enough to fully replenish the average daily commute (35–50 km) in two to three hours, every night.',
    image: alwaysFullCharge,
  },
  {
    title: 'You\'re In Control',
    description: 'Schedule charging for off-peak periods, prioritise solar surplus, set kilowatt limits, monitor every session from your phone. The right home charger is smarter than any public station — and never has a queue.',
    image: youAreInControl,
  },
];

const WhyChargeAtHome = () => {
  return (
    <Fade>
      <section className="py-16 md:py-24 bg-white">
        <div className="px-[5%]">
          {/* Header */}
          <div className="mb-12 md:mb-10 leading-[0.8] flex justify-center items-center flex-col">
            <h2 className="text-2xl md:text-[5rem] font-medium text-[#63B846] tracking-tight">
              Why Charge At Home
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="flex gap-3">
            {benefits.map((benefit, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-[#EEF6EB] rounded-[24px] overflow-hidden group hover:shadow-lg transition-all duration-500 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden flex justify-center items-center">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Text */}
                  <div className="p-6 md:p-8 flex flex-col gap-2 flex-grow">
                    <h3 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base tracking-tight leading-snug max-w-sm">
                      {benefit.description}
                    </p>
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

export default WhyChargeAtHome;
