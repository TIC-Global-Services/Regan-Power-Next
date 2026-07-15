import React from 'react';
import SectionHeader from '@/reuseables/SectionHeader';
import Fade from '@/reuseables/fade';

interface ParagraphItem {
  text: string | React.ReactNode;
  isSecondary?: boolean;
}

interface EditorialTextSectionProps {
  badge?: string;
  subtitle: string;
  title: string | React.ReactNode;
  paragraphs: ParagraphItem[];
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClass?: string;
  titleClass?: string;
  paragraphsClass?: string;
}

const EditorialTextSection: React.FC<EditorialTextSectionProps> = ({
  badge,
  subtitle,
  title,
  paragraphs,
  align = 'left',
  className = '',
  subtitleClass = '',
  titleClass = '',
  paragraphsClass = ''
}) => {
  return (
    <div className={`px-[5%] mx-auto ${className}`}>
      {badge && (
        <div className={`mb-6 flex ${align === 'left' ? 'justify-start' : align === 'right' ? 'justify-end' : 'justify-center'}`}>
          <span className="bg-gray-100 text-gray-900 text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
      )}
      <SectionHeader
        subtitle={subtitle}
        title={title}
        align={align}
        subtitleClass={subtitleClass}
        titleClass={titleClass}
        className="mb-8"
      />

      <Fade delay={0.2} duration={0.8}>
        <div className={`max-w-4xl mx-auto text-lg md:text-3xl font-light leading-tight tracking-tight space-y-6 mt-12 ${paragraphsClass || (align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center')}`}>
          {paragraphs.map((para, idx) => {
            const colorClass = para.isSecondary ? 'text-gray-400' : 'text-black';
            return (
              <p key={idx} className={colorClass}>
                {para.text}
              </p>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default EditorialTextSection;
