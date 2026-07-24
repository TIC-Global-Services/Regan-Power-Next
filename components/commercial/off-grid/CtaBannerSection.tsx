import React from "react";
import CtaSection from "@/reuseables/CtaSection";
import { strapiImage } from "@/lib/strapi";
import type { SharedCtaBannerData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: SharedCtaBannerData;
}

export default function CtaBannerSection({ data }: Props) {
  const bg = strapiImage(data.backgroundImage);

  return (
    <CtaSection
      subtitle={data.subtitle || ""}
      title={data.mainTitle || ""}
      description={data.description || ""}
      buttonText={data.buttonText || "Get Started"}
      buttonHref={data.buttonHref || "#quote-form"}
      bgImage={bg || undefined}
    />
  );
}
