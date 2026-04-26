import { whatsappHref } from "../site-config";

const programs = [
  {
    name: "Weight Loss Program",
    duration: "4, 8, or 12 weeks — pick the length that suits you",
    includes: ["Personalized diet plan", "Weekly follow-ups", "WhatsApp support"],
    featured: true,
  },
  {
    name: "PCOS Care Program",
    duration: null,
    includes: ["Hormone-focused diet", "Lifestyle guidance", "Weight management"],
    featured: false,
  },
  {
    name: "Weight Gain Program",
    duration: null,
    includes: ["High-calorie structured plan", "Muscle-focused diet"],
    featured: false,
  },
  {
    name: "Diabetes Care Program",
    duration: null,
    includes: ["Blood sugar control", "Meal timing & planning"],
    featured: false,
  },
] as const;

export function DietPrograms() {
  return (
    <section id="programs" className="relative scroll-mt-20 border-t border-primary/10 bg-white py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Programs that keep you on track</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
            Our Diet Programs
          </h2>
          <p className="mt-4 text-lg text-ink-muted sm:text-xl">
            Clear structure, regular follow-ups, and messaging support between visits. Fees and fine print are easiest
            over WhatsApp — message me anytime.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {programs.map((p) => (
            <article
              key={p.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-7 transition sm:p-8 ${
                p.featured
                  ? "border-primary/25 bg-gradient-to-b from-primary-muted/80 to-white shadow-[var(--shadow-card-hover)] ring-1 ring-primary/10"
                  : "border-primary/10 bg-surface/90 shadow-[var(--shadow-card)] hover:border-primary/20 hover:shadow-[var(--shadow-card-hover)]"
              }`}
            >
              {p.featured ? (
                <p className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most chosen
                </p>
              ) : null}
              <h3 className={`text-lg font-semibold text-ink sm:text-xl ${p.featured ? "pr-24" : ""}`}>{p.name}</h3>
              {p.duration ? (
                <p className="mt-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-primary shadow-sm ring-1 ring-primary/10">
                  {p.duration}
                </p>
              ) : null}
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">What you get</p>
              <ul className="mt-3 space-y-2.5 text-sm text-ink-muted">
                {p.includes.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs text-primary" aria-hidden>
                      ✓
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-primary/10 pt-14">
          <p className="section-eyebrow border-primary/12 bg-surface/90">How we meet</p>
          <div className="mt-6 rounded-3xl border border-primary/10 bg-surface/70 p-8 sm:flex sm:items-start sm:justify-between sm:gap-10 sm:p-10">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Video and phone consults
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                The programs above are not tied to the clinic. If you live farther away or simply work better from
                home, we can run everything through secure video or phone — same tailored plans, same follow-ups, and
                the same WhatsApp support between sessions.
              </p>
            </div>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-6 w-full shrink-0 whitespace-nowrap sm:mt-0 sm:w-auto sm:self-center"
            >
              Ask about remote sessions
            </a>
          </div>
        </div>

        <p className="mt-12 text-center text-sm font-medium text-ink sm:text-base">
          Curious about fees or which track to start with?{" "}
          <a
            href={whatsappHref()}
            className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me on WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
