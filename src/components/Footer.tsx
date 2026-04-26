import { SITE, telHref, whatsappHref } from "../site-config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-primary/10 bg-ink text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm sm:px-8">
          <p className="text-sm font-medium leading-relaxed text-white/95 sm:text-base">{SITE.serviceAreaLine}</p>
        </div>

        <div className="mt-12 flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-heading text-xl font-semibold text-white">{SITE.brandName}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Thoughtful, personalized diet support in {SITE.location} and online. What you read here is for learning
              only — it does not replace advice tailored to you by your own doctor.
            </p>
          </div>
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Contact</p>
              <p className="mt-4 text-sm text-white/70">📍 {SITE.location}</p>
              <a
                href={telHref()}
                className="mt-3 block text-sm font-medium text-white/90 transition hover:text-accent"
              >
                📞 {SITE.phoneDisplay}
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm font-medium text-accent transition hover:text-white"
              >
                💬 WhatsApp
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">Explore</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href="#services" className="text-white/70 transition hover:text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-white/70 transition hover:text-white">
                    Diet Programs
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/70 transition hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {year} {SITE.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
