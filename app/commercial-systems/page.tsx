import React from 'react';
import CommercialSystemsHero from '@/components/commercial/CommercialSystemsHero';
import StatsCardGrid from '@/reuseables/StatsCardGrid';
import ThreeTiersSection from '@/components/commercial/ThreeTiersSection';
import SixComponentsSection from '@/components/commercial/SixComponentsSection';
import SixIndustriesSection from '@/components/commercial/SixIndustriesSection';
import WatchSystemSection from '@/components/commercial/WatchSystemSection';
import CommercialProcessFlow from '@/components/commercial/CommercialProcessFlow';
import FiveThingsSection from '@/components/commercial/FiveThingsSection';
import WatchSystemImage from '@/assets/commercial-systems/watchyoursystem.png';
import CommercialForm from '@/components/commercial/CommercialForm';
import FAQ from '@/reuseables/faq';
import CtaSection from '@/reuseables/CtaSection';
import FeatureCardGrid, { FeatureCardItem } from '@/reuseables/FeatureCardGrid';
import PackagesGrid from '@/reuseables/PackagesGrid';

import ctaBg from '@/assets/for_your_home.png';
import greenCardBg from '@/assets/commercial-systems/greencardbg.png';
import oneReliableSystemBg from '@/assets/commercial-systems/onereliablesystem.png';
import smallBusinessImg from '@/assets/commercial-systems/smallbusiness.png';
import hosptialImg from '@/assets/commercial-systems/hosptial.png';
import manufacturingImg from '@/assets/commercial-systems/manufacturing.png';
import perthcityImg from '@/assets/commercial-systems/perthcity.png';
import illawarraImg from '@/assets/commercial-systems/illawarra.png';
import smithfieldImg from '@/assets/commercial-systems/smithfield.png';
import step1 from '@/assets/commercial-systems/firstcall1.png';
import step2 from '@/assets/commercial-systems/firstcall2.png';
import step3 from '@/assets/commercial-systems/firstcall3.png';
import step4 from '@/assets/commercial-systems/firstcall4.png';
import step5 from '@/assets/commercial-systems/firstcall5.png';
import step6 from '@/assets/commercial-systems/firstcall6.png';
import step7 from '@/assets/commercial-systems/firstcall7.png';
import quoteImg from '@/assets/solar/batteryquote.png';
import faqImg from '@/assets/solar/faq.png';

const statsData = [
    { value: '2-4 Years', label: 'Typical Payback' },
    { value: '80% +', label: 'Daytime Self-Consumption' },
    { value: '210 LGCs/Yr', label: 'On A 150kW System' },
];

const tiers = [
    {
        title: 'Small Business And SME',
        subtitle: '10kW To 39kW DC (30kVA AC)',
        description:
            'Systems Up To 30kVA Benefit From A Simplified Western Power Approval—No GPU, Studies, Or Extra Fees. A ~39kW / 30kVA Setup Fits This Range, Maximizes Incentives, And Typically Pays Back In 2–3 Years.',
        image: smallBusinessImg,
        details: [
            { label: 'Typical Install', value: '39kW DC, 30kVA Inverter, Optional 30–60kWh Battery' },
            { label: 'Approval Pathway', value: 'Streamlined Western Power Application, ~10 Days' },
            { label: 'Certificate', value: 'Federal STCs (One-Off, Applied As Upfront Discount)' },
            { label: 'Anchor Case Study', value: 'Saint Mary Coptic Church — Hospitality / Community' },
            { label: 'Indicative Roof Area', value: '200–300m² Of Unshaded Roof' },
        ],
        ctaText: 'See SME Case Studies',
        ctaHref: '#',
    },
    {
        title: 'Mid-Market Commercial',
        subtitle: '50kW–100kW DC',
        description:
            'Systems Over 30kVA AC Require A Western Power Engineering Study And A Grid Protection Unit (GPU), Adding $12,000–$18,000 To The Project. Despite The Added Cost, 50–100kW Systems Benefit From Economies Of Scale And Can Typically Achieve A Payback In Under Three Years.',
        image: hosptialImg,
        details: [
            { label: 'Typical Install', value: '50kW, 70kW Or 100kW DC · Three-Phase String Or Hybrid Inverters' },
            { label: 'Approval Pathway', value: 'Western Power Engineering Study + GPU (~6–10 Weeks)' },
            { label: 'Certificate', value: 'Federal STCs Applied As An Upfront Discount' },
            { label: 'Anchor Case Study', value: 'Smithfield & Kewdale Commercial Projects' },
            { label: 'Indicative Roof Area', value: '400–1,000m² Of Unshaded Roof' },
        ],
        ctaText: 'See Mid-Market Case Studies',
        ctaHref: '#',
    },
    {
        title: 'Large Commercial & Industrial',
        subtitle: '150kW–1MW+',
        description:
            'Systems Above 100kW Generate Large-Scale Generation Certificates (LGCs) Instead Of STCs, Creating An Ongoing Revenue Stream Alongside Electricity Bill Savings. A Typical 150kW System Can Generate 210 LGCs Annually, Delivering $8,400–$12,600 In Additional Yearly Value.',
        image: manufacturingImg,
        details: [
            { label: 'Typical Install', value: '150kW, 300kW, 500kW Or 1MW+ · Multiple Inverters · Optional Battery Or Ground-Mount' },
            { label: 'Approval Pathway', value: 'Full Western Power Process · LGC Accreditation And PPAs Where Applicable' },
            { label: 'Certificate', value: 'Large-Scale Generation Certificates (Ongoing Revenue)' },
            { label: 'Anchor Case Study', value: 'Banasurasagar Reservoir (International Scale)' },
            { label: 'Indicative Roof Area', value: '1,000m²+ Of Unshaded Roof Or Ground-Mount Sites' },
        ],
        ctaText: 'Discuss A 100kW+ Project',
        ctaHref: '#',
    },
];

const componentItems = [
    { letter: 'A', title: 'Solar Panels' },
    { letter: 'B', title: 'Inverters' },
    { letter: 'C', title: 'Switchboard & Metering' },
    { letter: 'D', title: 'Grid Protection Device' },
    { letter: 'E', title: 'Battery Storage' },
    { letter: 'F', title: 'Live Monitoring' },
];

const industries = [
    {
        title: 'Manufacturing & Cold Storage',
        description:
            'High Continuous Daytime Load; Power-Factor Charges; Refrigeration That Never Sleeps. Solar Offsets The Highest-Cost Tariff Blocks.',
        caseStudy: 'Smithfield Manufacturing, Kewdale Industrial',
        iconKey: 'manufacturing' as const,
    },
    {
        title: 'Hospital & Accommodation',
        description:
            'Air-Conditioning, Kitchens, Laundries Running Through The Warmest Hours Of The Day. Demand Peaks At Lunchtime — Perfect Solar Match.',
        caseStudy: 'Perth City YHA, Saint Mary Coptic Church Hall',
        iconKey: 'hospitality' as const,
    },
    {
        title: 'Healthcare & Medical',
        description:
            '24/7 Operation, High HVAC Load, Sensitive Equipment. Solar With Battery Backup Reduces Both Running Costs And Outage Risk.',
        caseStudy: 'Illawarra Medical Centre',
        iconKey: 'healthcare' as const,
    },
    {
        title: 'Retail & Shopping Centres',
        description:
            'Trading Hours Align With Solar Peak. Multi-Tenancy Buildings Can Split Solar Between Common Areas And Tenants.',
        caseStudy: 'Duncraig Retail, Dubbo Retail',
        iconKey: 'retail' as const,
    },
    {
        title: 'Education & Community',
        description:
            'Schools, Churches, Community Halls — Daytime Occupancy, Fixed Budgets, ESG Mandates. Battery Shifts Production Into Evening Events.',
        caseStudy: 'Saint Mary Coptic Church',
        iconKey: 'education' as const,
    },
    {
        title: 'Agribusiness & Rural Enterprise',
        description:
            'Pumping, Dairy, Packing Sheds, Marron Farms, Vineyards. Often Combined With Off-Grid Microgrid (See /Commercial/Off-Grid/).',
        caseStudy: 'Banasurasagar Reservoir; Agricultural Off-Grid Case Studies',
        iconKey: 'agribusiness' as const,
    },
];

const installCards: FeatureCardItem[] = [
    {
        title: 'Perth City YHA · Perth, WA',
        description:
            '37kW Rooftop On-Grid\n30% Of Annual Electricity Offset, 39 Tonnes CO₂ Saved Per Year, 2.2-Year Payback.',
        image: perthcityImg,
        textPosition: 'top',
        footerTitle: 'Read More',
        footerDescription: '',
    },
    {
        title: 'Illawarra Medical Centre · Wollongong, NSW',
        description:
            'Battery-Backed Medical Install\n24/7 Reliability, Reduced Grid Demand, Ongoing LGC Revenue Stream.',
        image: illawarraImg,
        textPosition: 'top',
        footerTitle: 'Read More',
        footerDescription: '',
    },
    {
        title: 'Smithfield Manufacturing · Smithfield, NSW',
        description:
            'High-Daytime-Load Factory\nDirect Offset Of Peak Tariff Blocks, Full STC + LGC Stacking, Under-3-Year Payback.',
        image: smithfieldImg,
        textPosition: 'top',
        footerTitle: 'Read More',
        footerDescription: '',
    },
];

const processSteps = [
    {
        stepNumber: 1,
        image: step1,
        title: 'First Call & Bill Review',
        description: 'We Review Your Synergy Or Horizon Bill To Understand Daytime Load, Tariff Block, And Site Constraints.',
    },
    {
        stepNumber: 2,
        image: step2,
        title: 'Site Inspection',
        description: 'An Engineer Visits Site To Inspect Roof, Switchboard, And Load Profile. No Subcontractor.',
    },
    {
        stepNumber: 3,
        image: step3,
        title: 'System Design & Modelling',
        description: 'In-House Engineers Build A Tailored Design, Payback Projection, And Yield Model For Your Approval.',
    },
    {
        stepNumber: 4,
        image: step4,
        title: 'Approval & Administration',
        description: 'Western Power Application, Building Permit If Needed, Council DA If Required. We Manage All Paperwork.',
    },
    {
        stepNumber: 5,
        image: step5,
        title: 'Procurement & Staging',
        description: 'Panels, Inverters, And Mounting Are Pre-Staged In Our Canning Vale Warehouse Before Site Delivery.',
    },
    {
        stepNumber: 6,
        image: step6,
        title: 'Installation',
        description: 'In-House EC9676-Licensed Electricians Install Rail, Panels, And AC Infrastructure To Regen Standard.',
    },
    {
        stepNumber: 7,
        image: step7,
        title: 'Commissioning & Handover',
        description: 'System Is Tested, Monitoring Is Provisioned, And You Receive Full Documentation And Rebate Paperwork.',
    },
];

const fiveThings = [
    {
        number: 1,
        title: 'Engineering Depth — Not Just Sales',
        description:
            'Prof Chem Nayar Holds The International Patent (PCT/AU2011/001068) Behind Regen’s HybridGEN Technology, With Off-Grid Systems Deployed Across Australia And The Asia-Pacific Region.',
    },
    {
        number: 2,
        title: 'In-House Electricians, Not Labour-Hire',
        description:
            'EC9676 Licensed Regen Electricians Install Regen Systems. Same Team, Same Standard, Every Project. No Surprise Subcontractor On The Day.',
        highlight: true,
    },
    {
        number: 3,
        title: 'Tier-1 Only, No Budget Substitution',
        description:
            'Six Panel Brands And Four Inverter Brands, All CEC-Approved. We Don’t Switch Components At Install Day To A Cheaper Equivalent.',
    },
    {
        number: 4,
        title: 'Full Rebate And Paperwork Management',
        description:
            'STCs, LGCs, Western Power Application, GPU Certification, Synergy/Horizon Connection, DEBS Feed-In Registration, Building Permit. All Submitted By Our Canning Vale Office.',
        highlight: true,
    },
    {
        number: 5,
        title: '23 Years And Still Answering The Phone',
        description:
            'When You Call Us In 2035 About A Tariff Change Or An Inverter Warranty Claim, The Business Answering Will Be The Same One That Installed The System. Six Consecutive ProductReview Awards Say We’re Good At That.',
    },
];

const incentivePackages = [
    {
        title: 'Small-scale Technology Certificates (STCs)',
        desc: 'Systems Up To 100kw',
        bgClass: 'bg-[#E5EFD5] text-black',
        items: [
            {
                label: 'Federal STC Value',
                value: '$35–$40 per certificate, calculated on expected production through 2030 — worth roughly $300–$500 per kW installed in 2026, depending on the deeming year.',
            },
            {
                label: 'How You Receive It',
                value: 'Upfront discount on your invoice. We claim and assign the STCs as part of the project.',
            },
        ],
    },
    {
        title: 'Large-scale Generation Certificates (LGCs)',
        desc: 'Systems Above 100kw',
        bgClass: 'bg-[#A0CF44] text-black',
        items: [
            {
                label: 'LGC Market Value',
                value: '1 LGC per MWh produced. Currently $40–$60 per LGC, traded on the open market. A 150kW Perth system creates ~210 LGCs/year — $8,400–$12,600/year of additional revenue.',
            },
            {
                label: 'How You Receive It',
                value: 'Ongoing revenue stream until 2030. Requires LGC accreditation; we manage the registration.',
            },
        ],
    },
    {
        title: 'Instant asset write-off',
        desc: 'Eligible Businesses (Turnover Threshold Applies)',
        bgClass: 'bg-[#E5EFD5] text-black',
        items: [
            {
                label: 'Tax Benefit',
                value: 'Full deduction in the year of purchase rather than depreciated over 10–15 years.',
            },
            {
                label: 'How You Receive It',
                value: 'Tax-time benefit. Confirm eligibility with your accountant — thresholds change annually.',
            },
        ],
    },
];

const commercialFAQ = [
    {
        question: 'Q1. What Size Solar System Do I Need?',
        answer: 'For a Perth small business, a 10–30kW system is the typical starting point. For mid-market and industrial, we size against your daytime load profile and tariff structure — a free energy assessment gives you a number within 30 minutes.',
    },
    {
        question: 'Q2. How much will a solar system save me in Perth?',
        answer: 'Most Perth commercial installs pay back in 2–4 years. Daytime self-consumption is the lever: businesses operating during sunlight hours see 80%+ of generated kWh used directly, avoiding low-value feed-in tariffs entirely.',
    },
    {
        question: 'Q3. What’s The Difference Between A Hybrid And A String Inverter?',
        answer: 'A string inverter is standard and converts solar power for immediate use or grid export. A hybrid inverter manages solar + battery in a single unit and is required for any system designed to add battery storage now or later.',
    },
    {
        question: 'Q4. Do I Need A Battery?',
        answer: 'Not always. If your load is mostly during solar production hours, a grid-tied system gives the best payback. A battery is recommended for medical, 24/7, or tariff-peaking operations where outage protection or evening shifting adds value.',
    },
    {
        question: 'Q5. What Warranty Do I Get?',
        answer: '25-year panel product and performance warranty, 10-year inverter warranty (extendable to 20 on premium tiers), and 10-year Regen workmanship warranty backed by our local service team.',
    },
    {
        question: 'Q6. How Long Does Installation Take?',
        answer: 'Small commercial systems (under 30kVA) are typically completed in 1–3 days. Mid-market and large-scale projects are staged over 1–4 weeks depending on roof access, switchboard works, and grid connection scheduling.',
    },
    {
        question: 'Q7. Will My System Work If There’s A Blackout?',
        answer: 'Standard string inverters shut down during blackouts to protect grid workers. If you need backup during outages, a hybrid inverter + battery configured for emergency power supply (EPS) is required.',
    },
    {
        question: 'Q8. How Much Is The Federal STC Rebate In 2026?',
        answer: 'STCs degress on 1 January each year until 2030. In 2026, a 30kW commercial system typically receives $300–$500 per kW as an upfront discount, applied directly to your invoice.',
    },
];

const watchParagraphs = [
    'Every Commercial Install We Complete Ships With Solarog-Based Monitoring. The Web And Mobile Dashboard Tracks Per-String Yield, Inverter Health, System Uptime, And CO₂ Offset In Real Time.',
    'If Something Goes Wrong — A String Falls Offline, An Inverter Throws A Fault, Performance Drops Below Modelled Output — We See It Before You Do. Full-Service Maintenance Contracts Are Available; Talk To Us About Coverage.',
];

const CommercialSystemsPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <CommercialSystemsHero />

            <StatsCardGrid
                subtitle="Commercial Power In WA Is The Highest It Has Ever Been"
                title="And The Cheapest It Will Ever Be."
                description="Rising Commercial Power Tariffs Since 2018 And Falling Solar Costs (Now ~$110–$140/W) Make Solar A Smart Investment, With Systems Typically Paying Back In 2–4 Years And Delivering Low-Cost Power Long-Term—Especially For Businesses That Operate During The Day."
                stats={statsData}
                cardBackground={greenCardBg}
            />

            <ThreeTiersSection
                title="Three Different Financial Cases"
                description="Commercial Solar In Perth Divides Cleanly Into Three System Sizes — Each With Its Own Approval Pathway, Certificate Type, And Financial Logic. Pick The Band That Fits Your Roof And Your Bill, Then Talk To Us About Specifics."
                tiers={tiers}
            />

            <SixComponentsSection
                title="One Reliable System"
                description="A Commercial Solar System Isn’t Fundamentally Different From A Residential One — It’s The Same Six Components, Scaled Up. The Differences Are In The Engineering: Three-Phase Wiring, Larger String Sizing, Switchboard Upgrades, And Grid-Protection Devices For Systems Above 30kVA. Here’s How The Pieces Fit Together."
                backgroundImage={oneReliableSystemBg}
                items={componentItems}
            />

            <SixIndustriesSection
                subtitle="Six Industries Where Commercial Solar"
                title="Pays Back Fastest In WA."
                industries={industries}
            />

            <FeatureCardGrid
                topSubtitle="Six Commercial Installs"
                title="Six Different Briefs"
                bottomSubtitle="The Fastest Payback In WA Commercial Solar Comes From Businesses Whose Operating Hours Line Up With Peak Solar Generation — Roughly 9am To 4pm. These Six Industries Are Where We’ve Installed The Most Systems And Seen The Strongest Results."
                cards={installCards}
                showReadMore={true}
            />

            <WatchSystemSection
                subtitle="We Watch Your System"
                title="So You Don’t Have To"
                paragraphs={watchParagraphs}
                ctaText="Contact Us"
                ctaHref="/contact"
                image={WatchSystemImage}
            />

            <PackagesGrid
                subtitle="Three Federal Incentives That Stack With Your"
                title="Commercial Install"
                description="Federal Incentives Reduce The Upfront Cost Of Commercial Solar Significantly—But Only If You Understand Which Ones Apply At Your System Size. Here Are The Three That Matter In WA In 2026."
                packages={incentivePackages}
            />

            <CommercialProcessFlow
                subtitle="Nine Steps From"
                title="First Call To Handover"
                description="Commercial Solar Isn’t A Product — It’s A Project. The Right Design Depends On Roof Type, Electrical Infrastructure, Load Profile, Tariff Structure, Available Rebates, And Operational Constraints. Here’s The Process We Run From Your First Call To System Handover."
                steps={processSteps}
            />

            <FiveThingsSection
                subtitle="Five Things You Only Get From"
                title="A 23-Year Engineered Installer"
                description="Most Perth Commercial Installers Are Sales Businesses With A Contracted Install Crew. We’re An Engineering Business With Our Own Electricians, Our Own R&D, And Our Own IP. Here’s How That Shows Up On A Project."
                items={fiveThings}
            />

            <FAQ
                topTitle="FAQ"
                title="Entries"
                listTitle="Frequently Asked Questions"
                image={faqImg}
                items={commercialFAQ}
            />

            <CommercialForm
                subtitle="Tell Us About Your Facility"
                title="We Will Come Back With A Number"
                description="A Commercial Energy Assessment Is Free And Takes About 30 Minutes — Most Of It On A Screen-Share With Your Last 12 Months Of Synergy Or Horizon Bills. We’ll Come Back Inside A Week With A Sized System, A Rebate-Applied Price, And A Payback Projection Your Accountant Can Model."
                image={quoteImg}
            />

            <CtaSection
                subtitle="Build Your"
                title="Energy Strategy"
                description="System Size Depends On Your Energy Usage, Roof Space, And Future Needs. Our Experts Design Systems That Balance Performance And Cost For Optimal ROI."
                buttonText="Get Started"
                buttonHref="#quote-form"
                bgImage={ctaBg}
            />
        </div>
    );
};

export default CommercialSystemsPage;
