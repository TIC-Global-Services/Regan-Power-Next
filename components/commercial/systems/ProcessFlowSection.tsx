import React from "react";
import CommercialProcessFlow from "@/components/commercial/CommercialProcessFlow";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsProcessFlowData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsProcessFlowData;
}

export default function ProcessFlowSection({ data }: Props) {
  return (
    <CommercialProcessFlow
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      steps={data.steps.map((s) => ({
        stepNumber: s.stepNumber,
        title: s.title,
        description: s.description,
        image: strapiImage(s.image) || "",
      }))}
    />
  );
}
