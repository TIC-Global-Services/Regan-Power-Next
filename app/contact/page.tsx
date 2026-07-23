import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';
import heroImg from '@/assets/contact/hero.png';

const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <ContactHero
                subtitle="Get In Touch With"
                mainTitle="Regen Power"
                description="From Your First Enquiry To Final Installation, Our Specialists Are Here To Guide You Every Step Of The Way. Contact Us Today For A Personalised Energy Solution."
                ctaText="Get Your Free Quote"
                ctaLink="#quote-form"
                backgroundImage={heroImg}
            />

            <ContactForm />

            <LocationMap />
        </div>
    );
};

export default ContactPage;
