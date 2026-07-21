import React from 'react';
import SectionHeader from '@/reuseables/SectionHeader';
import Reveal from '@/reuseables/Reveal';

export interface FiveThingItem {
    number: number;
    title: string;
    description: string;
    highlight?: boolean;
}

interface FiveThingsSectionProps {
    subtitle: string;
    title: string;
    description: string;
    items: FiveThingItem[];
}

const FiveThingsSection: React.FC<FiveThingsSectionProps> = ({
    subtitle,
    title,
    description,
    items,
}) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="px-[5%] mx-auto">
                <SectionHeader
                    subtitle={subtitle}
                    title={title}
                    description={description}
                    align="center"
                    subtitleClass="text-lg md:text-2xl font-light text-black tracking-tight"
                    titleClass="text-4xl md:text-6xl lg:text-[4.5rem] text-[#63B846] font-normal tracking-tighter leading-none"
                    className="mx-auto max-w-4xl mb-16 md:mb-24"
                />

                <div className="grid grid-cols-5 gap-3 md:gap-4 max-w-6xl mx-auto items-start">
                    {items.map((item, idx) => {
                        const isOffset = idx % 2 === 1;
                        const bg = item.highlight ? 'bg-[#A0CF44]' : 'bg-[#E5EFD5]';

                        return (
                            <Reveal
                                key={idx}
                                delay={idx * 0.1}
                                className={`relative flex flex-col ${
                                    isOffset ? 'mt-16 md:mt-24' : ''
                                }`}
                            >
                                {/* Number — top for even cards, bottom for odd-offset cards */}
                                {!isOffset ? (
                                    <span
                                        className={`text-[#1a1a1a] text-6xl md:text-8xl lg:text-[7rem] font-normal leading-none tracking-tighter select-none mb-2 ${
                                            item.highlight ? 'order-2' : 'order-1'
                                        }`}
                                    >
                                        {item.number}
                                    </span>
                                ) : null}

                                <div
                                    className={`${bg} rounded-[20px] p-5 md:p-6 flex flex-col min-h-[280px] md:min-h-[340px] transition-all duration-300 hover:scale-[1.02] ${
                                        isOffset ? 'order-1' : 'order-2'
                                    }`}
                                >
                                    <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-black tracking-tight leading-tight mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-black/80 leading-snug tracking-tight">
                                        {item.description}
                                    </p>
                                </div>

                                {isOffset ? (
                                    <span
                                        className={`text-[#1a1a1a] text-6xl md:text-8xl lg:text-[7rem] font-normal leading-none tracking-tighter select-none mt-2 ${
                                            item.highlight ? 'order-1' : 'order-3'
                                        }`}
                                    >
                                        {item.number}
                                    </span>
                                ) : null}
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FiveThingsSection;
