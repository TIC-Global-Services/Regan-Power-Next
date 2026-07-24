'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import NewsFilter, { CategoryOption } from './NewsFilter';

export interface PressCard {
    title: string;
    description: string;
    image: StaticImageData | string;
}

interface NewsGridProps {
    subtitle?: string;
    title?: string;
    categories: CategoryOption[];
    defaultCategory?: string;
    cards?: PressCard[];
}

const NewsGrid: React.FC<NewsGridProps> = ({
    subtitle = 'Browse',
    title = 'All News',
    categories,
    defaultCategory,
    cards = [],
}) => {
    const [activeCategory] = useState<string>(
        defaultCategory ?? categories[0]?.value ?? ''
    );

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
            />

            <div className="px-[5%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-7xl mx-auto">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="group relative block rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]"
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(min-width: 768px) 33vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                                <h3 className="text-base md:text-lg font-medium tracking-tight leading-tight mb-1.5">
                                    {card.title}
                                </h3>
                                <p className="text-xs md:text-[13px] leading-snug tracking-tight text-white/85">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {cards.length === 0 && (
                    <p className="text-center text-black/60 py-12">No news in this category yet.</p>
                )}
            </div>
        </section>
    );
};

export default NewsGrid;
