
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-steel-dark/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1531164180075-0a00e8ff930e?q=80&w=2070" 
          alt="Metal Welding" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-4 px-4 py-1 border border-primary rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-white font-medium text-sm">Metallbaumeister seit 1998</span>
          </div>
          <h1 className="text-white font-bold mb-6 leading-tight">
            Präzision und Qualität <br />in der Metallverarbeitung
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Individuelle Lösungen in Metall für Privatkunden und Unternehmen. Vom Entwurf bis zur Montage – alles aus einer Hand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#contact" 
              className="bg-steel-DEFAULT hover:bg-steel-light text-white px-8 py-3.5 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#projects" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-300"
            >
              Projekte ansehen
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Mehr entdecken</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
