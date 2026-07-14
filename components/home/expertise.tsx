import React from 'react';
import Image, { StaticImageData } from 'next/image';

import expertiseBg from '@/assets/home/expertise/expertise_bg.png';
import residentialImg from '@/assets/home/expertise/residential_solar.png';
import batteryImg from '@/assets/home/expertise/battery_storage.png';
import commercialImg from '@/assets/home/expertise/commercial.png';
import evchargingImg from '@/assets/home/expertise/evcharging.png';
import homeIcon from '@/assets/home/expertise/home.svg';
import batteryIcon from '@/assets/home/expertise/battery.svg';
import factoryIcon from '@/assets/home/expertise/commercial.svg';
import plugIcon from '@/assets/home/expertise/ev.svg';

interface ExpertiseItem {
  title: string;
  image: StaticImageData;
  icon: StaticImageData;
  bgColor: string;
  textColor: string;
}

const expertiseData: ExpertiseItem[] = [
  {
    title: 'Residential Solar\n& Storage',
    image: residentialImg,
    icon: homeIcon,
    bgColor: 'bg-[#f0f6ec]',
    textColor: 'text-black',
  },
  {
    title: 'Battery Storage\n& Smart Home',
    image: batteryImg,
    icon: batteryIcon,
    bgColor: 'bg-[#8dc63f]',
    textColor: 'text-black',
  },
  {
    title: 'Commercial\n& Off-Grid',
    image: commercialImg,
    icon: factoryIcon,
    bgColor: 'bg-[#f0f6ec]',
    textColor: 'text-black',
  },
  {
    title: 'Electric Vehicle\nCharging',
    image: evchargingImg,
    icon: plugIcon,
    bgColor: 'bg-[#8dc63f]',
    textColor: 'text-black',
  }
];

const Expertise = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
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

      <div className="px-[5%] relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-[2rem] font-light text-white leading-tight tracking-tight">
            Our Energy<br />
            <span className="text-[#8dc63f] font-medium tracking-tighter lg:text-[5rem]">Expertise</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pl-20">
          {expertiseData.map((item, index) => (
              <div 
                key={index} 
                className={`${item.bgColor} rounded-[28px] p-6 lg:p-8 flex flex-col h-full min-h-[400px] lg:min-h-[480px] shadow-2xl hover:-translate-y-2 transition-transform duration-300`}
              >
                {/* 3D Image Container */}
                <div className="relative w-full aspect-square mb-8 mt-4">
                  <Image 
                    src={item.image} 
                    alt={item.title.replace('\n', ' ')} 
                    fill 
                    className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Text and Icon at the bottom */}
                <div className="mt-auto">
                  <div className="mb-4">
                    <Image src={item.icon} alt="" width={32} height={32} className="w-8 h-8" />
                  </div>
                  <h3 className={`text-2xl font-medium leading-snug tracking-tight whitespace-pre-line ${item.textColor}`}>
                    {item.title}
                  </h3>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;