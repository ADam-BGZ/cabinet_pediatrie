import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Cta } from "@/components/Cta";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { PreRendezVous } from "@/components/PreRendezVous";
import { EmergencyCta } from "@/components/EmergencyCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Cta />
        <Testimonials />
        <Faq />
        <PreRendezVous />
        <EmergencyCta />
      </main>
      <Footer />
    </>
  );
}
