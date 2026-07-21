'use client';

import React, { useMemo, useState } from 'react';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';

import howMuchImg from '@/assets/blog/howmuch.png';
import isWorthImg from '@/assets/blog/isworth.png';
import explainedImg from '@/assets/blog/explained.png';
import homeEvImg from '@/assets/blog/homeEV.png';

type Category =
    | 'Systems & Panels'
    | 'Inverters'
    | 'Rebates & Savings'
    | 'Batteries & Storage'
    | 'Perth-Specific';

interface Post {
    title: string;
    description: string;
    image: string;
    href: string;
    categories: Category[];
}

const posts: Post[] = [
    {
        title: 'How Much Does A Solar System Cost In Perth?',
        description:
            'A Complete Breakdown Of Solar Installation Costs, System Sizes, And What Influences Pricing In 2026.',
        image: 'howmuch',
        href: '/blog/how-much-does-solar-cost-perth',
        categories: ['Systems & Panels', 'Perth-Specific'],
    },
    {
        title: 'Is Battery Storage Worth It In 2026?',
        description:
            'Discover How Battery Storage Can Reduce Your Energy Bills And Whether It’s The Right Investment For Your Home.',
        image: 'isworth',
        href: '/blog/is-battery-storage-worth-it',
        categories: ['Batteries & Storage', 'Rebates & Savings'],
    },
    {
        title: 'WA Solar & Battery Rebates Explained',
        description:
            'Learn About Available Government Rebates, Eligibility Criteria, And How To Maximize Your Savings.',
        image: 'explained',
        href: '/blog/wa-solar-battery-rebates',
        categories: ['Rebates & Savings', 'Batteries & Storage', 'Perth-Specific'],
    },
    {
        title: 'Home EV Charging: Everything You Need To Know',
        description:
            'A Beginner-Friendly Guide To Installing EV Chargers At Home, Costs Involved, And Charging Efficiency Tips.',
        image: 'homeEV',
        href: '/blog/home-ev-charging',
        categories: ['Inverters', 'Systems & Panels'],
    },
];

const imageMap: Record<string, string> = {
    howmuch: howMuchImg.src,
    isworth: isWorthImg.src,
    explained: explainedImg.src,
    homeEV: homeEvImg.src,
};

const BlogGrid = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('Systems & Panels');

    const visiblePosts = useMemo(
        () => posts.filter((p) => p.categories.includes(activeCategory)),
        [activeCategory]
    );

    return (
        <section className="w-full px-[5%] pb-20 md:pb-28">
            <CategoryFilter onChange={(c) => setActiveCategory(c as Category)} />

            <div className="flex flex-col gap-5 md:gap-6 max-w-7xl mx-auto">
                {visiblePosts.map((post, index) => {
                    const isTextLeft = index % 2 === 0;
                    return (
                        <div
                            key={post.href}
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
                                            image={imageMap[post.image]}
                                            imageAlt={post.title}
                                            href={post.href}
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="md:col-span-2">
                                        <BlogCard
                                            variant="image"
                                            image={imageMap[post.image]}
                                            imageAlt={post.title}
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
