'use client';

import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

export interface CategoryOption {
    label: string;
    value: string;
}

interface NewsFilterProps {
    categories: CategoryOption[];
    defaultCategory?: string;
    active?: string;
    onChange?: (category: string) => void;
}

const NewsFilter: React.FC<NewsFilterProps> = ({
    categories,
    defaultCategory,
    active: controlledActive,
    onChange,
}) => {
    const initial = defaultCategory ?? categories[0]?.value ?? '';
    const [internalActive, setInternalActive] = useState<string>(initial);
    const active = controlledActive ?? internalActive;

    const handleSelect = (cat: string) => {
        if (controlledActive === undefined) setInternalActive(cat);
        onChange?.(cat);
    };

    return (
        <div className="w-full px-[5%] py-8 md:py-10">
            <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    {categories.map((cat) => {
                        const isActive = active === cat.value;
                        return (
                            <button
                                key={cat.value}
                                onClick={() => handleSelect(cat.value)}
                                className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium tracking-tight transition-all duration-300 border whitespace-nowrap ${
                                    isActive
                                        ? 'bg-[#D5E5C0] border-[#D5E5C0] text-black'
                                        : 'bg-transparent border-transparent text-black hover:bg-black/5'
                                }`}
                            >
                                {cat.label}
                            </button>
                        );
                    })}
                </div>
                <button
                    aria-label="More filters"
                    className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#D5E5C0] hover:bg-[#c5d8a8] flex items-center justify-center transition-colors"
                >
                    <SlidersHorizontal size={16} strokeWidth={2.2} className="text-black" />
                </button>
            </div>
        </div>
    );
};

export default NewsFilter;
