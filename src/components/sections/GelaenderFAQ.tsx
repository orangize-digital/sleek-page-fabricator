import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Was kostet ein Geländer aus Edelstahl?",
    answer:
      "Die Kosten für ein Edelstahlgeländer hängen von Länge, Design und Befestigungsart ab. Ein einfacher Edelstahl-Handlauf beginnt bei ca. 150 €/lfm, Geländer mit Glasfüllung ab ca. 350 €/lfm. Wir erstellen Ihnen gerne ein individuelles Angebot – die Beratung und das Aufmaß vor Ort sind kostenlos.",
  },
  {
    question: "Welche Geländer eignen sich für den Außenbereich?",
    answer:
      "Für Außentreppen und Balkone empfehlen wir feuerverzinkte Stahlgeländer oder Edelstahlgeländer (V2A/V4A). Beide Varianten sind witterungsbeständig und langlebig. Feuerverzinkte Geländer bieten den besten Korrosionsschutz, Edelstahl überzeugt durch eine moderne Optik. Auch pulverbeschichtete Geländer sind eine hervorragende Wahl für den Außenbereich.",
  },
  {
    question: "Fertigen Sie auch Balkongeländer und Treppengeländer an?",
    answer:
      "Ja, wir fertigen alle Arten von Geländern: Balkongeländer, Treppengeländer (innen und außen), Terrassengeländer, Galeriegeländer und Handläufe. Jedes Geländer wird individuell nach Maß in unserer Werkstatt in Bückeburg gefertigt und fachgerecht vor Ort montiert.",
  },
  {
    question: "Brauche ich einen Handlauf für meine Außentreppe?",
    answer:
      "Laut Bauordnung ist ein Handlauf ab drei Stufen Pflicht. Wir fertigen Handläufe aus Edelstahl für Hauseingänge, Gartenzugänge und Außentreppen – passgenau und witterungsbeständig. Auch Nachrüstungen an bestehenden Treppen sind problemlos möglich.",
  },
  {
    question: "In welcher Region sind Sie als Metallbauer tätig?",
    answer:
      "Unser Betrieb befindet sich in Bückeburg (Schaumburg). Wir liefern und montieren im Umkreis von ca. 60 km – unter anderem in Minden, Stadthagen, Rinteln, Hannover, Hameln, Bad Salzuflen, Herford, Bielefeld und der gesamten Region Schaumburg und Minden-Lübbecke.",
  },
  {
    question: "Welche Materialien verwenden Sie für Geländer?",
    answer:
      "Wir verarbeiten Edelstahl (V2A und V4A), Stahl mit Feuerverzinkung, pulverbeschichteten Stahl sowie Aluminium. Glasfüllungen aus Sicherheitsglas (VSG/ESG) setzen wir für moderne, transparente Geländer ein. Als DIN EN 1090-2 EXC2 zertifizierter Betrieb garantieren wir höchste Qualitätsstandards.",
  },
  {
    question: "Wie lange dauert die Fertigung eines Geländers?",
    answer:
      "Von der Beratung bis zur Montage vergehen in der Regel 3–6 Wochen, je nach Komplexität und Auslastung. Nach dem kostenlosen Aufmaß vor Ort erhalten Sie ein detailliertes Angebot. Nach Auftragserteilung beginnen wir zeitnah mit der Fertigung in unserer Werkstatt.",
  },
  {
    question: "Bieten Sie auch Reparaturen an bestehenden Geländern an?",
    answer:
      "Ja, wir reparieren und modernisieren bestehende Geländer, Handläufe und Treppengeländer. Ob lockere Befestigungen, Rostschäden oder ein komplett neues Design – wir finden die passende Lösung. Kontaktieren Sie uns für eine unverbindliche Begutachtung.",
  },
];

const GelaenderFAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        }),
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal") ?? [];
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-steel-dark font-medium mb-2">
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Fragen & Antworten zu Geländern
          </h2>
          <p className="text-gray-700">
            Sie planen ein neues Treppengeländer, Balkongeländer oder einen
            Handlauf? Hier finden Sie Antworten auf die häufigsten Fragen
            unserer Kunden aus Bückeburg und der Region.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-md"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-steel-dark pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-steel-dark flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-gray-600 mb-4">
            Ihre Frage war nicht dabei?
          </p>
          <a
            href="https://form.jotform.com/253192414832354"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-steel-dark hover:bg-steel-light text-white rounded-lg transition-colors duration-300 font-medium shadow-lg"
          >
            Jetzt unverbindlich anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default GelaenderFAQ;
