import GetSolar from "@/reuseables/getsolar";
import getSolarBg from "@/assets/solar/footer.png";

export default function FinalGetSolarSection() {
  return (
    <GetSolar
      subtitle="Get A Solar System Designed"
      mainTitle="For Your Home"
      description="Tell us a few details about your home and power use, and one of our Perth-based CEC-accredited designers will build a system tailored to your roof, your household, and your budget. Free, no-obligation, and no high-pressure sales calls — just a proper engineering recommendation."
      buttonText="Get My Free Quote"
      bgImage={getSolarBg}
    />
  );
}
