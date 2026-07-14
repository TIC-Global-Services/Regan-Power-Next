import React from 'react';
import Image from 'next/image';

import productReviewBg from '@/assets/home/whychooseus/product_review_bg.png';
import businessBg from '@/assets/home/whychooseus/bussiness_operating.png';
import productReviewRatingBg from '@/assets/home/whychooseus/product_review_rating.png';

const WhyChooseUs = () => {
  return (
    <section className="py-10 md:py-24 bg-white overflow-hidden">
      <div className="px-[5%]">
        {/* Header */}
        <div className="mb-10 md:mb-16 leading-1">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-medium text-black leading-tight tracking-tight">
            Why Choose<br />
            <span className="text-[#63B846] font-light text-[2.5rem] md:text-[3rem] lg:text-[5rem] tracking-tighter">Regen Power</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-fr">
          
          {/* Left Card - 6x Award Winner */}
          <div className="bg-[#EEF6EB] rounded-[20px] p-4 flex flex-col h-full md:min-h-[40dvh]">
            <div className="w-full relative aspect-2/1 rounded-3xl overflow-hidden mb-4 lg:mb-8">
              <Image 
                src={productReviewBg} 
                alt="Product Review Awards Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="mt-auto pb-4 px-4">
              <h3 className="text-[4rem] lg:text-[6.250rem] font-bold text-black mb-2 tracking-tighter leading-none">
                6<span className="text-[3rem] lg:text-[4rem]">×</span>
              </h3>
              <p className="text-2xl text-black leading-tight font-medium">
                Product Review Award<br/>Winner
              </p>
            </div>
          </div>

          {/* Middle Card - Installations */}
          <div className="bg-[#A0CF44] rounded-[32px] p-8 lg:p-12 relative flex flex-col justify-center h-full lg:min-h-[500px] overflow-hidden">
            {/* Cutout Effect (Corner Masking via white square + inverse border radius) */}
            <div className="absolute top-0 right-0 w-[88px] h-[88px] bg-white rounded-bl-[40px] z-10 flex items-start justify-end">
              <button className="w-18 h-18 mr-1 mt-1 bg-black rounded-full flex items-center justify-center text-white text-4xl shadow-lg hover:scale-105 transition-transform z-20">
                +
              </button>
            </div>

            <div className="relative z-0 flex flex-col gap-10 lg:gap-14">
              <div>
                <h3 className="text-[3.5rem] lg:text-[6rem] leading-none font-bold text-black tracking-tighter mb-2">
                  3,000+
                </h3>
                <p className="text-3xl text-black font-medium">
                  Battery Installations
                </p>
              </div>
              <div>
                <h3 className="text-[3.5rem] lg:text-[6rem] leading-none font-bold text-black tracking-tighter mb-2">
                  45,000+
                </h3>
                <p className="text-3xl text-black font-medium">
                  Solar Installations
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6 h-full min-h-[400px]">
            
            {/* Top Right Card - 23 Years */}
            <div className="bg-[#f0f6ec] rounded-[20px] p-8 relative overflow-hidden flex-grow flex flex-col justify-center min-h-[250px]">
              <div className="absolute right-[-20%] bottom-30 w-full h-full opacity-90 z-0">
                <Image 
                  src={businessBg} 
                  alt="Solar Panels Background" 
                  fill 
                  className="object-cover object-right-bottom mix-blend-multiply blur-sm"
                />
              </div>
              <div className="relative z-10 w-[75%]">
                <h3 className="text-[3.5rem] lg:text-[4.5rem] font-bold text-black leading-none mb-4 tracking-tighter">
                  23<br/>Years
                </h3>
                <p className="text-2xl text-black font-medium leading-snug">
                  In Business, Operating From<br/>Canning Vale Office
                </p>
              </div>
            </div>

            {/* Bottom Right Card - 5 Star Rating */}
            <div className="rounded-[32px] relative overflow-hidden h-[150px] p-8 flex items-center">
              <Image 
                src={productReviewRatingBg} 
                alt="Green sphere background" 
                fill 
                className="object-cover z-0" 
              />
              <div className="relative z-10 flex items-center gap-6">
                <h3 className="text-[4rem] font-bold text-white flex items-center gap-2 leading-none tracking-tighter">
                  5 <span className="text-[2.5rem] font-extrabold">★</span>
                </h3>
                <p className="text-white text-3xl tracking-tighter font-medium leading-snug">
                  Ratings On<br/>ProductReview
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;