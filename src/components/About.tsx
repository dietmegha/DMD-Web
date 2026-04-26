import { SITE } from "../site-config";

const expertise = [
  "Weight Loss & Fat Loss",
  "PCOS & Hormonal Health",
  "Diabetes & Thyroid Diet",
  "Weight Gain & Muscle Building",
] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-primary/10 bg-surface-warm py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="section-eyebrow">Your dietitian</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
              About Dietitian Megha
            </h2>
            <p className="mt-5 leading-relaxed text-ink-muted sm:text-lg">
              I am Dietitian Megha, a clinical nutritionist in {SITE.location}, focused on weight management, PCOS,
              diabetes, and the lifestyle conditions that sit alongside them.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted sm:text-lg">
              My work is grounded in practical, sustainable eating — the dal, roti, sabzi, and snacks you already know —
              so change feels possible, not like a temporary “diet phase.”
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted sm:text-lg">
              With one-to-one consults, weekly follow-ups, and steady support between visits, I help you move toward
              your health goals in a way that respects your body and your real life.
            </p>
          </div>
          <div className="relative rounded-3xl bg-gradient-to-br from-primary/20 via-accent/25 to-primary-muted p-[1px] shadow-[var(--shadow-card)]">
            <div className="rounded-[calc(1.5rem-1px)] bg-white p-8 lg:p-10">
              <h3 className="text-lg font-semibold text-ink">Where I focus</h3>
              <ul className="mt-8 space-y-4">
                {expertise.map((item) => (
                  <li key={item} className="flex gap-4 text-ink-muted">
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-bold text-primary"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="mt-10 rounded-2xl border border-primary/10 bg-surface/50 p-6 text-base font-medium leading-relaxed text-ink">
                Lasting health wins over short crash cycles — we honor your kitchen, your culture, and your pace.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
