import React from 'react';
import RDHero from '@/components/rd/RDHero';
import DrivenByInnovation from '@/components/rd/DrivenByInnovation';
import EnergySolutions from '@/components/rd/EnergySolutions';
import CoreAchievements from '@/components/rd/CoreAchievements';
import CtaSection from '@/reuseables/CtaSection';
import ctaBg from '@/assets/for_your_home.png';

const ResearchAndDevelopmentPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <RDHero />
            <DrivenByInnovation />
            <EnergySolutions />
            <CoreAchievements />
            <CtaSection
                subtitle="Build Your"
                title="Energy Strategy"
                description="System Size Depends On Your Energy Usage, Roof Space, And Future Needs. Our Experts Design Systems That Balance Performance And Cost For Optimal ROI."
                buttonText="Get Started"
                buttonHref="#quote-form"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default ResearchAndDevelopmentPage;
