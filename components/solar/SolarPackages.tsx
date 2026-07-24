import React from "react";
import PackagesGrid from "@/reuseables/PackagesGrid";
import type { SolarPackagesData } from "@/lib/strapi-schemas/solar";

interface SolarPackagesProps {
  data: SolarPackagesData;
}

const SolarPackages: React.FC<SolarPackagesProps> = ({ data }) => {
  const bgColors = ["bg-[#EEF6EB]", "bg-[#A0CF44]", "bg-[#EEF6EB]"];

  const packages = (data.packages ?? []).map((p, idx) => ({
    title: p.title,
    desc: p.description,
    bgClass: bgColors[idx] ?? "",
    items: p.features ?? [],
  }));

  return (
    <PackagesGrid
      subtitle={data.subtitle ?? ""}
      title={data.title ?? ""}
      description={data.description ?? ""}
      packages={packages}
    />
  );
};

export default SolarPackages;
