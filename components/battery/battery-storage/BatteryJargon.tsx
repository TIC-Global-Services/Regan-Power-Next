import React from 'react';
import FeatureCardGrid, { FeatureCardItem } from '@/reuseables/FeatureCardGrid';
import CtaButton from '@/reuseables/CtaButton';

export interface BatteryJargonData {
  topSubtitle: string;
  title: string;
  bottomSubtitle?: string;
  cards: FeatureCardItem[];
}

const BatteryJargon = ({ data }: { data: BatteryJargonData }) => {
  return (
    <div>
      <FeatureCardGrid
        topSubtitle={data.topSubtitle}
        title={data.title}
        showPersonalisedquoteCta={true}
        bottomSubtitle={data.bottomSubtitle}
        cards={data.cards}
        showReadMore={false}
      />
    
    </div>
  );
};

export default BatteryJargon;
