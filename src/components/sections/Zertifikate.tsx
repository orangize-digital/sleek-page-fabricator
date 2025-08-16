import React, { useEffect, useRef } from "react";
import { FileText } from "lucide-react";

const zertifikate = [
  {
    title: "AEVO-IHK",
    description:
      "Ausbildereignungsprüfung (IHK) – berechtigt zur Ausbildung von Lehrlingen im Metallbau-Handwerk.",
    file: "/zertifikate/AEVO-IHK.jpg",
  },
  {
    title: "Meisterprüfungszeugnis",
    description:
      "Offizielles Meisterprüfungszeugnis im Metallbauer-Handwerk – Nachweis höchster Fachkompetenz.",
    file: "/zertifikate/Meisterpruefungszeugnis.jpg",
  },
  {
    title: "SAP Zertifikat",
    description:
      "Zertifikat für spezielle Kenntnisse und Fortbildungen im Bereich SAP-Anwendungen.",
    file: "/zertifikate/SAP-Zertifikat.jpg",
  },
];

const ZertifikateSection = () => {
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
      { threshold: 0.1 }
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="zertifikate"
      className="section-padding bg-[#C0C0B5]/10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-DEFAULT font-medium mb-2">
            Meine Nachweise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Zertifikate & Qualifikationen
          </h2>
          <p className="text-gray-700">
            Offizielle Nachweise meine Meisterqualifikationen und Weiterbildung
            – ein Garant für Qualität und Vertrauen.
          </p>
        </div>

        {/* Zertifikate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zertifikate.map((zertifikat, index) => (
            <div
              key={index}
              className="glass-panel p-8 flex flex-col items-start hover:scale-[1.02] transition-transform duration-300 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-steel-light/10 w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-steel-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-steel-dark">
                {zertifikat.title}
              </h3>
              <p className="text-gray-700 mb-6">{zertifikat.description}</p>
              <a
                href={zertifikat.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-2 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium shadow-md"
              >
                <FileText className="mr-2 w-5 h-5" />
                Ansehen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZertifikateSection;
