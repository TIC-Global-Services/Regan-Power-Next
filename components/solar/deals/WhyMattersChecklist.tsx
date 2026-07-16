import React, { useState } from 'react';

const checklistItems = [
  {
    id: 1,
    title: "In-House Installation",
    desc: "Our Electricians Are Employed By Regen Power. They're Not A Labour-Hire Crew Dispatched By A Sales Agency. Same Team, Same Standard, Every Install."
  },
  {
    id: 2,
    title: "Tier-1 Components Only",
    desc: "Every Panel And Inverter We Quote Is On The Clean Energy Council Approved Products List. No Budget Substitutes, No \"Equivalent\" Downgrades At Installation Day."
  },
  {
    id: 3,
    title: "Full Rebate + Paperwork Handling",
    desc: "STCs, WA Residential Battery Scheme, Plenti Loan, Synergy/Horizon Connection, DEBS Feed-In — All Submitted By Our Perth Office. You Don't See A Form."
  },
  {
    id: 4,
    title: "23 Years Of Perth Service",
    desc: "When You Call Us In 2035 About A Synergy Tariff Change Or A Battery Expansion, The Business Answering The Phone Is The Same One That Installed Your System. Six Consecutive ProductReview Awards Say We're Good At This."
  }
];

const WhyMattersChecklist = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-6 lg:space-y-8 mt-8">
      {checklistItems.map((item, idx) => {
        const isActive = idx === activeIndex;
        const titleColor = isActive ? 'text-black' : 'text-gray-400 group-hover:text-black/75';
        const descColor = isActive ? 'text-gray-700 font-light' : 'text-gray-400/80 font-light';

        return (
          <div
            key={item.id}
            onClick={() => setActiveIndex(idx)}
            className="group cursor-pointer transition-colors duration-200 text-left"
          >
            <h3 className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-200 ${titleColor}`}>
              {item.title}
            </h3>
            <p className={`text-sm md:text-base leading-relaxed mt-2 transition-colors duration-200 ${descColor}`}>
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WhyMattersChecklist;
