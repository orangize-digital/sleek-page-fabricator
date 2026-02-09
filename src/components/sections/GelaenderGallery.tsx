import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const galleryItems = [
  {
    src: "/gelaender/edelstahlglasgelaender.jpg",
    alt: "Edelstahl-Glasgeländer mit Sichtschutz",
    title: "Edelstahl-Glasgeländer mit Sichtschutz",
    description:
      "Modernes Balkongeländer mit getöntem Glas und Edelstahlrahmen – ideal für Privatsphäre und stilvolles Design.",
  },
  {
    src: "/gelaender/gelaender-edelstahl-glas.jpg",
    alt: "Transparente Glas-Edelstahl-Konstruktion",
    title: "Glas-Edelstahl-Konstruktion",
    description:
      "Schlankes Edelstahlgeländer mit klarem Sicherheitsglas – für lichtdurchflutete Balkone.",
  },
  {
    src: "/gelaender/stahl-feuerverzinkt-1.jpg",
    alt: "Feuerverzinktes Stahlgeländer",
    title: "Feuerverzinktes Stahlgeländer",
    description:
      "Stabiler und feuerverzinkter Stahl für langlebige Geländerkonstruktionen.",
  },
  {
    src: "/gelaender/gelaender-pulverbeschichtet.jpg",
    alt: "Pulverbeschichtetes Balkongeländer",
    title: "Pulverbeschichtetes Balkongeländer",
    description:
      "Robustes Balkongeländer aus pulverbeschichtetem Metall – pflegeleicht und ideal für Begrünung.",
  },
  {
    src: "/gelaender/gelaender-va-seitenansicht.jpg",
    alt: "Edelstahlgeländer Seitenansicht",
    title: "Edelstahlgeländer – Seitenansicht",
    description:
      "Elegantes Edelstahlgeländer mit horizontalen Füllstäben – zeitlos modern.",
  },
  {
    src: "/gelaender/gelaender-va-vorderansicht.jpg",
    alt: "Edelstahlgeländer Vorderansicht",
    title: "Edelstahlgeländer – Vorderansicht",
    description:
      "Hochwertiges Edelstahlgeländer für Balkone und Terrassen – rostfrei und pflegeleicht.",
  },
  {
    src: "/gelaender/hafengelaender-mehrparteienhaus.png",
    alt: "Hafengeländer für Mehrparteienhaus",
    title: "Geländer für Mehrparteienhaus",
    description:
      "Maßgefertigtes Balkongeländer für ein Mehrparteienhaus – robust, sicher und ästhetisch.",
  },
  {
    src: "/gelaender/terassengelaender.png",
    alt: "Terrassengeländer aus Metall",
    title: "Terrassengeländer",
    description:
      "Schlichtes und modernes Terrassengeländer – ideal für den Außenbereich.",
  },
  {
    src: "/gelaender/handlauf-eingang.jpg",
    alt: "Handlauf für Hauseingang",
    title: "Handlauf für Hauseingang",
    description:
      "Stabiler Handlauf aus Edelstahl für den Eingangsbereich – sicherer Halt bei jedem Wetter.",
  },
  {
    src: "/gelaender/handlauf-gartenzugang.png",
    alt: "Handlauf für Gartenzugang",
    title: "Handlauf für Gartenzugang",
    description:
      "Eleganter Handlauf für den Gartenzugang – funktional und optisch ansprechend.",
  },
  {
    src: "/treppe-gelaender/20241216-143805.jpg",
    alt: "Moderne Balkongeländer",
    title: "Moderne Balkongeländer",
    description:
      "Minimalistische Geländer aus Edelstahl und Glas für ein Mehrfamilienhaus.",
  },
  {
    src: "/gelaender/stahl-feuerverzinkt.jpg",
    alt: "Feuerverzinktes Stahlgeländer Detail",
    title: "Feuerverzinkter Stahl – Detail",
    description:
      "Detailansicht eines feuerverzinkten Geländers mit hoher Witterungsbeständigkeit.",
  },
];

const GelaenderGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section className="section-padding bg-slate-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-dark font-medium mb-2">
            Unsere Projekte
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Geländer-Projekte aus Bückeburg und Umgebung
          </h2>
          <p className="text-gray-700">
            Jedes Geländer wird individuell geplant und in unserer Werkstatt
            gefertigt. Hier sehen Sie eine Auswahl unserer Arbeiten aus der
            Region Schaumburg, Minden-Lübbecke und darüber hinaus.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="reveal cursor-pointer group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${(index % 8) * 50}ms` }}
              onClick={() => setLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">
                {galleryItems[lightbox].title}
              </h3>
              <p className="text-white/80 text-sm mt-2">
                {galleryItems[lightbox].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GelaenderGallery;
