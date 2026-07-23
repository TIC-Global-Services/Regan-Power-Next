import React from 'react';
import OffGridHero from '@/components/off-grid/OffGridHero';
import StatsCardGrid from '@/reuseables/StatsCardGrid';
import SolutionsPortfolio, { PortfolioCard } from '@/reuseables/SolutionsPortfolio';
import ThreeSolutionsSection from '@/components/off-grid/ThreeSolutionsSection';
import IconCardGrid, { IconCard } from '@/reuseables/IconCardGrid';
import HybridGenDetailSection from '@/components/off-grid/HybridGenDetailSection';
import EditorialTextSection from '@/reuseables/EditorialTextSection';
import WorldMap, { MapMarker } from '@/reuseables/WorldMap';
import MicrogridSpecTable from '@/components/off-grid/MicrogridSpecTable';
import AcquaSmartSection from '@/components/off-grid/AcquaSmartSection';
import OffGridStory, { StoryCard } from '@/components/off-grid/OffGridStory';
import OverlayCardGrid, { OverlayCard } from '@/reuseables/OverlayCardGrid';
import OffGridFAQ from '@/components/off-grid/OffGridFAQ';
import OffGridForm from '@/components/off-grid/OffGridForm';

import greencardbg from '@/assets/commercial-systems/greencardbg.png';
import hybridgenLogo from '@/assets/off-grid-solutions/hybridgen.png';
import hybridgenImage from '@/assets/off-grid-solutions/hybridgen.png';
import standaloneImg from '@/assets/off-grid-solutions/standalone.jpg';
import solarWindDieselImg from '@/assets/off-grid-solutions/solar-wind-diesel.png';
import powerpackImg from '@/assets/off-grid-solutions/powerpack.jpg';
import profChemImg from '@/assets/off-grid-solutions/prof-chemNayar.jpg';
import poweredByImg from '@/assets/off-grid-solutions/poweredby.jpg';
import tier1Icon from '@/assets/off-grid-solutions/icons-section5/tier-cabin.png';
import tier2Icon from '@/assets/off-grid-solutions/icons-section5/tier2-holiday.png';
import tier3Icon from '@/assets/off-grid-solutions/icons-section5/tier3-family.png';
import tier4Icon from '@/assets/off-grid-solutions/icons-section5/tier4-largehome.png';
import featIntlPatent from '@/assets/off-grid-solutions/icons-section8/internationalpatent.png';
import featInvertor from '@/assets/off-grid-solutions/icons-section8/invertor.png';
import featEngine from '@/assets/off-grid-solutions/icons-section8/engine.png';
import featRenewable from '@/assets/off-grid-solutions/icons-section8/renewable.png';
import featStorage from '@/assets/off-grid-solutions/icons-section8/storage.png';
import featFormFactor from '@/assets/off-grid-solutions/icons-section8/formfactor.png';
import featTypicalApp from '@/assets/off-grid-solutions/icons-section8/typicalapplications.png';
import featDeployments from '@/assets/off-grid-solutions/icons-section8/deployments.png';

const segmentCards: PortfolioCard[] = [
    {
        type: 'text',
        variant: 'light-gray',
        title: 'Remote Homes &\nLifestyle Blocks',
        description: 'Off-Grid Family Homes, Weekenders, Lifestyle Properties Beyond The SWIS, Granny Flats, Sheds And Live-In Studios',
        specs: '10–20kW Solar + 30–60kWh Storage + 5–10kVA Backup Generator. Stand-Alone Solar+Battery',
    },
    {
        type: 'image',
        variant: 'light-green',
    },
    {
        type: 'text',
        variant: 'light-gray',
        title: 'Farms, Stations &\nAgribusiness',
        description: 'Sheep, Cattle, Cropping, Dairy, Marron, Vineyard. Bore Pumps, Packing Sheds, Freezers, Electric Fences, EV Charging.',
        specs: '30–100kW Solar + 60–200kWh Storage + Diesel/Gas Hybrid Generator. HybridGEN-Pack Or Full Microgrid',
    },
    {
        type: 'text',
        variant: 'light-gray',
        title: 'Mining, Telecom &\nResorts',
        description: 'Exploration Camps, Communications Towers, Tourist Lodges, Remote Workshops. Often Three-Phase, Often Modular.',
        specs: 'Containerised Microgrid 15–150kW. Solar-Wind-Diesel Hybrid. Multi-Source Generation, Multi-Day Battery Autonomy.',
    },
    {
        type: 'text',
        variant: 'dark',
        title: 'Remote Communities\n& Infrastructure',
        description: 'Villages, Schools, Medical Centres, Water Plants, Irrigation, Sewage. Often Paired With Our AcquaSmart Water-Treatment System.',
        specs: 'Custom Microgrid + AcquaSmart Water Solution Where Applicable. International Experience Across India, Indonesia, Maldives, Vietnam, Sri Lanka.',
    },
    {
        type: 'image',
        variant: 'light-green',
    },
];

const tierCards: IconCard[] = [
    {
        title: 'Tier 1 - Cabin',
        description: 'Workshops, Sheds, Micro-Homes, Studios, Weekenders',
        specs: '5kW Solar · 10-15kWh Battery · Small AC Inverter · Optional 3kVA Generator',
        icon: tier1Icon,
    },
    {
        title: 'Tier 2 - Holiday & Energy-Efficient Homes',
        description: 'Holiday Homes, Small Efficient Homes',
        specs: '8kW Solar · 20-30kWh Battery · Hybrid Inverter · 5kVA Generator',
        icon: tier2Icon,
    },
    {
        title: 'Tier 3 - Family Home / Small Farm',
        description: 'Standard 3-4 Bedroom Homes, Small Farms, Small Businesses',
        specs: '12-18kW Solar · 40-60kWh Battery · Selectronic Inverter-Charger · 8kVA Generator',
        icon: tier3Icon,
    },
    {
        title: 'Tier 4 - Large Home / Community Precinct',
        description: 'Large Homes, Community Living, Large Farms',
        specs: '20-30kW Solar · 80-120kWh Battery · Multi-Phase Selectronic · 12-15kVA Generator',
        icon: tier4Icon,
    },
];

const featureCards: IconCard[] = [
    {
        title: 'International Patent',
        description: 'PCT/AU2011/001068 — Power Management System And Method For Optimising Fuel Consumption',
        icon: featIntlPatent,
    },
    {
        title: 'Invertor',
        description: 'Prof Chem Nayar, REGEN TECHNOLOGIES PTY LTD',
        icon: featInvertor,
    },
    {
        title: 'Engine Technology',
        description: 'Variable-Speed Diesel/Gas Generator (Patent Pending), Runs At Optimum Speed For Current Load',
        icon: featEngine,
    },
    {
        title: 'Renewable Inputs',
        description: 'Solar PV (Any Tier-1 Panel) And Optional Small Wind Generator',
        icon: featRenewable,
    },
    {
        title: 'Storage',
        description: 'Lithium Battery, Sized To Site Load Profile',
        icon: featStorage,
    },
    {
        title: 'Form Factor',
        description: 'Factory-Wired Cabinet, Fully Enclosed; Weather-Rated',
        icon: featFormFactor,
    },
    {
        title: 'Typical Applications',
        description: 'Ideal For Remote Power, Telecom, Water Treatment, Irrigation, Wastewater And Cold Storage.',
        icon: featTypicalApp,
    },
    {
        title: 'Deployments',
        description: 'Australia, India, Maldives, Indonesia, Vietnam, Sri Lanka, Singapore',
        icon: featDeployments,
    },
];

const deploymentMarkers: MapMarker[] = [
    { name: 'India', top: '47%', left: '67%' },
    { name: 'Vietnam', top: '47%', left: '78%' },
    { name: 'Sri Lanka', top: '55%', left: '68%' },
    { name: 'Maldives', top: '53%', left: '62%' },
    { name: 'Singapore', top: '58%', left: '75%' },
    { name: 'Indonesia', top: '67%', left: '79%' },
    { name: 'Australia', top: '80%', left: '85%' },
];

const trustCards: StoryCard[] = [
    {
        title: 'International Patent',
        description: 'PCT/AU2011/001068 — Power Management System And Method For Optimising Fuel Consumption. Inventor: Prof Chem Nayar (Regen Technologies Pty Ltd). Filed In Australia, Granted Internationally.',
        variant: 'highlighted',
    },
    {
        title: 'Academic + Industry Founder',
        description: 'Prof Chem Nayar — Decades Of Renewable Energy Research And Engineering. Academic Background Combined With Hands-On Industry Deployment Across Remote Sites.',
        variant: 'light',
    },
    {
        title: 'International Patent',
        description: 'PCT/AU2011/001068 — Power Management System And Method For Optimising Fuel Consumption. Inventor: Prof Chem Nayar (Regen Technologies Pty Ltd). Filed In Australia, Granted Internationally.',
        variant: 'highlighted',
    },
    {
        title: 'Academic + Industry Founder',
        description: 'Regen Technologies Combines Academic Rigor With Field-Proven Engineering. Every Off-Grid System Is Backed By Peer-Reviewed Research And Decades Of Deployment Data.',
        variant: 'light',
    },
];

const processSteps: OverlayCard[] = [
    {
        title: 'Discovery & Load Analysis',
        description: 'Site Location, Access, Climate Band, Intended Loads, Expected Growth, Generator History. We Size By Worst-Week-Of-Winter, Not By Annual Average.',
    },
    {
        title: 'Site Survey',
        description: 'On-Site Visit (Or Detailed Remote Survey For International Jobs). Photos, GPS, Soil And Mounting Assessment, Shading, Wind Regime, Source-Water If AcquaSmart Is In Scope.',
    },
    {
        title: 'System Design',
        description: 'In-House Engineering. Solar Sizing, Design, Battery Sizing, Generator Sizing, Control System, Monitoring, Plus Piping And Water-Treatment Design Where AcquaSmart Is Included.',
    },
    {
        title: 'Procurement & Factory Wiring',
        description: 'We Pre-Wire HybridGEN Packs And Microgrid Containers In Our Perth Facility. Cuts On-Site Time, Cuts Site-Risk, And Means The Unit Arrives Ready To Commission.',
    },
    {
        title: 'Delivery, Install, Commissioning',
        description: 'Transport To Site (Truck For WA, Container Shipping For International), On-Site Mechanical Install + Electrical Termination + Start-Up Testing.',
    },
    {
        title: 'Handover & Remote Support',
        description: 'App + Dashboard Walkthrough; Performance Baseline; Remote Monitoring Activated; Maintenance Contracts Available — Particularly Important For Sites Without Local Trades Support.',
    },
];

const microgridSpecs = [
    { field: 'Power Output', detail: '15kW to 150kW per container, scalable beyond 1MW' },
    { field: 'Voltage', detail: '400V three-phase, 50Hz' },
    { field: 'Battery Storage', detail: '60–300kWh lithium iron phosphate (LFP), expandable' },
    { field: 'Solar Input', detail: 'Up to 200kW PV per container, Tier-1 panels' },
    { field: 'Wind Input', detail: 'Up to 10kW optional small wind generator' },
    { field: 'Backup Generator', detail: 'Variable-speed diesel/gas (HybridGEN patented control)' },
    { field: 'Container', detail: '20ft or 40ft ISO, fully weather-sealed, cyclone-rated' },
    { field: 'Operating Temp', detail: '−20°C to +55°C' },
    { field: 'Monitoring', detail: 'Real-time web + mobile dashboard, remote diagnostics' },
    { field: 'Autonomy', detail: 'Multi-day battery autonomy depending on load profile' },
];

const microgridApplications = [
    {
        title: 'Mining & Exploration Camps',
        description: 'Containerised power for exploration sites, drill camps, and processing facilities. Plug-and-play deployment to remote tenements.',
    },
    {
        title: 'Telecom Towers',
        description: 'Off-grid power for cellular base stations and communications infrastructure in fringe-of-grid and remote coverage areas.',
    },
    {
        title: 'Resorts & Remote Lodges',
        description: 'Reliable 24/7 power for eco-resorts, safari lodges, and tourism operations beyond the reach of the grid.',
    },
    {
        title: 'Remote Communities',
        description: 'Village-scale microgrids supporting homes, schools, medical centres, and water-treatment plants.',
    },
    {
        title: 'Construction & Infrastructure',
        description: 'Temporary or permanent power for road, rail, and resource projects where grid connection is impractical or delayed.',
    },
    {
        title: 'Agriculture & Aquaculture',
        description: 'Power for pumping stations, packing sheds, cold storage, and processing facilities on large rural properties.',
    },
];

const acquaSmartCards: { title: string; description: string }[] = [
    {
        title: 'Power source',
        description: 'Regen HybridGEN — solar PV, optional small wind, optional micro-hydro, variable-speed generator backup',
    },
    {
        title: 'Pre-treatment',
        description: 'Driving pump, source water tank, source water pump, quartz sand filter, activated carbon filter, softener, fine filter',
    },
    {
        title: 'Reverse osmosis',
        description: 'Semi-permeable helix membrane; removes 96%+ dissolved solids, 99%+ organic matter, 99%+ colloidal matter, ~100% bacteria; stainless inlet/outlet pipes; flow rate up to 15m³/hr',
    },
    {
        title: 'Sterilisation',
        description: 'UV tube + ozone actuator (Venturi ejector mixing); inactivates E. coli, cholera, typhoid, dysentery, hepatitis pathogens; removes iron, manganese, sulphur',
    },
    {
        title: 'Control',
        description: 'Fully automatic PLC + touchscreen + network communication; remote monitoring; safety protection on every pump and valve',
    },
    {
        title: 'Form factor',
        description: 'Trailer-mounted, towable by pickup; fully self-contained',
    },
    {
        title: 'Best for',
        description: 'Remote villages without piped water; dispersed rural households; communities failing piped-water standards; off-grid sites combining power + water',
    },
    {
        title: 'Source water',
        description: 'Rivers, lakes, floods, broken water mains, most freshwater sources',
    },
];

const OffGridSolutionsPage = () => {
    return (
        <div className="bg-white min-h-screen text-black">
            <OffGridHero />

            <StatsCardGrid
                subtitle="When The Grid Stops"
                title="Your Costs Start"
                description="In Western Australia, Many Areas Lie Beyond Reliable Grid Access. Connecting Can Cost $30k–$200k Per Km, While Running Diesel Generators Is Expensive And Inefficient. Standard Solar Alone Often Isn't Enough For Harsh Conditions—Making Well-Designed Off-Grid Renewable Systems A Smarter, More Reliable Solution."
                cardBackground={greencardbg}
                stats={[
                    { value: '$30k-\n$200k/KM', label: 'Grid Extension' },
                    { value: '$55k-\n$100k/YR', label: 'Standard\nDiesel Cost' },
                    { value: '90\nPercent+', label: 'Renewable Share\nPossible' },
                ]}
            />

            <SolutionsPortfolio
                subtitle="Four Segments."
                title="Four Different Specifications."
                description="Off-Grid Systems Are Sized To The Customer. A Weekender Shed Needs Different Engineering To A Mining Camp. Pick The Segment That Fits Your Site To See How We Scope And Design."
                cards={segmentCards}
                layout={6}
            />

            <ThreeSolutionsSection
                subtitle="Three Engineered Solutions"
                title="One Design Principle"
                description="Across Every Off-Grid Project, Our Design Principle Is The Same: Maximum Renewable Share, Minimum Lifetime Cost, Real Reliability. Three Product Platforms Make That Possible — Pick The One That Fits The Segment, And We Engineer To Your Site."
                solutions={[
                    {
                        title: 'Standalone Solar + Battery',
                        description: 'Solar PV + Lithium Battery + Small Backup Generator. The Straightforward Off-Grid Solution For Homes And Small Commercial Sites. Remote Homes, Lifestyle Blocks, Holiday Properties, Small Workshops, Weekenders.',
                        image: standaloneImg,
                        ctaText: 'Learn More',
                        ctaHref: '#',
                    },
                    {
                        title: 'Hybridgen: Patented Hybrid Power Pack',
                        description: 'A Factory-Integrated System Combining Solar, Optional Wind, Battery Storage, And A Variable-Speed Generator—Delivering Far Better Efficiency Than Traditional Diesel Setups. Farms, Stations, Agribusiness, Telecom Towers, Irrigation, Treatment Plants — Wherever A Diesel Generator Is Currently The Primary Power Source.',
                        image: hybridgenImage,
                        ctaText: 'Learn More',
                        ctaHref: '#',
                    },
                    {
                        title: 'Solar-Wind-Diesel Microgrid',
                        description: 'Containerised, Portable Microgrid System (15kW To 150kW Per Container); Multi-Container Designs Available. Multi-Source Generation; Multi-Day Battery Autonomy; Remote Monitoring. Mining And Exploration Camps, Resorts, Remote Communities, Fringe-Of-Grid Commercial Sites, And International Projects.',
                        image: solarWindDieselImg,
                        ctaText: 'Learn More',
                        ctaHref: '#',
                    },
                ]}
            />

            <IconCardGrid
                subtitle="The Straightforward"
                title="Off-Grid Solution"
                description="For Most Remote Homes, The Ideal Setup Is Simple: A Well-Sized Solar System, Lithium Batteries With Multi-Day Backup, And A Small Generator Used Only When Needed. We Design Based On Your Usage, Use Premium Components, And Plan For Worst-Case Conditions—So The Generator Runs Only A Few Times A Year."
                cards={tierCards}
                layout={4}
            />

            <HybridGenDetailSection
                logo={hybridgenLogo}
                image={hybridgenImage}
            />

            <EditorialTextSection
                subtitle="Why Standard Diesel Fails"
                title="On A Part-Load Site"
                paragraphs={[
                    {
                        text: 'Diesel Generators Are Typically Sized To Peak Demand. But For Most Remote Sites, Peak Demand Happens For A Few Hours A Day — Most Of The Time The Engine Is Loafing At 20–40% Of Its Rated Capacity. At Low Load, Three Things Go Wrong: Fuel Efficiency Drops Sharply (More Litres Per KWh Produced);',
                    },
                    {
                        text: ' Incomplete Combustion Causes Wet Stacking And Cylinder Glazing (Engine Wears Out Faster); And Voltage And Frequency Become Unstable As Renewable Inputs Vary. HybridGEN\'s Variable-Speed Generator Runs The Engine At The Speed That Matches The Current Load — Extending Engine Life, Cutting Fuel Consumption By 30–60%, And Stabilising Power Quality Even When Solar And Wind Inputs Swing.',
                        isSecondary: true,
                    },
                ]}
                align="left"
                revealEffect
            />

            <IconCardGrid
                cards={featureCards}
                layout={8}
                showHeader={false}
                footer={
                    <div className="flex justify-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 bg-[#E5EFD5] text-black border border-[#A0CF44] pl-5 pr-1.5 py-1.5 rounded-full text-sm md:text-base font-medium hover:bg-[#A0CF44] hover:text-white transition-all duration-300 group"
                        >
                            Download The HybridGEN Data Sheet
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#A0CF44] group-hover:bg-white group-hover:text-[#A0CF44] transition-all duration-300">
                                →
                            </span>
                        </a>
                    </div>
                }
            />

            <EditorialTextSection
                subtitle="When A Single Power Pack Isn't Enough"
                title="A Microgrid That Travels With You."
                paragraphs={[
                    {
                        text: 'For Mining, Resorts, Remote Communities, And Fringe-Of-Grid Sites, Regen Delivers Containerised Microgrids From 15kW To 150kW Per Container,',
                    },
                    {
                        text: ' Scalable Beyond 1MW. Combining Solar PV, Optional Wind, Lithium Battery Storage, And Patented Hybrid Control, They\'re Built For Harsh Conditions And Proven Across Australia, The Maldives, Singapore, And Sri Lanka.',
                        isSecondary: true,
                    },
                ]}
                align="left"
                revealEffect
            />

            <MicrogridSpecTable
                specs={microgridSpecs}
                applications={microgridApplications}
            />

            <WorldMap
                title="International Deployments"
                markers={deploymentMarkers}
                titleColor="black"
            />

            <AcquaSmartSection
                subtitle="Clean Drinking Water For Remote Communities"
                title="Powered By HybridGEN."
                description="AcquaSmart Is Regen's Trailer-Mounted Water Treatment Solution For Remote Locations, Combining HybridGEN Renewable Power With Reverse Osmosis, UV And Ozone Sterilisation, And Real-Time Monitoring. Built For Villages, Rural Communities, And Off-Grid Sites, It Delivers WHO-Standard Drinking Water Wherever It's Needed."
                image={powerpackImg}
                cards={acquaSmartCards}
            />

            <OffGridStory
                subtitle="An Off-Grid Story"
                title="You Can Verify"
                description="Off-Grid Systems Are Bought On Trust. The Site Is Remote, The Buyer Can't Always Inspect The Work, And A System Failure 800km From Perth Is Expensive. Here's How We Earn That Trust — Verifiable, Documented, Decades-Long."
                cards={trustCards}
                featuredImage={profChemImg}
                featuredTitle="Prof Chem Nayar"
                featuredDescription="Founder & Chief Technology Officer — Pioneer In Renewable Energy Systems And Inventor Of Regen's Patented HybridGEN Technology, Driving Decades Of Innovation In Sustainable Off-Grid Power."
            />

            <OverlayCardGrid
                backgroundImage={poweredByImg}
                subtitle="Six Steps"
                title="Every Steps In House"
                description="Off-Grid Projects Are Engineering Jobs More Than Installation Jobs. We Run A Six-Step Process From First Call To Handover. The Early Steps Are Deliberately Heavy: Getting The Site Analysis And The Load Profile Right Is What Makes The System Reliable For The Next 20 Years."
                cards={processSteps}
                cardLayout="grid"
                cardColumns={3}
                overlayOpacity={70}
            />

            <div id="quote-form">
                <OffGridFAQ />
            </div>

            <OffGridForm
                subtitle="Talk To Our Remote Area"
                title="Engineering Team"
                description="Off-Grid Projects Are Engineering Jobs. The First Conversation Is Technical, Not Transactional — Load Profile, Site Context, Generator History, Growth Plans, Water Needs If Any. Once We Understand The Problem, We Come Back With A System That Solves It. Send Us A Brief Site Overview Using The Form, Or Call Our Remote-Area Team Direct On 1800 073 436."
                image={poweredByImg}
            />
        </div>
    );
};

export default OffGridSolutionsPage;
