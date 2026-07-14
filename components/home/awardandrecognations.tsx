'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import atlogo from '@/assets/home/awardandrecognations/at_logo.png';
import belmont from '@/assets/home/awardandrecognations/belmont_logo.jpg';
import eupd from '@/assets/home/awardandrecognations/eupd_logo.png';
import fast100 from '@/assets/home/awardandrecognations/fast100_logo.png';
import financialtimes from '@/assets/home/awardandrecognations/financialtimes_logo.jpg';

const logos = [
  atlogo,
  fast100,
  eupd,
  financialtimes,
  belmont,
];

const AwardAndRecognations = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-black">Awards & Recognition</h2>
      </div>

      <div className="lg:px-[5%]">
        {/* Desktop View - Static Layout */}
        <div className="hidden md:flex flex-row items-center justify-between gap-4">
          <div className="relative h-20 w-40">
            <Image src={atlogo} alt="Australian Technologies" fill className="object-contain" />
          </div>
          
          <div className="relative h-20 w-40">
            <Image src={fast100} alt="Fast 100 2020" fill className="object-contain" />
          </div>
          
          {/* Center item slightly larger */}
          <div className="relative h-44 w-40 z-10">
            <Image src={eupd} alt="EUPD Research" fill className="object-contain" />
          </div>
          
          <div className="relative h-20 w-48">
            <Image src={financialtimes} alt="Financial Times" fill className="object-contain" />
          </div>
          
          <div className="relative h-20 w-40">
            <Image src={belmont} alt="Belmont Awards" fill className="object-contain" />
          </div>
        </div>

        {/* Mobile View - Swiper Marquee */}
        <div className="md:hidden w-full relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3 },
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="awards-swiper py-8"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                {({ isActive }) => (
                  <div 
                    className={`relative w-full h-24 transition-all duration-700 ease-in-out flex justify-center items-center ${
                      isActive ? 'scale-125 opacity-100 z-10' : 'scale-90 opacity-60 grayscale'
                    }`}
                  >
                    <Image
                      src={logo}
                      alt={`Award ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Dashed line at the bottom as shown in the design */}
      {/* <div className="container mx-auto px-[5%] mt-16 max-w-7xl">
        <div className="border-b-[1px] border-dashed border-[#8dc63f] w-full opacity-60" />
      </div> */}
    </section>
  );
};

export default AwardAndRecognations;