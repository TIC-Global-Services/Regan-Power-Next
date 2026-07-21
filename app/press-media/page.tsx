import React from 'react';
import PressHero from '@/components/press/PressHero';
import FeaturedArticle from '@/components/press/FeaturedArticle';
import LatestNews from '@/components/press/LatestNews';
import NewsGrid from '@/components/press/NewsGrid';
import GetSolar from '@/reuseables/getsolar';
import ctaBg from '@/assets/for_your_home.png';

import adoptionImg from '@/assets/press/adoption.png';
import howMuchImg from '@/assets/blog/howmuch.png';
import homeEvImg from '@/assets/blog/homeEV.png';
import explainedImg from '@/assets/blog/explained.png';

const PressMediaPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <PressHero />

            <FeaturedArticle
                image={adoptionImg}
                title="Regen Power Leads Solar Adoption In Western Australia"
                description="Regen Power Continues To Expand Its Footprint With Large-Scale Residential And Commercial Solar Installations Across WA."
                href="/press-media/regen-power-leads-solar-adoption"
            />

            <LatestNews
                items={[
                    {
                        title: 'How Solar + Battery Systems Are Changing Homes',
                        description:
                            'An In-Depth Look At How Integrated Energy Systems Are Transforming Energy Consumption Across Australia.',
                        image: howMuchImg,
                        href: '/press-media/solar-battery-changing-homes',
                    },
                    {
                        title: 'The Role Of Smart Batteries In Future Grids',
                        description:
                            'Regen Power Highlights The Importance Of Battery Storage And VPP Integration In Modern Energy Systems.',
                        image: homeEvImg,
                        href: '/press-media/smart-batteries-future-grids',
                    },
                    {
                        title: "Regen Power's Contribution To The Greener Future",
                        description:
                            'Exploring How Innovative Solar Solutions Are Helping Reduce Carbon Footprints Nationwide.',
                        image: explainedImg,
                        href: '/press-media/greener-future',
                    },
                ]}
            />

            <NewsGrid />

            <GetSolar
                subtitle="Get A Solar System Designed"
                mainTitle="For Your Home"
                description="Tell Us A Few Details About Your Home And Power Use, And One Of Our Perth-Based CEC-Accredited Designers Will Build A System Tailored To Your Roof, Your Household, And Your Budget. Free, No-Obligation, And No High-Pressure Sales Calls — Just A Proper Engineering Recommendation."
                buttonText="Get My Free Quote"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default PressMediaPage;
