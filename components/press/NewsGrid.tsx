'use client';

import React, { useMemo, useState } from 'react';
import NewsFilter, { NewsCategory } from './NewsFilter';
import NewsCard, { NewsCardItem } from './NewsCard';

import heroImg from '@/assets/press/hero.png';
import howMuchImg from '@/assets/blog/howmuch.png';
import homeEvImg from '@/assets/blog/homeEV.png';
import explainedImg from '@/assets/blog/explained.png';

const allNews: (NewsCardItem & { categories: NewsCategory[] })[] = [
    {
        title: 'Best-Rated Solar Installer 2025',
        description: 'Recognised By SolarQuotes For Outstanding Customer Satisfaction.',
        image: howMuchImg,
        href: '/press-media/best-rated-solar-installer-2025',
        categories: ['Awards'],
    },
    {
        title: '$1.93M ARC Research Grant',
        description: "Partnering With Curtin University To Advance Household Battery Adoption.",
        image: homeEvImg,
        href: '/press-media/arc-research-grant',
        categories: ['Company News', 'Partnerships'],
    },
    {
        title: 'From Research To Rooftops',
        description: "Accelerating Australia's Transition To Smarter Renewable Energy.",
        image: explainedImg,
        href: '/press-media/from-research-to-rooftops',
        categories: ['Technology', 'Media Coverage'],
    },
    {
        title: 'Five Years Of ProductReview Success',
        description: 'Recognised For Consistent Customer Satisfaction And Installation Quality.',
        image: explainedImg,
        href: '/press-media/productreview-success',
        categories: ['Awards'],
    },
    {
        title: '22+ Years Of Renewable Innovation',
        description: 'Celebrating Two Decades Of Engineering Excellence And Industry Leadership.',
        image: heroImg,
        href: '/press-media/22-years-innovation',
        categories: ['Company News'],
    },
    {
        title: 'Sustainable Power For Pulau Ubin',
        description: 'Delivering Hybrid Microgrid Technology For Remote Communities In Singapore.',
        image: homeEvImg,
        href: '/press-media/pulau-ubin',
        categories: ['Projects', 'Technology'],
    },
    {
        title: 'Executive Of The Year Finalist',
        description: 'Dr. Nikhil Jayaraj Recognised For Leadership In Renewable Energy.',
        image: homeEvImg,
        href: '/press-media/executive-of-the-year',
        categories: ['Awards', 'Company News'],
    },
    {
        title: 'Top Brand PV Installer 2024',
        description: 'Honoured With The EUPD Research Installer Award For Excellence.',
        image: howMuchImg,
        href: '/press-media/top-brand-pv-2024',
        categories: ['Awards', 'Media Coverage'],
    },
    {
        title: '45,000 Solar Installations Milestone',
        description: 'Delivering Trusted Renewable Energy Solutions Across Australia.',
        image: heroImg,
        href: '/press-media/45000-installations',
        categories: ['Company News', 'Projects'],
    },
];

const NewsGrid = () => {
    const [activeCategory, setActiveCategory] = useState<NewsCategory>('All');

    const visible = useMemo(() => {
        if (activeCategory === 'All') return allNews;
        return allNews.filter((n) => n.categories.includes(activeCategory));
    }, [activeCategory]);

    return (
        <section className="w-full pb-20 md:pb-28">
            <NewsFilter onChange={(c) => setActiveCategory(c as NewsCategory)} />

            <div className="px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
                    {visible.map((item, index) => (
                        <NewsCard key={index} item={item} />
                    ))}
                </div>
                {visible.length === 0 && (
                    <p className="text-center text-black/60 py-12">No news in this category yet.</p>
                )}
            </div>
        </section>
    );
};

export default NewsGrid;
