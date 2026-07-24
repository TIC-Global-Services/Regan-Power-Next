import React from "react";
import FeatureSplitSection from "@/reuseables/FeatureSplitSection";
import type { BrandsCriteriaListData } from "@/lib/strapi-schemas/brands";
import fallbackImg from "@/assets/solar/brands-tech/howitgoaway.png";

interface CriteriaListSectionProps {
  data: BrandsCriteriaListData;
}

const CriteriaListSection: React.FC<CriteriaListSectionProps> = ({ data }) => {
  const features = (data.items ?? []).map((item) => ({
    title: item.title,
    description: item.description,
    image: fallbackImg,
  }));

  if (features.length === 0) return null;

  return (
    <FeatureSplitSection
      subtitle={data.subtitle ?? ""}
      heading={data.title ?? ""}
      introText={data.introText ?? ""}
      features={features}
    />
  );
};

export default CriteriaListSection;
