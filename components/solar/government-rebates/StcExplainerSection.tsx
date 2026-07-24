import React from "react";
import EditorialTextSection from "@/reuseables/EditorialTextSection";
import type { RebatesStcExplainerData } from "@/lib/strapi-schemas/rebates";

interface Props {
  data: RebatesStcExplainerData;
}

export default function StcExplainerSection({ data }: Props) {
  return (
    <EditorialTextSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      paragraphs={data.paragraphs.map((p) => ({
        text: p.text,
        isSecondary: p.isSecondary,
      }))}
      align="left"
      subtitleClass="text-xl md:text-2xl font-light text-black mb-2 block normal-case"
      titleClass="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tighter mb-4"
      paragraphsClass="text-left"
      revealEffect
    />
  );
}
