import React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface FourPillarCard {
  title: string;
  description: string;
  image: StaticImageData | string;
}

export interface FourPillarsData {
  topSubtitle: string;
  title: string;
  description: string;
  pillars: FourPillarCard[];
}

const FourPillars = ({ data }: { data: FourPillarsData }) => {
  return (
    <section className="bg-white py-16 md:py-24 px-[5%]">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-xl md:text-[2rem] text-black font-normal tracking-tight">
          {data.topSubtitle}
        </h3>
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] text-[#63B846] font-normal leading-none tracking-tight mb-3">
          {data.title}
        </h2>
        <p className="text-black/70 text-sm md:text-base lg:text-lg leading-[1.3] whitespace-pre-line">
          {data.description}
        </p>
      </div>

      {/* Four Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {data.pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="relative rounded-[20px] overflow-hidden group cursor-pointer h-[320px] md:h-[450px] lg:h-[500px]"
          >
            {/* Background Image */}
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 transition-opacity duration-500" />

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-7">
              <h4 className="text-white text-xl md:text-2xl lg:text-[1.75rem] font-medium tracking-tight leading-tight">
                {pillar.title}
              </h4>
              <p className="text-white/80 text-sm md:text-base tracking-tight leading-[1.3]">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourPillars;