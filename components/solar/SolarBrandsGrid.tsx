"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Reveal>
            <span className="text-sm md:text-3xl uppercase tracking-wider font-normal mb-1 block">
              Six Tier-1 Panel Brands
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-normal text-[#63B846] leading-none tracking-tight mb-6">
              One Quality Standard
            </h2>
          </Reveal>

          <Fade delay={0.2}>
            <p className="text-sm leading-tight font-normal mb-8">
              All Our Panels Are BloombergNEF Tier-1, Trusted, Proven, And Built For The Long Run.
              These Are Manufacturers You Can Rely On 25 Years From Now. We Use N-Type TOPCon Cells,
              Today’s Standard For Performance. More Efficiency, Better Low-Light Output, And Less
              Degradation Than Older Tech.
            </p>
          </Fade>

          {/* CTA Link */}
          <Reveal delay={0.3} className="inline-block">
            <Link
              href="#quote-form"
              className="inline-flex items-center gap-3 bg-[#63B846]/40 border border-[#63B846]/20 text-[#63B846] px-5 py-2.5 rounded-full hover:bg-[#63B846] hover:text-white transition-all duration-300 group"
            >
              <span className="font-medium text-sm md:text-base text-black tracking-wide">
                See Our Full Panel Range
              </span>
              <div className="bg-[#63B846] text-black p-1.5 rounded-full group-hover:scale-105 group-hover:bg-[#63B846]/30 transition-all">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </Link>
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
