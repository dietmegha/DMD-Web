import { useEffect, useState } from "react";
import { SITE, telHref, whatsappHref } from "../site-config";

const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-choose", label: "Why Me" },
  { href: "#programs", label: "Programs" },
  { href: "#testimonials", label: "Results" },
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
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/80 shadow-sm shadow-primary/5 backdrop-blur-xl">
      <div className="border-b border-primary/10 bg-gradient-to-r from-primary-muted/90 via-accent-muted/40 to-primary-muted/90">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-2.5 text-xs text-ink sm:justify-between sm:px-6 sm:text-sm lg:px-8">
          <a
            href={telHref()}
            className="font-medium text-ink transition hover:text-primary"
          >
            📞 Call: {SITE.phoneDisplay}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink transition hover:text-primary"
          >
            💬 Message on WhatsApp
          </a>
          <span className="text-ink-muted sm:text-ink">📍 {SITE.location}</span>
        </div>
      </div>

      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={close}>
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white shadow-md shadow-primary/25 transition group-hover:shadow-lg"
            aria-hidden
          >
            {SITE.initials}
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-ink transition group-hover:text-primary">
            {SITE.brandName}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-primary/5 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-primary-dark hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Book a consult
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-primary/15 bg-white p-2.5 text-ink shadow-sm transition hover:border-primary/25 hover:bg-surface lg:hidden"
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
        <div className="fixed inset-0 z-50 lg:hidden" id="mobile-drawer">
          <button
            type="button"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={close}
          />
          <div
            className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-primary/10 bg-white/95 shadow-2xl shadow-primary/10 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <div className="flex items-center justify-between border-b border-primary/10 px-4 py-4">
              <span className="font-heading font-semibold text-ink">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-ink-muted transition hover:bg-primary-muted hover:text-ink"
                onClick={close}
                aria-label="Close"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Mobile primary">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-ink-muted transition hover:bg-primary-muted/50 hover:text-primary"
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-primary px-4 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-primary-dark"
                onClick={close}
              >
                Book a consult
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
