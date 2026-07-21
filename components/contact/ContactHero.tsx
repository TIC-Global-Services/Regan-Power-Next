import React from 'react';
import Hero from '@/reuseables/Hero';
import heroBg from '@/assets/contact/hero.png';

const ContactHero = () => {
    return (
        <Hero
            mediaSrc={heroBg}
            mediaType="image"
            topSubtitle="Get In Touch With"
            mainTitle="Regen Power"
            description="From Your First Enquiry To Final Installation, Our Specialists Are Here To Guide You Every Step Of The Way. Contact Us Today For A Personalised Energy Solution."
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

export default ContactHero;
