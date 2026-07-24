import React from "react";
import GetSolar from "@/reuseables/getsolar";
import { strapiImage } from "@/lib/strapi";
import type { DealsCtaBannerData } from "@/lib/strapi-schemas/deals";

interface Props {
  data: DealsCtaBannerData;
}

export default function CtaBannerSection({ data }: Props) {
  const bg = strapiImage(data.backgroundImage);

  return (
    <GetSolar
      subtitle={data.subtitle || ""}
      mainTitle={data.mainTitle || ""}
      description={data.description || ""}
      buttonText={data.buttonText || "Get My Free Quote"}
      buttonHref={data.buttonHref || "#quote-form"}
      bgImage={bg || undefined}
    />
  );
}
