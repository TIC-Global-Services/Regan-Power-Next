import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';

const ContactPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <ContactHero />
            <ContactForm />
            <LocationMap />
        </div>
    );
};

export default ContactPage;
