import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import GelaenderHero from "@/components/sections/GelaenderHero";
import GelaenderIntro from "@/components/sections/GelaenderIntro";
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
    image: "/gelaender/edelstahl-glasgelaender-mit-sichtschutz-balkon.jpg",
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
          text: "Die Kosten für ein Edelstahlgeländer hängen von Länge, Ausführung, Oberfläche und Montageaufwand ab. Nach einem Aufmaß vor Ort erstellen wir ein individuelles, transparentes Angebot. Pauschalpreise sind bei Maßanfertigungen nicht seriös.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Geländer eignen sich für den Außenbereich?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Für den Außenbereich eignen sich besonders feuerverzinkte Stahlgeländer sowie Edelstahlgeländer. Beide Varianten sind witterungsbeständig und langlebig. Die Auswahl richtet sich nach Einsatzort, Optik und Budget.",
        },
      },
      {
        "@type": "Question",
        name: "Fertigen Sie auch Balkon- und Treppengeländer an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wir fertigen Balkon-, Terrassen- und Treppengeländer für Innen- und Außenbereiche – jeweils individuell nach Maß und den geltenden Vorschriften.",
        },
      },
      {
        "@type": "Question",
        name: "Brauche ich einen Handlauf für meine Außentreppe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In vielen Fällen ja. Ab bestimmten Höhen und Stufenanzahlen sind Handläufe vorgeschrieben. Wir prüfen die Situation vor Ort und beraten Sie normgerecht.",
        },
      },
      {
        "@type": "Question",
        name: "In welcher Region sind Sie tätig?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unser Betrieb sitzt in Bückeburg. Wir arbeiten im Umkreis von ca. 60 km, unter anderem in Minden, Stadthagen, Rinteln und im gesamten Landkreis Schaumburg, auf Wunsch auch weiter.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Materialien verwenden Sie für Geländer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wir verarbeiten Stahl (z.\u00a0B. S235JR), Edelstahl (1.4301 / 1.4571) sowie Glasfüllungen und Trespa Platten (HPL). Die Materialwahl erfolgt immer passend zum Einsatzbereich.",
        },
      },
      {
        "@type": "Question",
        name: "Wie lange dauert die Fertigung eines Geländers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Je nach Umfang und Ausführung beträgt die Fertigungszeit in der Regel mehrere Wochen. Nach Planung und Freigabe erhalten Sie einen verbindlichen Zeitrahmen.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie auch Reparaturen an bestehenden Geländern an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja. Wir prüfen bestehende Geländer auf Sicherheit und Zustand und führen Reparaturen oder Anpassungen fachgerecht aus.",
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
        ogImage="/gelaender/edelstahl-glasgelaender-mit-sichtschutz-balkon.jpg"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ContactButtons />
        <GelaenderHero />
        <GelaenderIntro />
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
