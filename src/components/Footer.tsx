
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steel-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Metallbaumeister Albrecht</h3>
            <p className="text-white/80 max-w-sm">
              Qualität und Präzision in der Metallbearbeitung seit über 25 Jahren. 
              Ihr zuverlässiger Partner für individuelle Metalllösungen.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Musterstraße 123, 12345 Musterstadt, Deutschland</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+4912345678900" className="hover:underline">+49 (0) 123 456 789 00</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="mailto:info@metallbaumeister-albrecht.de" className="hover:underline">info@metallbaumeister-albrecht.de</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Öffnungszeiten</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>8:00 - 17:00 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Samstag:</span>
                <span>Nach Vereinbarung</span>
              </li>
              <li className="flex justify-between">
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline hover:text-primary transition-colors">Startseite</a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-primary transition-colors">Über uns</a>
              </li>
              <li>
                <a href="#services" className="hover:underline hover:text-primary transition-colors">Leistungen</a>
              </li>
              <li>
                <a href="#projects" className="hover:underline hover:text-primary transition-colors">Projekte</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-primary transition-colors">Kontakt</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-primary transition-colors">Impressum</a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-primary transition-colors">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Metallbaumeister Albrecht. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
