import React, { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Detlef Hecht",
    rating: 5,
    text: "Kann nur positives sagen, super Handwerker, pünktlich, zuverlässig, hält sich an Absprachen. Kleinere Probleme werden selbstständig und kundenorientiert gelöst.Das alles zu fairen Preisen. Da macht es Spaß wenn der Handwerker kommt.",
  },
  {
    name: "Jule L.",
    rating: 5,
    text: "Für unser Projekt haben wir Herrn Albrecht hinzugezogen. Herr Albrecht ist Pünktlich, hält sich an Absprachen und Preis Leistung passt auch. Gerne wieder",
  },
  {
    name: "Ines Schmidt",
    rating: 5,
    text: "Freundliches und kundenorientiertes Auftreten, kompetente Beratung (und nicht nur das was der Kunde hören will). 1A Handwerker vom Fach. Sehr empfehlenswert.",
  },
  {
    name: "StullenTante",
    rating: 5,
    text: "Bei Herrn Albrecht gibt es ein geht nicht,gibt es nicht! Sein Ideenreichtum und Fachwissen machen seine Projekte zu was ganz besonderem. Sehr empfehlenswert.",
  },
  {
    name: "Ralf Drinkuth",
    rating: 5,
    text: "Herr Albrecht hat uns durch seine Kompetente Beratung, der Umsetzung und der sehr guten Arbeit überzeugt... Wir können Herrn Albrecht weiterempfehlen...",
  },
  {
    name: "Dirk",
    rating: 5,
    text: "Absolute Empfehlung, vom Angebot bis zur Fertigstellung war alles super organisiert und professionel! Kompetenz und Qualität gehen hier Hand in Hand!",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section
      id="testimonials"
      className="section-padding bg-slate-300"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-dark font-medium mb-2">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-700">
            Unsere Kunden sind unsere besten Referenzen. Hier finden Sie einige
            Meinungen zu unserer Arbeit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-500 mb-6" />
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">Verified Google Review</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
