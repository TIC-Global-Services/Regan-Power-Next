'use client';

import React, { useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

export interface FilterOption {
    label: string;
    value: string;
}

interface DropdownProps {
    label: string;
    options: FilterOption[];
    value: string | null;
    onChange: (value: string | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, value, onChange }) => {
    return (
        <div className="relative flex-1 min-w-[160px]">
            <select
                value={value || ''}
                onChange={(e) => onChange(e.target.value || null)}
                className="w-full appearance-none bg-transparent border border-[#A0CF44] rounded-full px-5 py-2.5 pr-10 text-sm text-black cursor-pointer focus:outline-none focus:border-[#63B846] transition-colors"
            >
                <option value="">{label}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <ChevronDown
                size={16}
                strokeWidth={2.5}
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#63B846]"
            />
        </div>
    );
};

export interface PortfolioFiltersProps {
    industries: FilterOption[];
    systemSizes: FilterOption[];
    locations: FilterOption[];
    searchPlaceholder?: string;
    defaultIndustry?: string | null;
    defaultSize?: string | null;
    onFilterChange?: (filters: {
        industry: string | null;
        size: string | null;
        location: string | null;
        search: string;
    }) => void;
}

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({
    industries,
    systemSizes,
    locations,
    searchPlaceholder = 'Search',
    defaultIndustry = null,
    defaultSize = null,
    onFilterChange,
}) => {
    const [industry, setIndustry] = useState<string | null>(defaultIndustry);
    const [size, setSize] = useState<string | null>(defaultSize);
    const [location, setLocation] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const emit = (next: { industry?: string | null; size?: string | null; location?: string | null; search?: string }) => {
        onFilterChange?.({
            industry: next.industry !== undefined ? next.industry : industry,
            size: next.size !== undefined ? next.size : size,
            location: next.location !== undefined ? next.location : location,
            search: next.search !== undefined ? next.search : search,
        });
    };

    const handleIndustry = (v: string | null) => { setIndustry(v); emit({ industry: v }); };
    const handleSize = (v: string | null) => { setSize(v); emit({ size: v }); };
    const handleLocation = (v: string | null) => { setLocation(v); emit({ location: v }); };
    const handleSearch = (v: string) => { setSearch(v); emit({ search: v }); };

    const industryLabel = industries.find((o) => o.value === industry)?.label;
    const sizeLabel = systemSizes.find((o) => o.value === size)?.label;

    return (
        <section className="w-full px-[5%] pt-12 md:pt-16 pb-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center gap-3">
                    <Dropdown
                        label="By Industry"
                        options={industries}
                        value={industry}
                        onChange={handleIndustry}
                    />
                    <Dropdown
                        label="By System Size"
                        options={systemSizes}
                        value={size}
                        onChange={handleSize}
                    />
                    <Dropdown
                        label="By Location"
                        options={locations}
                        value={location}
                        onChange={handleLocation}
                    />
                    <div className="relative flex-1 min-w-[200px]">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            placeholder={searchPlaceholder}
                            className="w-full bg-transparent border border-[#A0CF44] rounded-full px-5 py-2.5 pr-10 text-sm text-black placeholder-black/60 focus:outline-none focus:border-[#63B846] transition-colors"
                        />
                        <Search
                            size={16}
                            strokeWidth={2.5}
                            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#63B846]"
                        />
                    </div>
                </div>

                {(industryLabel || sizeLabel || location) && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {industryLabel && (
                            <span className="inline-flex items-center gap-1.5 bg-[#D5E5C0] text-black text-xs md:text-sm font-medium tracking-tight px-3 py-1.5 rounded-full">
                                {industryLabel}
                                <button onClick={() => handleIndustry(null)} aria-label="Remove filter" className="hover:opacity-70">
                                    <X size={14} strokeWidth={2.5} />
                                </button>
                            </span>
                        )}
                        {sizeLabel && (
                            <span className="inline-flex items-center gap-1.5 bg-[#D5E5C0] text-black text-xs md:text-sm font-medium tracking-tight px-3 py-1.5 rounded-full">
                                {sizeLabel}
                                <button onClick={() => handleSize(null)} aria-label="Remove filter" className="hover:opacity-70">
                                    <X size={14} strokeWidth={2.5} />
                                </button>
                            </span>
                        )}
                        {location && (
                            <span className="inline-flex items-center gap-1.5 bg-[#D5E5C0] text-black text-xs md:text-sm font-medium tracking-tight px-3 py-1.5 rounded-full">
                                {locations.find((o) => o.value === location)?.label}
                                <button onClick={() => handleLocation(null)} aria-label="Remove filter" className="hover:opacity-70">
                                    <X size={14} strokeWidth={2.5} />
                                </button>
                            </span>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioFilters;
