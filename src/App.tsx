import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Services } from "./components/Services";
import { SiteHeader } from "./components/SiteHeader";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-[-9999px] top-4 z-[60] rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white focus:left-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
