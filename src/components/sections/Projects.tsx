import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Designtreppe im Industrieloft",
    category: "Treppen",
    image: "/Treppe+Geländer/20241216_143724.jpg",
    description: "Freitragende Designtreppe aus Stahl für ein modernes Loft.",
  },
  {
    title: "Schmiedeeisernes Einfahrtstor",
    category: "Tore",
    image: "/Hoftor/Hoftor Einfahrt Stahl Feuerverzinkt.jpg",
    description:
      "Handgeschmiedetes Einfahrtstor mit aufwendigen Verzierungen für eine familien haus.",
  },
  {
    title: "Robuster Edelstahl-Auflaufpfosten",
    category: "Edelstahl",
    image: "/edelstahl/Auflaufpfosten Edelstahl.png",
    description:
      "Hochwertiger Edelstahl-Auflaufpfosten für sichere Führung und Schutz. Witterungsbeständig und langlebig für den Einsatz in verschiedenen Bereichen.",
  },
  {
    title: "Edelstahl-Briefkastenhalter für Stabilität und Design",
    category: "Edelstahl",
    image: "/edelstahl/Briefkastenhalter Edelstahl.png",
    description:
      "Eleganter und stabiler Halter für Briefkästen aus Edelstahl. Rostfrei und witterungsbeständig für eine langlebige Lösung.",
  },
  {
    title: "Modernes Edelstahl-Rankgitter",
    category: "Edelstahl",
    image: "/edelstahl/Rankgitter Edelstahl 2.jpg",
    description:
      "Stilvolles und robustes Rankgitter aus Edelstahl für Garten und Fassadenbegrünung. Wetterfest und pflegeleicht für langanhaltende Schönheit.",
  },
  {
    title: "Moderne Balkongeländer",
    category: "Geländer",
    image: "/Treppe+Geländer/20241216_143805.jpg",
    description:
      "Minimalistische Geländer aus Edelstahl und Glas für ein Mehrfamilienhaus.",
  },
  {
    title: "Feuerverzinktes Stahlgeländer – Langlebig & Witterungsbeständig",
    category: "Geländer",
    image: "public/Geländer/Stahl Feuerverzinkt 1.jpg",
    description:
      "Stabiler und feuerverzinkter Stahl für langlebige Geländerkonstruktionen. Optimaler Schutz vor Rost und Witterungseinflüssen.",
  },
  {
    title: "Kunstvolle Metallskulptur",
    category: "Metallgestaltung",
    image: "/Sichtschutz Stahl/Screenshot 2024-05-17 124658.png",
    description:
      "Feuerverzinkter Stahlsichtschutz mit einer natürlichen Füllung aus sibirischer Lärche – robust, witterungsbeständig und stilvoll für den Außenbereich.",
  },
  {
    title: "Individuelle Aluminium-Verkleidung für Lastenrad",
    category: "Aluminiumarbeiten",
    image: "/aluminium-schweissen/Screenshot 2024-05-17 124912.png",
    description:
      "Hochwertige Aluminium-Seitenverkleidung für ein Babboe Curve Lastenrad, präzise zugeschnitten und mit personalisierter Namensgravur versehen. Die pulverbeschichtete Oberfläche sorgt für langlebigen Schutz und eine edle Optik. Ideal für individuelle Anpassungen und Branding.",
  },
  {
    title: "Individuelle Aluminium-Verkleidung für Lastenrad",
    category: "Aluminiumarbeiten",
    image: "/aluminium-schweissen/Screenshot 2024-05-17 124859.png",
    description:
      "Hochwertige Aluminium-Seitenverkleidung für ein Babboe Curve Lastenrad, präzise zugeschnitten und mit personalisierter Namensgravur versehen. Die pulverbeschichtete Oberfläche sorgt für langlebigen Schutz und eine edle Optik. Ideal für individuelle Anpassungen und Branding.",
  },
  {
    title: "Maßgefertigte Blecharbeiten für Fassadenschutz",
    category: "Anderes",
    image: "/Blecharbeiten/Abkantung Wetterblech.png",
    description:
      "Präzise angefertigte und montierte Abkantbleche zum Schutz der Fassade vor Witterungseinflüssen. Langlebige Lösung mit sauberer Verarbeitung für einen optimalen Schutz des Gebäudes.",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filters = [
    "Alle",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

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

  useEffect(() => {
    if (activeFilter === "Alle") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeFilter)
      );
    }
    setVisibleProjects(3);
  }, [activeFilter]);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  };

  const showLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section
      id="projects"
      className="section-padding bg-[#C0C0B5]/10"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-DEFAULT font-medium mb-2">
            Unsere Projekte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Ausgewählte Referenzen
          </h2>
          <p className="text-gray-700">
            Entdecken Sie eine Auswahl unserer abgeschlossenen Projekte. Von
            filigran bis robust – wir setzen Ihre Visionen in beständiges Metall
            um.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-steel-dark text-white"
                  : "bg-white hover:bg-steel-light/20 hover:text-steel-DEFAULT text-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="glass-panel overflow-hidden group reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-steel-DEFAULT text-white text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-xl">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 3 && (
          <div className="mt-12 text-center reveal">
            {visibleProjects < filteredProjects.length ? (
              <button
                onClick={loadMore}
                className="inline-flex items-center justify-center px-8 py-3 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium"
              >
                Mehr anzeigen <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={showLess}
                className="inline-flex items-center justify-center px-8 py-3 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium"
              >
                Weniger anzeigen <ArrowLeft className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
