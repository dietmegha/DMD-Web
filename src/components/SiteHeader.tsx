import { useEffect, useState } from "react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-primary-muted/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2" onClick={close}>
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white"
            aria-hidden
          >
            DN
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-ink">Dagar Nutrition</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-primary-muted p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden" id="mobile-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-primary-muted bg-white shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="flex items-center justify-between border-b border-primary-muted px-4 py-4">
              <span className="font-heading font-semibold text-ink">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-ink-muted hover:bg-primary-muted hover:text-ink"
                onClick={close}
                aria-label="Close"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile primary">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink-muted transition hover:bg-primary-muted hover:text-primary"
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark"
                onClick={close}
              >
                Book a call
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
