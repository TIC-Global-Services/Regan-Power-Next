import React from "react";
import SolutionsPortfolio from "@/reuseables/SolutionsPortfolio";
import { strapiImage } from "@/lib/strapi";
import type { CommercialOffGridSolutionsPortfolioData } from "@/lib/strapi-schemas/commercial";
import type { PortfolioCard } from "@/reuseables/SolutionsPortfolio";

interface Props {
  data: CommercialOffGridSolutionsPortfolioData;
}

export default function SolutionsPortfolioSection({ data }: Props) {
  const cards: PortfolioCard[] = data.cards.map((c) => {
    if (c.type === "image") {
      return {
        type: "image" as const,
        variant: c.variant as "light-gray" | "light-green" | "dark",
        image: strapiImage(c.image) || undefined,
      };
    }
    return {
      type: "text" as const,
      variant: c.variant as "light-gray" | "light-green" | "dark",
      title: c.title,
      description: c.description,
      specs: c.specs || undefined,
    };
  });

  return (
    <SolutionsPortfolio
      subtitle={data.subtitle || ""}
      title={data.title || ""}
      description={data.description || ""}
      cards={cards}
      layout={(data.layout as 3 | 4 | 6) || 6}
    />
  );
}
