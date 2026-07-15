"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "@/reuseables/Marquee";

import aikoLogo from "@/assets/panels/aiko_logo.png";
import canadianSolarLogo from "@/assets/panels/canadiansolar_logo.png";
import jaSolarLogo from "@/assets/panels/jasolar_logo.png";
import jinkoSolarLogo from "@/assets/panels/jinkosolar_logo.png";
import longiLogo from "@/assets/panels/longi_logo.png";
import risenLogo from "@/assets/panels/risen_logo.png";
import trinaSolarLogo from "@/assets/panels/trinasolar_logo.png";


interface BrandLogo {
  id: string;
  name: string;
  src: StaticImageData;
}

interface BrandCategory {
  id: string;
  label: string;
  logos: BrandLogo[];
}



const CATEGORIES: BrandCategory[] = [
  {
    id: "inverters",
    label: "Inverters",
    logos: [
      { id: "aiko-inv", name: "AIKO", src: aikoLogo },
      { id: "canadian-inv", name: "Canadian Solar", src: canadianSolarLogo },
      { id: "ja-inv", name: "JA Solar", src: jaSolarLogo },
      { id: "jinko-inv", name: "Jinko Solar", src: jinkoSolarLogo },
      { id: "longi-inv", name: "LONGi", src: longiLogo },
    ],
  },
  {
    id: "panels",
    label: "Panels",
    logos: [
      { id: "aiko-pnl", name: "AIKO", src: aikoLogo },
      { id: "canadian-pnl", name: "Canadian Solar", src: canadianSolarLogo },
      { id: "ja-pnl", name: "JA Solar", src: jaSolarLogo },
      { id: "jinko-pnl", name: "Jinko Solar", src: jinkoSolarLogo },
      { id: "canadian2-pnl", name: "Canadian Solar", src: canadianSolarLogo },
      { id: "longi-pnl", name: "LONGi", src: longiLogo },
      { id: "trina-pnl", name: "Trina Solar", src: trinaSolarLogo },
      { id: "risen-pnl", name: "Risen", src: risenLogo },
    ],
  },
  {
    id: "battery-storage",
    label: "Battery Storage",
    logos: [
      { id: "canadian-bat", name: "Canadian Solar", src: canadianSolarLogo },
      { id: "ja-bat", name: "JA Solar", src: jaSolarLogo },
      { id: "longi-bat", name: "LONGi", src: longiLogo },
      { id: "trina-bat", name: "Trina Solar", src: trinaSolarLogo },
    ],
  },
  {
    id: "ev-charger",
    label: "EV Charger",
    logos: [
      { id: "jinko-ev", name: "Jinko Solar", src: jinkoSolarLogo },
      { id: "risen-ev", name: "Risen", src: risenLogo },
      { id: "longi-ev", name: "LONGi", src: longiLogo },
    ],
  },
];

const TABS = CATEGORIES.map(({ id, label }) => ({ id, label }));



const Craftsmanship: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(TABS[1].id); 

  const activeCategory =
    CATEGORIES.find((c) => c.id === activeTabId) ?? CATEGORIES[0];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="px-[5%]">
        <div className="text-center mb-10 md:mb-14 lg:-space-y-4">
          <p className="text-lg md:text-[2rem] font-normal tracking-tight">
            Industry-Leading Brands &amp;
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[5rem] font-normal text-[#63B846] tracking-tight">
            Craftsmanship
          </h2>
        </div>

      
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex items-center bg-[#63B8461A] rounded-full p-1 py-2 gap-1">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-4 lg:px-8 py-2 text-xs md:text-base font-medium rounded-full transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-[#63B846]"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                 
                  {isActive && (
                    <motion.div
                      layoutId="craftsmanship-tab-pill"
                      className="absolute inset-0 bg-black rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            {(() => {
              const cols = 5;
              const totalLogos = activeCategory.logos.length;
              const totalRows = Math.ceil(totalLogos / cols);
              const lastRowCount = totalLogos % cols || cols;
              const lastRowOffset =
                lastRowCount < cols
                  ? Math.floor((cols - lastRowCount) / 2)
                  : 0;

              return (
                <>
                  {/* Desktop Grid View */}
                  <div
                    className="hidden md:grid"
                    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
                  >
                    {activeCategory.logos.map((logo, idx) => {
                      const colInRow = idx % cols;
                      const rowIdx = Math.floor(idx / cols);
                      const isLastRow = rowIdx === totalRows - 1;
                      const isIncompleteLastRow =
                        isLastRow && lastRowCount < cols;

                      const style: React.CSSProperties =
                        isIncompleteLastRow && colInRow === 0
                          ? { gridColumnStart: lastRowOffset + 1 }
                          : {};

                      return (
                        <div
                          key={logo.id}
                          style={style}
                          className={`flex items-center justify-center py-8 md:py-10 hover:-translate-y-0.5 transition-all duration-300 ${
                            colInRow > 0 ? "border-l border-gray-200" : ""
                          } ${rowIdx > 0 ? "border-t border-gray-200" : ""}`}
                        >
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            className="object-contain max-h-12 md:max-h-14 w-auto"
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Mobile Marquee View */}
                  <div className="block md:hidden py-4">
                    <Marquee speed={20} gap={32} pauseOnHover>
                      {activeCategory.logos.map((logo) => (
                        <div
                          key={logo.id}
                          className="flex items-center justify-center px-4 py-3 aspect-[5/3] w-36 bg-gray-50/50 rounded-xl"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            className="object-contain max-h-10 w-auto"
                          />
                        </div>
                      ))}
                    </Marquee>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Craftsmanship;