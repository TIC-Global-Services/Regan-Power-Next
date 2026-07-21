import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/reviews/hero.png';

const ReviewsHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Real Stories. Real Savings."
            mainTitle="Real Results."
            description=""
            ctaText="Get Your Free Quote"
            ctaLink="#quote-form"
            subtitleColor="text-white"
            descriptionColor="text-white"
            showOverlay={true}
            isFullScreen={false}
            heightClass="min-h-[640px] md:min-h-[720px]"
        />
    );
};

export default ReviewsHero;
