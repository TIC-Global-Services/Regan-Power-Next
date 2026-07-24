import React from "react";
import CommercialForm from "@/components/commercial/CommercialForm";
import { strapiImage } from "@/lib/strapi";
import type { CommercialSystemsCommercialFormData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: CommercialSystemsCommercialFormData;
}

export default function CommercialFormSection({ data }: Props) {
  const img = strapiImage(data.image);

  return (
    <CommercialForm
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      image={img || ""}
    />
  );
}
