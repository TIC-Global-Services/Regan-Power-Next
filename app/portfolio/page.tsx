import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioInteractive from '@/components/portfolio/PortfolioInteractive';
import CtaSection from '@/reuseables/CtaSection';
import heroBg from '@/assets/portfolio/hero.png';
import ctaBg from '@/assets/for_your_home.png';
import type { FilterOption, PortfolioCard } from '@/components/portfolio/PortfolioInteractive';

const filters: FilterOption[] = [
    { label: 'All', value: 'all' },
    { label: 'Commercial Office', value: 'commercial-office' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Residential', value: 'residential' },
    { label: 'EV Charging', value: 'ev-charging' },
];

const cards: PortfolioCard[] = [
    {
        title: 'Fremantle Cold Storage Facility',
        description: 'Industrial Manufacturing Facility In Metro Perth Cut Annual Energy Costs By 42% With A 75kW Solar System.',
        image: heroBg,
    },
    {
        title: 'Perth CBD Office Tower',
        description: 'A 150kW rooftop system powering a 12-storey commercial office tower in the Perth CBD.',
        image: heroBg,
    },
    {
        title: 'Margaret River Winery',
        description: '30kW off-grid solar + battery system for a premium winery in the Margaret River region.',
        image: heroBg,
    },
];

const PortfolioPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <PortfolioHero
                subtitle="Our Work Across"
                mainTitle="Western Australia"
                description="80+ Installations Across Commercial, Residential, Off-Grid, And EV Charging—Designed In-House And Installed By Regen Electricians. Filter By Industry, Size, Or Location, And Explore Each Project In Detail."
                ctaText="Get Your Free Quote"
                ctaLink="#quote-form"
                backgroundImage={heroBg}
            />

            <PortfolioInteractive
                filters={filters}
                cards={cards}
            />

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
