import React from 'react';
import Image, { StaticImageData } from 'next/image';
import CtaButton from '@/reuseables/CtaButton';

export interface FinalCTAData {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData | string;
  ctaText: string;
  ctaLink: string;
}

const FinalCTA = ({ data }: { data: FinalCTAData }) => {
  return (
    <section className="relative py-20 md:py-32 px-[5%]">
      <div className="absolute inset-0 z-0">
        <Image src={data.image} alt={data.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h3 className="text-xl md:text-2xl text-white font-normal mb-2">
          {data.subtitle}
        </h3>
        <h2 className="text-5xl md:text-7xl text-[#63B846] font-medium leading-none mb-6">
          {data.title}
        </h2>
        <p className="text-base md:text-xl text-white/90 mb-10">
          {data.description}
        </p>
        <CtaButton href={data.ctaLink} text={data.ctaText} textColor="text-white" />
      </div>
    </section>
  );
};

export default FinalCTA;
