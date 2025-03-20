
import React, { useState, useEffect } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Startseite', href: '#home' },
    { name: 'Über uns', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Prozess', href: '#process' },
    { name: 'Referenzen', href: '#testimonials' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-steel-dark">Metallbaumeister Albrecht</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-steel-DEFAULT transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-steel-DEFAULT after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Mobile Navigation Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground/80 hover:text-steel-DEFAULT transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container h-full flex flex-col pt-24 px-4">
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-foreground hover:text-steel-DEFAULT transition-colors duration-200 border-b border-muted pb-2"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 bg-steel-DEFAULT text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default Header;
