import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Was kostet ein Geländer aus Edelstahl?",
    answer:
      "Die Kosten für ein Edelstahlgeländer hängen von Länge, Ausführung, Oberfläche und Montageaufwand ab. Nach einem Aufmaß vor Ort erstellen wir ein individuelles, transparentes Angebot. Pauschalpreise sind bei Maßanfertigungen nicht seriös.",
  },
  {
    question: "Welche Geländer eignen sich für den Außenbereich?",
    answer:
      "Für den Außenbereich eignen sich besonders feuerverzinkte Stahlgeländer sowie Edelstahlgeländer. Beide Varianten sind witterungsbeständig und langlebig. Die Auswahl richtet sich nach Einsatzort, Optik und Budget.",
  },
  {
    question: "Fertigen Sie auch Balkon- und Treppengeländer an?",
    answer:
      "Ja. Wir fertigen Balkon-, Terrassen- und Treppengeländer für Innen- und Außenbereiche – jeweils individuell nach Maß und den geltenden Vorschriften.",
  },
  {
    question: "Brauche ich einen Handlauf für meine Außentreppe?",
    answer:
      "In vielen Fällen ja. Ab bestimmten Höhen und Stufenanzahlen sind Handläufe vorgeschrieben. Wir prüfen die Situation vor Ort und beraten Sie normgerecht.",
  },
  {
    question: "In welcher Region sind Sie tätig?",
    answer:
      "Unser Betrieb sitzt in Bückeburg. Wir arbeiten im Umkreis von ca. 60 km, unter anderem in Minden, Stadthagen, Rinteln und im gesamten Landkreis Schaumburg, auf Wunsch auch weiter.",
  },
  {
    question: "Welche Materialien verwenden Sie für Geländer?",
    answer:
      "Wir verarbeiten Stahl (z.\u00a0B. S235JR), Edelstahl (1.4301 / 1.4571) sowie Glasfüllungen und Trespa Platten (HPL). Die Materialwahl erfolgt immer passend zum Einsatzbereich.",
  },
  {
    question: "Wie lange dauert die Fertigung eines Geländers?",
    answer:
      "Je nach Umfang und Ausführung beträgt die Fertigungszeit in der Regel mehrere Wochen. Nach Planung und Freigabe erhalten Sie einen verbindlichen Zeitrahmen.",
  },
  {
    question: "Bieten Sie auch Reparaturen an bestehenden Geländern an?",
    answer:
      "Ja. Wir prüfen bestehende Geländer auf Sicherheit und Zustand und führen Reparaturen oder Anpassungen fachgerecht aus.",
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
