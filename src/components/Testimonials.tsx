const quotes = [
  {
    quote: "I lost 6 kg in two months without starving — I would absolutely recommend her.",
    name: "Client",
    detail: "Weight loss",
  },
  {
    quote: "My PCOS felt more manageable and the weight finally started moving in the right direction.",
    name: "Client",
    detail: "PCOS care",
  },
  {
    quote: "The plans were simple enough to follow every day — they actually matched real life.",
    name: "Client",
    detail: "Lifestyle",
  },
] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-20 border-t border-primary/10 bg-surface mesh-section py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Stories from clients</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
          Real Client Transformations
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted sm:text-xl">
          Every body is different; these are the kinds of outcomes people describe after sticking with a plan made for
          them.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {quotes.map((t, i) => (
            <figure
              key={i}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/10 bg-white p-7 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)] sm:p-8"
            >
              <span
                className="font-heading text-5xl font-semibold leading-none text-primary/20"
                aria-hidden
              >
                “
              </span>
              <blockquote className="-mt-2 flex-1 text-base leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-primary/10 pt-6">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/30 text-sm font-semibold text-primary"
                  aria-hidden
                >
                  {t.detail.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-ink-muted">{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12 rounded-3xl border border-dashed border-primary/25 bg-white/70 p-8 text-center shadow-inner backdrop-blur-sm sm:p-10">
          <p className="text-sm font-medium leading-relaxed text-ink-muted">
            Space for before-and-after photos when clients are happy to share — always with their permission.
          </p>
        </div>
      </div>
    </section>
  );
}
