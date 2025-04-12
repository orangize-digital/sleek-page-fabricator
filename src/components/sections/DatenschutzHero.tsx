import { useEffect } from "react";

const DatenschutzHero = () => {
  useEffect(() => {
    fetch(
      `https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/64baabdcbf7feb3674a0018c629077b5/document/render/html?language=de`
    )
      .then((result) => result.text())
      .then((content) => {
        const container = document.getElementById("lc-text");
        if (container) {
          container.innerHTML = content;

          // Optional: Style <h3> and <h4> dynamically
          container.querySelectorAll("h2").forEach((h2) => {
            h2.classList.add("mt-6", "mb-4", "text-xxl", "font-semibold");
          });
          container.querySelectorAll("h3").forEach((h3) => {
            h3.classList.add("mt-6", "text-xl", "font-semibold");
          });

          container.querySelectorAll("h4").forEach((h4) => {
            h4.classList.add("mt-4", "text-lg", "font-medium");
          });
        }
      });
  }, []);

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
              Datenschutz
            </h1>
          </div>
        </div>
      </section>

      {/* Legal Content Section */}
      <section className="container mx-auto px-4 md:px-6 py-12">
        <div id="lc-text" className="prose max-w-none"></div>
        <noscript>
          <p>
            Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript
            deaktiviert haben. Folgen Sie bitte diesem{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/64baabdcbf7feb3674a0018c629077b5/document/render/html?language=de"
              className="text-blue-600 underline"
            >
              Link
            </a>
            , um den Rechtstext anzuzeigen.
          </p>
        </noscript>
      </section>
    </>
  );
};

export default DatenschutzHero;
