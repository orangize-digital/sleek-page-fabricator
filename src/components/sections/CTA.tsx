
import React, { useEffect, useRef } from 'react';
import { PhoneCall } from 'lucide-react';

const CTA = () => {
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
    <section className="py-20 relative" ref={sectionRef}>
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-steel-dark/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070" 
          alt="Metal workshop" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Bereit für Ihr nächstes Metallbauprojekt?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine unverbindliche Beratung und ein individuelles Angebot.
            Wir freuen uns darauf, Ihre Ideen zu verwirklichen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+4912345678900" 
              className="bg-steel-DEFAULT hover:bg-steel-light text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <PhoneCall className="mr-2 h-5 w-5" />
              +49 (0) 123 456 789 00
            </a>
            <a 
              href="#contact" 
              className="bg-white text-steel-dark hover:bg-gray-100 px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Anfrage senden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
