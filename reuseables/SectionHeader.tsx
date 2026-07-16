import React from 'react';
import Reveal from '@/reuseables/Reveal';
import Fade from '@/reuseables/fade';

interface SectionHeaderProps {
  subtitle: string;
  title: string | React.ReactNode;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClass?: string;
  titleClass?: string;
  descClass?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
  subtitleClass = '',
  titleClass = '',
  descClass = ''
}) => {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';
  const containerAlign = align === 'left' ? 'items-start' : align === 'right' ? 'items-end' : 'items-center';

  return (
    <div className={`w-full flex flex-col ${containerAlign} ${alignClass} ${className}`}>
      <Reveal>
        <p className={`text-lg md:text-[2.125rem] tracking-tight font-normal block ${subtitleClass}`}>
          {subtitle}
        </p>
        <h2 className={`text-3xl md:text-4xl lg:text-[5rem] text-[#63B846] tracking-tight font-normal ${titleClass}`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Fade delay={0.2}>
          <p className={`text-sm leading-tight tracking-tight mt-4 max-w-3xl ${descClass}`}>
            {description}
          </p>
        </Fade>
      )}
    </div>
  );
};

export default SectionHeader;
