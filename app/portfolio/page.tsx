import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import PortfolioGrid from '@/components/portfolio/PortfolioGrid';
import CtaSection from '@/reuseables/CtaSection';
import ctaBg from '@/assets/for_your_home.png';

const PortfolioPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <PortfolioHero />
            <PortfolioFilters />
            <PortfolioGrid />
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

export default PortfolioPage;
