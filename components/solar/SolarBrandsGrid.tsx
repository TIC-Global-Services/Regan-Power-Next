import React from "react";
import Image from "next/image";
import Reveal from "@/reuseables/Reveal";
import CtaButton from "@/reuseables/CtaButton";
import SectionHeader from "@/reuseables/SectionHeader";
import MissingImage from "@/reuseables/MissingImage";
import { strapiImage } from "@/lib/strapi";
import type { SolarBrandsGridData } from "@/lib/strapi-schemas/solar";

interface SolarBrandsGridProps {
  data: SolarBrandsGridData;
}

const SolarBrandsGrid: React.FC<SolarBrandsGridProps> = ({ data }) => {
  const brands = data.brands ?? [];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="px-[5%] mx-auto">
        <SectionHeader
          subtitle={data.subtitle ?? ""}
          title={data.title ?? ""}
          description={data.description ?? ""}
          align="center"
          subtitleClass="font-normal text-[1.875rem] leading-[1.2]"
          className="mx-auto mb-12"
        />

        {data.ctaText && (
          <div className="text-center">
            <Reveal delay={0.3} className="inline-block">
              <CtaButton
                href={data.ctaHref ?? "#quote-form"}
                text={data.ctaText}
                textColor="text-black"
              />
            </Reveal>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 bg-white">
          {brands.map((brand, index) => {
            const showBorderBottomMobile = index < brands.length - 1;
            const showBorderRightDesktop = (index + 1) % 3 !== 0;
            const showBorderBottomDesktop = index < 3;
            const imgSrc = brand.logo ? strapiImage(brand.logo) : "";

            return (
              <Reveal
                key={brand.id}
                delay={index * 0.1}
                className={`flex items-center justify-center p-8 md:p-12 hover:bg-gray-50 transition-colors h-[180px] md:h-[220px] relative
                  ${showBorderBottomMobile ? "border-b border-gray-100" : "border-b-0"}
                  ${showBorderBottomDesktop ? "md:border-b border-gray-100" : "md:border-b-0"}
                  ${showBorderRightDesktop ? "md:border-r border-gray-100" : "md:border-r-0"}
                `}
              >
                <div className="relative w-full h-[60px] md:h-[80px]">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <MissingImage
                      label={brand.name || "Brand logo"}
                      aspect="aspect-[3/1]"
                      className="h-full"
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolarBrandsGrid;
