import React from 'react';
import { PortfolioCard, FeaturedPortfolioCard } from './PortfolioCard';
import cardImg from '@/assets/portfolio/cardimage.png';

const project = {
    title: 'Fremantle Cold Storage Facility',
    description: 'Industrial Manufacturing Facility In Metro Perth Cut Annual Energy Costs By 42% With A 75kW Solar System.',
    href: '/portfolio/fremantle-cold-storage',
};

const PortfolioGrid = () => {
    return (
        <section className="w-full px-[5%] py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    <FeaturedPortfolioCard
                        image={cardImg}
                        title={project.title}
                        description={project.description}
                        href={project.href}
                    />
                    <PortfolioCard image={cardImg} title={project.title} href={project.href} />
                    <PortfolioCard image={cardImg} title={project.title} href={project.href} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <PortfolioCard
                            key={i}
                            image={cardImg}
                            title={project.title}
                            href={project.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
