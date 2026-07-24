import React from "react";
import EditorialTextSection from "@/reuseables/EditorialTextSection";
import type { DealsPhilosophyData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsPhilosophyData;
}

export default function DealsPhilosophySection({ data }: Props) {
  return (
    <EditorialTextSection
      badge={data.badge || ""}
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      paragraphs={data.paragraphs.map((p) => ({
        text: p.text,
        isSecondary: p.isSecondary,
      }))}
      align="left"
      subtitleClass="text-lg md:text-2xl text-black font-normal"
      titleClass="text-4xl md:text-[5rem] text-[#63B846] leading-none font-normal tracking-tight"
      revealEffect
    />
  );
}
