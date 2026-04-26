import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CtaBanner } from "./components/CtaBanner";
import { DietPrograms } from "./components/DietPrograms";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { SiteHeader } from "./components/SiteHeader";
import { StickyWhatsApp } from "./components/StickyWhatsApp";
import { Testimonials } from "./components/Testimonials";
import { WhyChoose } from "./components/WhyChoose";

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
        <Services />
        <WhyChoose />
        <Testimonials />
        <CtaBanner />
        <About />
        <DietPrograms />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
