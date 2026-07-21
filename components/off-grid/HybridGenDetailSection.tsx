import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface HybridGenDetailSectionProps {
    logo: StaticImageData | string;
    image: StaticImageData | string;
    imageAlt?: string;
    patentText?: string;
}

const HybridGenDetailSection: React.FC<HybridGenDetailSectionProps> = ({
    logo,
    image,
    imageAlt = 'HybridGEN Power Pack',
    patentText = 'International Patent: PCT/AU2011/001068',
}) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="px-[5%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-7xl mx-auto">
                    <div>
                        <div className="relative w-[200px] h-[60px] md:w-[240px] md:h-[72px] mb-6">
                            <Image
                                src={logo}
                                alt="HybridGEN"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-2xl md:text-3xl text-black font-light tracking-tight mb-1">
                            HybridGEN - Patented Hybrid
                        </p>
                        <h2 className="text-4xl md:text-6xl lg:text-[5rem] text-[#63B846] font-normal tracking-tighter leading-none mb-6">
                            Power Pack
                        </h2>
                        <p className="text-sm md:text-base text-black leading-relaxed tracking-tight">
                            HybridGEN Is Regen's Own Renewable Hybrid Power Pack — A Factory-Wired Cabinet That Combines Solar PV, Optional Small Wind, Lithium Battery Storage, And Our Patented Variable-Speed Generator. It Replaces A Standard Fixed-Speed Diesel Generator With A System That Runs The Engine Only When It's Needed, Only At Its Most Efficient Speed, And Only After The Renewables Have Done Their Job.
                        </p>
                        <p className="text-sm md:text-base text-black leading-relaxed tracking-tight mt-3">
                            The Result: 30–60% Reduction In Diesel Consumption Versus A Conventional Diesel System, Longer Engine Life From Running At Optimum Load, Stable Voltage And Frequency Across Varying Solar And Wind Input, And A System That Ships In A Fully Wired Enclosure — Drop In, Connect, And Run.
                        </p>
                    </div>

                    <div className="relative w-full aspect-square rounded-[24px] overflow-hidden">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                            <p className="text-xs md:text-sm text-white font-medium tracking-tight">
                                {patentText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HybridGenDetailSection;
