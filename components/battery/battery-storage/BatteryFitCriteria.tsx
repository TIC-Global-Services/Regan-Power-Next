import React from 'react';
import FeatureSplitSection from '@/reuseables/FeatureSplitSection';

// Note: Ensure the data passed matches the props expected by FeatureSplitSection.
export interface BatteryFitData {
  title: string;
  subtitle: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
}

const BatteryFitCriteria = ({ data }: { data: BatteryFitData }) => {
  return (
    <FeatureSplitSection 
      title={data.title}
      subtitle={data.subtitle}
      leftTitle={data.leftTitle}
      leftItems={data.leftItems}
      rightTitle={data.rightTitle}
      rightItems={data.rightItems}
    />
  );
};

export default BatteryFitCriteria;
