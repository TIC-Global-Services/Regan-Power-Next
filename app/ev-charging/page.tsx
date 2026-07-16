import EvHero from '@/components/EvCharging/hero';
import TextReveal from '@/reuseables/TextReveal';
import OneCharger from '@/components/EvCharging/OneCharger';
import TrustedInstaller from '@/components/EvCharging/trustedInstaller';
import WhyChargeAtHome from '@/components/EvCharging/WhyChargeAtHome';
import WhatsActuallyDifferent from '@/components/EvCharging/homebattery';
import UnderOneRoof from '@/components/EvCharging/UnderOneRoof';
import HomeBattery from '@/components/EvCharging/homebattery';
import EvAccordion from '@/components/EvCharging/EvAccordion';
import EvWhyChooseUs from '@/components/EvCharging/EvWhyChooseUs';
import FAQ from '@/reuseables/faq';
import GetSolar from '@/reuseables/getsolar';
import WallConnector from '@/components/EvCharging/wallConnector';

const evFaqItems = [
  {
    question: 'Q1. How Long Does It Take To Install An EV Charger?',
    answer: 'Most residential EV charger installations are completed in half a day. A single-phase 7kW charger typically takes 3–4 hours. Three-phase 22kW installations may take slightly longer depending on your switchboard configuration.',
  },
  {
    question: 'Q2. Can I Charge My EV With Solar Power?',
    answer: 'Absolutely. Our chargers are designed to prioritise solar energy first. When paired with a battery, you can store excess daytime solar and charge your car overnight — completely off-grid.',
  },
  {
    question: 'Q3. What Type Of Charger Do I Need?',
    answer: 'For most Australian homes, a single-phase 7kW Type 2 charger is ideal — it fully charges most EVs overnight. If you have three-phase power and need faster charging, a 22kW charger can do it in under 2 hours.',
  },
  {
    question: 'Q4. Do I Need To Upgrade My Switchboard?',
    answer: 'In some cases, yes. Older switchboards may need a safety upgrade to support a dedicated EV circuit. We assess this during our free site inspection and include any required upgrades in your quote upfront.',
  },
  {
    question: 'Q5. Is An EV Charger Worth It If I Don\'t Have Solar?',
    answer: 'Yes — even without solar, a dedicated home charger is significantly cheaper and more convenient than public charging. You can schedule charging for off-peak hours to reduce costs. Adding solar later multiplies the savings.',
  },
];

export default function EvChargingPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <EvHero />

      {/* Section 2: Text Reveal */}
      <WallConnector />

      {/* Section 3: One Charger */}
      <OneCharger />

      {/* Section 3.5: Trusted Installer */}
      <TrustedInstaller />

      {/* Section 4: Why Charge At Home */}
      <WhyChargeAtHome />

      {/* Section 5: What's Actually Different */}
      <WhatsActuallyDifferent />

      {/* Section 6: Under One Roof */}
      <UnderOneRoof />

      {/* Section 6.5: Home Battery */}
      <HomeBattery />

      {/* Section 7: Accordion Cards */}
      <EvAccordion />

      {/* Section 8: Why Choose Us (adapted) */}
      <EvWhyChooseUs />

      {/* Section 9: FAQ (reusable) */}
      <FAQ
        topTitle="EV Charging"
        title="FAQ"
        listTitle="Frequently Asked Questions"
        items={evFaqItems}
      />

      {/* Section 10: Get Solar / CTA (reusable) */}
      <GetSolar
        subtitle="Get An EV Charger Designed"
        mainTitle="For Your Home"
        description="Tell us about your car, your power setup, and your driving habits. We'll design a charging solution that fits your home, your budget, and your energy goals — free, no-obligation, and no high-pressure sales."
        buttonText="Get My Free EV Quote"
      />
    </div>
  );
}