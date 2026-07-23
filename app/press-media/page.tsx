import React from 'react';
import PressHero from '@/components/press/PressHero';
import FeaturedArticle from '@/components/press/FeaturedArticle';
import LatestNews from '@/components/press/LatestNews';
import NewsGrid, { PressArticle } from '@/components/press/NewsGrid';
import GetSolar from '@/reuseables/getsolar';
import type { CategoryOption } from '@/components/press/NewsFilter';
import ctaBg from '@/assets/for_your_home.png';
import adoptionImg from '@/assets/press/adoption.png';
import howMuchImg from '@/assets/blog/howmuch.png';
import homeEvImg from '@/assets/blog/homeEV.png';
import explainedImg from '@/assets/blog/explained.png';
import heroImg from '@/assets/press/hero.png';

const categories: CategoryOption[] = [
    { label: 'All', value: 'All' },
    { label: 'Company News', value: 'Company News' },
    { label: 'Projects', value: 'Projects' },
    { label: 'Awards', value: 'Awards' },
    { label: 'Media Coverage', value: 'Media Coverage' },
    { label: 'Technology', value: 'Technology' },
    { label: 'Events', value: 'Events' },
    { label: 'Partnerships', value: 'Partnerships' },
];

const posts: PressArticle[] = [
    {
        id: 1,
        title: 'Best-Rated Solar Installer 2025',
        slug: 'best-rated-solar-installer-2025',
        description: 'Recognised By SolarQuotes For Outstanding Customer Satisfaction.',
        image: { url: howMuchImg.src, alt: 'Best-Rated Solar Installer 2025' },
        categories: ['Awards'],
        href: '/press-media/best-rated-solar-installer-2025',
    },
    {
        id: 2,
        title: '$1.93M ARC Research Grant',
        slug: 'arc-research-grant',
        description: 'Partnering With Curtin University To Advance Household Battery Adoption.',
        image: { url: homeEvImg.src, alt: '$1.93M ARC Research Grant' },
        categories: ['Company News', 'Partnerships'],
        href: '/press-media/arc-research-grant',
    },
    {
        id: 3,
        title: 'From Research To Rooftops',
        slug: 'from-research-to-rooftops',
        description: "Accelerating Australia's Transition To Smarter Renewable Energy.",
        image: { url: explainedImg.src, alt: 'From Research To Rooftops' },
        categories: ['Technology', 'Media Coverage'],
        href: '/press-media/from-research-to-rooftops',
    },
    {
        id: 4,
        title: 'Five Years Of ProductReview Success',
        slug: 'productreview-success',
        description: 'Recognised For Consistent Customer Satisfaction And Installation Quality.',
        image: { url: explainedImg.src, alt: 'Five Years Of ProductReview Success' },
        categories: ['Awards'],
        href: '/press-media/productreview-success',
    },
    {
        id: 5,
        title: '22+ Years Of Renewable Innovation',
        slug: '22-years-innovation',
        description: 'Celebrating Two Decades Of Engineering Excellence And Industry Leadership.',
        image: { url: heroImg.src, alt: '22+ Years Of Renewable Innovation' },
        categories: ['Company News'],
        href: '/press-media/22-years-innovation',
    },
    {
        id: 6,
        title: 'Sustainable Power For Pulau Ubin',
        slug: 'pulau-ubin',
        description: 'Delivering Hybrid Microgrid Technology For Remote Communities In Singapore.',
        image: { url: homeEvImg.src, alt: 'Sustainable Power For Pulau Ubin' },
        categories: ['Projects', 'Technology'],
        href: '/press-media/pulau-ubin',
    },
    {
        id: 7,
        title: 'Executive Of The Year Finalist',
        slug: 'executive-of-the-year',
        description: 'Dr. Nikhil Jayaraj Recognised For Leadership In Renewable Energy.',
        image: { url: homeEvImg.src, alt: 'Executive Of The Year Finalist' },
        categories: ['Awards', 'Company News'],
        href: '/press-media/executive-of-the-year',
    },
    {
        id: 8,
        title: 'Top Brand PV Installer 2024',
        slug: 'top-brand-pv-2024',
        description: 'Honoured With The EUPD Research Installer Award For Excellence.',
        image: { url: howMuchImg.src, alt: 'Top Brand PV Installer 2024' },
        categories: ['Awards', 'Media Coverage'],
        href: '/press-media/top-brand-pv-2024',
    },
    {
        id: 9,
        title: '45,000 Solar Installations Milestone',
        slug: '45000-installations',
        description: 'Delivering Trusted Renewable Energy Solutions Across Australia.',
        image: { url: heroImg.src, alt: '45,000 Solar Installations Milestone' },
        categories: ['Company News', 'Projects'],
        href: '/press-media/45000-installations',
    },
];

const PressMediaPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <PressHero
                subtitle="In The"
                mainTitle="News & Media"
                description="Explore How Regen Power Is Shaping The Future Of Energy Through Innovation, Impact, And Industry Leadership."
                ctaText="Get Your Free Quote"
                ctaLink="#quote-form"
                backgroundImage={heroImg}
            />

            <FeaturedArticle
                image={adoptionImg}
                title="Regen Power Leads Solar Adoption In Western Australia"
                description="Regen Power Continues To Expand Its Footprint With Large-Scale Residential And Commercial Solar Installations Across WA."
                href="/press-media/regen-power-leads-solar-adoption"
            />

            <LatestNews
                items={[
                    {
                        title: 'How Solar + Battery Systems Are Changing Homes',
                        description:
                            'An In-Depth Look At How Integrated Energy Systems Are Transforming Energy Consumption Across Australia.',
                        image: howMuchImg,
                        href: '/press-media/solar-battery-changing-homes',
                    },
                    {
                        title: 'The Role Of Smart Batteries In Future Grids',
                        description:
                            'Regen Power Highlights The Importance Of Battery Storage And VPP Integration In Modern Energy Systems.',
                        image: homeEvImg,
                        href: '/press-media/smart-batteries-future-grids',
                    },
                    {
                        title: "Regen Power's Contribution To The Greener Future",
                        description:
                            'Exploring How Innovative Solar Solutions Are Helping Reduce Carbon Footprints Nationwide.',
                        image: explainedImg,
                        href: '/press-media/greener-future',
                    },
                ]}
            />

            <NewsGrid
                subtitle="Browse"
                title="All News"
                categories={categories}
                defaultCategory="All"
                posts={posts}
            />

            <GetSolar
                subtitle="Get A Solar System Designed"
                mainTitle="For Your Home"
                description="Tell Us A Few Details About Your Home And Power Use, And One Of Our Perth-Based CEC-Accredited Designers Will Build A System Tailored To Your Roof, Your Household, And Your Budget. Free, No-Obligation, And No High-Pressure Sales Calls — Just A Proper Engineering Recommendation."
                buttonText="Get My Free Quote"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default PressMediaPage;
