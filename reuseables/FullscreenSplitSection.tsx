import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';
import SectionHeader from '@/reuseables/SectionHeader';

export interface FullscreenSplitSectionProps {
  subtitle: string;
  title: React.ReactNode;
  description: React.ReactNode;
  image: StaticImageData | string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  textArrangement?: 'split' | 'center';
}

const FullscreenSplitSection: React.FC<FullscreenSplitSectionProps> = ({
  subtitle,
  title,
  description,
  image,
  imageAlt = "Feature Image",
  imagePosition = 'left',
  textArrangement = 'split'
}) => {
  const isImageLeft = imagePosition === 'left';
  const isSplit = textArrangement === 'split';

  return (
    <section className="bg-white border-t border-gray-50 min-h-screen flex items-stretch">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch w-full min-h-screen">
        
        {/* Image Column */}
        <Reveal 
          className={`relative w-full min-h-[350px] lg:h-screen overflow-hidden ${
            isImageLeft ? 'lg:order-first' : 'lg:order-last'
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </Reveal>

        {/* Text Column */}
        <div 
          className={`flex flex-col py-16 lg:py-24 px-8 md:px-16 ${
            isImageLeft ? 'lg:pl-12 lg:pr-20' : 'lg:pl-20 lg:pr-12'
          } text-left h-full lg:h-screen lg:min-h-screen ${
            isSplit ? 'justify-between' : 'justify-center'
          }`}
        >
          {isSplit ? (
            <>
              <div>
                <SectionHeader
                  subtitle={subtitle}
                  title={title}
                  align="left"
                  subtitleClass="text-base md:text-xl lg:text-2xl normal-case mb-4 block text-black font-medium"
                  titleClass="text-4xl md:text-5xl lg:text-[4.5rem] font-normal leading-none tracking-tight mb-6 text-[#63B846]"
                />
              </div>

              <div className="mt-12 lg:mt-24">
                <Fade delay={0.2}>
                  <p className="text-sm md:text-xl leading-tight text-gray-800 font-light">
                    {description}
                  </p>
                </Fade>
              </div>
            </>
          ) : (
            <div>
              <SectionHeader
                subtitle={subtitle}
                title={title}
                align="left"
                subtitleClass="text-base md:text-xl lg:text-2xl font-medium normal-case"
                titleClass="text-4xl md:text-5xl lg:text-[4.5rem] font-normal leading-none tracking-tight mb-6 text-[#63B846]"
              />
              <div className="mt-6">
                <Fade delay={0.2}>
                  <p className="text-sm md:text-xl leading-tight text-gray-800 font-light">
                    {description}
                  </p>
                </Fade>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FullscreenSplitSection;
