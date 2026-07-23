'use client';

import React, { useMemo, useState } from 'react';
import BlogCard from './BlogCard';
import CategoryFilter, { CategoryOption } from './CategoryFilter';

import howMuchImg from '@/assets/blog/howmuch.png';
import isWorthImg from '@/assets/blog/isworth.png';
import explainedImg from '@/assets/blog/explained.png';
import homeEvImg from '@/assets/blog/homeEV.png';

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: { url: string; alt: string } | null;
    categories: string[];
    href: string;
}

interface BlogGridProps {
    categories: CategoryOption[];
    defaultCategory?: string;
    posts: BlogPost[];
}

const defaultPosts: BlogPost[] = [
    {
        id: 1,
        title: 'How Much Does A Solar System Cost In Perth?',
        slug: 'how-much-does-solar-cost-perth',
        description:
            'A Complete Breakdown Of Solar Installation Costs, System Sizes, And What Influences Pricing In 2026.',
        image: { url: howMuchImg.src, alt: 'How Much Does A Solar System Cost In Perth?' },
        categories: ['Systems & Panels', 'Perth-Specific'],
        href: '/blog/how-much-does-solar-cost-perth',
    },
    {
        id: 2,
        title: 'Is Battery Storage Worth It In 2026?',
        slug: 'is-battery-storage-worth-it',
        description:
            'Discover How Battery Storage Can Reduce Your Energy Bills And Whether It’s The Right Investment For Your Home.',
        image: { url: isWorthImg.src, alt: 'Is Battery Storage Worth It In 2026?' },
        categories: ['Batteries & Storage', 'Rebates & Savings'],
        href: '/blog/is-battery-storage-worth-it',
    },
    {
        id: 3,
        title: 'WA Solar & Battery Rebates Explained',
        slug: 'wa-solar-battery-rebates',
        description:
            'Learn About Available Government Rebates, Eligibility Criteria, And How To Maximize Your Savings.',
        image: { url: explainedImg.src, alt: 'WA Solar & Battery Rebates Explained' },
        categories: ['Rebates & Savings', 'Batteries & Storage', 'Perth-Specific'],
        href: '/blog/wa-solar-battery-rebates',
    },
    {
        id: 4,
        title: 'Home EV Charging: Everything You Need To Know',
        slug: 'home-ev-charging',
        description:
            'A Beginner-Friendly Guide To Installing EV Chargers At Home, Costs Involved, And Charging Efficiency Tips.',
        image: { url: homeEvImg.src, alt: 'Home EV Charging: Everything You Need To Know' },
        categories: ['Inverters', 'Systems & Panels'],
        href: '/blog/home-ev-charging',
    },
];

const BlogGrid: React.FC<BlogGridProps> = ({
    categories,
    defaultCategory,
    posts = defaultPosts,
}) => {
    const [activeCategory, setActiveCategory] = useState<string>(
        defaultCategory ?? categories[0]?.value ?? ''
    );

    const visiblePosts = useMemo(
        () => posts.filter((p) => p.categories.includes(activeCategory)),
        [activeCategory, posts]
    );

    return (
        <section className="w-full px-[5%] pb-20 md:pb-28">
            <CategoryFilter
                categories={categories}
                defaultCategory={defaultCategory}
                onChange={setActiveCategory}
            />

            <div className="flex flex-col gap-5 md:gap-6 max-w-7xl mx-auto">
                {visiblePosts.map((post, index) => {
                    const isTextLeft = index % 2 === 0;
                    return (
                        <div
                            key={post.id}
                            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
                        >
                            {isTextLeft ? (
                                <>
                                    <div className="md:col-span-1">
                                        <BlogCard
                                            variant="text"
                                            title={post.title}
                                            description={post.description}
                                            href={post.href}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <BlogCard
                                            variant="image"
                                            image={post.image?.url ?? ''}
                                            imageAlt={post.image?.alt ?? post.title}
                                            href={post.href}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="md:col-span-2">
                                        <BlogCard
                                            variant="image"
                                            image={post.image?.url ?? ''}
                                            imageAlt={post.image?.alt ?? post.title}
                                            href={post.href}
                                        />
                                    </div>
                                    <div className="md:col-span-1">
                                        <BlogCard
                                            variant="text"
                                            title={post.title}
                                            description={post.description}
                                            href={post.href}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default BlogGrid;
