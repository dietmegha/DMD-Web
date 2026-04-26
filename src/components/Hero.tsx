import { SITE, whatsappHref } from "../site-config";

function HeroWave() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 text-surface-warm" aria-hidden>
      <svg className="h-12 w-full sm:h-16" viewBox="0 0 1440 56" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0 32C180 8 360 56 540 32c180-24 360-24 540 0s360 24 540 0 180-24 360 0v24H0V32Z"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden mesh-hero"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pb-32 lg:pt-36">
        <p className="section-eyebrow">Clinical nutrition, tailored to you</p>
        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
        >
          Transform Your Health with{" "}
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Expert-Guided Diet Plans
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl sm:leading-relaxed">
          One-on-one diet care for weight loss, PCOS, diabetes, and healthy weight gain — designed around your
          routine, not a generic chart.
        </p>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-l-2 border-primary/25 pl-4 text-sm font-medium sm:text-[0.9375rem]">
          <span className="font-heading normal-case tracking-tight text-base text-ink/90 sm:text-[1.0625rem]">
            {SITE.location}
          </span>
          <span className="text-ink-muted/55" aria-hidden>
            ·
          </span>
          <span className="text-ink-muted">Clinic Visits</span>
          <span className="text-ink-muted/55" aria-hidden>
            ·
          </span>
          <span className="text-ink-muted">Video Consultations</span>
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Consultation on WhatsApp
          </a>
          <a href="#programs" className="btn-secondary">
            Explore Programs
          </a>
        </div>
        <dl className="mt-16 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {[
            { k: "Approach", v: "Steady, doable plans — no crash diets or punishing rules" },
            { k: "Meals", v: "Rooted in Indian home food — what you already cook, smarter timing and balance" },
            { k: "Support", v: "Weekly check-ins plus WhatsApp when you need a quick steer" },
          ].map((row) => (
            <div key={row.k} className="card-interactive p-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{row.k}</dt>
              <dd className="mt-3 text-sm font-medium leading-relaxed text-ink-muted">{row.v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <HeroWave />
    </section>
  );
}
