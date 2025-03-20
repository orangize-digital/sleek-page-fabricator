
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Designtreppe im Industrieloft',
    category: 'Treppen',
    image: 'https://images.unsplash.com/photo-1607750262089-1684de9e2cb0?q=80&w=2070',
    description: 'Freitragende Designtreppe aus Stahl und Glas für ein modernes Loft in Hamburg.'
  },
  {
    title: 'Schmiedeeisernes Einfahrtstor',
    category: 'Tore',
    image: 'https://images.unsplash.com/photo-1518618750560-8f07abde4e4e?q=80&w=2070',
    description: 'Handgeschmiedetes Einfahrtstor mit aufwendigen Verzierungen für eine historische Villa.'
  },
  {
    title: 'Industrielle Stahlkonstruktion',
    category: 'Konstruktionen',
    image: 'https://images.unsplash.com/photo-1544378382-5e394b6399ed?q=80&w=2070',
    description: 'Tragende Stahlkonstruktion für eine Lagerhalle mit besonderen statischen Anforderungen.'
  },
  {
    title: 'Moderne Balkongeländer',
    category: 'Geländer',
    image: 'https://images.unsplash.com/photo-1614597396930-cd6760b99f7c?q=80&w=2070',
    description: 'Minimalistische Geländer aus Edelstahl und Glas für ein Mehrfamilienhaus.'
  },
  {
    title: 'Kunstvolle Metallskulptur',
    category: 'Metallgestaltung',
    image: 'https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=2070',
    description: 'Individuelle Metallskulptur als Blickfang für den Eingangsbereich eines Unternehmens.'
  },
  {
    title: 'Sicherheitstür mit Spezialverriegelung',
    category: 'Sicherheitslösungen',
    image: 'https://images.unsplash.com/photo-1529422643029-d4585747aaf2?q=80&w=2070',
    description: 'Hochsichere Metalltür mit mehrfacher Verriegelung für einen gewerblichen Kunden.'
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const filters = ['Alle', ...Array.from(new Set(projects.map(project => project.category)))];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'Alle') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
    setVisibleProjects(3);
  }, [activeFilter]);

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };

  const showLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="section-padding bg-metallic-light" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-DEFAULT font-medium mb-2">Unsere Projekte</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Ausgewählte Referenzen
          </h2>
          <p className="text-gray-700">
            Entdecken Sie eine Auswahl unserer abgeschlossenen Projekte. Von filigran bis robust – 
            wir setzen Ihre Visionen in beständiges Metall um.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-steel-DEFAULT text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
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
                  <h3 className="text-white font-semibold text-xl">{project.title}</h3>
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
                className="inline-flex items-center justify-center px-8 py-3 bg-steel-DEFAULT hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium"
              >
                Mehr anzeigen <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            ) : (
              <button 
                onClick={showLess}
                className="inline-flex items-center justify-center px-8 py-3 bg-steel-DEFAULT hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium"
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
