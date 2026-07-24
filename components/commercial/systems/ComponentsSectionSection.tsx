import React from "react";
import SixComponentsSection from "@/components/commercial/SixComponentsSection";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsComponentsSectionData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsComponentsSectionData;
}

export default function ComponentsSectionSection({ data }: Props) {
  const bg = strapiImage(data.backgroundImage);

  return (
    <SixComponentsSection
      subtitle={data.subtitle || "Six Components"}
      title={data.title || ""}
      description={data.description || ""}
      backgroundImage={bg || ""}
      items={data.items.map((item) => ({
        letter: item.letter,
        title: item.title,
      }))}
    />
  );
}
