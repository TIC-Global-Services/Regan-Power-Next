"use client";

import { useState, useRef } from "react";
import { Check } from "lucide-react";

export type Plan = {
  id: number;
  title: string;
  desc: string;
  price: string;
  gst: string;
  features: string[];
  cta?: string;
};

interface PricingSectionProps {
  plans: Plan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const [activeId, setActiveId] = useState(plans[0]?.id || 1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlanClick = (id: number) => {
    if (activeId === id) {
      // Already expanded — scroll to form
      const applySection = document.getElementById("course-apply");
      applySection?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // First tap — just expand
      setActiveId(id);
    }
  };

  const handleJoinClick = () => {
    const applySection = document.getElementById("course-apply");
    applySection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="pricing-section"
      className="w-full text-black relative overflow-hidden flex flex-col justify-center min-h-auto py-12 md:py-0"
    >
      <div className="w-full px-[4vw]">
      {/* 🔹 TOP LAYOUT */}
      <div
        className="flex flex-col md:flex-row items-start mb-12 w-full gap-6 md:gap-0 justify-between"
      >
        <h2 className="text-[34px] md:text-[40px] font-normal leading-[120%] tracking-[-1px] max-w-sm">
          Pick Your <br /> Learning Path
        </h2>

        <p className="text-black text-[16px] sm:text-[18px] leading-[120%] tracking-[-.075px] w-full md:max-w-lg text-right font-normal mt-4 md:mt-0">
          Whether you prefer learning remotely, in-person, or a mix of both
          each format is designed to give you real exposure, real projects, and a
          portfolio that reflects your capability.
        </p>
      </div>

      {/* 🔹 CARDS WRAPPER */}
      <div
        ref={containerRef}
        className="bg-[#f6f6f6] p-4 md:p-5 w-full rounded-[20px]"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {plans.map((plan) => {
            const isActive = activeId === plan.id;

            return (
              <div
                key={plan.id}
                role="button"
                tabIndex={0}
                onClick={() => handlePlanClick(plan.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePlanClick(plan.id); }}
                onMouseEnter={() => window.innerWidth > 768 && setActiveId(plan.id)}
                className={`
                  pricing-card rounded-[24px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden text-left focus-visible:outline-none
                  ${isActive
                    ? "flex-[2.5] bg-black shadow-2xl h-[420px] md:h-[480px]"
                    : "flex-1 bg-white hover:bg-gray-50 min-h-[130px] md:h-[480px]"
                  }
                  p-6 md:p-8 flex flex-col
                `}
              >
                <span className="sr-only">Select {plan.title} plan</span>

                {/* Title — always visible, style changes with state */}
                <div className={!isActive ? "md:mt-auto" : ""}>
                <h3 className={`font-normal leading-[130%] tracking-[-2px] mb-1 md:mb-2 transition-all duration-700 ${
                  isActive
                    ? "text-[28px] md:text-[40px] text-white"
                    : "text-[26px] md:text-[40px] text-black"
                }`}>
                  {plan.title}
                </h3>

                {/* Description — always visible */}
                <p className={`font-normal leading-[130%] tracking-[-0.5px] max-w-[200px] md:max-w-sm transition-all duration-700 ${
                  isActive
                    ? "text-[14px] md:text-[16px] text-white font-light tracking-[-0.25px]"
                    : "text-[13px] md:text-[16px] text-black"
                }`}>
                  {plan.desc}
                </p>
                </div>

                {/* Active-only content — always rendered, animated via max-h + opacity */}
                <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                  isActive ? "max-h-[500px] opacity-100 mt-auto" : "max-h-0 opacity-0"
                }`}>
                  {/* Price */}
                  <div className="text-[24px] md:text-[30px] font-normal font-[var(--font-aeonik)] leading-[122%] tracking-[-1px] text-[#1ed760]">
                    {plan.price}
                    <span className="text-[10px] font-normal leading-[339%] tracking-[0px] text-[#1ed760]/70 ml-1 uppercase">
                      {plan.gst}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 md:space-y-3 mb-5 mt-5">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-[14px] md:text-[18px] leading-[86%] tracking-[-0.5px] font-normal text-white">
                        <div className="bg-white text-black rounded-full p-1 shadow-sm flex-shrink-0">
                          <Check size={12} className="md:w-[14px] md:h-[14px]" strokeWidth={3} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <span
                    onClick={handleJoinClick}
                    className="text-[14px] md:text-[16px] leading-[87%] tracking-[-0.5px] font-normal text-white/90 hover:text-white transition-colors cursor-pointer inline-block"
                  >
                    Apply here to join →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}