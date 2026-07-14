'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import businessBg from '@/assets/home/zerointrest/businessBg.jpg';
import productReviewBg from '@/assets/home/zerointrest/productReviewBg.png';
import productReviewRating from '@/assets/home/zerointrest/productReviewRating.png';
import { ArrowBigRight, ArrowRight, MoveRight } from 'lucide-react';
import Fade from './fade';

export interface FeatureCardItem {
  title: string;
  description: string;
  image: StaticImageData | string;
  colSpan?: number; // Kept for backwards compatibility but we now use flex scaling
  textPosition?: 'top' | 'bottom';
  footerTitle?: string;
  footerDescription?: string;
}

interface FeatureCardGridProps {
  topSubtitle?: string;
  title?: string;
  bottomSubtitle?: string;
  cards?: FeatureCardItem[];
  showReadMore?: boolean
}

const defaultCards: FeatureCardItem[] = [
  {
    title: 'STC Upfront Discount',
    description: 'Federal STC And WA Rebate Values Are Deducted Directly From Your Quoted Price. You Pay The Post-Rebate Balance.',
    image: businessBg,
    textPosition: 'top',
    footerTitle: 'Best For',
    footerDescription: 'Any installation — applied by default.',

  },
  {
    title: 'Plenti\nNo-Interest Loan',
    description: 'WA-Funded No-Interest Loan From $2,001 To $10,000. Flexible 3–10 Year Terms, No Early Repayment Fees.',
    image: productReviewBg,
    textPosition: 'top',
    footerTitle: 'Best For',
    footerDescription: 'Any installation — applied by default.',

  },
  {
    title: 'Third-Party Finance',
    description: 'We Can Refer You To Accredited Green-Loan Providers For Larger Systems Or Commercial Installations.',
    image: productReviewRating,
    textPosition: 'top',
    footerTitle: 'Best For',
    footerDescription: 'Any installation — applied by default.',

  },
];

const FeatureCardGrid: React.FC<FeatureCardGridProps> = ({
  topSubtitle = "Three Ways To Pay",
  title = "Including One With Zero Interest",
  bottomSubtitle = "The Upfront Cost Of A Premium Solar Or Battery System Doesn't Need To Come Out Of Your Savings On Day One. Here's How Regen Power Customers Typically Structure Payment.",
  cards = defaultCards,
  showReadMore = true
}) => {
  // Track which card is expanded (0 is active initially)
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Fade>
      <section className="py-16 md:py-24 bg-white px-[5%]">
        {/* Header section */}
        <div className="text-center mb-12 md:mb-16">
          {topSubtitle && (
            <h3 className="text-xl md:text-[1.35rem] text-black font-normal tracking-tight mb-1">
              {topSubtitle}
            </h3>
          )}
          {title && (
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] text-[#63B846] font-light leading-none tracking-tighter mb-4">
              {title}
            </h2>
          )}
          {bottomSubtitle && (
            <p className="text-xs md:text-sm text-black max-w-3xl mx-auto leading-relaxed font-medium">
              {bottomSubtitle}
            </p>
          )}
        </div>

        {/* Expandable Cards Flex Container */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(index); }}
                onMouseEnter={() => window.innerWidth > 768 && setActiveIndex(index)}
                className={`relative rounded-[24px] overflow-hidden group transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer focus-visible:outline-none flex-none md:flex-auto ${isActive ? 'min-h-[400px] md:flex-[2.5] md:h-[550px]' : 'min-h-[80px] md:min-h-[400px] md:flex-[1] md:w-[480px]'
                  } w-full`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0 w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100'} group-hover:scale-105`}
                  />
                  {/* Gradient overlay to make text readable at top and bottom */}
                  <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-b ${isActive ? 'from-black/60 via-black/20 to-black/80' : 'from-black/70 via-black/40 to-black/80'}`} />
                </div>

                {/* Content */}
                <div className={`relative z-10 h-full p-6 md:p-8 flex flex-col justify-between`}>

                  {/* All text content at TOP */}
                  <div>
                    {/* Title & Description */}
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'opacity-100 translate-y-0' : 'md:opacity-70 md:translate-y-2'}`}>
                      <h4 className={`text-[1.75rem] text-white font-normal tracking-tight transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'mb-3 md:text-3xl' : 'mb-0 md:mb-3 md:text-xl'}`}>
                        {card.title}
                      </h4>
                      <p className={`text-white/80 text-sm md:text-[15px] leading-relaxed max-w-[85%] font-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 md:max-h-0 overflow-hidden'}`}>
                        {card.description}
                      </p>
                    </div>

                    {/* Footer Title & Description (also at top, below main text) */}
                    {(card.footerTitle || card.footerDescription) && (
                      <div className={`mt-4 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 overflow-hidden md:translate-y-4'}`}>
                        {card.footerTitle && (
                          <h5 className="text-white font-semibold tracking-tight text-xl mb-0.5 whitespace-nowrap">
                            {card.footerTitle}
                          </h5>
                        )}
                        {card.footerDescription && (
                          <p className="text-white/80 text-sm tracking-tight font-light">
                            {card.footerDescription}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Read More at BOTTOM — only shown when showReadMore is true */}
                  {showReadMore && isActive && (
                    <div className='flex items-end'>
                      <p className='text-[#63B846] flex gap-2 items-center'>Read more <span className="text-lg"><MoveRight size={20} color='#63B846' strokeWidth={3} /></span></p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>
  );
};

export default FeatureCardGrid;