import React from "react";
import PackagesGrid from "@/reuseables/PackagesGrid";
import type { CommercialSystemsPackagesGridData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsPackagesGridData;
}

export default function PackagesGridSection({ data }: Props) {
  return (
    <PackagesGrid
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      packages={data.packages.map((pkg) => ({
        title: pkg.title,
        desc: pkg.desc,
        bgClass: pkg.bgClass,
        items: pkg.items.map((item) => ({
          label: item.label,
          value: item.value,
        })),
      }))}
    />
  );
}
