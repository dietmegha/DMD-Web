export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-surface"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c5d4c7 0, transparent 45%), radial-gradient(circle at 80% 0%, #e8efe9 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Registered dietician services
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          Nutrition care that fits your life — grounded in science, delivered with clarity.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
          Whether you are managing a condition, improving energy, or building sustainable habits, we
          translate evidence into practical steps you can follow between visits.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Schedule a consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary-muted/50"
          >
            View services
          </a>
        </div>
        <dl className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { k: "Approach", v: "Medical nutrition therapy & behavior change" },
            { k: "Focus", v: "Chronic disease, weight, and digestive health" },
            { k: "Format", v: "Telehealth and in-person by arrangement" },
          ].map((row) => (
            <div key={row.k} className="rounded-2xl border border-primary-muted bg-white/80 p-5 shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">{row.k}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-muted">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
