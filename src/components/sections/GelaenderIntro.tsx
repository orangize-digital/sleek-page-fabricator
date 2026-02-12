import { useEffect, useRef } from "react";

const GelaenderIntro = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-steel-dark">
            Geländer nach Maß – sicher, langlebig, individuell
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Wir planen und fertigen Geländer für private und gewerbliche
            Bauvorhaben. Jedes Geländer wird individuell auf Maß gefertigt und
            an die baulichen Gegebenheiten angepasst.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-steel-dark">
            Typische Anwendungen:
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-steel-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
              </svg>
              Balkongeländer aus Stahl oder Edelstahl
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-steel-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
              </svg>
              Treppengeländer für Innen- und Außenbereiche
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-steel-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
              </svg>
              Geländer mit Glasfüllung oder senkrechten Füllstäben
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-steel-dark flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L3.293 9.707a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 011.414 0z" />
              </svg>
              Handläufe und Absturzsicherungen
            </li>
          </ul>

          <p className="text-gray-700 text-lg mt-8 leading-relaxed">
            Dabei achten wir auf Sicherheit, Normen und eine saubere
            handwerkliche Ausführung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GelaenderIntro;
