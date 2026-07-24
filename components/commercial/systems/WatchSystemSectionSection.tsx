import React from "react";
import WatchSystemSection from "@/components/commercial/WatchSystemSection";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsWatchSystemSectionData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsWatchSystemSectionData;
}

export default function WatchSystemSectionSection({ data }: Props) {
  const img = strapiImage(data.image);

  return (
    <WatchSystemSection
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      paragraphs={data.paragraphs.map((p) => p.text)}
      ctaText={data.ctaText || ""}
      ctaHref={data.ctaHref || "#"}
      image={img || ""}
    />
  );
}
