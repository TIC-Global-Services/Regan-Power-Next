import React from "react";
import FullscreenSplitSection from "@/reuseables/FullscreenSplitSection";
import { strapiImage } from "@/lib/strapi";
import type { DealsSplitSectionData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsSplitSectionData;
}

export default function SplitSectionSection({ data }: Props) {
  const img = strapiImage(data.image);

  return (
    <FullscreenSplitSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      image={img || ""}
      imageAlt=""
      imagePosition={data.imagePosition || "left"}
      badge={data.badge || ""}
    />
  );
}
