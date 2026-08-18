import "@/App.css";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UspBar from "@/components/UspBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import CtaSection from "@/components/CtaSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink antialiased">
      <Header />
      <main>
        <Hero />
        <UspBar />
        <Services />
        <About />
        <Projects />
        <Reviews />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default App;
