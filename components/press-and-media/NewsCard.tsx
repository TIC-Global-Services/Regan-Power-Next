'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface NewsCardItem {
    title: string;
    description: string;
    image: StaticImageData | string;
    href: string;
    imageAlt?: string;
}

interface NewsCardProps {
    item: NewsCardItem;
    aspect?: string;
    sizes?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
    item,
    aspect = 'aspect-[4/5] md:aspect-[3/4]',
    sizes = '(min-width: 768px) 33vw, 100vw',
}) => {
    return (
        <Link
            href={item.href}
            className={`group relative block rounded-2xl overflow-hidden ${aspect}`}
        >
            <Image
                src={item.image}
                alt={item.imageAlt || item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={sizes}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                <h3 className="text-base md:text-lg font-medium tracking-tight leading-tight mb-1.5">
                    {item.title}
                </h3>
                <p className="text-xs md:text-[13px] leading-snug tracking-tight text-white/85">
                    {item.description}
                </p>
            </div>
        </Link>
    );
};

export default NewsCard;
