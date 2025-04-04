import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import ContactButtons from "@/components/ui/ContactButtons";
import DatenschutzHero from "@/components/sections/DatenschutzHero";

const Datenschutz = () => {
  useEffect(() => {
    // Handle reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ContactButtons />
        <DatenschutzHero />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
