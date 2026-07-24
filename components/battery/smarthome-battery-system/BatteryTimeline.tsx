"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface BatteryTimelineData {
  topSubtitle: string;
  title: string;
  events: TimelineEvent[];
}

const BatteryTimeline = ({ data }: { data: BatteryTimelineData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.events.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.events.length) % data.events.length);
  };

  // Fixed upward motion: old goes up, new comes from down
  const timeVariants = {
    enter: { y: 80, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -80, opacity: 0 },
  };

  const textVariants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const activeEvent = data.events[activeIndex];

  return (
    <section className="bg-white py-16 md:py-24 px-[5%] overflow-hidden">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-xl md:text-2xl text-black font-normal">
            {data.topSubtitle}
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] text-[#63B846] font-normal tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* Timeline Navigation */}
        <div className="relative mb-4 w-full">
          {/* Connecting Line (Dashed) */}
          <div 
            className="absolute left-0 w-full h-[1px] border-t-2 border-black/20 border-dashed z-0" 
            style={{ bottom: '4px' }} 
          />
          
          <div className="flex justify-between items-end relative z-10 w-full">
            {data.events.map((event, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center gap-4 bg-white px-4 group cursor-pointer"
                >
                  <span className={`text-sm md:text-base transition-colors ${isActive ? 'text-[#63B846] font-medium' : 'text-black/40 group-hover:text-black/60'}`}>
                    {event.time}
                  </span>
                  <div className={`w-[10px] h-[10px] rounded-full transition-all duration-300 ${isActive ? 'bg-[#63B846] scale-[1.5]' : 'bg-gray-300 group-hover:bg-gray-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full relative min-h-[300px]">
          {/* Left Text and Buttons */}
          <div className="w-full md:w-5/12 flex flex-col justify-center h-full z-10 pl-2">
            <div className="flex items-center gap-3 mb-20">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Previous event"
              >
                <ArrowLeft className="w-4 h-4 text-[#63B846]" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer"
                aria-label="Next event"
              >
                <ArrowRight className="w-4 h-4 text-[#63B846]" />
              </button>
            </div>
            
            <div className="relative w-full h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex flex-col"
                >
                  <h4 className="text-3xl md:text-[2.5rem] font-normal text-black mb-6 leading-[1.15] tracking-tight">
                    {activeEvent.title}
                  </h4>
                  <p className="text-sm md:text-2xl text-black leading-[1.2] tracking-tight font-normal  pl-4 md:pl-8 border-l border-transparent">
                    {activeEvent.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Right Big Time Text with Dot Pattern and Reflection */}
          <div className="w-full md:w-7/12 flex justify-end relative h-[400px] mt-10">
            {/* Square Dot Pattern */}
            <div 
              className="absolute opacity-[0.15] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#63B846 2px, transparent 2px)',
                backgroundSize: '16px 16px',
                width: '350px',
                height: '250px',
                top: '70%',
                right: '10%',
                transform: 'translateY(-50%)',
                zIndex: 0
              }}
            />
            
            <div className="relative w-full h-full flex items-center justify-end pr-[10%]">
              <AnimatePresence>
                <motion.div
                  key={activeIndex}
                  variants={timeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-[10%] bottom-0 flex flex-col gap-3 items-center z-10"
                >
                  <div className="text-[5rem] md:text-[4.5rem] lg:text-[5rem] font-normal text-[#63B846] leading-none whitespace-nowrap tracking-tighter">
                    {activeEvent.time}
                  </div>
                  {/* Reflection */}
                  <div 
                    className="text-[5rem] md:text-[4.5rem] lg:text-[5rem] font-normal text-[#63B846] leading-none whitespace-nowrap tracking-tighter select-none"
                    style={{
                      transform: 'scaleY(-1) translateY(20%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 100%)',
                      maskImage: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.5) 100%)',
                      opacity: 0.25
                    }}
                  >
                    {activeEvent.time}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatteryTimeline;
