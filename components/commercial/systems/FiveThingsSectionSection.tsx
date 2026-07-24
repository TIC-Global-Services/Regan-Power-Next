import React from "react";
import FiveThingsSection from "@/components/commercial/FiveThingsSection";
import type { CommercialSystemsFiveThingsSectionData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsFiveThingsSectionData;
}

export default function FiveThingsSectionSection({ data }: Props) {
  return (
    <FiveThingsSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      items={data.items.map((item) => ({
        number: item.number,
        title: item.title,
        description: item.description,
        highlight: item.highlight || false,
      }))}
    />
  );
}
