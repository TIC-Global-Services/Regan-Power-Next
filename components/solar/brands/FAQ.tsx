import React from 'react';
import ReusableFAQ from '@/reuseables/faq';
import faqImg from '@/assets/solar/brands-tech/faq.png';

const faqItems = [
  {
    question: "Q1. Which Is Better — Jinko Or LONGi?",
    answer: "Both are Tier-1, high-reliability manufacturers. Jinko's Tiger Neo series is highly popular for excellent performance in general residential installations. LONGi's Hi-MO series features back-contact cell technology, offering slightly higher efficiency and a premium, minimalist all-black aesthetic preferred for forward-facing roofs."
  },
  {
    question: "Q2. Are all Tier-1 panels the same quality?",
    answer: "No. Tier-1 Is A Bankability Classification, Not A Quality Grade. All Six Brands We Install Are Tier-1, But They Differ On Efficiency, Temperature Coefficient, Degradation Rate, And Aesthetics. Our Comparison Table Above Shows The Meaningful Differences."
  },
  {
    question: "Q3. Why Don't You Install Enphase Microinverters As A Primary Option?",
    answer: "Enphase microinverters are a premium, panel-level solution that is excellent for complex roofs with heavy shade. However, for most shade-free or low-shade Perth roofs, a premium hybrid or string inverter system (like Fronius or Sungrow) is much more cost-effective and provides identical real-world savings."
  },
  {
    question: "Q4. What's The Difference Between A Hybrid And A String Inverter?",
    answer: "A string inverter converts solar DC power to AC power for immediate household consumption. A hybrid inverter is 'battery-ready' — it has integrated battery charging electronics, allowing you to plug a battery storage system directly in at any time without needing additional charging hardware."
  },
  {
    question: "Q5. Do You Install Tesla Powerwall-Compatible Systems?",
    answer: "Yes. Tesla Powerwall is an AC-coupled battery, meaning it comes with its own internal inverter. It is fully compatible with all of our premium hybrid and string inverter packages (including Fronius, Sungrow, and iStore setups)."
  },
  {
    question: "Q6. Can I Specify A Brand I've Already Researched?",
    answer: "Absolutely. If you have a specific panel or inverter brand in mind that isn't on our standard list (such as REC, Winaico, or SolarEdge), our Perth design team can engineer a custom system package tailored to your exact requirements."
  }
];

const FAQSection = () => {
  return (
    <ReusableFAQ
      topTitle="FAQ"
      title="Entries"
      listTitle="Frequently Asked Questions"
      image={faqImg}
      items={faqItems}
    />
  );
};

export default FAQSection;
