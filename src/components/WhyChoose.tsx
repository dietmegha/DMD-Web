const points = [
  "Truly personalized plans — progress without crash dieting",
  "Built on Indian home meals — familiar foods, smarter structure",
  "Weekly follow-ups and encouragement — you are not on your own",
  "Eyes on lasting change — habits and routines, not quick fixes",
  "Deep experience with PCOS, thyroid, diabetes, and lifestyle concerns",
] as const;

export function WhyChoose() {
  return (
    <section
      id="why-choose"
      className="relative scroll-mt-20 overflow-hidden border-t border-primary/10 bg-white py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-primary-muted/80 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow border-accent/20 bg-accent-muted/60 text-primary">The difference</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
          Why Choose Dietitian Megha?
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-muted sm:text-xl">
          Guidance shaped around your kitchen, your hours, and your goals — never a one-size-fits-all printout.
        </p>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:max-w-3xl lg:gap-5">
          {points.map((item) => (
            <li
              key={item}
              className="flex gap-4 rounded-2xl border border-primary/10 bg-surface/80 p-5 shadow-sm backdrop-blur-sm transition hover:border-primary/20 hover:shadow-md sm:p-6"
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-sm font-bold text-primary"
                aria-hidden
              >
                ✓
              </span>
              <span className="leading-relaxed text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
