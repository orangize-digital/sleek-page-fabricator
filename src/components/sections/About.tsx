import React, { useEffect, useRef } from "react";

const About = () => {
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
    <section
      id="about"
      className="section-padding bg-[#C0C0B5]/10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="reveal">
                <span className="inline-block text-steel-dark font-medium mb-2">
                  Über uns
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
                  Tradition trifft Innovation
                </h2>
              </div>
              <div className="reveal">
                <p className="text-gray-700 mb-6">
                  Metallbaumeister-Albrecht steht für höchste Qualität und
                  Präzision in der Metallverarbeitung. Wir verbinden
                  traditionelles Handwerk mit modernen Technologien, um
                  maßgeschneiderte Lösungen zu schaffen, die sowohl funktional
                  als auch ästhetisch überzeugen.
                </p>
              </div>
              <div className="reveal">
                <p className="text-gray-700 mb-6">
                  Mit jahrelanger Erfahrung in der Branche bieten wir
                  hochwertige Metallarbeiten für anspruchsvolle Kunden. Unsere
                  Leidenschaft für Perfektion spiegelt sich in jedem Detail
                  unserer Arbeit wider.
                </p>
              </div>
              <div className="reveal">
                <p className="text-gray-700">
                  Die Stärke unseres Unternehmens liegt in der individuellen
                  Beratung und der präzisen Umsetzung komplexer Anforderungen.
                  Vom ersten Gespräch bis zur finalen Montage begleiten wir
                  unsere Kunden und verwirklichen ihre Ideen in beständigem
                  Metall.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 reveal">
                <div className="glass-panel p-6 text-center">
                  <div className="text-3xl font-bold text-steel-dark mb-2">
                    20+
                  </div>
                  <div className="text-gray-700">Jahre Erfahrung</div>
                </div>
                <div className="glass-panel p-6 text-center">
                  <div className="text-3xl font-bold text-steel-dark mb-2">
                    90+
                  </div>
                  <div className="text-gray-700">Projekte</div>
                </div>
                <div className="glass-panel p-6 text-center">
                  <div className="text-3xl font-bold text-steel-dark mb-2">
                    100%
                  </div>
                  <div className="text-gray-700">Kundenzufriedenheit</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 reveal">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-steel-dark rounded-lg"></div>
              <img
                src="/logo/logo-small.svg"
                alt="Albert Albrecht, Metallbaumeister"
                className="rounded-lg shadow-xl w-full object-cover aspect-[3/4] lg:aspect-auto lg:h-[600px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg p-6 rounded-lg max-w-xs">
                <p className="text-lg font-semibold text-steel-dark">
                  Robert Albrecht
                </p>
                <p className="text-gray-600">Metallbaumeister & Inhaber</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
