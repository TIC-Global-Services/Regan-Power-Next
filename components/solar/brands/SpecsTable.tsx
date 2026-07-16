import React from 'react';
import SectionHeader from '@/reuseables/SectionHeader';
import Reveal from '@/reuseables/Reveal';

const specsColumns = [
  {
    brand: "Jinko Tiger Neo",
    efficiency: "22.3%",
    tempCoeff: "-0.29%/°C",
    degradation: "0.40%/yr",
    warranty: "25 yr product · 30 yr performance"
  },
  {
    brand: "LONGi Hi-MO X10",
    efficiency: "22.8%",
    tempCoeff: "-0.26%/°C",
    degradation: "0.35%/yr",
    warranty: "25 yr product · 30 yr performance"
  },
  {
    brand: "Canadian Solar TOPHiKu6",
    efficiency: "22.5%",
    tempCoeff: "-0.28%/°C",
    degradation: "0.40%/yr",
    warranty: "25 yr product · 30 yr performance"
  },
  {
    brand: "JA Solar DeepBlue 4.0 Pro",
    efficiency: "22.4%",
    tempCoeff: "-0.30%/°C",
    degradation: "0.40%/yr",
    warranty: "25 yr product · 30 yr performance"
  },
  {
    brand: "Risen Titan",
    efficiency: "22.0%",
    tempCoeff: "-0.30%/°C",
    degradation: "0.40%/yr",
    warranty: "25 yr product · 30 yr performance"
  },
  {
    brand: "Trina Vertex S+",
    efficiency: "22.3%",
    tempCoeff: "-0.30%/°C",
    degradation: "0.40%/yr",
    warranty: "25 yr product · 30 yr performance"
  }
];

const SpecsTable = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-50">
      <div className="px-[5%] mx-auto">

        {/* Section Header */}
        <SectionHeader
          subtitle="The Specs That Actually Matter,"
          title="Side By Side"
          description="Five Specifications, Six Brands. Use This Table To Compare Warranties And Real-World Performance Metrics — The Things That Affect Your Long-Term Output, Not Just The Brochure Wattage."
          align="left"
          className="mb-8"
          subtitleClass="text-base md:text-xl lg:text-2xl normal-case block text-black"
          titleClass="text-4xl md:text-[5.5rem] font-normal leading-none tracking-tight text-[#63B846]"
          descClass=" text-xl leading-tight"
        />

        {/* Table Container - Full Width */}
        <Reveal className="rounded-[24px] mt-12 mb-16 max-w-7xl mx-auto overflow-hidden">
          <table className="w-full h-[500px] border-collapse text-center bg-white table-fixed">
            <thead>
              <tr className="h-[100px]">
                <th className="bg-[#A0CF44] text-black font-normal p-4 text-xl tracking-tight border-r border-b border-black w-[15%]">
                  Brand & Series
                </th>
                {specsColumns.map((col, idx) => {
                  const isLastCol = idx === specsColumns.length - 1;
                  return (
                    <th key={idx} className={`bg-[#EEF6EB]/60 p-4 text-black font-normal text-xl border-b border-black ${isLastCol ? '' : 'border-r'} overflow-hidden truncate`}>
                      {col.brand}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {/* Efficiency Row */}
              <tr className="hover:bg-[#EEF6EB]/80 transition-colors h-[100px]">
                <td className="bg-[#A0CF44] text-black font-normal p-4 text-xl border-r border-b border-black">
                  Efficiency
                </td>
                {specsColumns.map((col, idx) => {
                  const isLastCol = idx === specsColumns.length - 1;
                  return (
                    <td key={idx} className={`bg-[#EEF6EB]/30 p-4 text-black font-normal text-xl border-b border-black ${isLastCol ? '' : 'border-r'}`}>
                      {col.efficiency}
                    </td>
                  );
                })}
              </tr>

              {/* Temp Coeff Row */}
              <tr className="hover:bg-[#EEF6EB]/80 transition-colors h-[100px]">
                <td className="bg-[#A0CF44] text-black font-normal p-4 text-xl border-r border-b border-black">
                  Temp Coeff
                </td>
                {specsColumns.map((col, idx) => {
                  const isLastCol = idx === specsColumns.length - 1;
                  return (
                    <td key={idx} className={`bg-[#EEF6EB]/30 p-4 text-black font-normal text-xl border-b border-black ${isLastCol ? '' : 'border-r'}`}>
                      {col.tempCoeff}
                    </td>
                  );
                })}
              </tr>

              {/* Degradation Row */}
              <tr className="hover:bg-[#EEF6EB]/80 transition-colors h-[100px]">
                <td className="bg-[#A0CF44] text-black font-normal p-4 text-xl border-r border-b border-black">
                  Degradation
                </td>
                {specsColumns.map((col, idx) => {
                  const isLastCol = idx === specsColumns.length - 1;
                  return (
                    <td key={idx} className={`bg-[#EEF6EB]/30 p-4 text-black font-normal text-xl border-b border-black ${isLastCol ? '' : 'border-r'}`}>
                      {col.degradation}
                    </td>
                  );
                })}
              </tr>

              {/* Warranty Row */}
              <tr className="hover:bg-[#EEF6EB]/80 transition-colors h-[100px]">
                <td className="bg-[#A0CF44] text-black font-normal p-4 text-xl border-r border-black">
                  Warranty
                </td>
                {specsColumns.map((col, idx) => {
                  const isLastCol = idx === specsColumns.length - 1;
                  return (
                    <td key={idx} className={`bg-[#EEF6EB]/30 p-4 text-black font-normal text-xl border-black ${isLastCol ? '' : 'border-r'}`}>
                      {col.warranty}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </Reveal>

      </div>
    </section>
  );
};

export default SpecsTable;
