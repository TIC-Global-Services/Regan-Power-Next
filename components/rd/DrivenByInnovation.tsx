import React from 'react';
import EditorialTextSection from '@/reuseables/EditorialTextSection';

const paragraphs = [
    {
        text: 'Our R&D Division Focuses On Developing Cutting-Edge Technologies In Hybrid Energy Systems,',
        isSecondary: false,
    },
    {
        text: 'Microgrids, And Intelligent Energy Management. These Innovations Help Improve Efficiency, Reliability, And Scalability Across All Our Solutions.',
        isSecondary: true,
    },
];

const DrivenByInnovation = () => {
    return (
        <EditorialTextSection
            subtitle="Driven By"
            title="Innovation"
            paragraphs={paragraphs}
            align="left"
            subtitleClass="text-lg md:text-2xl text-black font-normal"
            paragraphsClass="text-left max-w-5xl"
            revealEffect
        />
    );
};

export default DrivenByInnovation;
