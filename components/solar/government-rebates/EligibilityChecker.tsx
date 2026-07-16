"use client";

import { useMemo, useState } from "react";

import CtaButton from "@/reuseables/CtaButton";
import SectionHeader from "@/reuseables/SectionHeader";

type EligibilityQuestion = {
  id: string;
  question: string;
  helperText: string;
  loanOnly?: boolean;
};

const eligibilityQuestions: EligibilityQuestion[] = [
  {
    id: "wa-location",
    question: "Is your property located in Western Australia?",
    helperText: "Required for the federal rebates, the WA scheme, and the loan.",
  },
  {
    id: "retailer",
    question: "Are you a Synergy or Horizon Power customer?",
    helperText: "Required for the WA Residential Battery Scheme and the loan.",
  },
  {
    id: "primary-residence",
    question: "Is this your primary residence?",
    helperText: "Required for the WA Residential Battery Scheme.",
  },
  {
    id: "solar-installed",
    question: "Do you already have solar, or are you installing solar with the battery?",
    helperText: "Required for the federal battery rebate pathway.",
  },
  {
    id: "approved-products",
    question: "Will the system use approved battery and solar products?",
    helperText: "Required for rebate eligibility. Your quote should confirm the exact model list.",
  },
  {
    id: "vpp",
    question: "Are you willing to participate in a virtual power plant for at least two years?",
    helperText: "Required for the WA scheme support shown on this page.",
  },
  {
    id: "installer",
    question: "Is the installer accredited by Solar Accreditation Australia (SAA)?",
    helperText: "Required for the federal rebate pathway. Regen Power is.",
  },
  {
    id: "income",
    question: "For the loan only: is household gross income under $210,000?",
    helperText: "Plenti verifies this during the loan application.",
    loanOnly: true,
  },
];

type AnswerValue = "yes" | "no";
type ResultKey = "eligible-stack" | "eligible-rebates-only" | "not-eligible";

const resultCopy: Record<ResultKey, { title: string; description: string }> = {
  "eligible-stack": {
    title: "Eligible For The Rebate Stack And The Loan",
    description:
      "Based on these answers, you look aligned with the federal rebate pathway, the WA Residential Battery Scheme, and the no-interest loan criteria shown on this page.",
  },
  "eligible-rebates-only": {
    title: "Likely Eligible For Rebates, But Not The Loan",
    description:
      "Your answers fit the main rebate conditions, but the income response does not match the no-interest loan threshold. A tailored quote can confirm the rebate side of the stack.",
  },
  "not-eligible": {
    title: "A Key Eligibility Requirement Is Missing",
    description:
      "One or more core answers does not match the published pathway on this page. You may still have alternative options, but the full rebate-and-loan stack would need review.",
  },
};

export default function EligibilityChecker() {
  const [answers, setAnswers] = useState<Record<string, AnswerValue | undefined>>({});
  const [validationError, setValidationError] = useState<string>("");
  const [result, setResult] = useState<ResultKey | null>(null);

  const unanswered = useMemo(
    () => eligibilityQuestions.filter((question) => !answers[question.id]),
    [answers],
  );

  const onSubmit = () => {
    if (unanswered.length > 0) {
      setValidationError("Answer every question before submitting the eligibility check.");
      setResult(null);
      return;
    }

    setValidationError("");

    const stackPass = eligibilityQuestions
      .filter((question) => !question.loanOnly)
      .every((question) => answers[question.id] === "yes");

    const incomePass = answers["income"] === "yes";

    if (stackPass && incomePass) {
      setResult("eligible-stack");
      return;
    }

    if (stackPass && !incomePass) {
      setResult("eligible-rebates-only");
      return;
    }

    setResult("not-eligible");
  };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24">
      <div>
        <SectionHeader
          badge="Scannable Yes / No"
          title={
            <>
              Am I <br /><span className="text-[#63B846]">Eligible?</span>
            </>
          }
          description="A quick self-check. If you can answer yes to the core items below, you are aligned with the federal plus WA rebate stack. The no-interest loan has its own additional income condition."
          align="left"
          className="mb-10 max-w-4xl"
          titleClass="text-5xl md:text-[3.75rem] font-light leading-none text-black"
          descClass="max-w-4xl text-base md:text-xl text-black/85"
        />

        <div className="space-y-4">
          {eligibilityQuestions.map((question) => {
            const value = answers[question.id];

            return (
              <div
                key={question.id}
                className="flex flex-col gap-5 rounded-[28px] bg-[#F1F8EC] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-9"
              >
                <div className="max-w-4xl">
                  <h3 className="text-2xl leading-tight tracking-tight text-black md:text-[2rem]">
                    {question.question}
                  </h3>
                  <p className="mt-3 text-base leading-tight text-black/80 md:text-xl">
                    {question.helperText}
                  </p>
                </div>

                <div className="flex gap-3 md:flex-shrink-0">
                  {(["yes", "no"] as const).map((option) => {
                    const active = value === option;

                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setAnswers((prev) => ({ ...prev, [question.id]: option }));
                          setValidationError("");
                        }}
                        aria-pressed={active}
                        className={`min-w-28 rounded-[20px] border px-8 py-3 text-xl tracking-tight transition-colors ${active
                          ? "border-[#63B846] bg-[#63B846] text-white"
                          : "border-black/25 bg-white/70 text-black hover:border-[#63B846]"
                          }`}
                      >
                        {option === "yes" ? "Yes" : "No"}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-end gap-4">
          {validationError ? (
            <p className="text-sm font-medium text-red-600">{validationError}</p>
          ) : null}

          <CtaButton
            text="Submit"
            onClick={() => onSubmit()}
            textColor="text-black"
          />
        </div>

        {result ? (
          <div className="mt-10 rounded-[32px] border border-[#DCE8D8] bg-[#F7FBF5] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-black/45">Eligibility Result</p>
            <h3 className="mt-3 text-3xl tracking-tight text-black md:text-4xl">
              {resultCopy[result].title}
            </h3>
            <p className="mt-4 max-w-4xl text-lg leading-tight text-black/80 md:text-2xl">
              {resultCopy[result].description}
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
