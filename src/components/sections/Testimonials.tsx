
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Schneider',
    position: 'Architekt',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149',
    quote: 'Die Zusammenarbeit mit Metallbaumeister Albrecht war hervorragend. Die maßgefertigte Stahltreppe, die sie für unser Architekturbüro angefertigt haben, ist ein echtes Highlight und erfüllt alle unsere spezifischen Anforderungen.',
    rating: 5
  },
  {
    name: 'Laura Meyer',
    position: 'Hausbesitzerin',
    avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=2089',
    quote: 'Wir sind begeistert von unserem neuen Eingangstor. Die Beratung war kompetent, die Umsetzung präzise und die Montage einwandfrei. Ein Unternehmen, das sein Handwerk versteht und Kundenwünsche ernst nimmt.',
    rating: 5
  },
  {
    name: 'Thomas Berger',
    position: 'Geschäftsführer, Berger Industrie GmbH',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
    quote: 'Die Stahlkonstruktion für unsere neue Produktionshalle wurde termingerecht und in höchster Qualität geliefert. Herr Albrecht und sein Team haben alle Herausforderungen professionell gemeistert. Klare Empfehlung!',
    rating: 5
  },
  {
    name: 'Sabine Wagner',
    position: 'Innenarchitektin',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070',
    quote: 'Die Metallgestaltungselemente von Metallbaumeister Albrecht sind ein Blickfang in jedem meiner Projekte. Die Handwerkskunst und Liebe zum Detail sind beeindruckend und heben sich deutlich vom Standardangebot ab.',
    rating: 4
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-steel-DEFAULT" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-white font-medium mb-2">Kundenstimmen</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Was unsere Kunden sagen
          </h2>
          <p className="text-white/80">
            Unsere Kunden sind unsere besten Referenzen. Hier finden Sie einige Meinungen zu unserer Arbeit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 gap-12 reveal">
            <div className="glass-panel bg-white/90 p-8 md:p-12 relative">
              {/* Large quotation mark */}
              <div className="absolute -top-6 -left-6 text-7xl text-steel-DEFAULT opacity-30 font-serif">"</div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-steel-light/30">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 italic mb-6 text-lg">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold text-steel-dark">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </div>
              
              {/* Testimonial navigation */}
              <div className="flex justify-between mt-8">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-steel-DEFAULT' : 'bg-gray-300'
                      }`}
                      aria-label={`Gehe zu Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Vorheriges Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-steel-dark" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Nächstes Testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-steel-dark" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
