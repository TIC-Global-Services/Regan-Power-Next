'use client';

import React, { useState } from 'react';
import BlogCard, { BlogCardData } from './BlogCard';
import CategoryFilter, { CategoryOption } from './CategoryFilter';

interface BlogGridProps {
    categories: CategoryOption[];
    defaultCategory?: string;
    cards: BlogCardData[];
}

const BlogGrid: React.FC<BlogGridProps> = ({
    categories,
    defaultCategory,
    cards,
}) => {
    const [activeCategory, setActiveCategory] = useState<string>(
        defaultCategory ?? categories[0]?.value ?? ''
    );

    return (
        <section className="w-full px-[5%] pb-20 md:pb-28">
            <CategoryFilter
                categories={categories}
                defaultCategory={defaultCategory}
                onChange={setActiveCategory}
            />

            <div className="flex flex-col gap-5 md:gap-6 max-w-7xl mx-auto">
                {cards.map((card, idx) => (
                    <BlogCard key={idx} card={card} />
                ))}
            </div>
        </section>
    );
};

export default BlogGrid;
