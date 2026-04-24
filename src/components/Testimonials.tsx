const quotes = [
  {
    quote:
      "I finally understand how to eat for my blood sugar without feeling like I am on a restrictive diet. The check-ins kept me accountable in a kind way.",
    name: "Priya M.",
    detail: "Type 2 diabetes support",
  },
  {
    quote:
      "Clear handouts, specific grocery lists, and recipes my kids will eat. That combination was missing from past programs I tried.",
    name: "Jordan L.",
    detail: "Family nutrition",
  },
  {
    quote:
      "My GI symptoms improved within weeks. I appreciated the stepwise approach instead of cutting out half the food groups at once.",
    name: "Alex R.",
    detail: "Digestive health",
  },
] as const;

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-primary-muted bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">What clients say</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted">
          Outcomes vary by individual; these reflections describe common themes we hear in practice.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-primary-muted bg-surface p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 border-t border-primary-muted pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="mt-1 text-xs text-ink-muted">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
