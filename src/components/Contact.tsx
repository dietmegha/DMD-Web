export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Contact</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Share a brief note about what you are hoping to work on. We respond within two business
              days. For urgent medical concerns, contact your physician or emergency services.
            </p>
            <div className="mt-8 rounded-2xl border border-primary-muted bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-ink">Direct email</p>
              <a
                href="mailto:riteshdabas28@gmail.com"
                className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
              >
                riteshdabas28@gmail.com
              </a>
              <p className="mt-6 text-xs leading-relaxed text-ink-muted">
                The form below delivers to the same address via a secure form provider. On first use,
                you may need to confirm delivery in your inbox.
              </p>
            </div>
          </div>

          <form
            action="https://formsubmit.co/riteshdabas28@gmail.com"
            method="POST"
            className="rounded-2xl border border-primary-muted bg-white p-6 shadow-sm sm:p-8"
          >
            <input type="hidden" name="_subject" value="Dagar Nutrition — Website inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-primary-muted px-4 py-3 text-sm text-ink outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-primary-muted px-4 py-3 text-sm text-ink outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink">
                  Phone <span className="font-normal text-ink-muted">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-primary-muted px-4 py-3 text-sm text-ink outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-y rounded-xl border border-primary-muted px-4 py-3 text-sm text-ink outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
