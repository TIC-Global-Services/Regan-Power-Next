'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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
    introText?: string;
    features?: FeatureItem[];
    accentColor?: string;
    bgColor?: string;
}

const defaultFeatures: FeatureItem[] = [
    {
        title: 'Bankability',
        description: 'Bloomberg NEF Tier-1 Classification Or Equivalent. We Want Manufacturers Still In Business When Your Warranty Is Claimed In 2050.',
        image: solarBatteryCharging,
    },
    {
        title: 'Local Service Infrastructure',
        description: 'Australian-Based Technical Support, Spare Parts Held On-Shore, And Warranty Claim Turnaround Measured In Days, Not Months.',
        image: whyMore,
    },
    {
        title: 'CEC Approval',
        description: 'Listed On The Current Clean Energy Council Approved Products List. Non-Negotiable For STCs Rebate Eligibility.',
        image: forYourHome,
    },
    {
        title: 'Real-World Performance',
        description: 'Sustained Output Monitored Across Our 45,000+ Installations. Brands We\'ve Seen Underperform In Perth Heat Or Coastal Conditions Don\'t Make This Page.',
        image: fiveWay,
    },
];

const FeatureSplitSection: React.FC<FeatureSplitSectionProps> = ({
    subtitle = "Our Ten-Brand Shortlist,",
    heading = "And How It Got Away.",
    introText = "Every Brand On This Page Has To Meet Five Criteria Before We Put It On A Perth Roof. We'd Rather Turn Down A Volume Deal Than Install Something We Wouldn't Want Supporting For The Next 25 Years.",
    features = defaultFeatures,
    accentColor = '#63B846',
    bgColor = '#ffffff',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sectionEl = containerRef.current;
        if (!sectionEl) return;

        const mm = gsap.matchMedia();

        // Desktop Layout: Scroll pinning interaction
        mm.add("(min-width: 1024px)", () => {
            const textElements = sectionEl.querySelectorAll('.feature-text-item');
            const imageElements = sectionEl.querySelectorAll('.feature-image-desktop');

            // Set initial state
            gsap.set(textElements, { opacity: 0.25 });
            gsap.set(textElements[0], { opacity: 1 });
            gsap.set(imageElements, { opacity: 0, scale: 1.03 });
            gsap.set(imageElements[0], { opacity: 1, scale: 1 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top top",
                    end: `+=${features.length * 100}%`,
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const rawIndex = Math.floor(progress * features.length);
                        const index = Math.max(0, Math.min(rawIndex, features.length - 1));
                        setActiveIndex(index);
                    }
                }
            });

            // Build scrubbed transitions step-by-step
            for (let i = 1; i < features.length; i++) {
                tl.to(textElements[i - 1], { opacity: 0.25, duration: 1 }, `step-${i}`)
                  .to(imageElements[i - 1], { opacity: 0, scale: 1.03, duration: 1 }, `step-${i}`)
                  .to(textElements[i], { opacity: 1, duration: 1 }, `step-${i}`)
                  .to(imageElements[i], { opacity: 1, scale: 1, duration: 1 }, `step-${i}`)
                  .to({}, { duration: 0.5 }); // pause/hold buffer
            }

            return () => {
                tl.kill();
            };
        });

        return () => {
            mm.revert();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [features.length]);

    return (
        <section
            ref={containerRef}
            className="relative overflow-hidden"
            style={{ backgroundColor: bgColor }}
        >
            {/* Desktop Layout (sticky split columns) */}
            <div className="hidden lg:grid grid-cols-12 min-h-screen">
                {/* Left Column: Heading, Intro, and Scrolling Features */}
                <div className="col-span-5 flex flex-col justify-center pl-[10%] pr-[5%] h-screen">
                    <div className="mb-8">
                        <p className="text-lg font-normal text-gray-900 mb-1">
                            {subtitle}
                        </p>
                        <h2
                            className="text-4xl lg:text-[2.8rem] font-normal leading-[1.1] tracking-tight mb-4"
                            style={{ color: accentColor }}
                        >
                            {heading}
                        </h2>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-md">
                            {introText}
                        </p>
                    </div>

                    {/* Scrolling feature item list */}
                    <div className="flex flex-col gap-12 mt-8">
                        {features.map((feature, index) => {
                            return (
                                <div
                                    key={index}
                                    className="feature-text-item transition-all duration-300"
                                >
                                    <h3 className="text-2xl font-normal text-black mb-2 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Sticky full-height Image */}
                <div className="col-span-7 relative h-screen overflow-hidden bg-gray-50">
                    {features.map((feature, index) => (
                        <div
                          key={index}
                          className="feature-image-desktop absolute inset-0 transition-all duration-300"
                          style={{
                              zIndex: activeIndex === index ? 2 : 1,
                          }}
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover"
                                sizes="50vw"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile & Tablet Layout (Swiper Carousel) */}
            <div className="lg:hidden flex flex-col px-[5%] py-16 md:py-24 gap-8">
                <div className="text-left">
                    <p className="text-base text-gray-900 mb-1">
                        {subtitle}
                    </p>
                    <h2
                        className="text-3xl md:text-4xl font-normal leading-tight mb-3"
                        style={{ color: accentColor }}
                    >
                        {heading}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {introText}
                    </p>
                </div>

                <div 
                  className="w-full relative"
                  style={{
                    // Override swiper pagination styles to match brand design
                    // @ts-ignore
                    '--swiper-pagination-color': accentColor,
                    '--swiper-pagination-bullet-inactive-color': '#d1d5db',
                    '--swiper-pagination-bullet-inactive-opacity': '1',
                  }}
                >
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        className="w-full pb-12"
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide key={index} className="flex flex-col gap-4 border-l-2 pl-4 border-[#63B846] bg-white">
                                <h3 className="text-xl font-normal text-gray-900 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed text-gray-600">
                                    {feature.description}
                                </p>
                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mt-2 bg-gray-50">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FeatureSplitSection;