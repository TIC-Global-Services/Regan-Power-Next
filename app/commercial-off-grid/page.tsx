import React from 'react';
import CommercialHero from '@/components/commercial/CommercialHero';
import SolutionsPortfolio from '@/reuseables/SolutionsPortfolio';
import EditorialTextSection from '@/reuseables/EditorialTextSection';
import CtaSection from '@/reuseables/CtaSection';
import ctaBg from '@/assets/for_your_home.png';

const paragraphs = [
    {
        text: 'From Large-Scale Commercial Rooftops To Complex Off-Grid Environments, Our Solar Solutions Are Thoughtfully Engineered To Deliver Reliable Performance, Energy Independence, And Long-Term Cost Savings. Every System Is Tailored To The Specific Operational Needs Of Your Business,',
        isSecondary: false,
    },
    {
        text: 'Ensuring Maximum Efficiency And Return On Investment. By Combining Advanced Solar Technology, High-Quality Components, And Intelligent System Design, We Create Scalable Energy Solutions That Help Businesses Reduce Operating Costs, Improve Sustainability, And Achieve Greater Control Over Their Energy Future.',
        isSecondary: true,
    },
];

const CommercialOffGridPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <CommercialHero />
            <EditorialTextSection
                subtitle="Energy That Works"
                title="For Business"
                paragraphs={paragraphs}
                align="left"
                subtitleClass="text-lg md:text-2xl text-black font-normal"
                paragraphsClass="text-left max-w-5xl"
                revealEffect
            />
            <SolutionsPortfolio />
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

export default CommercialOffGridPage;
