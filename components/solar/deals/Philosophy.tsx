import React from 'react';
import EditorialTextSection from '@/reuseables/EditorialTextSection';

const paragraphs = [
  {
    text: "Perth Homeowners Regularly Receive Quotes Ranging From $5,000 To $14,000 For What's Described As \"A 6.6 KW System.\" The Price Difference Usually Reflects Cheaper Panels With Weaker Warranties, Subcontracted Installation Crews, Shorter Workmanship Guarantees, Or Extra Costs That Appear After Deposit.",
    isSecondary: false
  },
  {
    text: "Our Deals Don't Compete At The Bottom Of That Range. They Compete On The Maths That Matters Over 25 Years: Premium Components, Warranty Terms That Outlast The Rebate Scheme, In-House Installers, And Rebate Paperwork We Handle End-To-End.",
    isSecondary: true
  }
];

const Philosophy = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white border-b border-gray-50 py-16 lg:py-0">
      <EditorialTextSection
        badge="PHILOSOPHY"
        subtitle="The Cheapest Quote Is Usually"
        title="The Most Expensive System Over 25 Years."
        paragraphs={paragraphs}
        align="left"
        subtitleClass="text-lg md:text-2xl text-black font-normal"
        titleClass="text-4xl md:text-[5rem] text-[#63B846] leading-none font-normal tracking-tight"
      />
    </section>
  );
};

export default Philosophy;
