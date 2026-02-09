import React, { useEffect, useRef } from "react";
import {
  Ruler,
  Lock,
  Minimize2,
  PenTool,
  Settings,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: <Minimize2 className="w-10 h-10 text-steel-dark" />,
    title: "Treppengeländer & Handläufe",
    description:
      "Treppengeländer für innen und außen, Balkongeländer und Handläufe aus Edelstahl oder Stahl – maßgefertigt und fachgerecht montiert.",
  },
  {
    icon: <Lock className="w-10 h-10 text-steel-dark" />,
    title: "Tore & Zäune",
    description:
      "Einfahrtstore, Schiebetore, Hoftore und Metallzäune – feuerverzinkt oder pulverbeschichtet, auch mit elektrischem Antrieb.",
  },
  {
    icon: <Ruler className="w-10 h-10 text-steel-dark" />,
    title: "Stahlbau & Metallkonstruktionen",
    description:
      "Maßgeschneiderte Stahlkonstruktionen, Podeste, Carports und Überdachungen für Gewerbe und Privat. DIN EN 1090-2 zertifiziert.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-steel-dark" />,
    title: "Metallgestaltung & Schweißarbeiten",
    description:
      "Kunstvolle Schmiedearbeiten, Zierzäune und individuelle Metallobjekte – von der Schlosserei bis zur Feingestaltung.",
  },
  {
    icon: <Settings className="w-10 h-10 text-steel-dark" />,
    title: "Reparaturen & Wartung",
    description:
      "Reparatur von Geländern, Toren, Zäunen und Metallkonstruktionen aller Art. Schnell, zuverlässig und zu fairen Preisen.",
  },
  {
    icon: <Shield className="w-10 h-10 text-steel-dark" />,
    title: "Aluminium & Edelstahl",
    description:
      "Edelstahl- und Aluminiumarbeiten: Briefkastenhalter, Verkleidungen, Sonderanfertigungen – rostfrei und witterungsbeständig.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="services" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-DEFAULT font-medium mb-2">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Metallbau-Leistungen aus Meisterhand
          </h2>
          <p className="text-gray-700">
            Von Geländern und Treppen über Tore und Zäune bis hin zu
            Stahlkonstruktionen – wir bieten das volle Spektrum an
            Metallbauarbeiten. Jedes Projekt wird individuell geplant und mit
            höchster Präzision in unserer Werkstatt in Bückeburg umgesetzt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel p-8 hover:scale-[1.02] transition-transform duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-steel-light/10 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-steel-dark">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <a
            href="https://form.jotform.com/253192414832354"
            className="inline-flex items-center justify-center px-8 py-3 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium shadow-lg"
          >
            Unverbindlich & kostenlos beraten lassen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
