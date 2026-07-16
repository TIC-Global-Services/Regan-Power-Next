"use client";

import React from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import CtaButton from '@/reuseables/CtaButton';
import SectionHeader from '@/reuseables/SectionHeader';

import canadianSolarImg from '@/assets/solar/brands/canadiansolar.png';
import jaSolarImg from '@/assets/solar/brands/jasolar.png';
import jinkoSolarImg from '@/assets/solar/brands/jinkosolar.png';
import longiImg from '@/assets/solar/brands/longi.png';
import risenImg from '@/assets/solar/brands/risen.png';
import trinaSolarImg from '@/assets/solar/brands/trinasolar.png';

const brands = [
  { name: 'JA Solar', img: jaSolarImg },
  { name: 'JinkoSolar', img: jinkoSolarImg },
  { name: 'Canadian Solar', img: canadianSolarImg },
  { name: 'LONGi', img: longiImg },
  { name: 'Trina Solar', img: trinaSolarImg },
  { name: 'Risen', img: risenImg },
];

const SolarBrandsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="px-[5%] max-w-6xl mx-auto">

        {/* Header Block */}
        <SectionHeader
          subtitle="Six Tier-1 Panel Brands"
          title="One Quality Standard"
          description="All Our Panels Are BloombergNEF Tier-1, Trusted, Proven, And Built For The Long Run. These Are Manufacturers You Can Rely On 25 Years From Now. We Use N-Type TOPCon Cells, Today’s Standard For Performance. More Efficiency, Better Low-Light Output, And Less Degradation Than Older Tech."
          align="center"
          subtitleClass="font-normal text-[1.875rem] leading-[1.2]"
          className="mx-auto mb-12"
        />

        {/* CTA Link */}
        <div className="text-center">
          <Reveal delay={0.3} className="inline-block">
            <CtaButton
              href="#quote-form"
              text="See Our Full Panel Range"
              textColor="text-black"
            />
          </Reveal>
        </div>

        {/* 3x2 Grid separated by thin border lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 bg-white">
          {brands.map((brand, index) => {
            const showBorderBottomMobile = index < 5;
            const showBorderRightDesktop = (index + 1) % 3 !== 0;
            const showBorderBottomDesktop = index < 3;

            return (
              <Reveal
                key={index}
                delay={index * 0.1}
                className={`flex items-center justify-center p-8 md:p-12 hover:bg-gray-50 transition-colors h-[180px] md:h-[220px] relative
                  ${showBorderBottomMobile ? 'border-b border-gray-100' : 'border-b-0'}
                  ${showBorderBottomDesktop ? 'md:border-b border-gray-100' : 'md:border-b-0'}
                  ${showBorderRightDesktop ? 'md:border-r border-gray-100' : 'md:border-r-0'}
                `}
              >
                <div className="relative w-full h-[60px] md:h-[80px]">
                  <Image
                    src={brand.img}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    placeholder="blur"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SolarBrandsGrid;
