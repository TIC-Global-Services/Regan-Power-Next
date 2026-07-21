import React from 'react';
import { StaticImageData } from 'next/image';
import CtaSection from './CtaSection';
import getSolarBg from '@/assets/for_your_home.png';

interface GetSolarProps {
    subtitle?: string;
    mainTitle?: string;
    description?: string;
    buttonText?: string;
    bgImage?: string | StaticImageData;
    badge?: string;
    overlayClass?: string;
    children?: React.ReactNode;
}

const GetSolar = ({
    subtitle = 'Get A Solar System Designed',
    mainTitle = 'For Your Home',
    description = 'Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls — just a proper engineering recommendation.',
    buttonText = 'Get My Free Quote',
    bgImage = getSolarBg,
    overlayClass,
    children,
}: GetSolarProps) => {
    return (
        <CtaSection
            subtitle={subtitle}
            title={mainTitle}
            description={description}
            buttonText={buttonText}
            buttonHref="#quote-form"
            bgImage={bgImage}
            overlayClass={overlayClass}
        >
            {children}
        </CtaSection>
    );
};

export default GetSolar;
