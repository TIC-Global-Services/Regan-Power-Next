import React from 'react';
import FullscreenSplitSection from '@/reuseables/FullscreenSplitSection';
import tier1Img from '@/assets/solar/brands-tech/tier1.png';

const Tier1Means = () => {
  return (
    <FullscreenSplitSection
      subtitle="What TIER-1 Means"
      title={
        <>
          <span className="text-[#63B846]">Tier-1 Is About Who&apos;ll Honour The Warranty</span>
          <br />
          <span className="text-black">Not Who Makes The Best Panel.</span>
        </>
      }
      description="&ldquo;Tier-1&rdquo; Is A Bloomberg New Energy Finance Classification. It Doesn't Rate Panel Efficiency, Temperature Tolerance, Or Durability. What It Rates Is Bankability — Whether Banks Are Willing To Finance Projects Using That Manufacturer's Panels Without Recourse."
      image={tier1Img}
      imageAlt="Tier-1 Solar Panels"
      imagePosition="left"
      textArrangement="split"
    />
  );
};

export default Tier1Means;
