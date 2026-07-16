import React, { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/reuseables/Reveal';
import SectionHeader from '@/reuseables/SectionHeader';
import coinsImg from '@/assets/solar/brands-tech/howitgoaway.png';

const criteriaItems = [
  {
    id: 1,
    title: "Bankability",
    desc: "Bloomberg NEF Tier-1 Classification Or Equivalent. We Want Manufacturers Still In Business When Your Warranty Is Claimed In 2050."
  },
  {
    id: 2,
    title: "Local Service Infrastructure",
    desc: "Australian-Based Technical Support, Spare Parts Held On-Shore, And Warranty Claim Turnaround Measured In Days, Not Months."
  },
  {
    id: 3,
    title: "CEC Approval",
    desc: "Listed On The Current Clean Energy Council Approved Products List. Non-Negotiable For STC Rebate Eligibility."
  },
  {
    id: 4,
    title: "Real-World Performance",
    desc: "Sustained Output Monitored Across Our 45,000+ Installations. Brands We&apos;ve Seen Underperform In Perth Heat Or Coastal Conditions Don&apos;t Make This Page."
  }
];

const CriteriaShortlist = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white border-t border-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[550px] lg:min-h-[910px]">

        {/* Left Column: Heading and Checklist */}
        <div className="flex flex-col justify-between py-16 lg:py-24 px-8 md:px-16 lg:pl-24 lg:pr-16 text-left h-full lg:h-[910px]">
          <div>
            <SectionHeader
              subtitle="Our Ten-Brand Shortlist,"
              title={
                <>
                  <span className="text-[#63B846]">And How It Got Away.</span>
                </>
              }
              description="Every Brand On This Page Has To Meet Five Criteria Before We Put It On A Perth Roof. We'd Rather Turn Down A Volume Deal Than Install Something We Wouldn't Want Supporting For The Next 25 Years."
              align="left"
              subtitleClass="text-base md:text-xl lg:text-2xl normal-case mb-4 block"
              titleClass="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal leading-[1.1] tracking-tight mb-6"
              descClass="mb-10 text-gray-605 leading-relaxed font-light"
            />

            {/* Criteria Interactive List (Statically Expanded) */}
            <div className="space-y-6 lg:space-y-8">
              {criteriaItems.map((item, idx) => {
                const isActive = idx === activeIndex;
                const titleColor = isActive ? 'text-black' : 'text-gray-400 group-hover:text-black/75';
                const descColor = isActive ? 'text-gray-700 font-light' : 'text-gray-400/80 font-light';

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className="group cursor-pointer transition-colors duration-200"
                  >
                    <h3 className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-200 ${titleColor}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed mt-2 transition-colors duration-200 ${descColor}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Full-Bleed Coins Image (720x910) */}
        <Reveal className="relative w-full min-h-[350px] lg:h-[910px] overflow-hidden lg:order-last">
          <Image
            src={coinsImg}
            alt="Bankability Stacks Of Coins"
            fill
            className="object-cover"
            priority
          />
        </Reveal>

      </div>
    </section>
  );
};

export default CriteriaShortlist;
