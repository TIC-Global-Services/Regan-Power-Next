import React from "react";
import Image from "next/image";
import SectionHeader from "@/reuseables/SectionHeader";
import { strapiImage } from "@/lib/strapi";
import type { RebatesUtilityCardsData } from "@/lib/strapi-schemas/rebates";

interface Props {
  data: RebatesUtilityCardsData;
}

export default function UtilityCardsSection({ data }: Props) {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge={data.badge || ""}
          title={data.title || ""}
          description={data.description || ""}
          align="center"
          className="mb-12"
          titleClass="text-5xl md:text-[3.75rem] font-light leading-none"
          descClass="mx-auto max-w-2xl text-base md:text-xl text-black tracking-tight"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {data.cards.map((card) => {
            const logo = strapiImage(card.logo);

            return (
              <article
                key={card.id}
                className="w-[350px] h-[420px] rounded-[20px] bg-[#F1F8EC] p-10"
              >
                {logo && (
                  <div className="relative h-24 w-full">
                    <Image src={logo} alt={card.name} fill className="object-contain" />
                  </div>
                )}

                <dl className="space-y-6">
                  <div>
                    <dt className="text-2xl tracking-tight text-black md:text-3xl">Per kWh</dt>
                    <dd className="mt-1 text-base text-black md:text-2xl">{card.perKwh}</dd>
                  </div>
                  <div>
                    <dt className="text-2xl tracking-tight text-black md:text-3xl">Cap</dt>
                    <dd className="mt-1 text-base text-black md:text-2xl">{card.cap}</dd>
                  </div>
                  <div>
                    <dt className="text-2xl tracking-tight text-black md:text-3xl">Maximum Rebate</dt>
                    <dd className="mt-1 text-base text-black md:text-2xl">{card.maximumRebate}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
