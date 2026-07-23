'use client';

import React, { useMemo, useState } from 'react';
import PortfolioFilters, { FilterOption } from './PortfolioFilters';
import PortfolioGrid, { PortfolioProject } from './PortfolioGrid';

export interface PortfolioInteractiveProps {
    industries: FilterOption[];
    systemSizes: FilterOption[];
    locations: FilterOption[];
    searchPlaceholder: string;
    defaultIndustry: string | null;
    defaultSize: string | null;
    projects: PortfolioProject[];
}

const PortfolioInteractive: React.FC<PortfolioInteractiveProps> = ({
    industries,
    systemSizes,
    locations,
    searchPlaceholder,
    defaultIndustry,
    defaultSize,
    projects,
}) => {
    const [filters, setFilters] = useState<{
        industry: string | null;
        size: string | null;
        location: string | null;
        search: string;
    }>({
        industry: defaultIndustry,
        size: defaultSize,
        location: null,
        search: '',
    });

    const filtered = useMemo(() => {
        const search = filters.search.trim().toLowerCase();
        return projects.filter((p) => {
            if (filters.industry && p.industry !== filters.industry) return false;
            if (filters.size && p.systemSize !== filters.size) return false;
            if (filters.location && p.location !== filters.location) return false;
            if (search) {
                const haystack = `${p.title} ${p.description}`.toLowerCase();
                if (!haystack.includes(search)) return false;
            }
            return true;
        });
    }, [projects, filters]);

    return (
        <>
            <PortfolioFilters
                industries={industries}
                systemSizes={systemSizes}
                locations={locations}
                searchPlaceholder={searchPlaceholder}
                defaultIndustry={defaultIndustry}
                defaultSize={defaultSize}
                onFilterChange={setFilters}
            />
            <PortfolioGrid projects={filtered} />
        </>
    );
};

export default PortfolioInteractive;
