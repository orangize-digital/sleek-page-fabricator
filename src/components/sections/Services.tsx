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
    icon: <Ruler className="w-10 h-10 text-steel-dark" />,
    title: "Metallkonstruktionen",
    description:
      "Maßgeschneiderte Stahlkonstruktionen für Industrie- und Privatbedarf, präzise gefertigt nach Ihren Anforderungen.",
  },
  {
    icon: <Lock className="w-10 h-10 text-steel-dark" />,
    title: "Tore & Zäune",
    description:
      "Elegante Einfahrtstore, robuste Industrietore und individuell gestaltete Zäune für maximale Sicherheit und Ästhetik.",
  },
  {
    icon: <Minimize2 className="w-10 h-10 text-steel-dark" />,
    title: "Geländer & Treppen",
    description:
      "Funktionale und stilvolle Treppen und Geländer aus verschiedenen Metallarten, passend zu Ihrer Architektur.",
  },
  {
    icon: <PenTool className="w-10 h-10 text-steel-dark" />,
    title: "Metallgestaltung",
    description:
      "Kunstvolle Metallobjekte und dekorative Elemente, die Ihre Räume und Außenbereiche aufwerten.",
  },
  {
    icon: <Settings className="w-10 h-10 text-steel-dark" />,
    title: "Reparaturen",
    description:
      "Professionelle Reparatur und Wartung von Metallkonstruktionen aller Art für langjährige Haltbarkeit.",
  },
  {
    icon: <Shield className="w-10 h-10 text-steel-dark" />,
    title: "Sicherheitslösungen",
    description:
      "Hochwertige Sicherheitstechnik in Metall – von Fenstergittern bis zu Spezialverschlüssen für maximalen Schutz.",
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
            Vielfältige Lösungen in Metall
          </h2>
          <p className="text-gray-700">
            Wir bieten ein breites Spektrum an Metallbauarbeiten für private und
            gewerbliche Kunden. Jedes Projekt wird individuell geplant und mit
            höchster Präzision umgesetzt.
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
            href="https://form.jotform.com/250872969429373"
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
