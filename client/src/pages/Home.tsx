import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import ConsultationForm from "@/components/ConsultationForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <ConsultationForm />
      <Contact />
      <Footer />
    </div>
  );
}
