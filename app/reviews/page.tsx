import React from 'react';
import ReviewsHero from '@/components/reviews/ReviewsHero';
import ReviewsIntro from '@/components/reviews/ReviewsIntro';
import TestimonialGrid from '@/components/reviews/TestimonialGrid';
import CtaSection from '@/reuseables/CtaSection';
import heroImg from '@/assets/reviews/hero.png';
import ctaBg from '@/assets/for_your_home.png';

const ReviewsPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <ReviewsHero
                subtitle="Real Stories. Real Savings."
                mainTitle="Real Results."
                description=""
                ctaText="Get Your Free Quote"
                ctaLink="#quote-form"
                backgroundImage={heroImg}
            />

            <ReviewsIntro
                subtitle="Trusted By Thousands Across"
                title="Australia"
                description="Over The Years, We've Helped Thousands Of Australian Homes And Businesses Transition To Renewable Energy With Confidence. Our Commitment To Quality Workmanship, Premium Products, Transparent Advice, And Ongoing Customer Support Has Earned Consistently Positive Feedback From Customers Nationwide."
            />

            <TestimonialGrid
                subtitle="Real"
                title="Customer Stories"
            />

            <CtaSection
                subtitle="A Global Energy"
                title="Footprint"
                description="Our Projects Extend Across Australia, India, Malaysia, Vietnam, Singapore, And The Maldives—Delivering Scalable, Future-Ready Renewable Energy Solutions Across Diverse Landscapes, From Dense Urban Centers To Remote And Off-Grid Regions. From Rooftop Solar Installations To Large-Scale Utility Solar Farms And Advanced Microgrid Systems, We Design And Deploy Solutions That Adapt To Local Needs While Meeting Global Standards. As We Continue To Expand Our Footprint, Our Impact Grows Stronger—Powering Communities, Enabling Sustainability, And Driving The Transition To Clean Energy Worldwide."
                buttonText="Get My Free Quote"
                buttonHref="#quote-form"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default ReviewsPage;
