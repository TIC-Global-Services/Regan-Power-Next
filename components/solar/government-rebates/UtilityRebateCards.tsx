import Image from "next/image";

import SectionHeader from "@/reuseables/SectionHeader";

import synergyLogo from "@/assets/solar/government-rebates/synergy.png";
import horizonLogo from "@/assets/solar/government-rebates/horizonpower.png";

const utilityCards = [
  {
    id: "synergy",
    logo: synergyLogo,
    logoAlt: "Synergy",
    perKwh: "$130",
    cap: "10 kWh",
    maximumRebate: "$1,300",
  },
  {
    id: "horizon",
    logo: horizonLogo,
    logoAlt: "Horizon Power",
    perKwh: "$380",
    cap: "10 kWh",
    maximumRebate: "$3,800",
  },
] as const;

export default function UtilityRebateCards() {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          badge="WA State Rebate"
          title="On Top Of The Federal Rebate"
          description="Launched on Tuesday, July 1, 2025, the WA Residential Battery Scheme provides state support for home batteries that can be stacked with the federal program."
          align="center"
          className="mb-12"
          titleClass="text-5xl md:text-[3.75rem] font-light leading-none"
          descClass="mx-auto max-w-2xl text-base md:text-xl text-black tracking-tight"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {utilityCards.map((card) => (
            <article
              key={card.id}
              className="w-[350px] h-[420px] rounded-[20px] bg-[#F1F8EC] p-10"
            >
              <div className="relative h-24 w-full">
                <Image
                  src={card.logo}
                  alt={card.logoAlt}
                  fill
                  className={`object-contain`}
                />
              </div>

              <dl className="space-y-6">
                <div>
                  <dt className="text-2xl tracking-tight text-black md:text-3xl">Per kWh</dt>
                  <dd className="mt-1 text-base text-black md:text-2xl">{card.perKwh}</dd>
                </div>
                <div>
                  <dt className="text-2xl tracking-tight text-black md:text-3xl">Cap</dt>
                  <dd className="mt-1 text-base text-black md:text-2xl">{card.cap}</dd>
                </div>
                <div>
                  <dt className="text-2xl tracking-tight text-black md:text-3xl">Maximum Rebate</dt>
                  <dd className="mt-1 text-base text-black md:text-2xl">{card.maximumRebate}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
