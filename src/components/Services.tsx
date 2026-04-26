import { whatsappHref } from "../site-config";

const items = [
  {
    title: "Weight Loss Programs",
    body: "Fat-loss plans shaped around your life — with weekly tracking so progress feels clear, not guesswork.",
  },
  {
    title: "PCOS / Hormonal Balance Diet",
    body: "Nutrition that supports PCOS symptoms, steadier hormones, and weight goals without extreme restriction.",
  },
  {
    title: "Diabetes Management",
    body: "Meal patterns and food choices aligned with better sugar control and how you actually eat day to day.",
  },
  {
    title: "Weight Gain / Muscle Gain",
    body: "Calorie-smart, protein-forward plans for healthy weight gain and strength — not random “eat more.”",
  },
  {
    title: "EMS Body Sculpting Therapy",
    body: "Non-invasive contouring to refine stubborn areas and complement the work you are doing with food.",
  },
  {
    title: "Customized Meal Plans",
    body: "Menus and swaps matched to your tastes, schedule, kitchen, and the outcomes you are aiming for.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 mesh-section bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">How I can help</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
            Our Specialized Services
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted sm:text-xl">
            Hands-on guidance for weight, hormones, blood sugar, and body shape — visit in Najafgarh or work with me
            from home.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="group card-interactive relative flex flex-col overflow-hidden p-7 sm:p-8"
            >
              <span
                className="font-heading text-4xl font-semibold tabular-nums text-primary/15 transition group-hover:text-primary/25"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-gradient-to-b from-primary/0 via-primary/40 to-accent/60 opacity-0 transition group-hover:opacity-100" />
              <h3 className="relative mt-2 text-lg font-semibold text-ink sm:text-xl">{s.title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-muted sm:text-[0.9375rem]">
                {s.body}
              </p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary transition group-hover:gap-2"
              >
                Talk this through on WhatsApp
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
