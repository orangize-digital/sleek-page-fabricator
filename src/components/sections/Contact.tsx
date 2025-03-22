import React, { useEffect, useRef, useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = sectionRef.current?.querySelectorAll(".reveal");
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="reveal">
            <div className="glass-panel p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-steel-dark">
                Unsere Kontaktdaten
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-steel-dark" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-dark mb-1">
                      Adresse
                    </h4>
                    <p className="text-gray-700">
                      Musterstraße 123, 12345 Musterstadt, Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-steel-dark" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-dark mb-1">
                      Telefon
                    </h4>
                    <p className="text-gray-700">
                      <a
                        href="tel:+4912345678900"
                        className="hover:text-steel-dark transition-colors"
                      >
                        +49 (0) 123 456 789 00
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-steel-dark" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-dark mb-1">E-Mail</h4>
                    <p className="text-gray-700">
                      <a
                        href="mailto:info@metallbaumeister-albrecht.de"
                        className="hover:text-steel-dark transition-colors"
                      >
                        info@metallbaumeister-albrecht.de
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-steel-dark" />
                  </div>
                  <div>
                    <h4 className="font-medium text-steel-dark mb-1">
                      Öffnungszeiten
                    </h4>
                    <div className="space-y-1 text-gray-700">
                      <p>Montag - Freitag: 8:00 - 17:00 Uhr</p>
                      <p>Samstag: Nach Vereinbarung</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-medium text-steel-dark mb-4">
                  Folgen Sie uns
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center hover:bg-steel-dark hover:text-white transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-steel-light/10 flex items-center justify-center hover:bg-steel-dark hover:text-white transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8">
            <h3 className="text-2xl font-semibold mb-6 text-steel-dark">
              Senden Sie uns eine Nachricht
            </h3>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto text-green-500 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-xl font-semibold text-steel-dark mb-2">
                  Vielen Dank für Ihre Nachricht!
                </h4>
                <p className="text-gray-700">
                  Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei
                  Ihnen melden.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300"
                >
                  Neue Anfrage
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify Hidden Fields */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Nicht ausfüllen:{" "}
                    <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Ihr Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Ihre E-Mail"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Betreff *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="Anfrage">Anfrage</option>
                      <option value="Beratung">Beratungstermin</option>
                      <option value="Angebot">Angebot</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Ihre Nachricht an uns"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-steel-dark hover:bg-steel-light text-white rounded-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Wird gesendet...
                      </>
                    ) : (
                      <>Nachricht senden</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Map or location image */}
        <div className="mt-16 reveal">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] relative">
            <img
              src="https://images.unsplash.com/photo-1577128786741-3bad97927271?q=80&w=2070"
              alt="Standort Metallbaumeister Albrecht"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-steel-dark/40 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <h3 className="text-xl font-semibold text-steel-dark mb-2">
                  Besuchen Sie uns
                </h3>
                <p className="text-gray-700 mb-4">
                  Wir freuen uns auf Ihren Besuch in unserer Werkstatt und
                  unserem Showroom.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-steel-dark hover:bg-steel-light text-white px-4 py-2 rounded-lg inline-flex items-center justify-center transition-colors duration-300"
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
