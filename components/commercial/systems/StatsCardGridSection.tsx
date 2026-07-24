import React from "react";
import StatsCardGrid from "@/reuseables/StatsCardGrid";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsStatsCardGridData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsStatsCardGridData;
}

export default function StatsCardGridSection({ data }: Props) {
  const bg = strapiImage(data.cardBackground);

  return (
    <StatsCardGrid
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      stats={data.stats.map((s) => ({ value: s.value, label: s.label }))}
      cardBackground={bg || ""}
      headerAlign="center"
    />
  );
}
