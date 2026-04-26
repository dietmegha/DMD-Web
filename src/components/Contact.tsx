import type { FormEvent } from "react";
import { SITE, telHref, whatsappHref } from "../site-config";

const MAP_EMBED =
  "https://www.google.com/maps?q=Najafgarh%2C+New+Delhi&hl=en&z=13&ie=UTF8&iwloc=&output=embed";

const inputClass =
  "mt-2 w-full rounded-2xl border border-primary/15 bg-white px-4 py-3.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-ink-muted/50 focus:border-primary/40 focus:ring-2 focus:ring-primary/20";

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const goal = String(fd.get("goal") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const lines = [
      SITE.whatsAppMessage,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      goal && `Goal: ${goal}`,
      message && `Message: ${message}`,
    ].filter(Boolean);
    const url = whatsappHref(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-primary/10 bg-surface mesh-section py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Say hello</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
          Contact Us
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
          Book a consult, ask which program fits, or get a nutrition question answered — WhatsApp is usually the
          quickest way to reach me.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/10 bg-white p-7 shadow-[var(--shadow-card)] sm:p-8">
              <ul className="space-y-6 text-sm">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg" aria-hidden>
                    📍
                  </span>
                  <div>
                    <span className="font-semibold text-ink">Location</span>
                    <p className="mt-1 text-ink-muted">{SITE.location}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg" aria-hidden>
                    📞
                  </span>
                  <div>
                    <span className="font-semibold text-ink">Phone</span>
                    <p className="mt-1">
                      <a href={telHref()} className="font-medium text-primary transition hover:underline">
                        {SITE.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg" aria-hidden>
                    💬
                  </span>
                  <div>
                    <span className="font-semibold text-ink">WhatsApp</span>
                    <p className="mt-1">
                      <a
                        href={whatsappHref()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary transition hover:underline"
                      >
                        Start a conversation
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl border border-primary/10 shadow-[var(--shadow-card)] ring-4 ring-primary/5">
              <iframe
                title={`Google Map — ${SITE.location}`}
                src={MAP_EMBED}
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-primary/10 bg-white p-7 shadow-[var(--shadow-card)] sm:p-9"
          >
            <p className="text-sm leading-relaxed text-ink-muted">
              Add your details below — we will open WhatsApp with your note prefilled so you can finish the chat there.
            </p>
            <div className="mt-7 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-ink">
                  Phone Number
                </label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
              </div>
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-ink">
                  Goal
                </label>
                <select
                  id="goal"
                  name="goal"
                  required
                  className={inputClass}
                  defaultValue=""
                >
                  <option value="" disabled>
                    What would you like help with?
                  </option>
                  <option value="Weight Loss">Weight Loss</option>
                  <option value="PCOS">PCOS</option>
                  <option value="Weight Gain">Weight Gain</option>
                  <option value="Diabetes">Diabetes</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  Message <span className="font-normal text-ink-muted">(optional)</span>
                </label>
                <textarea id="message" name="message" rows={4} className={`${inputClass} resize-y`} />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-8 w-full">
              Send details on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
