/** Contact & WhatsApp — single source of truth */
export const SITE = {
  brandName: "Dietitian Megha",
  initials: "DM",
  location: "Najafgarh, New Delhi",
  phoneDisplay: "+91-9599363912",
  /** Use in tel: and wa.me */
  phoneE164: "919599363912",
  whatsAppMessage: "Hi, I'd like to book a consultation for diet planning.",
  stickyWhatsAppMessage: "Hi, I'd like to book a diet consultation.",
  serviceAreaLine: "Welcoming clients from Najafgarh & Dwarka — and online across India",
} as const;

export function telHref(): string {
  return `tel:+${SITE.phoneE164}`;
}

export function whatsappHref(text: string = SITE.whatsAppMessage): string {
  return `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(text)}`;
}
