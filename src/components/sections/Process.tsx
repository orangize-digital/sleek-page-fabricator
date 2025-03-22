import React, { useEffect, useRef } from "react";
import {
  MessageSquare,
  PenTool,
  Ruler,
  Wrench,
  Truck,
  Check,
} from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8 text-steel-dark" />,
    title: "Beratung",
    description:
      "Im ersten Gespräch erfassen wir deine Wünsche und beraten dich zu möglichen Lösungen.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-steel-dark" />,
    title: "Planung & Design",
    description:
      "Wir erstellen detaillierte Entwürfe und technische Zeichnungen für dein Projekt.",
  },
  {
    icon: <Ruler className="w-8 h-8 text-steel-dark" />,
    title: "Maßanfertigung",
    description:
      "Basierend auf den finalen Plänen fertigen wir deine Metallkonstruktion in unserer Werkstatt.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-steel-dark" />,
    title: "Fertigung",
    description:
      "Mit modernster Technik und handwerklichem Können setzen wir dein Projekt präzise um.",
  },
  {
    icon: <Truck className="w-8 h-8 text-steel-dark" />,
    title: "Lieferung & Montage",
    description:
      "Wir liefern und montieren deine Metallkonstruktion fachgerecht vor Ort.",
  },
  {
    icon: <Check className="w-8 h-8 text-steel-dark" />,
    title: "Abnahme & Service",
    description:
      "Nach der gemeinsamen Abnahme stehen wir dir weiterhin mit unserem Service zur Verfügung.",
  },
];

const Process = () => {
  const sectionRef = useRef(null);

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
    <section id="process" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-dark font-medium mb-2">
            Unser Prozess
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Von der Idee zur Umsetzung
          </h2>
          <p className="text-gray-700">
            Transparenz und Qualität stehen bei uns an erster Stelle. Unser
            bewährter Prozess garantiert reibungslose Abläufe und hervorragende
            Ergebnisse.
          </p>
        </div>

        <div className="relative">
          {/* Verbindungslinie zwischen den Schritten */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-steel-light/30 transform -translate-x-1/2 hidden md:block"></div>

          {/* Prozess-Schritte */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-start gap-12 reveal relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Schritt Nummer & Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-steel-light/20">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-steel-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Schritt Inhalt */}
                <div
                  className={`md:w-1/3 max-w-4xl py-4 ${
                    index % 2 === 0 ? "text-right" : "text-left md:self-end"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3 text-steel-dark">
                    {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
