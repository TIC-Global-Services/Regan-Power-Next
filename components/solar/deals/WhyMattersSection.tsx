import React from "react";
import FeatureSplitSection from "@/reuseables/FeatureSplitSection";
import { strapiImage } from "@/lib/strapi";
import type { DealsWhyMattersData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsWhyMattersData;
}

export default function WhyMattersSection({ data }: Props) {
  const features = data.items.map((item) => ({
    title: item.title,
    description: item.description,
    image: strapiImage(item.image) || "",
  }));

  return (
    <FeatureSplitSection
      subtitle={data.subtitle || ""}
      heading={data.heading || ""}
      introText={data.introText || ""}
      features={features}
    />
  );
}
