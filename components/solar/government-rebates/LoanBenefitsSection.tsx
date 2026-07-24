import React from "react";
import Image from "next/image";
import CtaButton from "@/reuseables/CtaButton";
import { strapiImage } from "@/lib/strapi";
import type { RebatesLoanBenefitsData } from "@/lib/strapi-schemas/rebates";

interface Props {
  data: RebatesLoanBenefitsData;
}

export default function LoanBenefitsSection({ data }: Props) {
  const bgImg = strapiImage(data.backgroundImage);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {bgImg ? (
          <Image
            src={bgImg}
            alt=""
            fill
            className="object-cover object-bottom"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-900" />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-[5%] mt-15">
        <div className="mx-auto text-center flex flex-col items-center">
          {data.badge && (
            <span className="mb-4 inline-flex rounded-full bg-[#E5DDD8] px-5 py-2 text-xs font-medium uppercase tracking-wide text-black">
              {data.badge}
            </span>
          )}

          <h2 className="text-2xl md:text-3xl lg:text-[2.125rem] tracking-tighter leading-tight text-white">
            {data.subtitle && (
              <>{data.subtitle}<br /></>
            )}
            {data.title && (
              <span className="text-[#63B846] font-medium text-4xl md:text-[5rem] tracking-tighter">
                {data.title}
              </span>
            )}
          </h2>

          {data.description && (
            <p className="text-sm md:text-sm leading-snug tracking-tight mt-3 mb-5 text-white/90 max-w-3xl">
              {data.description}
            </p>
          )}

          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {data.benefits.map((benefit) => (
              <article
                key={benefit.id}
                className="w-[240px] h-[140px] rounded-[8px] border border-white/20 bg-white/12 p-4 backdrop-blur-md flex flex-col text-left"
              >
                <h3 className="text-[1.375rem] tracking-tight text-white">{benefit.title}</h3>
                <p className="text-sm leading-tight text-white">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
