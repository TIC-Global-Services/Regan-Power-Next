import React from 'react';
import {
    Factory,
    Building2,
    Plus,
    Store,
    GraduationCap,
    Sprout,
    type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/reuseables/SectionHeader';
import Reveal from '@/reuseables/Reveal';

export interface Industry {
    title: string;
    description: string;
    caseStudy: string;
    iconKey: 'manufacturing' | 'hospitality' | 'healthcare' | 'retail' | 'education' | 'agribusiness';
}

interface SixIndustriesSectionProps {
    subtitle: string;
    title: string;
    industries: Industry[];
}

const iconMap: Record<Industry['iconKey'], LucideIcon> = {
    manufacturing: Factory,
    hospitality: Building2,
    healthcare: Plus,
    retail: Store,
    education: GraduationCap,
    agribusiness: Sprout,
};

const SixIndustriesSection: React.FC<SixIndustriesSectionProps> = ({
    subtitle,
    title,
    industries,
}) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="px-[5%] mx-auto">
                <SectionHeader
                    subtitle={subtitle}
                    title={title}
                    align="left"
                    subtitleClass="text-lg md:text-2xl font-light text-black tracking-tight"
                    titleClass="text-4xl md:text-6xl lg:text-[4.5rem] text-[#63B846] font-normal tracking-tighter leading-none"
                    className="max-w-4xl mb-12 md:mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {industries.map((industry, idx) => {
                        const Icon = iconMap[industry.iconKey];
                        return (
                            <Reveal
                                key={idx}
                                delay={idx * 0.08}
                                className="bg-[#E5EFD5] rounded-[20px] p-6 md:p-8 flex flex-col min-h-[320px] md:min-h-[360px] hover:bg-[#D7E5C0] transition-colors duration-300"
                            >
                                <Icon
                                    size={48}
                                    strokeWidth={1.5}
                                    className="text-black"
                                />

                                <div className="mt-auto pt-8">
                                    <h3 className="text-2xl md:text-3xl font-normal text-black tracking-tight leading-tight mb-3">
                                        {industry.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-black/75 leading-snug tracking-tight mb-4">
                                        {industry.description}
                                    </p>
                                    <p className="text-sm md:text-base text-black font-semibold leading-snug tracking-tight">
                                        {industry.caseStudy}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SixIndustriesSection;
