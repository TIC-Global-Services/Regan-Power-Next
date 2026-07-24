import React from "react";
import StaggeredCardsGrid, {
  type ColumnConfig,
} from "@/reuseables/StaggeredCardsGrid";
import type { SolarEngineeringItemsData } from "@/lib/strapi-schemas/solar";

interface EngineeringCustomizationsProps {
  data: SolarEngineeringItemsData;
}

const COL_LAYOUTS = [
  { spacerAt: 0 },
  { spacerAt: 2 },
  { spacerAt: 1 },
];

const EngineeringCustomizations: React.FC<EngineeringCustomizationsProps> = ({
  data,
}) => {
  const items = data.items ?? [];

  const columns: ColumnConfig[] = COL_LAYOUTS.map((layout, colIdx) => {
    const start = colIdx * 2;
    const colItems = items.slice(start, start + 2);
    const itemsWithSpacer: ColumnConfig["items"] = [];

    if (layout.spacerAt === 0) itemsWithSpacer.push("spacer");
    colItems.forEach((item, i) => {
      itemsWithSpacer.push({
        title: item.title,
        desc: item.description,
        isDark: item.isDark,
        delay: 0.1 + i * 0.15,
      });
    });
    if (layout.spacerAt === 2) itemsWithSpacer.push("spacer");

    return { items: itemsWithSpacer };
  });

  return (
    <StaggeredCardsGrid
      subtitle={data.subtitle ?? ""}
      title={data.title ?? ""}
      description={data.description ?? ""}
      columns={columns}
      align="left"
      className="border-t border-gray-50"
    />
  );
};

export default EngineeringCustomizations;
