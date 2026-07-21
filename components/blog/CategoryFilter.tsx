'use client';

import React, { useState } from 'react';

const defaultCategories = [
    'Systems & Panels',
    'Inverters',
    'Rebates & Savings',
    'Batteries & Storage',
    'Perth-Specific',
];

interface CategoryFilterProps {
    categories?: string[];
    onChange?: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categories = defaultCategories,
    onChange,
}) => {
    const [active, setActive] = useState<string>(defaultCategories[0]);

    const handleSelect = (cat: string) => {
        setActive(cat);
        onChange?.(cat);
    };

    return (
        <div className="w-full flex justify-center py-10 md:py-14 px-[5%]">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl">
                {categories.map((cat: string) => {
                    const isActive = active === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => handleSelect(cat)}
                            className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium tracking-tight transition-all duration-300 border ${
                                isActive
                                    ? 'bg-[#D5E5C0] border-[#D5E5C0] text-black'
                                    : 'bg-transparent border-transparent text-black hover:bg-black/5'
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryFilter;
