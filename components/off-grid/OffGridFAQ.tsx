import React from 'react';
import FAQ from '@/reuseables/faq';
import faqImage from '@/assets/solar/faq.png';
import type { FAQItem } from '@/reuseables/faq';

const offGridFAQItems: FAQItem[] = [
    {
        question: 'Q1. How Much Does An Off-Grid System Cost?',
        answer: 'Off-grid systems vary widely based on your energy needs, site conditions, and chosen components. A small cabin system starts around $15k–$25k, while a full home system with HybridGEN can range $50k–$200k+. We size to your actual load profile, not generic estimates.',
    },
    {
        question: 'Q2. Is off-grid cheaper than connecting to the grid?',
        answer: 'Often, Yes. Western Power\'s Quoted Cost To Extend A Line To A Remote Property Is Typically $30,000–$200,000 Per Kilometre. If Your Nearest Line Is More Than A Few Kilometres Away, An Off-Grid System Is Usually Cheaper To Install — And You Have No Power Bills, No Demand Charges, And No Exposure To Grid Outages Thereafter.',
    },
    {
        question: 'Q3. Will I Still Need A Diesel Generator If I Go Off-Grid?',
        answer: 'Most off-grid systems include a backup generator for extended low-renewable periods. With our HybridGEN variable-speed generator, it only runs when needed and at the most efficient speed — typically a few times a year rather than daily.',
    },
    {
        question: 'Q4. What About Cyclones, Dust Storms, And Extreme Weather?',
        answer: 'Regen systems are engineered for remote WA conditions — cyclone-rated mounting, dust-sealed enclosures, and battery chemistries suited to high temperatures. We design for the worst week your site has seen in 20 years, not the average day.',
    },
    {
        question: 'Q5. Can My Off-Grid System Run A 3-Phase Load?',
        answer: 'Yes. We routinely design three-phase systems for mining camps, workshops, irrigation pumps, and large homes. Our engineers size the inverter and battery bank to handle the starting currents of motors and heavy equipment.',
    },
    {
        question: 'Q6. What About Western Power\'s Free Stand-Alone Power System (SPS) Program?',
        answer: 'Western Power\'s SPS program supplies a basic system to eligible properties at no cost. If you need more capacity, three-phase, or want to own your system outright, a Regen off-grid system is usually a better long-term fit. We can advise on the trade-offs.',
    },
    {
        question: 'Q7. Do I Get Monitoring?',
        answer: 'Every Regen off-grid system includes remote monitoring — real-time generation, storage state, and load. You get a dashboard and alerts, and our team can diagnose issues remotely. Maintenance contracts are available for sites without local trades support.',
    },
    {
        question: 'Q8. What About International Projects?',
        answer: 'Regen has shipped HybridGEN systems to the Maldives, Singapore, Indonesia, Vietnam, Sri Lanka, and India. We handle the international logistics, customs paperwork, and remote commissioning. For community or utility-scale projects, our engineers can supervise on-site installation.',
    },
];

const OffGridFAQ: React.FC = () => {
    return (
        <FAQ
            topTitle="FAQ"
            title="Entries"
            listTitle="Frequently Asked Questions"
            image={faqImage}
            items={offGridFAQItems}
            defaultOpenIndex={1}
        />
    );
};

export default OffGridFAQ;
