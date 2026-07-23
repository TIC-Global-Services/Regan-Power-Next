import React from 'react';
import Hero from '@/components/battery/battery-storage/Hero';
import DebsRebateBanner, { DebsRebateData } from '@/components/battery/battery-storage/DebsRebateBanner';
import BatteryJargon, { BatteryJargonData } from '@/components/battery/battery-storage/BatteryJargon';
import BatteryBillImpact, { BatteryBillImpactData } from '@/components/battery/battery-storage/BatteryBillImpact';
import BatteryRangeGrid, { BatteryRangeGridData } from '@/components/battery/smarthome-battery-system/BatteryRangeGrid';
import BatteryCapacityBlocks, { BatteryCapacityData } from '@/components/battery/battery-storage/BatteryCapacityBlocks';
import BatteryFitCriteria, { BatteryFitData } from '@/components/battery/battery-storage/BatteryFitCriteria';
import SolarBatteryMeaning, { SolarBatteryMeaningData } from '@/components/battery/battery-storage/SolarBatteryMeaning';
import InstallationTimeline, { InstallationTimelineData } from '@/components/battery/battery-storage/InstallationTimeline';
import OneLocalTeam, { OneLocalTeamData } from '@/components/battery/battery-storage/OneLocalTeam';
import CustomerStories, { CustomerStoriesData } from '@/components/battery/battery-storage/CustomerStories';
import BatteryFAQ, { BatteryFAQData } from '@/components/battery/battery-storage/BatteryFAQ';
import FinalCTA, { FinalCTAData } from '@/components/battery/battery-storage/FinalCTA';

// Import placeholder images
import heroBanner from '@/assets/evcharging/hero_banner.png';
import businessBg from '@/assets/home/zerointrest/businessBg.jpg';
import productReviewBg from '@/assets/home/zerointrest/productReviewBg.png';
import teslapower from '@/assets/home/patners/tesla_powerwall.png'
import approvedseller from '@/assets/home/patners/approved.png'
import productreview from '@/assets/home/realstories/top_panel_installers.png'
import australia from '@/assets/home/austalia_map.png'
import forYourHome from '@/assets/for_your_home.png';
import SolarStatsAndIntro from '@/components/solar/SolarStatsAndIntro';
import BatteryMaque from '@/components/battery/battery-storage/batteryMaque';
import GetSolar from '@/reuseables/getsolar';
import GreatFit, { GreatFitData } from '@/components/battery/smarthome-battery-system/greatfit';

// --- Static Dummy Data ---

const debsRebateData: DebsRebateData = {
    subtitle: 'The Best Rebate Window WA Homeowners Have Ever Seen',
    title: 'And It Closes On 1 May 2026',
    description: 'If you\'ve watched your Synergy bill rise, 2026 is one of the best times to invest in a home battery. Eligible households can access up to $1,300 (Synergy) or $3,800 (Horizon Power) through the WA Residential Battery Scheme, plus around $3,720 from the federal Cheaper Home Batteries Program for a 10kWh system. Interest-free loans of up to $10,000 over 3–10 years are also available through Plenti. With DEBS export rates as low as 2.25c/kWh off-peak, storing your solar can be worth around 30c per kWh instead of exporting it. Install before 1 May 2026 to maximise rebates before federal incentives reduce and new SWIS connection rules take effect',
    image: forYourHome,
    ctaText: 'See If I\'m Eligible For The Full Rebate',
    ctaLink: '#contact'
};

const batteryJargonData: BatteryJargonData = {
    topSubtitle: 'what a battery actually',
    title: 'Does to your bill',
    bottomSubtitle: ' Across our 45,000+ installations, Perth households combining solar with battery storage typically see bill reductions of 70–90% — transforming electricity from a major expense into a near-negligible one.',
    cards: [
        {
            title: 'Maximize Your Solar',
            description: 'Store excess daytime solar power for use at night, drastically reducing your reliance on the grid.',
            image: businessBg
        },
        {
            title: 'Power Outage Protection',
            description: 'Keep the lights on and the fridge running even when the grid goes down.',
            image: productReviewBg
        },
        {
            title: 'Future-Proof Your Home',
            description: 'Prepare for rising energy costs and the transition to electric vehicles with home battery storage.',
            image: heroBanner
        }
    ]
};

const batteryBillImpactData: BatteryBillImpactData = {
    topSubtitle: 'How your battery works',
    title: '(Without jargon)',
    description: 'A home battery stores the solar your panels produce during the day so you can use it after sundown, when grid electricity is most expensive.',
    cards: [
        {
            title: 'Shift Your Usage',
            description: 'Use stored solar energy during peak evening hours when electricity is most expensive.',
            image: businessBg
        },
        {
            title: 'Achieve True Independence',
            description: 'Many of our customers with appropriately sized solar and battery systems receive bills close to $0.',
            image: productReviewBg
        },
        {
            title: 'Seamless Backup Power',
            description: 'Keep your most important appliances running effortlessly, even when the grid fails during a storm.',
            image: heroBanner
        },
        {
            title: 'Beat Rising Tariffs',
            description: 'Lock in your energy costs today and protect your household from future electricity price hikes.',
            image: forYourHome
        },
        {
            title: 'Maximize Your Investment',
            description: 'Store every drop of excess solar your panels generate, rather than sending it back for pennies.',
            image: businessBg
        }
    ]
};

const batteryRangeGridData: BatteryRangeGridData = {
    topSubtitle: 'Five Ways Into',
    title: 'Our Battery Range',
    batteries: [
        {
            title: 'Turn Your Home Into A Smart Energy Hub',
            description: 'App control, VPP integration, automated load shifting and EV-ready. The next generation of what a home battery can do.',
            image: businessBg,
            ctaText: 'Explore smart home batteries',
            ctaLink: '#contact'
        },
        {
            title: 'Our Full Battery Range',
            description: ' Tesla Powerwall 3, BYD, Alpha ESS, Sigenergy, iStore and more. Right-sized for your home, your usage and your solar system.',
            image: businessBg,
            ctaText: 'see all products',
            ctaLink: '#contact'
        },
        {
            title: 'Claim Up To $7,900 Off In 2026',
            description: 'Step-by-step guide to the WA Residential Battery Scheme, federal Cheaper Home Batteries Program, and the $10,000 interest-free loan.',
            image: productReviewBg,
            ctaText: 'rebate guide',
            ctaLink: '#contact'
        },
        {
            title: 'Only Proven, Perth-Tested Brands',
            description: 'Every brand we install is CEC-approved, on Synergy\'s Supported Solutions List, and field-tested in WA conditions.',
            image: forYourHome,
            ctaText: 'compare brands',
            ctaLink: '#contact'
        },
        {
            title: 'Your Questions, Answered Instantly',
            description: '40+ questions from Perth homeowners — sizing, VPP, blackouts, warranties, real-world performance.',
            image: heroBanner,
            ctaText: 'read the FAQ',
            ctaLink: '#contact'
        }
    ]
};

const batteryCapacityData: BatteryCapacityData = {
    topSubtitle: 'Three Rebates Stacked',
    title: 'On A 10kWh Battery',
    description: 'For most Perth homeowners, three incentives combine to take thousands off the price of a battery.',
    cards: [
        {
            title: 'WA Residential Battery Scheme',
            description: 'WA Residential Battery Scheme — Up To $1,300 (Synergy) Or $3,800 (Horizon)'
        },
        {
            title: 'Federal Cheaper Home Batteries Program',
            description: 'Approximately $3,720 On A 10 KWh Battery',
            isPrimary: true
        },
        {
            title: 'Interest-Free \nLoan',
            description: 'Up To $10,000 Over 3–10 Years (Via Plenti, Income Under $210k)'
        }
    ],
    footerText: 'Combined Value: Up To $5,000 (Synergy) Or $7,500 (Horizon) Off A 10 KWh Battery. Plus The Option To Finance The Rest At 0% Interest.',
    ctaText: 'Full Rebate Guide',
    ctaLink: '#rebate-guide'
};

const batteryFitData: BatteryFitData = {
    title: 'A Battery Is A Great Fit If...',
    subtitle: 'Find out if it makes sense for you',
    leftTitle: 'YES IF...',
    leftItems: [
        'You use most of your electricity in the evening',
        'You want backup power during blackouts',
        'You have a large solar system that exports a lot',
        'You want maximum independence from the grid'
    ],
    rightTitle: 'NOT A GOOD FIT IF...',
    rightItems: [
        'You use almost all your power during the day',
        'Your roof space is very limited',
        'You plan to move house in the next 1-2 years'
    ]
};

const greatFitData: GreatFitData = {
    topSubtitle: 'A Battery',
    title: 'Is A Great Fit If',
    goodFitTitle: 'Good Fit',
    goodFitItems: [
        'You already have solar, or you\'re adding solar and a battery together',
        'Your Synergy bill regularly exceeds $400/quarter',
        'You use a meaningful amount of power after 3pm (families, home-based workers, EV owners)',
        'You own your home (the rebate requires owner-occupier or landlord consent)',
        'You\'re on Synergy (SWIS) or Horizon Power'
    ],
    conversationTitle: 'Worth A Conversation First',
    conversationItems: [
        'You\'re away during the day AND evenings — you may not cycle the battery hard enough',
        'Your roof is heavily shaded or poorly oriented — solar sizing matters for battery value',
        'You\'re planning an EV purchase in 12 months — battery sizing should account for it',
        'You\'re a renter or strata property — rebates and technical approvals need upfront planning'
    ]
};

const solarBatteryMeaningData: SolarBatteryMeaningData = {
    topSubtitle: 'What Solar + Battery',
    title: 'Actually Means For You',
    description: 'It\'s not just about the hardware; it\'s about the lifestyle change.',
    cards: [
        {
            title: 'Peace of Mind',
            description: 'Never worry about the next electricity bill or sudden rate hikes.',
            isPrimary: true
        },
        {
            title: 'How often does it happen?',
            description: 'Keep essential appliances running during grid outages.'
        },
        {
            title: 'What do you get for it?',
            description: 'Maximize your use of clean, renewable energy.'
        },
        {
            title: 'Do you lose control?',
            description: 'Increase the resale value and appeal of your property.'
        }
    ]
};

const installationTimelineData: InstallationTimelineData = {
    topSubtitle: 'From Quote To Switched On',
    title: 'In About 4–6 Weeks',
    steps: [
        {
            title: 'Free Home Assessment',
            description: 'Our team visits your property or runs a remote assessment. We review your energy bills, roof orientation, main switchboard capacity, and any existing solar.',
            image: businessBg
        },
        {
            title: 'Custom System Design',
            description: 'Our engineers design a tailored system based on your usage patterns, roof layout, and future plans like EV charging.',
            image: productReviewBg
        },
        {
            title: 'Western Power Approval',
            description: 'We handle the full application to Western Power and Synergy. You don\'t need to lift a finger.',
            image: forYourHome
        },
        {
            title: 'Installation Day',
            description: 'Our in-house CEC-accredited electricians install your system in 1–2 days. No subcontractors.',
            image: heroBanner
        }
    ]
};

const oneLocalTeamData: OneLocalTeamData = {
    topSubtitle: '23 Years. 45,000+ Installations.',
    title: 'One Local Team.',
    cards: [
        {
            image: teslapower, // Note: these will be replaced with real images later
            title: 'Tesla Certified Installer',
            description: 'One of the few Perth installers with direct Tesla Powerwall certification. We\'re trained and authorised by Tesla, not just retailing the product.'
        },
        {
            image: approvedseller,
            title: 'NETCC Approved Retailer',
            description: 'NETCC is the highest accreditation. Our compliance, installation standards and consumer protections are independently verified.'
        },
        {
            image: productreview,
            title: 'ProductReview Award, 6 Years Running',
            description: 'Winner 2021, 2022, 2023, 2024, 2025, 2026. Verified customer reviews, not marketing stats.'
        },
        {
            image: "/regen_logo_nav.png",
            title: '45,000+ Solar | 3000+ Storage Installations Nationwide',
            description: 'From a single roof in Canning Vale to industrial-scale off-grid systems. Scale matters when warranty time comes around.'
        },
        {
            image: australia,
            title: 'Local, Since 2003',
            description: 'Perth-based head office in Canning Vale. Same team that sells is the team that installs and services — 23 years later.'
        }
    ],
    ctaText: 'See Our Customer Reviews',
    ctaLink: '#reviews'
};

const customerStoriesData: CustomerStoriesData = {
    topSubtitle: 'Customers',
    title: 'That Made The Switch',
    stories: [
        {
            quote: 'Our bills went from $600 to essentially zero. The battery was the best investment we made.',
            author: 'Sarah M.',
            location: 'Joondalup, WA',
            image: businessBg
        },
        {
            quote: 'The team at Regen Power were professional from start to finish. Highly recommend.',
            author: 'David & Lisa T.',
            location: 'Mandurah, WA',
            image: productReviewBg
        },
        {
            quote: 'We love having backup power. When the grid went down last month, we didn\'t even notice.',
            author: 'Mark W.',
            location: 'Fremantle, WA',
            image: heroBanner
        }
    ]
};

const batteryFAQData: BatteryFAQData = {
    topTitle: 'Your Battery & Installation Questions Answered',
    title: 'Ask Us Most',
    listTitle: 'Frequently Asked Questions',
    image: forYourHome,
    items: [
        { question: 'How long do solar batteries last?', answer: 'Most quality solar batteries come with a 10-year warranty and are expected to last 10-15 years depending on usage cycles.' },
        { question: 'Can I add a battery to my existing solar system?', answer: 'Yes, in most cases we can retrofit a battery. We call this AC coupling, and it works with almost any existing solar inverter.' },
        { question: 'Do I still need to be connected to the grid?', answer: 'While you can go completely off-grid, it\'s usually more cost-effective to remain grid-connected for backup during long periods of bad weather.' }
    ]
};

const finalCTAData: FinalCTAData = {
    subtitle: 'Don\'t Miss Out Before',
    title: '1 May 2026',
    description: 'The DEBS rebate won\'t last forever. Get your custom quote today.',
    image: heroBanner,
    ctaText: 'Get A Quote',
    ctaLink: '#quote-form'
};

const BatteryStoragePage = () => {
    return (
        <main className="w-full min-h-screen">
            {/* 1. Hero Section */}
            <Hero />
            <BatteryMaque />

            {/* 2. Debs Rebate Alert/Banner */}
            <DebsRebateBanner data={debsRebateData} />

            {/* 3. Battery Storage (Without Jargon) */}
            <BatteryJargon data={batteryJargonData} />

            {/* 4. What Battery Storage Can Do To Your Bill */}
            <BatteryBillImpact data={batteryBillImpactData} />

            {/* 5. Meet The Best Fits Our Battery Range */}
            <BatteryRangeGrid data={batteryRangeGridData} />

            {/* 6. What You Can Run On A 10kWh Battery */}
            <BatteryCapacityBlocks data={batteryCapacityData} />

            <GreatFit data={greatFitData} />


            {/* 7. A Battery Is A Great Fit If */}
            <BatteryFitCriteria data={batteryFitData} />

            {/* 8. What Solar + Battery Actually Means For You */}
            <SolarBatteryMeaning data={solarBatteryMeaningData} />

            {/* 9. From Quote To Systems On In About 4-6 Weeks */}
            <InstallationTimeline data={installationTimelineData} />

            {/* 10. One Local Team */}
            <OneLocalTeam data={oneLocalTeamData} />

            {/* 11. Customers That Made The Switch */}
            <CustomerStories data={customerStoriesData} />

            {/* 12. Ask Us Most (FAQ) */}
            <BatteryFAQ data={batteryFAQData} />

            {/* 13. Final CTA */}
            {/* <FinalCTA data={finalCTAData} /> */}
            <GetSolar />
        </main>
    );
};

export default BatteryStoragePage;