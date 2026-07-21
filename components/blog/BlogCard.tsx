'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface BaseBlogCardProps {
    href: string;
}

interface TextBlogCardProps extends BaseBlogCardProps {
    variant: 'text';
    title: string;
    description: string;
    image?: never;
}

interface ImageBlogCardProps extends BaseBlogCardProps {
    variant: 'image';
    image: StaticImageData | string;
    imageAlt?: string;
    title?: never;
    description?: never;
}

type BlogCardProps = TextBlogCardProps | ImageBlogCardProps;

const TextCard: React.FC<TextBlogCardProps> = ({ title, description, href }) => (
    <Link
        href={href}
        className="group relative bg-[#D5E5C0] rounded-2xl p-6 md:p-8 flex flex-col justify-end min-h-[280px] md:min-h-[420px] overflow-hidden transition-transform duration-500 hover:-translate-y-1"
    >
        <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#8dc63f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowUpRight size={18} strokeWidth={2.5} className="text-black" />
        </div>
        <div className="relative z-10 max-w-full">
            <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-medium tracking-tight text-black leading-tight mb-2">
                {title}
            </h3>
            <p className="text-sm md:text-[0.95rem] text-black/85 leading-snug tracking-tight max-w-[90%]">
                {description}
            </p>
        </div>
    </Link>
);

const ImageCard: React.FC<ImageBlogCardProps> = ({ image, imageAlt, href }) => (
    <Link
        href={href}
        className="group relative block rounded-2xl overflow-hidden min-h-[280px] md:min-h-[420px] transition-transform duration-500 hover:-translate-y-1"
    >
        <Image
            src={image}
            alt={imageAlt || 'Blog post'}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 768px) 66vw, 100vw"
        />
    </Link>
);

const BlogCard: React.FC<BlogCardProps> = (props) => {
    if (props.variant === 'text') return <TextCard {...props} />;
    return <ImageCard {...props} />;
};

export default BlogCard;
