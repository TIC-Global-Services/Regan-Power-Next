"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import SectionHeader from "@/reuseables/SectionHeader";

import stcRebateImg from "@/assets/solar/government-rebates/stcrebate.png";
import federealcheap from "@/assets/solar/government-rebates/federalcheap.png";
import batteryscheme from "@/assets/solar/government-rebates/batteryscheme.png";
import interestfree from "@/assets/solar/government-rebates/interestfreeloan.png";

type RebateProgram = {
  id: string;
  label: string;
  title: string;
  summary: string;
  badge?: string;
  image: StaticImageData;
};

const rebatePrograms: RebateProgram[] = [
  {
    id: "stc",
    label: "Federal STC Rebate (SRES)",
    title: "Federal STC Rebate (SRES)",
    summary:
      "A typical 6.6 kW solar system in Perth can still receive around $1,600 in incentives when it uses CEC-approved products and is installed by an SAA-accredited installer.",
    image: stcRebateImg,
  },
  {
    id: "battery",
    label: "Federal Cheaper Home Batteries Program",
    title: "Federal Cheaper Home Batteries Program",
    summary:
      "Battery rebates stepped down over time in 2026. Installations completed before Friday, May 1, 2026 were advertised at roughly $300 per kWh, or about $3,000 on a typical 10 kWh battery.",
    badge: "Recommended",
    image: federealcheap,
  },
  {
    id: "wa",
    label: "WA Residential Battery Scheme",
    title: "WA Residential Battery Scheme",
    summary:
      "The WA scheme launched on Tuesday, July 1, 2025 and can be stacked with the federal battery rebate for eligible Synergy and Horizon Power customers who participate in a VPP.",
    image: batteryscheme,
  },
  {
    id: "loan",
    label: "WA Interest-Free Loan (Plenti)",
    title: "WA Interest-Free Loan (Plenti)",
    summary:
      "Eligible households can access up to $10,000 in no-interest finance to cover the balance after rebates, with flexible repayment terms from three to ten years.",
    image: interestfree,
  },
];

export default function RebateProgramSelector() {
  const [activeId, setActiveId] = useState(rebatePrograms[0]?.id ?? "");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-[5%]">
        <SectionHeader
          subtitle="Three Rebates. One Loan."
          title={"Here's The Full Picture"}
          description="Perth homeowners installing solar and a battery in 2026 can combine multiple incentive layers, then use a no-interest loan to cover the remaining balance."
          align="center"
          className="mb-16"
          subtitleClass="text-xl md:text-[1.75rem] text-black"
          titleClass="text-5xl md:text-[3.75rem] font-light leading-none"
          descClass="mx-auto max-w-xl text-base md:text-xl text-black"
        />
      </div>

      {/* Desktop: horizontal step carousel — full viewport width */}
      <div className="hidden lg:flex items-end">
        {rebatePrograms.map((program, index) => {
          const isActive = program.id === activeId;
          const isLast = index === rebatePrograms.length - 1;

          return (
            <button
              key={program.id}
              type="button"
              onClick={() => setActiveId(program.id)}
              className={`flex-1 text-left transition-all duration-300 ${isActive
                ? "bg-[#A6D63F] pt-8 px-8 h-[420px] border-t-4 border-black"
                : `bg-[#F3F7F1] pt-6 pb-4 px-5 h-[320px] ${!isLast ? "border-r border-[#DCE8D8]" : ""} hover:bg-[#EEF6EB]`
                }`}
            >
              {isActive ? (
                <>
                  <h3 className="text-[2.5rem] tracking-tight text-black font-medium">
                    {program.title}
                  </h3>
                  <div className="relative mt-6 w-[393px] h-[215px] overflow-hidden rounded-[20px]">
                    <Image src={program.image} alt={program.title} fill className="object-cover" />
                  </div>
                  <p className="mt-5 text-base leading-tight text-black/90">
                    {program.summary}
                  </p>
                  {program.badge ? (
                    <span className="mt-4 inline-flex rounded-full bg-black/10 px-3 py-1 text-xs uppercase tracking-wide text-black">
                      {program.badge}
                    </span>
                  ) : null}
                </>
              ) : (
                <p className="text-[1.1rem] leading-tight text-black">{program.title}</p>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile: accordion */}
      <div className="space-y-4 lg:hidden px-[5%]">
        {rebatePrograms.map((program) => {
          const isActive = program.id === activeId;

          return (
            <div
              key={program.id}
              className={`overflow-hidden rounded-[28px] border transition-colors ${isActive ? "border-[#63B846] bg-[#A6D63F]" : "border-[#DCE8D8] bg-[#F3F7F1]"
                }`}
            >
              <button
                type="button"
                onClick={() => setActiveId(program.id)}
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <span className="pr-4 text-2xl leading-tight tracking-tight text-black">
                  {program.title}
                </span>
                <span className="text-sm uppercase tracking-wide text-black/55">
                  {isActive ? "Open" : "View"}
                </span>
              </button>

              {isActive ? (
                <div className="px-5 pb-5">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                    <Image src={program.image} alt={program.title} fill className="object-cover" />
                  </div>
                  <p className="mt-4 text-base leading-tight text-black/90">{program.summary}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>


    </section>
  );
}
