import { useEffect, useRef } from "react";

const gelaenderTypes = [
  {
    title: "Edelstahlgeländer",
    description:
      "Rostfreie Geländer aus hochwertigem Edelstahl – langlebig, pflegeleicht und zeitlos modern. Ideal für Balkone, Terrassen und Treppen.",
    image: "/gelaender/gelaender-va-vorderansicht.jpg",
  },
  {
    title: "Glasgeländer",
    description:
      "Moderne Geländer mit Sicherheitsglas und Edelstahlrahmen – für maximale Transparenz und lichtdurchflutete Räume.",
    image: "/gelaender/gelaender-edelstahl-glas.jpg",
  },
  {
    title: "Balkongeländer",
    description:
      "Maßgefertigte Balkongeländer in verschiedenen Materialien und Designs – passend zu Ihrer Architektur in Bückeburg und Umgebung.",
    image: "/gelaender/gelaender-pulverbeschichtet.jpg",
  },
  {
    title: "Feuerverzinkte Geländer",
    description:
      "Robuste Stahlgeländer mit Feuerverzinkung für maximalen Korrosionsschutz – besonders langlebig im Außenbereich.",
    image: "/gelaender/stahl-feuerverzinkt-1.jpg",
  },
  {
    title: "Handläufe",
    description:
      "Stabile Handläufe aus Edelstahl für Eingänge, Treppen und Gartenzugänge – sicherer Halt bei jedem Wetter.",
    image: "/gelaender/handlauf-eingang.jpg",
  },
  {
    title: "Terrassengeländer",
    description:
      "Schlichte und moderne Terrassengeländer mit klarer Formensprache – funktional und ästhetisch für den Außenbereich.",
    image: "/gelaender/terassengelaender.png",
  },
];

const GelaenderTypes = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        }),
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-dark font-medium mb-2">
            Unsere Geländer-Arten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Für jeden Einsatzbereich das passende Geländer
          </h2>
          <p className="text-gray-700">
            Ob Balkon, Terrasse, Treppe oder Eingangsbereich – wir fertigen Ihr
            Geländer individuell nach Maß. Alle Geländer werden in unserer
            Werkstatt in Bückeburg gefertigt und fachgerecht montiert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gelaenderTypes.map((type, index) => (
            <div
              key={type.title}
              className="reveal group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={type.image}
                  alt={`${type.title} von Metallbaumeister Albrecht in Bückeburg`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-steel-dark mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-700 text-sm">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GelaenderTypes;
