import React from 'react';
import Image from 'next/image';
import SectionHeader from '@/reuseables/SectionHeader';
import Reveal from '@/reuseables/Reveal';

import stcImg from '@/assets/solar/deals/stcupfront.png';
import plentiImg from '@/assets/solar/deals/plenti.png';
import thirdPartyImg from '@/assets/solar/deals/thirdparty.png';

const options = [
  {
    title: "STC Upfront Discount",
    desc: "Federal STC And WA Rebate Values Are Deducted Directly From Your Quoted Price. You Pay The Post-Rebate Balance.",
    bg: stcImg,
    badgeLabel: "Best For",
    badgeValue: "Any installation — applied by default."
  },
  {
    title: "Plenti No-Interest Loan",
    desc: "WA-Funded No-Interest Loan From $2,001 To $10,000. Flexible 3–10 Year Terms, No Early Repayment Fees.",
    bg: plentiImg,
    badgeLabel: "Best For",
    badgeValue: "Spreading the system cost with zero interest."
  },
  {
    title: "Third-Party Finance",
    desc: "We Can Refer You To Accredited Green-Loan Providers For Larger Systems Or Commercial Installations.",
    bg: thirdPartyImg,
    badgeLabel: "Best For",
    badgeValue: "Commercial or off-grid solar portfolios."
  }
];

const WaysToPay = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">
        
        <SectionHeader
          subtitle="Three Ways To Pay"
          title="Including One With Zero Interest"
          description="The Upfront Cost Of A Premium Solar Or Battery System Doesn't Need To Come Out Of Your Savings On Day One. Here's How Regen Power Customers Typically Structure Payment."
          align="center"
          className="mx-auto mb-16 max-w-4xl"
          subtitleClass="text-base md:text-xl lg:text-2xl normal-case mb-2 block text-black"
          titleClass="text-4xl md:text-[5.5rem] font-normal leading-none tracking-tight mb-6 text-[#63B846]"
          descClass="text-gray-700 leading-relaxed font-light"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch justify-center mx-auto">
          {options.map((opt, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.1}
              className="relative rounded-[32px] overflow-hidden min-h-[460px] flex flex-col p-8 md:p-10 shadow-md group hover:shadow-xl transition-all duration-300 mx-auto w-full max-w-[434px]"
            >
              {/* Background Image with Dark Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={opt.bg}
                  alt={opt.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/55" />
              </div>

              {/* Card Contents */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full flex-grow">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-tight">
                    {opt.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed font-light">
                    {opt.desc}
                  </p>
                </div>

                <div className="border-t border-white/20 pt-6 mt-auto">
                  <h4 className="text-xs uppercase tracking-wider text-white/50 font-bold mb-1">
                    {opt.badgeLabel}
                  </h4>
                  <p className="text-sm md:text-base text-[#A0CF44] font-medium leading-tight">
                    {opt.badgeValue}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WaysToPay;
