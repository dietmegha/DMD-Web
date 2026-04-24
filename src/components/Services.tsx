const items = [
  {
    title: "Medical nutrition therapy",
    body: "Structured nutrition care for diabetes, cardiovascular risk, kidney disease, and other diagnoses — coordinated with your treatment plan.",
  },
  {
    title: "Weight-inclusive counseling",
    body: "Support for weight-related goals without shame-based messaging. Emphasis on behaviors, labs, symptoms, and quality of life.",
  },
  {
    title: "Digestive health",
    body: "Guidance for IBS, reflux, and elimination protocols where appropriate — always with a path back to variety and enjoyment.",
  },
  {
    title: "Family & pediatric nutrition",
    body: "Picky eating, growth concerns, allergies, and household meal planning with practical grocery and prep strategies.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Services</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Choose the depth of support you need. Every engagement begins with an assessment so we
            understand your context before recommending changes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-primary-muted bg-white p-6 shadow-sm transition hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Discuss this service
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
