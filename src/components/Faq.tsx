import { useState } from "react";

const faqs = [
  {
    q: "Do you accept insurance?",
    a: "Coverage depends on your plan and state regulations. We can provide a superbill for out-of-network reimbursement when your policy allows. Ask during intake for the most accurate answer.",
  },
  {
    q: "What happens in the first visit?",
    a: "We review medical history, medications, typical eating patterns, and barriers. You leave with 2–3 prioritized changes and optional labs or referrals to discuss with your physician.",
  },
  {
    q: "Is telehealth available?",
    a: "Yes. Secure video visits are available for many service lines. In-person sessions may be offered depending on location and scheduling.",
  },
  {
    q: "Will I get a meal plan?",
    a: "Some clients benefit from structured menus; others do better with flexible targets. We match the format to your learning style and clinical needs rather than using a one-size template.",
  },
  {
    q: "How often should I follow up?",
    a: "Most clients meet every 2–4 weeks at first, then space visits as confidence grows. Intensive programs use weekly contact for a defined period.",
  },
] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-primary-muted bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Straight answers to common questions. Reach out if yours is not listed.
        </p>
        <div className="mt-10 divide-y divide-primary-muted rounded-2xl border border-primary-muted">
          {faqs.map((item, i) => {
            const expanded = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q} className="bg-white first:rounded-t-2xl last:rounded-b-2xl">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink hover:bg-primary-muted/30 sm:px-6"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : i)}
                  >
                    {item.q}
                    <span className={`text-primary transition ${expanded ? "rotate-180" : ""}`} aria-hidden>
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!expanded}
                  className="border-t border-primary-muted/0 px-5 pb-5 pt-0 sm:px-6"
                >
                  {expanded ? (
                    <p className="pt-2 text-sm leading-relaxed text-ink-muted">{item.a}</p>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
