export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-primary-muted bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-lg font-semibold text-ink">Dagar Nutrition</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
              Registered dietician services. Information on this site is educational and not a
              substitute for individualized medical advice.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Contact</p>
              <a
                href="mailto:riteshdabas28@gmail.com"
                className="mt-2 block text-sm font-medium text-ink-muted hover:text-primary"
              >
                riteshdabas28@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Explore</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-ink-muted hover:text-primary">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-ink-muted hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-ink-muted hover:text-primary">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-primary-muted pt-8 text-center text-xs text-ink-muted">
          © {year} Dagar Nutrition. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
