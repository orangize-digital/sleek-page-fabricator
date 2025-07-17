import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { flushSync } from "react-dom";

const projects = [
  {
    title: "Designtreppe im Industrieloft",
    category: "Treppen",
    image: "/Treppe+Geländer/20241216_143724.jpg",
    description: "Freitragende Designtreppe aus Stahl für ein modernes Loft.",
  },
  {
    title: "Podesttreppe feuerverzinkt mit Geländer",
    category: "Treppen",
    image: "/Treppen/Podesttreppe Feuerverzinkt .jpg",
    description:
      "Witterungsbeständige Außentreppe aus feuerverzinktem Stahl mit Edelstahlgeländer – ideal für den Zugang zum Obergeschoss.",
  },
  {
    title: "Kompakte Podesttreppe – verzinkt",
    category: "Treppen",
    image: "/Treppen/Podesttreppe Feuerverzinkt.jpg",
    description:
      "Robuste und platzsparende Konstruktion mit Gitterroststufen – langlebig und pflegeleicht.",
  },
  {
    title: "Feuerverzinkte Treppe mit Gitterroststufen",
    category: "Treppen",
    image: "/Treppen/Treppe Feuerverzinkt.jpg",
    description:
      "Schlichte, funktionale Treppe mit offenem Gitterrost – für Keller- oder Industriezugänge geeignet.",
  },
  {
    title: "Verzinkte Treppe mit Edelstahlhandlauf",
    category: "Treppen",
    image: "/Treppen/Treppe verzinkt + Edelstahl Handlauf.jpg",
    description:
      "Kombination aus verzinktem Stahlgestell und Edelstahlhandlauf – modern, stabil und pflegeleicht.",
  },
  {
    title: "Pulverbeschichtete Wangentreppe mit Edelstahlhandlauf",
    category: "Treppen",
    image: "/Treppen/Wangentreppe Pulverbeschichtet.jpg",
    description:
      "Moderne Außentreppe mit seitlichen Wangen und hochwertigem Geländer – farbbeschichtet und elegant.",
  },
  {
    title: "Schmiedeeisernes Einfahrtstor",
    category: "Tore",
    image: "/Tore/Hoftor Einfahrt Stahl Feuerverzinkt.jpg",
    description:
      "Handgeschmiedetes Einfahrtstor mit aufwendigen Verzierungen für eine familien haus.",
  },
  {
    title: "Elektrisches Schiebetor mit Pulverbeschichtung",
    category: "Tore",
    image: "/Tore/Elektr. Schiebetor Pulverb..jpg",
    description:
      "Modernes Schiebetor aus pulverbeschichtetem Metall – elektrisch betrieben für höchsten Komfort und Sicherheit.",
  },
  {
    title: "Klassisches Hoftor – feuerverzinkt & pulverbeschichtet",
    category: "Tore",
    image: "/Tore/Hoftor Feuerverzinkt & Pulv..jpg",
    description:
      "Zeitloses Einfahrtstor mit Zierspitzen – feuerverzinkt und pulverbeschichtet für stilvolle Langlebigkeit.",
  },
  {
    title: "Schiebetor mit Holzoptik – verzinkt & pulverbeschichtet",
    category: "Tore",
    image: "/Tore/Schiebetor HA Verzinkt & Pulverbe..jpg",
    description:
      "Robuste Stahlkonstruktion mit Holzdekor-Elementen – modernes Design trifft wartungsarme Technik.",
  },
  {
    title: "Edelstahl-Briefkastenhalter für Stabilität und Design",
    category: "Edelstahl",
    image: "/Edelstahl/Briefkastenhalter Edelstahl.png",
    description:
      "Eleganter und stabiler Halter für Briefkästen aus Edelstahl. Rostfrei und witterungsbeständig für eine langlebige Lösung.",
  },
  // {
  //   title: "Modernes Edelstahl-Rankgitter",
  //   category: "Edelstahl",
  //   image: "/Edelstahl/Rankgitter Edelstahl 2.jpg",
  //   description:
  //     "Stilvolles und robustes Rankgitter aus Edelstahl für Garten und Fassadenbegrünung. Wetterfest und pflegeleicht für langanhaltende Schönheit.",
  // },
  {
    title: "Verzinkte Treppe mit Edelstahl-Handlauf",
    category: "Edelstahl",
    image: "/Edelstahl/Treppe verzinkt + Edelstahl Handlauf.jpg",
    description:
      "Kombination aus verzinktem Treppenkorpus und hochwertigem Edelstahl-Handlauf – langlebig, modern und pflegeleicht.",
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
    image: "Geländer/Stahl Feuerverzinkt 1.jpg",
    description:
      "Stabiler und feuerverzinkter Stahl für langlebige Geländerkonstruktionen. Optimaler Schutz vor Rost und Witterungseinflüssen.",
  },
  {
    title: "Edelstahl-Glasgeländer mit Sichtschutz",
    category: "Geländer",
    image: "/Geländer/EdelstahlGlasgelaender.jpg",
    description:
      "Modernes Balkongeländer mit getöntem Glas und Edelstahlrahmen – ideal für Privatsphäre und stilvolles Design.",
  },
  {
    title: "Transparente Glas-Edelstahl-Konstruktion",
    category: "Geländer",
    image: "/Geländer/Gelaender Edelstahl Glas.jpg",
    description:
      "Schlankes Edelstahlgeländer mit klarem Sicherheitsglas – für lichtdurchflutete Balkone und zeitgemäße Architektur.",
  },
  {
    title: "Pulverbeschichtetes Balkongeländer mit Pflanzen",
    category: "Geländer",
    image: "/Geländer/Gelaender Pulverbeschichtet.jpg",
    description:
      "Robustes Balkongeländer aus pulverbeschichtetem Metall mit vertikalen Streben – pflegeleicht und ideal für Begrünung.",
  },
  {
    title: "Carport aus Stahl und Glas",
    category: "Metallgestaltung",
    image: "/Metallgestaltung/Carport Stahl Glas.jpg",
    description:
      "Elegante Stahlkonstruktion mit Glasdach – modernes Carport-Design für Wohnhäuser und Mehrfamilienhäuser.",
  },
  {
    title: "Solar-Carport aus Stahl",
    category: "Metallgestaltung",
    image: "/Metallgestaltung/Carport Stahl-Solar.jpg",
    description:
      "Umweltfreundliches Carport mit integrierter Solaranlage – stabile Stahlkonstruktion für nachhaltiges Parken.",
  },
  {
    title: "Fahrradüberdachung aus Metall",
    category: "Metallgestaltung",
    image: "/Metallgestaltung/Fahrrad Ueberdachung.jpg",
    description:
      "Funktionale und moderne Fahrradüberdachung – robuster Witterungsschutz für den öffentlichen oder privaten Raum.",
  },
  {
    title: "Bushaltestellen-Überdachung mit Holzdetails",
    category: "Metallgestaltung",
    image: "/Metallgestaltung/Ueberdachung Bushaltestelle.jpg",
    description:
      "Überdachung für Bushaltestellen aus Stahl mit Sitzfläche aus Holz – wetterfest und vandalismussicher.",
  },
  {
    title: "Individuelle Aluminium-Verkleidung für Lastenrad",
    category: "Aluminiumarbeiten",
    image: "/aluminium-schweissen/Screenshot 2024-05-17 124912.png",
    description:
      "Pulverbeschichtete Aluminiumverkleidung für ein Babboe Curve Lastenrad – passgenau gefertigt, mit Namensgravur. Langlebig, individuell, hochwertig.",
  },
  {
    title: "Individuelle Aluminium-Verkleidung für Lastenrad",
    category: "Aluminiumarbeiten",
    image: "/aluminium-schweissen/Screenshot 2024-05-17 124859.png",
    description:
      "Hochwertige Aluminium-Seitenverkleidung für ein Babboe Curve Lastenrad, präzise zugeschnitten und mit personalisierter Namensgravur versehen. Die pulverbeschichtete Oberfläche sorgt für langlebigen Schutz und eine edle Optik. Ideal für individuelle Anpassungen und Branding.",
  },
  {
    title: "Terrasse mit modernem Staketengeländer",
    category: "Anderes",
    image: "/Anderes/Terasse SAL.jpg",
    description:
      "Schlichte und stilvolle Terrasse mit vertikalem Geländer – ideal für einen gemütlichen Außenbereich.",
  },
  {
    title: "Terrassenfläche mit dekorativer Bepflanzung",
    category: "Anderes",
    image: "/Anderes/Terasse SAR.jpg",
    description:
      "Großzügige Terrassenfläche mit klaren Linien und schönem Ausblick – ideal für den Sommer.",
  },
  {
    title: "Terrasse mit Edelstahlgeländer",
    category: "Anderes",
    image: "/Anderes/Terasse VA.jpg",
    description:
      "Zeitgemäße Terrassengestaltung mit feinem Edelstahlgeländer – hochwertig und pflegeleicht.",
  },
  {
    title: "Feuerverzinkte Terrassenüberdachung",
    category: "Anderes",
    image: "/Anderes/TerassenUeberdachung Feuerverzinkt.jpg",
    description:
      "Solide Überdachung für Terrassen aus feuerverzinktem Stahl und Glas – Schutz bei jedem Wetter.",
  },
  {
    title: "Zierzaun aus Schmiedeeisen",
    category: "Anderes",
    image: "/Anderes/Zaun Schmiedeeisern.jpg",
    description:
      "Traditionelles Zaunelement mit verspielten Ornamenten – ideal für Vorgärten und Einfriedungen.",
  },
  {
    title: "Moderner Staketen-Zaun",
    category: "Anderes",
    image: "/Anderes/Zaun Staketen.jpg",
    description:
      "Langlebiger Metallzaun mit schlichten vertikalen Streben – funktionale Begrenzung mit klarer Linie.",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(6);

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
      const shuffled = shuffleArray(projects);
      setFilteredProjects(shuffled);
      setVisibleProjects(6);
    } else {
      const filtered = projects.filter(
        (project) => project.category === activeFilter
      );
      setFilteredProjects(filtered);
      setVisibleProjects(10);
    }
  }, [activeFilter]);

  const loadMore = () => {
    flushSync(() => {
      setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
    });
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
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

        {filteredProjects.length > 6 && (
          <div className="mt-12 text-center reveal">
            {visibleProjects < filteredProjects.length ? (
              <button
                onClick={loadMore}
                className="bg-white text-steel-dark hover:bg-gray-100 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Mehr anzeigen <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={showLess}
                className="bg-white text-steel-dark hover:bg-gray-100 px-8 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Weniger anzeigen <ArrowLeft className="ml-2 h-5 w-5" />
              </button>
            )}
            <p className="my-4">oder</p>
            <a
              href="https://form.jotform.com/250872969429373"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium"
            >
              Jetzt unverbindliche Anfrage stellen
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
