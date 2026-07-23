import React from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioInteractive from '@/components/portfolio/PortfolioInteractive';
import CtaSection from '@/reuseables/CtaSection';
import heroBg from '@/assets/portfolio/hero.png';
import ctaBg from '@/assets/for_your_home.png';
import type { FilterOption } from '@/components/portfolio/PortfolioFilters';
import type { PortfolioProject } from '@/components/portfolio/PortfolioGrid';

const industries: FilterOption[] = [
    { label: 'Commercial Office', value: 'commercial-office' },
    { label: 'Manufacturing', value: 'manufacturing' },
    { label: 'Agriculture', value: 'agriculture' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Residential', value: 'residential' },
    { label: 'EV Charging', value: 'ev-charging' },
];

const systemSizes: FilterOption[] = [
    { label: 'Under 10kW', value: 'under-10kw' },
    { label: '10kW - 30kW', value: '10kw-30kw' },
    { label: '30kW - 100kW', value: '30kw-100kw' },
    { label: '100kW+', value: '100kw-plus' },
];

const locations: FilterOption[] = [
    { label: 'Perth Metro', value: 'perth-metro' },
    { label: 'Fremantle', value: 'fremantle' },
    { label: 'Mandurah', value: 'mandurah' },
    { label: 'Bunbury', value: 'bunbury' },
    { label: 'Regional WA', value: 'regional-wa' },
];

const projects: PortfolioProject[] = [
    {
        id: 1,
        title: 'Fremantle Cold Storage Facility',
        slug: 'fremantle-cold-storage',
        description:
            'Industrial Manufacturing Facility In Metro Perth Cut Annual Energy Costs By 42% With A 75kW Solar System.',
        image: { url: heroBg.src, alt: 'Fremantle Cold Storage Facility' },
        industry: 'manufacturing',
        systemSize: '30kw-100kw',
        location: 'fremantle',
        featured: true,
    },
    {
        id: 2,
        title: 'Perth CBD Office Tower',
        slug: 'perth-cbd-office',
        description: '',
        image: { url: heroBg.src, alt: 'Perth CBD Office Tower' },
        industry: 'commercial-office',
        systemSize: '100kw-plus',
        location: 'perth-metro',
        featured: false,
    },
    {
        id: 3,
        title: 'Margaret River Winery',
        slug: 'margaret-river-winery',
        description: '',
        image: { url: heroBg.src, alt: 'Margaret River Winery' },
        industry: 'agriculture',
        systemSize: '10kw-30kw',
        location: 'regional-wa',
        featured: false,
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
                industries={industries}
                systemSizes={systemSizes}
                locations={locations}
                searchPlaceholder="Search"
                defaultIndustry="commercial-office"
                defaultSize="30kw-100kw"
                projects={projects}
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
