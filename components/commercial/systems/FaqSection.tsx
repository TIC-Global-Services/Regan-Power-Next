import React from "react";
import ReusableFAQ from "@/reuseables/faq";
import { strapiImage } from "@/lib/strapi";
import type { SharedFaqData } from "@/lib/strapi-schemas/commercial";

interface Props {
  data: SharedFaqData;
}

export default function FaqSection({ data }: Props) {
  const img = strapiImage(data.image);

  return (
    <ReusableFAQ
      topTitle={data.title || ""}
      title={data.sectionTitle || ""}
      listTitle={data.listTitle || ""}
      image={img || undefined}
      items={data.items.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))}
    />
  );
}
