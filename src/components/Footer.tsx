import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-steel-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Metallbaumeister Albrecht</h3>
            <p className="text-white/80 max-w-sm">
              Qualität und Präzision in der Metallbearbeitung seit über 20
              Jahren. Ihr zuverlässiger Partner für individuelle Metalllösungen.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>Am Hafen Berenbusch 1, 31675 Bückeburg</span>
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
                  href="mailto:ra@metallbaumeister-albrecht.info"
                  className="hover:underline"
                >
                  ra@metallbaumeister-albrecht.info
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
