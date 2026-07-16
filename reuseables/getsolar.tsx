import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import getSolarBg from '@/assets/for_your_home.png';
import Fade from './fade';
import CtaButton from './CtaButton';

interface GetSolarProps {
  subtitle?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  bgImage?: string | StaticImageData;
  badge?: string;
  overlayClass?: string;
  children?: React.ReactNode;
}

const GetSolar = ({
  subtitle = "Get A Solar System Designed",
  mainTitle = "For Your Home",
  description = "Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls — just a proper engineering recommendation.",
  buttonText = "Get My Free Quote",
  bgImage = getSolarBg,
  badge,
  overlayClass,
  children
}: GetSolarProps) => {
  return (
    <Fade>
      <section className="relative w-full min-h-[500px] md:min-h-[500px] flex items-start overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt=""
            fill
            className="object-cover object-bottom"
          />
          <div className={`absolute inset-0 ${overlayClass || 'bg-gradient-to-r from-black/50 via-black/10 to-transparent'}`} />
        </div>

        <div className="relative z-10 w-full px-[5%] mt-15">
          <div className="max-w-3xl text-white">
            {badge && (
              <span className="mb-4 inline-flex rounded-full bg-[#E5DDD8] px-5 py-2 text-xs font-medium uppercase tracking-wide text-black">
                {badge}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl lg:text-[2.125rem] font-light tracking-tighter leading-tight">
              {subtitle}
              {mainTitle && <><br /><span className="text-[#63B846] font-medium text-4xl md:text-[5rem] tracking-tighter">{mainTitle}</span></>}
            </h2>

            {description && (
              <p className="text-sm md:text-sm leading-snug tracking-tight mt-3 mb-5 text-white/90 w-full">
                {description}
              </p>
            )}

            {buttonText && (
              <CtaButton
                href="#quote-form"
                text={buttonText}
                textColor="text-white"
                bgClass="bg-[#63B84640] backdrop-blur-sm"
                borderClass="border border-[#63B846]"
                hoverClass="hover:bg-[#63B846]"
              />
            )}

            {children}
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default GetSolar;