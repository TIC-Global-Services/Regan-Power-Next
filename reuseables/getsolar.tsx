import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import getSolarBg from '@/assets/for_your_home.png';
import Fade from './fade';

interface GetSolarProps {
  subtitle?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
}

const GetSolar = ({
  subtitle = "Get A Solar System Designed",
  mainTitle = "For Your Home",
  description = "Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls — just a proper engineering recommendation.",
  buttonText = "Get My Free Quote"
}: GetSolarProps) => {
  return (
    <Fade>
      <section className="relative w-full min-h-[500px] md:min-h-[500px] flex items-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getSolarBg}
            alt="Solar Panel Installation on Roof"
            fill
            className="object-cover object-bottom"
          />
          {/* Subtle gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-[5%] mt-15">
          <div className="max-w-3xl text-white">
            <h2 className="text-2xl md:text-3xl lg:text-[2.125rem] font-light tracking-tighter leading-tight">
              {subtitle}<br />
              <span className="text-[#63B846] font-medium text-4xl md:text-[5rem] tracking-tighter">{mainTitle}</span>
            </h2>

            <p className="text-sm md:text-sm leading-snug tracking-tight mt-3 mb-5 text-white/90 w-full">
              {description}
            </p>

            <button className="flex items-center gap-3 border border-[#63B846] bg-[#63B84640] backdrop-blur-sm text-white text-sm md:text-base font-medium pl-6 pr-2 py-2 rounded-full hover:bg-[#63B846] transition-all duration-300 group/btn">
              <span>{buttonText}</span>
              <div className="bg-[#8dc63f] rounded-full p-1 group-hover/btn:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={24} className="text-white" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default GetSolar;