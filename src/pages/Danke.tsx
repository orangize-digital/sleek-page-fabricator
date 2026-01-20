import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const Danke = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-16">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-steel-dark/70 z-10"></div>
          <img
            src="/gelaender/screenshot-2024-05-17-124618.png"
            alt="Metallbau Hintergrund"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in text-center mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
              Vielen Dank!
            </h1>

            <p className="text-white/95 text-lg md:text-xl mb-4 max-w-2xl mx-auto font-medium drop-shadow">
              Ihre Nachricht wurde erfolgreich übermittelt.
            </p>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto drop-shadow">
              Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich
              bei Ihnen melden – in der Regel innerhalb von 24 Stunden.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Info Card */}
            <div className="glass-panel p-8 mb-8">
              <h2 className="text-2xl font-semibold text-steel-dark mb-6">
                Wie geht es weiter?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-steel-dark/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-steel-dark font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-steel-dark">
                      Prüfung Ihrer Anfrage
                    </h3>
                    <p className="text-gray-600">
                      Wir prüfen Ihre Anfrage und die angegebenen Details
                      sorgfältig.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-steel-dark/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-steel-dark font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-steel-dark">
                      Persönliche Kontaktaufnahme
                    </h3>
                    <p className="text-gray-600">
                      Ein Mitarbeiter meldet sich bei Ihnen, um alle Details zu
                      besprechen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-steel-dark/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-steel-dark font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-steel-dark">
                      Individuelles Angebot
                    </h3>
                    <p className="text-gray-600">
                      Sie erhalten ein maßgeschneidertes Angebot für Ihr
                      Projekt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-panel p-8 mb-8">
              <h2 className="text-2xl font-semibold text-steel-dark mb-4">
                Dringende Fragen?
              </h2>
              <p className="text-gray-600 mb-6">
                Für dringende Anfragen erreichen Sie uns auch direkt:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <a
                  href="tel:+491713310241"
                  className="flex items-center gap-3 text-steel-dark hover:text-steel-light transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-steel-dark/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+49 (0) 1713310241</span>
                </a>
                <a
                  href="https://wa.me/491713310241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-green-600 hover:text-green-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:hafen@metallbaumeister-albrecht.de"
                  className="flex items-center gap-3 text-steel-dark hover:text-steel-light transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-steel-dark/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hafen@metallbaumeister-albrecht.de</span>
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div className="text-center">
              <Button
                className="bg-steel-dark hover:bg-steel-light text-white px-8 py-6 rounded-lg font-medium text-base transition-all duration-300"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Zurück zur Startseite
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Danke;
