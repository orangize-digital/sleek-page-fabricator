
import React, { useEffect, useRef } from 'react';
import { MessageSquare, PenTool, Ruler, Wrench, Truck, Check } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8 text-steel-DEFAULT" />,
    title: 'Beratung',
    description: 'Im ersten Gespräch erfassen wir Ihre Wünsche und Anforderungen und beraten Sie zu möglichen Lösungen.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-steel-DEFAULT" />,
    title: 'Planung & Design',
    description: 'Wir erstellen detaillierte Entwürfe und technische Zeichnungen für Ihr Projekt.'
  },
  {
    icon: <Ruler className="w-8 h-8 text-steel-DEFAULT" />,
    title: 'Maßanfertigung',
    description: 'Basierend auf den finalen Plänen fertigen wir Ihre Metallkonstruktion maßgenau in unserer Werkstatt.'
  },
  {
    icon: <Wrench className="w-8 h-8 text-steel-DEFAULT" />,
    title: 'Fertigung',
    description: 'Mit modernster Technik und handwerklichem Können setzen wir Ihr Projekt präzise um.'
  },
  {
    icon: <Truck className="w-8 h-8 text-steel-DEFAULT" />,
    title: 'Lieferung & Montage',
    description: 'Wir liefern und montieren Ihre Metallkonstruktion fachgerecht vor Ort.'
  },
  {
    icon: <Check className="w-8 h-8 text-steel-DEFAULT" />,
    title: 'Abnahme & Service',
    description: 'Nach der gemeinsamen Abnahme stehen wir Ihnen auch weiterhin mit unserem Service zur Verfügung.'
  }
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="process" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-DEFAULT font-medium mb-2">Unser Prozess</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Von der Idee zur Umsetzung
          </h2>
          <p className="text-gray-700">
            Transparenz und Qualität stehen bei uns an erster Stelle. 
            Unser bewährter Prozess garantiert reibungslose Abläufe und hervorragende Ergebnisse.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-steel-light/30 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Process steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 reveal relative ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Step number and icon (center on mobile, alternating sides on desktop) */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-steel-light/20">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-steel-DEFAULT rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                {/* Step content (alternating sides on desktop) */}
                <div className={`md:w-[calc(50%-40px)] text-center md:text-left py-4`}>
                  <h3 className="text-xl font-semibold mb-3 text-steel-dark">{step.title}</h3>
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
