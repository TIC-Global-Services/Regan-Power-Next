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
          <div className="max-w-3xl mx-auto">
            {/* Partners Sub-section */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-light text-black text-center mb-8 tracking-tight">
                Partners
              </h3>
              <div className="grid grid-cols-6 border-b border-gray-200">
                {partnersData.map((partner, index) => (
                  <div
                    key={index}
                    className={`col-span-3 flex items-center justify-center p-3 md:p-8 hover:-translate-y-0.5 transition-all duration-300 ${
                      index > 0 ? "border-l border-gray-200" : ""
                    }`}
                  >
                    <div className="relative h-12 md:h-20 w-24 md:w-40">
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
              <h3 className="text-xl md:text-2xl font-light text-black text-center mb-8 tracking-tight">
                Memberships
              </h3>
              <div className="grid grid-cols-6 border-b border-gray-200">
                {membershipsData.map((membership, index) => (
                  <div
                    key={index}
                    className={`col-span-2 flex items-center justify-center p-3 md:p-8 hover:-translate-y-0.5 transition-all duration-300 ${
                      index > 0 ? "border-l border-gray-200" : ""
                    }`}
                  >
                    <div className="relative h-12 md:h-20 w-24 md:w-40">
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
