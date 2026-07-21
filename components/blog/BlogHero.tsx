import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/blog/hero.png';

const BlogHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Insights On Solar,"
            mainTitle="Batteries & Smarter Energy"
            description="Explore Expert Insights, Practical Solar Guides, Renewable Energy Trends, And The Latest Innovations Helping Australian Homes And Businesses Transition To Cleaner, More Efficient Energy Solutions. Stay Informed With Industry Updates And Actionable Advice From The Regen Power Team."
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

export default BlogHero;
