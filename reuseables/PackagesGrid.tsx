import React from 'react';
import Reveal from '@/reuseables/Reveal';
import SectionHeader from '@/reuseables/SectionHeader';

interface PackageItem {
  label: string;
  value: string;
}

interface Package {
  title: string;
  desc: string;
  bgClass: string;
  highlight: boolean;
  items: PackageItem[];
}

interface PackagesGridProps {
  subtitle: string;
  title: string;
  description?: string;
  packages: Package[];
  className?: string;
}

const PackagesGrid: React.FC<PackagesGridProps> = ({
  subtitle,
  title,
  description,
  packages,
  className = ''
}) => {
  return (
    <section className={`py-16 md:py-24 bg-white border-t border-gray-50 ${className}`}>
      <div className="px-[5%] mx-auto">

        {/* Header Section */}
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          align="center"
          className="mx-auto mb-16"
        />

        {/* 3-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center mx-auto">
          {packages.map((pkg, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.1}
              className={`rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg w-full max-w-[434px] min-h-[480px] md:h-[540px] mx-auto
                ${pkg.bgClass}
                ${pkg.highlight ? 'scale-102 z-10 md:-translate-y-2' : ''}
              `}
            >
              {/* Title & Desc */}
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
                  {pkg.title}
                </h3>
                <p className={`text-sm leading-tight ${pkg.highlight ? 'text-black/85' : 'text-gray-600'}`}>
                  {pkg.desc}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-4 md:space-y-5 flex-grow mb-2">
                {pkg.items.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <h4 className="text-[0.6875rem] uppercase tracking-wider text-black/50 font-bold mb-1">
                      {item.label}
                    </h4>
                    <p className="text-sm md:text-base leading-tight font-medium text-black">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PackagesGrid;
