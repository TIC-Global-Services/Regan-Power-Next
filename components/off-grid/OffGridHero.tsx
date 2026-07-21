import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/off-grid-solutions/hero.png';

const OffGridHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Off-Grid Power, Engineered For"
            mainTitle="Remote Western Australia"
            description="With Over 20 Years Of Experience, We Design And Install Off-Grid Power Systems For Remote Homes, Farms, Mining Sites, And More Across Australia And Globally. Our HybridGEN Technology Powers Sites Across Asia. If Grid Access Is Limited Or Unreliable, Our Engineering Team Can Help You Find The Right Solution."
            ctaText="Talk To Our Team"
            ctaLink="#quote-form"
            subtitleColor="text-white"
            descriptionColor="text-white"
            showOverlay={true}
            isFullScreen={false}
            heightClass="min-h-[640px] md:min-h-[720px]"
        />
    );
};

export default OffGridHero;
