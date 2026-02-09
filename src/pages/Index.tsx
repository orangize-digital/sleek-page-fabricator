import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import MaterialWahl from "@/components/sections/MaterialWahl";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import ContactButtons from "@/components/ui/ContactButtons";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Metallbaumeister Albrecht",
    description:
      "Metallbau-Meisterbetrieb in Bückeburg – Geländer, Treppen, Tore, Handläufe und Stahlkonstruktionen. DIN EN 1090-2 EXC2 zertifiziert. Lieferung und Montage im Umkreis von 60 km.",
    url: "https://www.metallbaumeister-albrecht.de",
    telephone: "+491713310241",
    email: "hafen@metallbaumeister-albrecht.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hafen Berenbusch 1",
      addressLocality: "Bückeburg",
      postalCode: "31675",
      addressRegion: "Niedersachsen",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.2608",
      longitude: "9.0493",
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "52.2608",
          longitude: "9.0493",
        },
        geoRadius: "60000",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    image: "/logo/logo.svg",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Metallbau-Leistungen",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Treppengeländer & Handläufe" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Balkongeländer & Terrassengeländer" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tore & Zäune" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stahlkonstruktionen & Schweißarbeiten" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carports & Überdachungen" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparaturen & Sonderanfertigungen" } },
      ],
    },
  },
];

const Index = () => {
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
      <SEOHead
        title="Metallbaumeister Albrecht | Metallbau, Geländer & Treppen in Bückeburg"
        description="Metallbau-Meisterbetrieb in Bückeburg: Geländer, Treppengeländer, Handläufe, Tore, Balkone & Stahlbau. DIN EN 1090-2 zertifiziert ✓ Kostenlose Beratung ✓ Montage im Umkreis 60 km – Hannover, Minden, Hameln."
        canonical="/"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ContactButtons />
        <Hero />
        {/* <About /> */}
        <Projects />
        <Services />
        {/* <MaterialWahl /> */}
        <CTA />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
