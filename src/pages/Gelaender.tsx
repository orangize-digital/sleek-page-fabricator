import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import GelaenderHero from "@/components/sections/GelaenderHero";
import GelaenderFAQ from "@/components/sections/GelaenderFAQ";
import GelaenderGallery from "@/components/sections/GelaenderGallery";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import ContactButtons from "@/components/ui/ContactButtons";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Metallbaumeister Albrecht",
    description:
      "Maßgefertigte Geländer aus Edelstahl, Glas und Stahl in Bückeburg und Umgebung. DIN EN 1090-2 EXC2 zertifizierter Meisterbetrieb.",
    url: "https://www.metallbaumeister-albrecht.de/gelaender",
    telephone: "+491713310241",
    email: "hafen@metallbaumeister-albrecht.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hafen Berenbusch 1",
      addressLocality: "Bückeburg",
      postalCode: "31675",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "52.2608",
      longitude: "9.0493",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "52.2608",
        longitude: "9.0493",
      },
      geoRadius: "60000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
    image: "/gelaender/edelstahlglasgelaender.jpg",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Geländer nach Maß",
    description:
      "Individuelle Geländer aus Edelstahl, Glas und Stahl – maßgefertigt in Bückeburg. Balkongeländer, Treppengeländer, Terrassengeländer und Handläufe.",
    brand: {
      "@type": "Brand",
      name: "Metallbaumeister Albrecht",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "52.2608",
          longitude: "9.0493",
        },
        geoRadius: "60000",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: "https://www.metallbaumeister-albrecht.de/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Geländer",
        item: "https://www.metallbaumeister-albrecht.de/gelaender",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was kostet ein Geländer aus Edelstahl?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Kosten für ein Edelstahlgeländer hängen von Länge, Design und Befestigungsart ab. Ein einfacher Edelstahl-Handlauf beginnt bei ca. 150 €/lfm, Geländer mit Glasfüllung ab ca. 350 €/lfm. Wir erstellen Ihnen gerne ein individuelles Angebot – die Beratung und das Aufmaß vor Ort sind kostenlos.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Geländer eignen sich für den Außenbereich?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für Außentreppen und Balkone empfehlen wir feuerverzinkte Stahlgeländer oder Edelstahlgeländer (V2A/V4A). Beide Varianten sind witterungsbeständig und langlebig. Feuerverzinkte Geländer bieten den besten Korrosionsschutz, Edelstahl überzeugt durch eine moderne Optik.",
        },
      },
      {
        "@type": "Question",
        name: "Fertigen Sie auch Balkongeländer und Treppengeländer an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir fertigen alle Arten von Geländern: Balkongeländer, Treppengeländer (innen und außen), Terrassengeländer, Galeriegeländer und Handläufe. Jedes Geländer wird individuell nach Maß in unserer Werkstatt in Bückeburg gefertigt und fachgerecht vor Ort montiert.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich einen Handlauf für meine Außentreppe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Laut Bauordnung ist ein Handlauf ab drei Stufen Pflicht. Wir fertigen Handläufe aus Edelstahl für Hauseingänge, Gartenzugänge und Außentreppen – passgenau und witterungsbeständig.",
        },
      },
      {
        "@type": "Question",
        name: "In welcher Region sind Sie als Metallbauer tätig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unser Betrieb befindet sich in Bückeburg (Schaumburg). Wir liefern und montieren im Umkreis von ca. 60 km – unter anderem in Minden, Stadthagen, Rinteln, Hannover, Hameln, Bad Salzuflen, Herford, Bielefeld und der gesamten Region Schaumburg und Minden-Lübbecke.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Materialien verwenden Sie für Geländer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir verarbeiten Edelstahl (V2A und V4A), Stahl mit Feuerverzinkung, pulverbeschichteten Stahl sowie Aluminium. Glasfüllungen aus Sicherheitsglas (VSG/ESG) setzen wir für moderne, transparente Geländer ein. Als DIN EN 1090-2 EXC2 zertifizierter Betrieb garantieren wir höchste Qualitätsstandards.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Fertigung eines Geländers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Von der Beratung bis zur Montage vergehen in der Regel 3–6 Wochen, je nach Komplexität und Auslastung. Nach dem kostenlosen Aufmaß vor Ort erhalten Sie ein detailliertes Angebot.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie auch Reparaturen an bestehenden Geländern an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, wir reparieren und modernisieren bestehende Geländer, Handläufe und Treppengeländer. Ob lockere Befestigungen, Rostschäden oder ein komplett neues Design – wir finden die passende Lösung.",
        },
      },
    ],
  },
];

const Gelaender = () => {
  useEffect(() => {
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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Geländer nach Maß in Bückeburg | Metallbaumeister Albrecht"
        description="Maßgefertigte Geländer aus Edelstahl, Glas & Stahl in Bückeburg und Umgebung (60 km). DIN EN 1090-2 zertifiziert. Kostenlose Beratung ✓ Montage inklusive ✓"
        canonical="/gelaender"
        ogImage="/gelaender/edelstahlglasgelaender.jpg"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ContactButtons />
        <GelaenderHero />
        <GelaenderGallery />
        <GelaenderFAQ />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Gelaender;
