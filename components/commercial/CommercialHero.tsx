import React from 'react';
import Hero from '@/reuseables/Hero';
import { Briefcase } from 'lucide-react';
import heroBg from '@/assets/commercial-off-grid/hero.png';

const CommercialHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Powering Business"
            mainTitle="Anywhere"
            description="Scalable Solar And Hybrid Energy Solutions Designed To Reduce Operational Costs, Increase Efficiency, And Ensure Uninterrupted Power."
            ctaText="Request Consultation"
            ctaLink="#quote-form"
            subtitleColor="text-white"
            descriptionColor="text-white"
            showOverlay={true}
            isFullScreen={false}
            heightClass="min-h-[640px] md:min-h-[720px]"
            icon={Briefcase}
        />
    );
};

export default CommercialHero;
