import React from "react";
import SectionHeader from "@/reuseables/SectionHeader";
import Reveal from "@/reuseables/Reveal";
import CtaButton from "@/reuseables/CtaButton";
import type { DealsGridData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsGridData;
}

export default function DealsGridSection({ data }: Props) {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="lg:w-[45%]">
            <SectionHeader
              subtitle={data.subtitle || ""}
              title={data.title || ""}
              align="left"
              className="mb-0"
              subtitleClass="text-lg md:text-2xl text-black font-normal"
              titleClass="text-4xl md:text-[5rem] text-[#63B846] leading-none font-normal tracking-tight"
            />
          </div>
          <div className="lg:w-[45%]">
            <p className="leading-tight font-light text-sm md:text-base">
              {data.description}
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mx-auto mb-16 flex-wrap">
          {data.promotions.map((promo, idx) => (
            <Reveal
              key={promo.id}
              delay={idx * 0.1}
              className="rounded-[20px] p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg w-[433px] min-h-[459px] bg-[#EEF6EB]/50 border border-gray-100 mx-auto"
            >
              <div>
                <h3 className="text-2xl md:text-3xl mb-4 tracking-tight text-[#63B846] leading-tight">
                  {promo.title}
                </h3>
                <p className="text-sm md:text-base text-[#888888] leading-tight font-light">
                  {promo.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <CtaButton text={data.ctaText || "Get This Bundle Quoted"} />
        </div>
      </div>
    </section>
  );
}
