import React from "react";
import EditorialTextSection from "@/reuseables/EditorialTextSection";
import type { SharedEditorialSectionData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: SharedEditorialSectionData;
}

export default function EditorialSectionSection({ data }: Props) {
  return (
    <EditorialTextSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      paragraphs={data.paragraphs.map((p) => ({
        text: p.text,
        isSecondary: p.isSecondary,
      }))}
      align={data.align || "left"}
      subtitleClass="text-lg md:text-2xl text-black font-normal"
      paragraphsClass="text-left max-w-5xl"
      revealEffect
    />
  );
}
