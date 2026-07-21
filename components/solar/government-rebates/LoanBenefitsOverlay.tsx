import Image from "next/image";

import CtaButton from "@/reuseables/CtaButton";

import balanceAfterImg from "@/assets/solar/government-rebates/balanceafter.png";

const loanBenefits = [
  {
    title: "Loan Amount",
    description: "Borrow between $2,001 and $10,000 to support your battery installation project.",
  },
  {
    title: "Interest Rate",
    description: "Enjoy a genuinely interest-free loan, with no interest charged over the loan term.",
  },
  {
    title: "Loan Term",
    description: "Choose a repayment period ranging from three to ten years to suit your budget.",
  },
  {
    title: "Income Eligibility",
    description: "Available to households with a gross annual income below $210,000.",
  },
  {
    title: "Early Repayment",
    description: "Pay off your loan sooner at any time with no early repayment fees.",
  },
  {
    title: "Eligible Purchases",
    description: "Covers battery systems and related upgrades, including solar panels, inverters, and smart-home equipment installed alongside the battery.",
  },
  {
    title: "Credit Assessment",
    description: "A credit check is required, with applications assessed by Plenti as part of the approval process.",
  },
];

export default function LoanBenefitsOverlay() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={balanceAfterImg}
          alt="Balance after rebates illustration"
          fill
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full px-[5%] mt-15">
        <div className="mx-auto text-center flex flex-col items-center">
          <span className="mb-4 inline-flex rounded-full bg-[#E5DDD8] px-5 py-2 text-xs font-medium uppercase tracking-wide text-black">
            No-Interest Loan
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-[2.125rem] tracking-tighter leading-tight text-white">
            Up To $10,000, Interest-Free<br />
            <span className="text-[#63B846] font-medium text-4xl md:text-[5rem] tracking-tighter">For The Balance After Rebates</span>
          </h2>

          <p className="text-sm md:text-sm leading-snug tracking-tight mt-3 mb-5 text-white/90 max-w-3xl">
            Alongside the rebates, eligible WA households can access a no-interest loan administered by Plenti to cover the out-of-pocket portion of a battery or solar-plus-battery installation.
          </p>

          <CtaButton
            href="#quote-form"
            text="Check Your Eligibility"
            textColor="text-white"
            bgClass="bg-[#63B84640] backdrop-blur-sm"
            borderClass="border border-[#63B846]"
            hoverClass="hover:bg-[#63B846]"
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {loanBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="w-[240px] h-[140px] rounded-[8px] border border-white/20 bg-white/12 p-4 backdrop-blur-md flex flex-col text-left"
              >
                <h3 className="text-[1.375rem] tracking-tight text-white">{benefit.title}</h3>
                <p className="text-sm leading-tight text-white">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
