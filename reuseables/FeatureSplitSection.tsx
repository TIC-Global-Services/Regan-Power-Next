'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';



import solarBatteryCharging from '@/assets/solar_battery_charging.png';
import whyMore from '@/assets/why_more.png';
import forYourHome from '@/assets/for_your_home.png';
import fiveWay from '@/assets/5_way.png';

export interface FeatureItem {
    title: string;
    description: string;
    image: StaticImageData | string;
}

export interface FeatureSplitSectionProps {
    subtitle?: string;
    heading?: string;
    features?: FeatureItem[];
    accentColor?: string;
    bgColor?: string;
}

const defaultFeatures: FeatureItem[] = [
    {
        title: 'In-House Installation',
        description: 'Our Electricians Are Employed By Regen Power. They\'re Not A Labour-Hire Crew Dispatched By A Sales Agency. Same Team, Same Standard, Every Install.',
        image: solarBatteryCharging,
    },
    {
        title: 'Tier-1 Components Only',
        description: 'Every Panel And Inverter We Quote Is On The Clean Energy Council Approved Products List. No Budget Substitutes, No "Equivalent" Downgrades At Installation Day.',
        image: whyMore,
    },
    {
        title: 'Full Rebate + Paperwork Handling',
        description: 'STCs, WA Residential Battery Scheme, Plenti Loan, Synergy/Horizon Connection, DEBS Feed-In — All Submitted By Our Perth Office. You Don\'t See A Form.',
        image: forYourHome,
    },
    {
        title: '23 Years Of Perth Service',
        description: 'When You Call Us In 2035 About A Synergy Tariff Change Or A Battery Expansion, The Business Answering The Phone Is The Same One That Installed Your System. Six Consecutive ProductReview Awards Say We\'re Good At This.',
        image: fiveWay,
    },
];

const FeatureSplitSection: React.FC<FeatureSplitSectionProps> = ({
    subtitle = "Why Our Deals Aren't The Cheapest In Perth",
    heading = "And Why That Matters.",
    features = defaultFeatures,
    accentColor = '#63B846',
    bgColor = '#ffffff',
}) => {
    const sectionRef = useRef<HTMLElement>(null);
    const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
    const imageWrapperRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;


            featuresRef.current.forEach((el, i) => {
                if (!el) return;


                gsap.set(el, { opacity: 0, y: 60 });

                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: false,
                    onEnter: () => {
                        gsap.to(el, {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'power3.out',
                        });
                        setActiveIndex(i);
                    },
                });


                ScrollTrigger.create({
                    trigger: el,
                    start: 'top 60%',
                    onEnterBack: () => {
                        setActiveIndex(i);
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [features.length]);

    useEffect(() => {
        if (!imageWrapperRef.current) return;
        const images = imageWrapperRef.current.querySelectorAll<HTMLDivElement>(
            '[data-feature-image]'
        );

        images.forEach((img, i) => {
            gsap.to(img, {
                opacity: i === activeIndex ? 1 : 0,
                scale: i === activeIndex ? 1 : 1.05,
                duration: 0.7,
                ease: 'power2.inOut',
            });
        });
    }, [activeIndex]);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 md:py-32 overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            <div className="px-[5%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    <div className="flex flex-col">
                        <div className="mb-14 md:mb-20">
                            <p className="text-base md:text-lg tracking-wide text-gray-600 mb-1">
                                {subtitle}
                            </p>
                            <h2
                                className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight"
                                style={{ color: accentColor }}
                            >
                                {heading}
                            </h2>
                        </div>


                        <div className="flex flex-col gap-12 md:gap-16">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    ref={(el) => {
                                        featuresRef.current[index] = el;
                                    }}
                                    className="group relative"
                                >

                                    <div
                                        className="absolute -left-4 md:-left-6 top-0 h-full w-[3px] rounded-full transition-all duration-500"
                                        style={{
                                            backgroundColor: accentColor,
                                            opacity: activeIndex === index ? 1 : 0.15,
                                            transform: activeIndex === index ? 'scaleY(1)' : 'scaleY(0.5)',
                                        }}
                                    />

                                    <h3
                                        className="text-xl md:text-2xl font-medium text-black mb-3 transition-colors duration-300"
                                        style={{
                                            color: activeIndex === index ? '#000' : '#555',
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p
                                        className="text-sm md:text-[0.95rem] leading-relaxed max-w-md transition-colors duration-300"
                                        style={{
                                            color: activeIndex === index ? '#444' : '#888',
                                        }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <div
                            ref={imageWrapperRef}
                            className="relative w-full aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    data-feature-image
                                    className="absolute inset-0"
                                    style={{
                                        opacity: index === 0 ? 1 : 0,
                                        zIndex: activeIndex === index ? 2 : 1,
                                    }}
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}

                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
                        </div>


                        <div className="flex items-center justify-center gap-2 mt-6">
                            {features.map((_, index) => (
                                <span
                                    key={index}
                                    className="block rounded-full transition-all duration-500"
                                    style={{
                                        width: activeIndex === index ? 24 : 8,
                                        height: 8,
                                        backgroundColor:
                                            activeIndex === index ? accentColor : '#d1d5db',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSplitSection;