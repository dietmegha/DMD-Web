import { whatsappHref } from "../site-config";

export function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden border-t border-primary/10 py-16 sm:py-20"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
        >
          Start Your Health Transformation Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
          Send a quick WhatsApp message — I will help you choose the program that fits your goals and schedule.
        </p>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition hover:bg-accent-muted hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          <span aria-hidden>👉</span>
          Book Your Consultation on WhatsApp
        </a>
      </div>
    </section>
  );
}
