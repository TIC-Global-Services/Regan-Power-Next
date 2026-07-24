import React from "react";
import Image from "next/image";
import SectionHeader from "@/reuseables/SectionHeader";
import Reveal from "@/reuseables/Reveal";
import MissingImage from "@/reuseables/MissingImage";
import { strapiImage } from "@/lib/strapi";
import type { SolarSpecsTableData } from "@/lib/strapi-schemas/solar";

interface SpecsAccordionProps {
  data: SolarSpecsTableData;
}

const SpecsAccordion: React.FC<SpecsAccordionProps> = ({ data }) => {
  const specs = (data.specs ?? []).filter(
    (s) => s.title || s.value || s.description
  );

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-300">
      <div className="px-[5%] mx-auto">
        <SectionHeader
          subtitle={data.subtitle ?? ""}
          title={data.title ?? ""}
          description={data.description ?? ""}
          align="left"
          className="mb-16"
        />

        {specs.length === 0 ? (
          <MissingImage label="Specs rows" aspect="aspect-[3/1]" />
        ) : (
          <div className="flex flex-col border-t border-gray-300">
            {specs.map((spec, idx) => {
              const imgSrc = spec.image ? strapiImage(spec.image) : "";
              return (
                <Reveal key={spec.id} delay={idx * 0.1}>
                  <div className="border-b border-gray-300 py-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                      <div className="lg:w-[280px] shrink-0">
                        <h3 className="text-2xl md:text-[2.5rem] text-black leading-tight">
                          {spec.title}
                        </h3>
                      </div>

                      <div className="flex-grow max-w-md">
                        <span className="text-xl md:text-2xl text-black block mb-3 font-[var(--font-aeonik)]">
                          {spec.value}
                        </span>
                        <p className="text-sm md:text-base leading-tight">
                          {spec.description}
                        </p>
                      </div>

                      <div className="lg:w-[280px] shrink-0 flex lg:justify-end items-center">
                        <div className="w-[280px] h-[120px] rounded-[20px] overflow-hidden">
                          {imgSrc ? (
                            <Image
                              src={imgSrc}
                              alt={spec.title ?? ""}
                              width={280}
                              height={120}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <MissingImage
                              label="Spec image"
                              aspect="aspect-auto h-full"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecsAccordion;
