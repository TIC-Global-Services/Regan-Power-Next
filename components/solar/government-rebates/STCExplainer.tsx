import EditorialTextSection from '@/reuseables/EditorialTextSection';

export default function STCExplainer() {
  return (
    <EditorialTextSection
      subtitle="Federal"
      title="STC"
      paragraphs={[
        {
          text: "The Federal Small-Scale Renewable Energy Scheme (SRES) issues Small-Scale Technology Certificates (STCs) for every eligible solar system installed. Installers trade those certificates and pass the value back to you as an upfront discount on your system price. You do not claim anything yourself. The number of STCs depends on system size and your geographic zone. Perth sits in Zone 3, so a standard 6.6 kW system installed in 2026 commonly landed around $1,600 in upfront support.",
        },
      ]}
      align="left"
      subtitleClass="text-xl md:text-2xl font-light text-black mb-2 block normal-case"
      titleClass="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tighter mb-4"
      paragraphsClass="text-left"
      revealEffect
    />
  );
}
