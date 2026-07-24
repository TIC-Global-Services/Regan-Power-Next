import React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import GetSolar from '@/reuseables/getsolar';
import heroBg from '@/assets/blog/hero.png';
import ctaBg from '@/assets/for_your_home.png';
import type { CategoryOption } from '@/components/blog/CategoryFilter';
import type { BlogCardData } from '@/components/blog/BlogCard';

const categories: CategoryOption[] = [
    { label: 'Systems & Panels', value: 'Systems & Panels' },
    { label: 'Inverters', value: 'Inverters' },
    { label: 'Rebates & Savings', value: 'Rebates & Savings' },
    { label: 'Batteries & Storage', value: 'Batteries & Storage' },
    { label: 'Perth-Specific', value: 'Perth-Specific' },
];

import howMuchImg from '@/assets/blog/howmuch.png';
import isWorthImg from '@/assets/blog/isworth.png';
import explainedImg from '@/assets/blog/explained.png';
import homeEvImg from '@/assets/blog/homeEV.png';

const cards: BlogCardData[] = [
    {
        title: 'How Much Does A Solar System Cost In Perth?',
        description: 'A Complete Breakdown Of Solar Installation Costs, System Sizes, And What Influences Pricing In 2026.',
        image: howMuchImg,
        imagePosition: 'right',
    },
    {
        title: 'Is Battery Storage Worth It In 2026?',
        description: 'Discover How Battery Storage Can Reduce Your Energy Bills And Whether It\u2019s The Right Investment For Your Home.',
        image: isWorthImg,
        imagePosition: 'left',
    },
    {
        title: 'WA Solar & Battery Rebates Explained',
        description: 'Learn About Available Government Rebates, Eligibility Criteria, And How To Maximize Your Savings.',
        image: explainedImg,
        imagePosition: 'right',
    },
    {
        title: 'Home EV Charging: Everything You Need To Know',
        description: 'A Beginner-Friendly Guide To Installing EV Chargers At Home, Costs Involved, And Charging Efficiency Tips.',
        image: homeEvImg,
        imagePosition: 'left',
    },
];

const BlogPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <BlogHero
                subtitle="Insights On Solar,"
                mainTitle="Batteries & Smarter Energy"
                description="Explore Expert Insights, Practical Solar Guides, Renewable Energy Trends, And The Latest Innovations Helping Australian Homes And Businesses Transition To Cleaner, More Efficient Energy Solutions. Stay Informed With Industry Updates And Actionable Advice From The Regen Power Team."
                ctaText="Get Your Free Quote"
                ctaLink="#quote-form"
                backgroundImage={heroBg}
            />
            <BlogGrid
                categories={categories}
                defaultCategory="Systems & Panels"
                cards={cards}
            />
            <GetSolar
                subtitle="Get A Solar System Designed"
                mainTitle="For Your Home"
                description="Tell Us A Few Details About Your Home And Power Use, And One Of Our Perth-Based CEC-Accredited Designers Will Build A System Tailored To Your Roof, Your Household, And Your Budget. Free, No-Obligation, And No High-Pressure Sales Calls \u2014 Just A Proper Engineering Recommendation."
                buttonText="Get My Free Quote"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default BlogPage;
