import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Placeholder logos — replace with actual partner/membership images
import atLogo from '@/assets/home/patners/tesla_energy.jpg';
import belmontLogo from '@/assets/home/patners/istore.png';
import eupdLogo from '@/assets/home/patners/smart_energy.png';
import fast100Logo from '@/assets/home/patners/clean_energy.png';
import financialtimesLogo from '@/assets/home/patners/approved.png';
import Fade from '@/reuseables/fade';

interface LogoItem {
  name: string;
  image: StaticImageData;
}

const partnersData: LogoItem[] = [
  { name: 'Tesla Energy Certified Installer', image: atLogo },
  { name: 'iStore Premium Partner', image: belmontLogo },
];

const membershipsData: LogoItem[] = [
  { name: 'Smart Energy Council', image: eupdLogo },
  { name: 'Clean Energy Council Member', image: fast100Logo },
  { name: 'Approved Seller', image: financialtimesLogo },
];

const Partners = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="px-[5%]">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-base md:text-lg text-gray-500 mb-2">Trusted Relationships</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black leading-tight tracking-tight">
            <span className="text-[#63B846] font-medium tracking-tighter">Partners</span> & <span className="text-[#63B846] font-medium tracking-tighter">Memberships</span>
          </h2>
        </div>
        <Fade>
          <div className="max-w-4xl mx-auto">
            {/* Partners Sub-section */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-semibold text-black text-center mb-8">Partners</h3>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {partnersData.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[180px] h-[100px] md:h-[120px]  hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-full w-[160px]">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Memberships Sub-section */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-black text-center mb-8">Memberships</h3>
              <div className="flex flex-wrap items-center justify-center">
                {membershipsData.map((membership, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center min-w-[180px] h-[100px] md:h-[120px] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-full w-[160px]">
                      <Image
                        src={membership.image}
                        alt={membership.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>

    </section>
  );
};

export default Partners;
