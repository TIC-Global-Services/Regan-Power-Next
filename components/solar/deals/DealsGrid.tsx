import React from 'react';
import SectionHeader from '@/reuseables/SectionHeader';
import Reveal from '@/reuseables/Reveal';
import CtaButton from '@/reuseables/CtaButton';

const promos = [
  {
    title: "Pre-May Rebate Boost — Battery Bundle",
    desc: "6.6 KW Solar + 10 KWh Battery Package With All Three Rebates Stacked. Lock In The Higher Pre-May-1 Federal Rebate Value."
  },
  {
    title: "Signature Solar Package",
    desc: "LONGi Hi-MO + Fronius GEN24 Plus — Our Premium Solar-Only Tier For Homeowners Not Adding A Battery In This Cycle."
  },
  {
    title: "No-Interest Upgrade",
    desc: "Add A Battery To Your Existing Solar System Using The Plenti No-Interest Loan — $2k–$10k, 3–10 Yr Terms."
  }
];

const DealsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="lg:w-[45%]">
            <SectionHeader
              subtitle="What's On"
              title="Right Now."
              align="left"
              className="mb-0"
              subtitleClass="text-lg md:text-2xl text-black font-normal"
              titleClass="text-4xl md:text-[5rem] text-[#63B846] leading-none font-normal tracking-tight"
            />
          </div>
          <div className="lg:w-[45%]">
            <p className="leading-tight font-light text-sm md:text-base">
              Regen Power Runs Seasonal And Campaign-Based Offers Across Solar, Battery, And Solar-Plus-Battery Bundles. Current Promotions Below — Changes Month To Month.
            </p>
          </div>
        </div>

        {/* Grid of 3 Cards */}
        <div className="flex justify-center gap-4 mx-auto mb-16">
          {promos.map((promo, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.1}
              className="rounded-[20px] p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg w-[433px] h-[459px] bg-[#EEF6EB]/50 border border-gray-100 mx-auto"
            >
              <div>
                <h3 className="text-2xl md:text-3xl mb-4 tracking-tight text-[#63B846] leading-tight">
                  {promo.title}
                </h3>
                <p className="text-sm md:text-base text-[#888888] leading-tight font-light">
                  {promo.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="flex justify-center">
          <CtaButton
            text="Get This Bundle Quoted"
          />
        </div>

      </div>
    </section>
  );
};

export default DealsGrid;
