'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import card1Img from '@/assets/rd/card1-achievements.png';
import card3Img from '@/assets/rd/card3-achievements.png';

export interface AchievementItem {
    title: string;
    description: string;
    image: StaticImageData | string;
    href: string;
    imageAlt?: string;
}

const defaultAchievements: AchievementItem[] = [
    {
        title: 'Pilot Programs In Remote Regions',
        description: 'Deploying Solutions In Underserved Areas To Ensure Accessibility And Reliability.',
        image: card1Img,
        href: '/research-and-development/pilot-programs',
    },
    {
        title: 'Smart Grid Integration',
        description: 'Connecting Distributed Energy Resources To Modern Grid Infrastructure For Seamless Power Flow.',
        image: card3Img,
        href: '/research-and-development/smart-grid-integration',
    },
    {
        title: 'Community Energy Projects',
        description: 'Partnering With Local Communities To Deliver Shared Renewable Energy Solutions.',
        image: card1Img,
        href: '/research-and-development/community-energy',
    },
    {
        title: 'Microgrid Pilot — Pilbara',
        description: 'Off-Grid Hybrid Microgrid Powering Remote Mining Operations With Solar + Storage.',
        image: card3Img,
        href: '/research-and-development/pilbara-microgrid',
    },
    {
        title: 'Battery Innovation Lab',
        description: 'Researching Next-Generation Cell Chemistry For Higher Density, Lower Cost Storage.',
        image: card1Img,
        href: '/research-and-development/battery-lab',
    },
];

const CoreAchievements = () => {
    return (
        <section className="w-full px-[5%] py-12 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-2xl md:text-3xl font-light tracking-tight text-black mb-1">
                        Core
                    </p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#63B846]">
                        Achievements
                    </h2>
                </div>

                <div
                    className="core-achievements-swiper"
                    style={
                        {
                            '--swiper-pagination-color': '#63B846',
                        } as React.CSSProperties
                    }
                >
                    <Swiper
                        modules={[EffectCoverflow, Autoplay, Navigation]}
                        effect="coverflow"
                        grabCursor
                        centeredSlides
                        loop
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            scale: 0.85,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        navigation
                        className="!py-6"
                    >
                        {defaultAchievements.map((item, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-[280px] md:!w-[640px] !h-[380px] md:!h-[440px]"
                            >
                                <Link
                                    href={item.href}
                                    className="group relative block w-full h-full rounded-2xl overflow-hidden"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.imageAlt || item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(min-width: 768px) 640px, 280px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-tight mb-2 md:mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm md:text-base leading-snug tracking-tight text-white/85 max-w-md mb-4 md:mb-5">
                                            {item.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 bg-[#A0CF44] text-black px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-tight group-hover:gap-3 transition-all duration-300">
                                            Explore
                                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white group-hover:translate-x-1 transition-transform duration-300">
                                                <ArrowRight size={14} strokeWidth={2.5} className="text-black" />
                                            </span>
                                        </span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CoreAchievements;
