import { Shield, MapPin } from "lucide-react";
import HeroForm from "@/components/HeroForm";

const GelaenderHero = () => {
  return (
    <section
      id="gelaender-hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-steel-dark/70 z-10"></div>
        <img
          src="/gelaender/edelstahlglasgelaender.jpg"
          alt="Maßgefertigtes Edelstahlgeländer mit Glasfüllung von Metallbaumeister Albrecht in Bückeburg"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 border-2 border-primary rounded-full bg-white/15 backdrop-blur-sm">
              <span className="text-white font-medium text-sm md:text-base">
                Geländer vom Meisterbetrieb
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
              Geländer nach Maß –{" "}
              <span className="text-steel-light">Ihr Metallbaumeister in Bückeburg</span>
            </h1>

            <p className="text-white/95 text-lg md:text-xl mb-8 max-w-2xl font-medium drop-shadow">
              Individuelle Geländer aus Edelstahl, Glas und Stahl – gefertigt in
              Meisterqualität. Wir liefern und montieren in Bückeburg, Minden,
              Stadthagen, Rinteln und der gesamten Region Schaumburg.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-steel-dark text-sm font-semibold shadow-md">
                <Shield className="w-4 h-4" />
                DIN EN 1090-2 EXC2
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold">
                <MapPin className="w-4 h-4" />
                Bückeburg + 60 km Umkreis
              </div>
            </div>

            <ul className="text-white/90 space-y-2 text-base">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
                </svg>
                Kostenlose Beratung & Aufmaß vor Ort
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
                </svg>
                Fertigung & Montage aus einer Hand
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
                </svg>
                Edelstahl, Glas, Stahl & verzinkte Ausführungen
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="animate-fade-in-right">
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GelaenderHero;
