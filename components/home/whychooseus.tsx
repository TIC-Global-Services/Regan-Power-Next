"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useTransform, animate, Variants } from 'framer-motion';
import SectionHeader from "@/reuseables/SectionHeader";

import productReviewBg from '@/assets/home/whychooseus/product_review_bg.png';
import productreview from '@/assets/home/whychooseus/product_review.png';
import businessBg from '@/assets/home/whychooseus/bussiness_operating.png';
import productReviewRatingBg from '@/assets/home/whychooseus/product_review_rating.png';

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-24 bg-white overflow-hidden">
      <div className="px-[5%]">
        <SectionHeader
          subtitle="Why Choose"
          title="Regen Power"
          align="left"
          subtitleClass="text-2xl md:text-3xl lg:text-3xl font-medium text-black tracking-tight normal-case mb-1"
          titleClass="text-[#63B846] font-light text-[2.5rem] md:text-[3rem] lg:text-[5rem] tracking-tighter leading-none"
          className="mb-10 md:mb-15 lg:-space-y-4"
        />

        {/* Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr"
        >

          {/* Left Card - 6x Award Winner */}
          <motion.div variants={itemVariants} className="bg-[#EEF6EB] rounded-[20px] p-4 flex flex-col h-full md:min-h-[40dvh]">
            <div className="w-full relative aspect-2/1 rounded-3xl overflow-hidden mb-4 lg:mb-8 flex items-center justify-center">
              <Image
                src={productReviewBg}
                alt="Product Review Awards Logo Background"
                fill
                className="object-cover z-0"
              />
              <Image
                src={productreview}
                alt="Product Review Logo"
                fill
                className="object-contain p-4 z-10 relative"
              />
            </div>
            <div className="mt-auto py-4 px-4">
              <h3 className="text-[4rem] lg:text-[6.250rem] font-bold text-black mb-2 tracking-tight leading-none">
                <AnimatedCounter from={0} to={6} /><span className="text-[3rem] lg:text-[6.250rem]">×</span>
              </h3>
              <p className="text-2xl text-black leading-tight font-normal">
                Product Review Award<br />Winner
              </p>
            </div>
          </motion.div>

          {/* Middle Card - Installations */}
          <motion.div
            variants={itemVariants}
            className="bg-[#A0CF44] rounded-[20px] p-8 relative flex flex-col justify-end h-full min-h-[450px] lg:min-h-[500px] overflow-hidden"
          >

            {/* 1. Main White Corner Box (Houses the Button) */}
            <div className="absolute top-0 right-0 w-[96px] h-[98px] bg-white rounded-bl-[20px] z-10 flex items-center justify-center">
              {/* Floating Plus Button */}
              <button className="w-18 h-18 z-100 bg-black rounded-full flex items-center justify-center text-white text-6xl pb-3 font-light shadow-lg hover:scale-105 transition-transform">
                +
              </button>
            </div>

            {/* 2. Top-Left Inverse Curve Mask */}
            <div className="absolute top-0 right-[96px] w-5 h-12 bg-transparent z-1 rounded-tr-[20px] shadow-[16px_-16px_0_16px_#ffffff]" />

            {/* 3. Bottom-Right Inverse Curve Mask */}
           <div className="absolute top-[98px] right-0 w-4 h-6 bg-transparent z-10 rounded-tr-[20px] shadow-[16px_-16px_0_16px_#ffffff]" />

            {/* =======================================================================
        CARD CONTENT
        =======================================================================
      */}
            {/* Purple "N" Badge */}
            {/* <div className="absolute right-28 top-8 flex items-center justify-center w-8 h-8 bg-[#8a4af3] text-white rounded-full border-2 border-[#6d32cf] text-xs font-bold shadow-sm z-0">
              N
            </div> */}

            {/* Stats Layout */}
            <div className="relative z-0 flex flex-col mt-16">
              <div>
                <h3 className="text-[3.5rem] lg:text-[5.5rem] leading-none font-black text-black tracking-tighter">
                  <AnimatedCounter from={0} to={3000} />+
                </h3>
                <p className="text-xl lg:text-2xl text-black font-normal">
                  Battery Installations
                </p>
              </div>

              <div>
                <h3 className="text-[3.5rem] lg:text-[5.5rem] leading-none font-black text-black tracking-tighter">
                  <AnimatedCounter from={0} to={45000} />+
                </h3>
                <p className="text-xl lg:text-2xl text-black font-normal">
                  Solar Installations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6 h-full">

            {/* Top Right Card - 23 Years */}
            <motion.div variants={itemVariants} className="bg-[#f0f6ec] rounded-[20px] p-6 relative overflow-hidden flex-grow flex flex-col justify-end min-h-[250px]">
              <div className="absolute right-[-20%] bottom-30 w-full h-full opacity-90 z-0">
                <Image
                  src={businessBg}
                  alt="Solar Panels Background"
                  fill
                  className="object-cover object-right-bottom mix-blend-multiply blur-sm"
                />
              </div>
              <div className="relative z-10 w-full">
                <h3 className="text-[3.5rem] lg:text-[5rem] font-bold text-black leading-none  tracking-tight">
                  <AnimatedCounter from={0} to={23} /><br />Years
                </h3>
                <p className="text-2xl text-black font-medium leading-snug">
                  In Business, Operating From <br /> Canning Vale Office
                </p>
              </div>
            </motion.div>

            {/* Bottom Right Card - 5 Star Rating */}
            <motion.div variants={itemVariants} className="rounded-[32px] relative overflow-hidden h-[160px] p-8 flex items-center justify-center">
              <Image
                src={productReviewRatingBg}
                alt="Green sphere background"
                fill
                className="object-cover z-0"
              />
              <div className="relative z-10 flex items-center gap-4">
                <h3 className="text-[6.250rem] font-bold text-white flex items-center  gap-3 leading-none tracking-tighter">
                  <AnimatedCounter from={0} to={5} /> <span className="text-[2.5rem] font-extrabold"><Image src={'/star.svg'} height={30} width={30} alt="Star" /></span>
                </h3>
                <p className="text-white text-[2rem] tracking-tight font-medium leading-snug">
                  Ratings On<br />ProductReview
                </p>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;