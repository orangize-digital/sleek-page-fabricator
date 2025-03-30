import React, { useEffect, useRef, memo } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const InfoRow = memo(
  ({
    icon,
    title,
    children,
  }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-steel-dark mb-1">{title}</h4>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  )
);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        }),
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-dark font-medium mb-2">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Sprechen Sie uns an
          </h2>
          <p className="text-gray-700">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen?
            Kontaktieren Sie uns – wir freuen uns auf Ihre Anfrage.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="reveal">
            <div className="glass-panel p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-steel-dark">
                Unsere Kontaktdaten
              </h3>

              <address className="not-italic space-y-6">
                <InfoRow
                  icon={<MapPin className="w-5 h-5 text-steel-dark" />}
                  title="Adresse"
                >
                  Tannenweg 15, 31675 Bückeburg, Deutschland
                </InfoRow>

                <InfoRow
                  icon={<Phone className="w-5 h-5 text-steel-dark" />}
                  title="Telefon"
                >
                  <a
                    href="tel:+491713310241"
                    className="hover:text-steel-dark transition-colors"
                  >
                    +49 (0) 1713310241
                  </a>
                </InfoRow>

                <InfoRow
                  icon={<Mail className="w-5 h-5 text-steel-dark" />}
                  title="E-Mail"
                >
                  <a
                    href="mailto:info@metallbaumeister-albrecht.de"
                    className="hover:text-steel-dark transition-colors"
                  >
                    info@metallbaumeister-albrecht.de
                  </a>
                </InfoRow>

                <InfoRow
                  icon={<Clock className="w-5 h-5 text-steel-dark" />}
                  title="Öffnungszeiten"
                >
                  <p>Montag - Freitag: 8:00 - 17:00 Uhr</p>
                  <p>Samstag: Nach Vereinbarung</p>
                  <p>Sonntag: Geschlossen</p>
                </InfoRow>
              </address>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-steel-dark mb-4">
                  Kontaktformular
                </h4>
                <a
                  href="https://form.jotform.com/250872969429373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-steel-dark hover:bg-steel-light text-white px-6 py-3 rounded-lg inline-block transition-colors duration-300"
                  aria-label="Kontaktformular öffnen"
                >
                  Jetzt Nachricht senden
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 reveal">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative">
            <img
              src="/Tannen-Weg-14.png"
              alt="Standort Metallbaumeister Albrecht"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-steel-dark/40 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h3 className="text-xl font-semibold text-steel-dark mb-2">
                  Besuchen Sie uns
                </h3>
                <p className="text-gray-700 mb-4">
                  Wir freuen uns auf Ihren Besuch in unserer Werkstatt.
                </p>
                <a
                  href="https://www.google.com/maps/place/Tannenweg+15,+31675+B%C3%BCckeburg/@52.2906604,8.9985336,16z/data=!3m1!4b1!4m6!3m5!1s0x47ba773f2eaa8255:0xc49e643313db964f!8m2!3d52.2906571!4d9.0011085!16s%2Fg%2F11cpdqdcgl?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-steel-dark hover:bg-steel-light text-white px-4 py-2 rounded-lg inline-flex items-center justify-center transition-colors duration-300"
                  aria-label="Route zu unserem Standort berechnen"
                >
                  Route berechnen
                  <MapPin className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
