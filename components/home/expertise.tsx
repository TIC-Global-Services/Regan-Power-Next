'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import expertiseBg from '@/assets/home/expertise/expertise_bg.png';
import residentialImg from '@/assets/home/expertise/residential_solar.png';
import batteryImg from '@/assets/home/expertise/battery_storage.png';
import commercialImg from '@/assets/home/expertise/commercial.png';
import evchargingImg from '@/assets/home/expertise/evcharging.png';
import homeIcon from '@/assets/home/expertise/home.svg';
import batteryIcon from '@/assets/home/expertise/battery.svg';
import factoryIcon from '@/assets/home/expertise/commercial.svg';
import plugIcon from '@/assets/home/expertise/ev.svg';
import Reveal from '@/reuseables/Reveal';

interface ExpertiseItem {
  title: string;
  image: StaticImageData;
  icon: StaticImageData;
  // bgColor: string;
  textColor: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    title: 'Residential Solar\n& Storage',
    image: residentialImg,
    icon: homeIcon,
    // bgColor: 'bg-[#f0f6ec]',
    textColor: 'text-black',
  },
  {
    title: 'Battery Storage\n& Smart Home',
    image: batteryImg,
    icon: batteryIcon,
    // bgColor: 'bg-[#8dc63f]',
    textColor: 'text-black',
  },
  {
    title: 'Commercial\n& Off-Grid',
    image: commercialImg,
    icon: factoryIcon,
    // bgColor: 'bg-[#f0f6ec]',
    textColor: 'text-black',
  },
  {
    title: 'Electric Vehicle\nCharging',
    image: evchargingImg,
    icon: plugIcon,
    // bgColor: 'bg-[#8dc63f]',
    textColor: 'text-black',
  }
];

const Expertise = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-20 relative overflow-hidden maxh-h-screen min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={expertiseBg}
          alt="Expertise background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0a1c30]/70" />
      </div>

      <div className="lg:px-[5%]  px-2 relative z-10 h-full flex flex-col justify-center">
        
        {/* Header */}
        <div className="mb-12 md:mb-10 flex justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-light text-center text-white leading-tight tracking-tight">
            Our Energy<br />
            <span className="text-[#8dc63f] font-medium tracking-tighter lg:text-[5rem]">Expertise</span>
          </h2>
        </div>

        {/* Cards Carousel/Grid */}
       <div className='relative w-full h-full'>
         <div 
           ref={carouselRef}
           className="flex overflow-x-auto items-stretch snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-4 md:gap-6 pt-4 pb-6 lg:pb-0 scrollbar-hide"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         >
          {expertiseData.map((item, index) => (
            <Reveal 
              key={index} 
              delay={index * 0.1}
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center shrink-0 flex flex-col h-auto"
            >
              <div 
                className={`bg-[#f0f6ec] rounded-[20px] p-6 w-full lg:p-8 flex flex-col flex-grow min-h-[400px] hover:bg-[#8dc63f] lg:min-h-[60dvh] shadow-2xl hover:-translate-y-2 transition-transform duration-300 group`}
              >
                {/* 3D Image Container */}
                <div className="relative w-full h-full min-h-[200px] mb-8 mt-4 flex justify-end items-start">
                  <Image 
                    src={item.image} 
                    alt={item.title.replace('\n', ' ')} 
                    fill 
                    className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Text and Icon at the bottom */}
                <div className="mt-auto">
                  <div className="mb-4">
                    <Image src={item.icon} alt="" width={32} height={32} className="w-8 h-8 object-contain shrink-0" />
                  </div>
                  <h3 className={`text-[1.90rem] font-medium leading-snug tracking-tight whitespace-pre-line ${item.textColor}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="flex justify-end mt-2 lg:hidden gap-3 pr-2">
           <button 
             onClick={scrollPrev} 
             className="bg-[#f0f6ec] hover:bg-[#8dc63f] transition-colors p-3 rounded-full text-black hover:text-white shadow-md focus:outline-none"
             aria-label="Previous items"
           >
             <ArrowLeft size={24} />
           </button>
           <button 
             onClick={scrollNext} 
             className="bg-[#f0f6ec] hover:bg-[#8dc63f] transition-colors p-3 rounded-full text-black hover:text-white shadow-md focus:outline-none"
             aria-label="Next items"
           >
             <ArrowRight size={24} />
           </button>
        </div>

       </div>
      </div>
    </section>
  );
};

export default Expertise;