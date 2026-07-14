import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import businessBg from '@/assets/home/zerointrest/businessBg.jpg';
import productReviewBg from '@/assets/home/zerointrest/productReviewBg.png';
import productReviewRating from '@/assets/home/zerointrest/productReviewRating.png';
import Fade from '@/reuseables/fade';
import Reveal from '@/reuseables/Reveal';

interface FinancingCard {
  title: string;
  description: string;
  image: StaticImageData;
  ctaText?: string;
}

const financingData: FinancingCard[] = [
  {
    title: 'Federal STC Rebate',
    description:
      'Receive Thousands Off Your Solar System Through The Federal Government\'s Small-Scale Technology Certificate (STC) Scheme. Applied As An Upfront Discount At Point Of Sale.',
    image: businessBg,
  },
  {
    title: 'WA Battery Rebate',
    description:
      'Up To $1,300 Rebate For Eligible WA Households Installing A Battery System Under The Distributed Energy Buyback Scheme (DEBS) Battery Program.',
    image: productReviewBg,
  },
  {
    title: 'Interest-Free Loan Up To $10,000',
    description:
      'Through The WA Battery Rebate, Eligible Synergy Customers Can Access An Interest-Free Loan Of Up To $10,000 Repayable Over 10 Years. No Early Repayment Penalties. Household Income Under $210,000. Must Participate In An Approved VPP Program.',
    image: productReviewRating,
    ctaText: 'Check Your Eligibility',
  },
];

const ZeroInterestFinancing = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Fade>
        <div className="px-[5%]">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:-space-y-5">
            <p className="text-lg md:text-[2.125rem] lg:leading-1.2">Smart Solar Savings &</p>
            <h2 className="text-3xl md:text-4xl lg:text-[5rem] font-light text-black leading-tight tracking-tight">
              <span className="text-[#63B846] font-medium tracking-tighter">Zero-Interest Financing</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 px-[5%]">
            {financingData.map((card, index) => (
              <Reveal key={index}  className="relative rounded-[24px] overflow-hidden min-h-[420px] md:min-h-[500px] group">
                
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <h3 className="text-xl md:text-2xl font-normal text-white mb-3 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* CTA Button */}
                    {card.ctaText && (
                      <div className="mt-6 flex justify-end">
                        <button className="flex items-center gap-2 border border-[#63B846] bg-[#63B84666] text-white text-sm font-medium px-2 py-2 rounded-full hover:bg-[#52a039] transition-colors group/btn">
                          <span>{card.ctaText}</span>
                          <ArrowUpRight size={25} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform bg-[#A0CF44] rounded-2xl" />
                        </button>
                      </div>
                    )}
                  </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ZeroInterestFinancing;
