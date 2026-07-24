import React from 'react';
import { StaticImageData } from 'next/image';
import FeatureCardGrid, { FeatureCardItem } from '@/reuseables/FeatureCardGrid';

export interface StoryCard {
  quote: string;
  author: string;
  location: string;
  image: StaticImageData | string;
}

export interface CustomerStoriesData {
  topSubtitle: string;
  title: string;
  stories: StoryCard[];
}

const CustomerStories = ({ data }: { data: CustomerStoriesData }) => {
  // Map the StoryCard structure to the FeatureCardItem structure expected by FeatureCardGrid
  const mappedCards: FeatureCardItem[] = data.stories.map((story) => ({
    title: `${story.author} — ${story.location}`,
    description: `"${story.quote}"`,
    image: story.image,
  }));

  return (
    <div>
      <FeatureCardGrid
        topSubtitle={data.topSubtitle}
        title={data.title}
        cards={mappedCards}
        showReadMore={false}
        centerButton={true}
        centerButtonText='View our full portfolio of 113+ installs'
      />
    </div>
  );
};

export default CustomerStories;
