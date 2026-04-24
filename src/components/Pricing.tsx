const tiers = [
  {
    name: "Initial consultation",
    price: "$150",
    period: "60 minutes",
    blurb: "Comprehensive nutrition assessment, goal setting, and a written summary of recommendations.",
    features: ["Health & diet history review", "Personalized action plan", "Resource list"],
    cta: "Request this visit",
    featured: false,
  },
  {
    name: "Follow-up package",
    price: "$320",
    period: "three 45-min sessions",
    blurb: "Best for implementing changes, interpreting labs, and adjusting the plan as life happens.",
    features: ["Email check-in between sessions", "Meal pattern feedback", "Progress metrics"],
    cta: "Ask about availability",
    featured: true,
  },
  {
    name: "Intensive month",
    price: "$580",
    period: "per month",
    blurb: "Short-term deep support for complex cases or rapid habit change with weekly touchpoints.",
    features: ["Weekly sessions", "Priority messaging window", "Care team coordination as needed"],
    cta: "Inquire for fit",
    featured: false,
  },
] as const;

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Pricing</h2>
          <p className="mt-4 text-lg text-ink-muted">
            Fees are representative and may vary by location and insurance billing. Confirm during
            scheduling — we are transparent about costs before you commit.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                tier.featured
                  ? "border-primary bg-white ring-2 ring-primary/20"
                  : "border-primary-muted bg-white"
              }`}
            >
              {tier.featured ? (
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Most popular</p>
              ) : (
                <span className="h-4" aria-hidden />
              )}
              <h3 className="mt-2 text-xl font-semibold text-ink">{tier.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-ink">{tier.price}</span>
                <span className="text-sm text-ink-muted">{tier.period}</span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{tier.blurb}</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-ink-muted">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary" aria-hidden>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex justify-center rounded-full px-4 py-3 text-center text-sm font-semibold transition ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "border border-primary/30 text-primary hover:bg-primary-muted/60"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
