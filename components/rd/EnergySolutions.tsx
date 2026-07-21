import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface EnergySolutionItem {
    title: string;
    description: string;
    image: StaticImageData | string;
    href: string;
    imageAlt?: string;
}

interface EnergySolutionsProps {
    items?: EnergySolutionItem[];
    subtitle?: string;
    title?: string;
}

import microgridImg from '@/assets/rd/microgrid.png';
import hybridImg from '@/assets/rd/hybridenergy.png';
import mgmtImg from '@/assets/rd/energymanagement.png';
import emergingImg from '@/assets/rd/emerging.png';

const defaultItems: EnergySolutionItem[] = [
    {
        title: 'Microgrid Development',
        description: 'Building Resilient, Localized Energy Networks For Efficient Power Distribution.',
        image: microgridImg,
        href: '/research-and-development/microgrid-development',
    },
    {
        title: 'Hybrid Energy Systems',
        description: 'Integrating Multiple Energy Sources For Optimized Performance And Reliability.',
        image: hybridImg,
        href: '/research-and-development/hybrid-energy-systems',
    },
    {
        title: 'Smart Energy Management',
        description: 'Leveraging Data And Automation To Enhance Energy Efficiency And Control.',
        image: mgmtImg,
        href: '/research-and-development/smart-energy-management',
    },
    {
        title: 'Emerging Renewable Technologies',
        description: 'Exploring Advanced Solutions To Shape The Future Of Sustainable Energy.',
        image: emergingImg,
        href: '/research-and-development/emerging-renewable-technologies',
    },
];

const EnergySolutions: React.FC<EnergySolutionsProps> = ({
    items = defaultItems,
    subtitle = 'Driving Innovation Across Next-Generation',
    title = 'Energy Solutions',
}) => {
    return (
        <section className="w-full px-[5%] py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8 md:mb-12">
                    <p className="text-2xl md:text-3xl font-light tracking-tight text-black mb-1">
                        {subtitle}
                    </p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#63B846]">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="group relative block rounded-2xl overflow-hidden aspect-[3/4] md:aspect-[4/5]"
                        >
                            <Image
                                src={item.image}
                                alt={item.imageAlt || item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                                <h3 className="text-lg md:text-xl font-medium tracking-tight leading-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs md:text-sm leading-snug tracking-tight text-white/85 max-w-full">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EnergySolutions;
