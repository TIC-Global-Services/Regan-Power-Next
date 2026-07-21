import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/commercial-systems/hero.png';

const OffGridSolutionsHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Commercial Solar In Perth,"
            mainTitle="Designed By Engineers"
            description="Commercial Solar Systems For Perth And WA Businesses Since 2003. 10kW To 1MW, In-House Engineers, Integrated Battery Storage, Full Rebate Management. Explore Case Studies And Request A Free Energy Assessment."
            ctaText="Book Energy Assessment"
            ctaLink="#quote-form"
            subtitleColor="text-white"
            descriptionColor="text-white"
            showOverlay={true}
            isFullScreen={false}
            heightClass="min-h-[640px] md:min-h-[720px]"
        />
    );
};

export default OffGridSolutionsHero;
