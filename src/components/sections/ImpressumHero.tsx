const ImpressumHero = () => {
  return (
    <>
      <section id="home" className="relative h-[60vh] flex items-center pt-16">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-steel-dark/70 z-10"></div>
          <img
            src="/Geländer/Screenshot 2024-05-17 124507.png"
            alt="Metal Welding"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 border-2 border-primary rounded-full bg-white/15 backdrop-blur-sm">
              <span className="text-white font-medium text-sm md:text-base">
                Meisterqualität im Metallbau
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight drop-shadow-lg">
              Impressum
            </h1>
          </div>
        </div>
      </section>

      {/* Static Impressum content */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div className="prose max-w-none">
          <h2>Anbieter</h2>
          <p className="mt-6">
            <strong>Robert Albrecht</strong>
            <br />
            Metallbaumeister Albrecht
            <br />
            Berenbusch 1
            <br />
            31675 Bückeburg
            <br />
            Deutschland
          </p>

          <h3 className="mt-6">Kontakt</h3>
          <p>
            Telefonnummer: +49 171 3310241
            <br />
            E-Mail-Adresse:{" "}
            <a href="mailto:ra@metallbaumeister-albrecht.info">
              ra@metallbaumeister-albrecht.info
            </a>
          </p>

          <h3 className="mt-6">Umsatzsteuer</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            <strong>DE344553656</strong>
          </p>

          <h3 className="mt-6">Rechtlicher Hinweis</h3>
          <p>
            Im Falle von Abweichungen zwischen der deutschen und der englischen
            Fassung hat die deutsche Fassung Vorrang.
          </p>
        </div>
      </section>
    </>
  );
};

export default ImpressumHero;
