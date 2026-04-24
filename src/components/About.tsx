export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-primary-muted bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">About Dagar Nutrition</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Dagar Nutrition is a dietetics practice focused on thoughtful, individualized care. We
              start with your medical history, preferences, and routines — then build a plan that is
              realistic for your kitchen, your schedule, and your goals.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              You will receive clear education, measurable milestones, and ongoing support so changes
              feel manageable rather than overwhelming.
            </p>
            <ul className="mt-8 space-y-3 text-ink-muted">
              {[
                "Evidence-based recommendations aligned with your care team",
                "Nonjudgmental coaching that respects culture and food traditions",
                "Documentation you can share with your physician when needed",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-primary-muted bg-primary-muted/40 p-8 lg:p-10">
            <blockquote className="text-lg font-medium leading-relaxed text-ink">
              “Our goal is not perfection on a plate — it is progress you can sustain.”
            </blockquote>
            <p className="mt-6 text-sm text-ink-muted">— Dagar Nutrition practice philosophy</p>
            <div className="mt-10 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-primary">1:1</p>
                <p className="mt-1 text-xs text-ink-muted">Personalized sessions</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-primary">RDN</p>
                <p className="mt-1 text-xs text-ink-muted">Licensed guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
