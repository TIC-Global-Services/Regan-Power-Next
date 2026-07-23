'use client';

import React, { useMemo, useState } from 'react';
import NewsFilter, { CategoryOption } from './NewsFilter';
import NewsCard from './NewsCard';

export interface PressArticle {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: { url: string; alt: string } | null;
    categories: string[];
    href: string;
}

interface NewsGridProps {
    subtitle?: string;
    title?: string;
    categories: CategoryOption[];
    defaultCategory?: string;
    posts?: PressArticle[];
}

import heroImg from '@/assets/press/hero.png';
import howMuchImg from '@/assets/blog/howmuch.png';
import homeEvImg from '@/assets/blog/homeEV.png';
import explainedImg from '@/assets/blog/explained.png';

const defaultPosts: PressArticle[] = [
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
        description: "Partnering With Curtin University To Advance Household Battery Adoption.",
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

const NewsGrid: React.FC<NewsGridProps> = ({
    subtitle = 'Browse',
    title = 'All News',
    categories,
    defaultCategory,
    posts = defaultPosts,
}) => {
    const initialCategory = defaultCategory ?? categories[0]?.value ?? '';
    const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

    const visible = useMemo(() => {
        if (activeCategory === 'All') return posts;
        return posts.filter((n) => n.categories.includes(activeCategory));
    }, [activeCategory, posts]);

    return (
        <section className="w-full pb-20 md:pb-28">
            {(subtitle || title) && (
                <div className="text-center mb-8 md:mb-10 px-[5%]">
                    {subtitle && (
                        <p className="text-2xl md:text-3xl font-light tracking-tight text-black mb-1">
                            {subtitle}
                        </p>
                    )}
                    {title && (
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#63B846]">
                            {title}
                        </h2>
                    )}
                </div>
            )}

            <NewsFilter
                categories={categories}
                defaultCategory={defaultCategory}
                onChange={setActiveCategory}
            />

            <div className="px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
                    {visible.map((item) => (
                        <NewsCard
                            key={item.id}
                            item={{
                                title: item.title,
                                description: item.description,
                                image: item.image?.url ?? '',
                                imageAlt: item.image?.alt ?? item.title,
                                href: item.href,
                            }}
                        />
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
