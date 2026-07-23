'use client';

import React from 'react';
import { PortfolioCard, FeaturedPortfolioCard } from './PortfolioCard';

export interface PortfolioProject {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: { url: string; alt: string } | null;
    industry: string | null;
    systemSize: string | null;
    location: string | null;
    featured: boolean;
}

export interface PortfolioGridProps {
    projects: PortfolioProject[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
    if (projects.length === 0) {
        return (
            <section className="w-full px-[5%] py-8 md:py-12">
                <div className="max-w-7xl mx-auto text-center py-16">
                    <p className="text-base text-black/60 tracking-tight">
                        No projects match the current filters.
                    </p>
                </div>
            </section>
        );
    }

    const [featured, ...rest] = projects;

    return (
        <section className="w-full px-[5%] py-8 md:py-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    <FeaturedPortfolioCard
                        image={featured.image?.url ?? ''}
                        imageAlt={featured.image?.alt ?? featured.title}
                        title={featured.title}
                        description={featured.description}
                        href={`/portfolio/${featured.slug}`}
                    />
                    {rest.slice(0, 2).map((p) => (
                        <PortfolioCard
                            key={p.id}
                            image={p.image?.url ?? ''}
                            imageAlt={p.image?.alt ?? p.title}
                            title={p.title}
                            href={`/portfolio/${p.slug}`}
                        />
                    ))}
                </div>

                {rest.length > 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
                        {rest.slice(2).map((p) => (
                            <PortfolioCard
                                key={p.id}
                                image={p.image?.url ?? ''}
                                imageAlt={p.image?.alt ?? p.title}
                                title={p.title}
                                href={`/portfolio/${p.slug}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioGrid;
