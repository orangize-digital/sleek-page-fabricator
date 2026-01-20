const AGBHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="agb" className="relative h-[60vh] flex items-center pt-16">
        <div className="absolute inset-0 -z-0">
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-steel-dark/70 z-10"></div>

          {/* Background Image */}
          <img
            src="/gelaender/screenshot-2024-05-17-124618.png"
            alt="Beispielbild eines Metallbauelements"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 border-2 border-primary rounded-full bg-white/15 backdrop-blur-sm">
              <span className="text-white font-medium text-sm md:text-base">
                Meisterqualität im Metallbau
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight drop-shadow-lg">
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>
          </div>
        </div>
      </section>

      {/* AGB Content Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="prose max-w-none">
          <h2>Allgemeine Geschäftsbedingungen</h2>
          <p className="mt-6">
            <strong>Firma Metallbaumeister Albrecht</strong>
            <br />
            Inhaber: Robert Albrecht
            <br />
            Hafen Berenbusch 1 · 31675 Bückeburg
          </p>

          <h3 className="mt-6">AGB herunterladen:</h3>
          <a
            href="/agb-metallbaumeister-albrecht.pdf"
            className="text-primary underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGB als PDF anzeigen
          </a>
        </div>
      </section>
    </>
  );
};

export default AGBHero;
