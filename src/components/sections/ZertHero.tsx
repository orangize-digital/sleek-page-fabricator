import React from "react";

const ZertifikateHero = () => {
  return (
    <section
      id="zertifikate-hero"
      className="relative min-h-[60vh] flex items-center pt-16"
    >
      {/* Hintergrund mit Overlay */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-steel-dark/70 z-10"></div>
        <img
          src="/Treppen/Podesttreppe Feuerverzinkt .jpg"
          alt="Zertifikate Hintergrund"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 border-2 border-primary rounded-full bg-white/15 backdrop-blur-sm">
            <span className="text-white font-medium text-sm md:text-base">
              Offizielle Nachweise
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Meine Zertifikate
          </h1>

          <p className="text-white/95 text-lg md:text-xl max-w-2xl font-medium drop-shadow">
            Qualität und Sicherheit belegt durch unabhängige Prüfstellen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ZertifikateHero;
