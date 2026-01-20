import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Metallbaumeister-Albrecht</h3>
            <p className="text-white/80 max-w-sm">
              Qualität und Präzision in der Metallbranche – mit über 20
              Jahren Erfahrung. Ihr zuverlässiger Partner für individuelle Metalllösungen.
            </p>
            <div className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full bg-yellow-400 text-steel-dark text-sm font-semibold shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-steel-dark"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
              </svg>
              DIN EN 1090-2 EXC2 zertifiziert
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Hafen Berenbusch 1, 31675 Bückeburg</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+491713310241" className="hover:underline">
                  +49 (0) 1713310241
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a
                  href="mailto:hafen@metallbaumeister-albrecht.de"
                  className="hover:underline"
                >
                  hafen@metallbaumeister-albrecht.de
                </a>
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
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Metallbaumeister Albrecht. Alle Rechte
            vorbehalten.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="/impressum"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="/agb"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
