import React, { useState, useEffect } from "react";
import { ArrowUp, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
            });
            // Close mobile menu if open
            setIsOpen(false);
          }
        }
      });
    });

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

      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        // Cast the Element to HTMLElement to access offsetTop and offsetHeight
        const htmlSection = section as HTMLElement;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { name: "Über uns", href: "#about" },
    { name: "Leistungen", href: "#services" },
    { name: "Materialwahl", href: "#materials" },
    { name: "Projekte", href: "#projects" },
    { name: "Prozess", href: "#process" },
    { name: "Referenzen", href: "#testimonials" },
    { name: "Kontakt", href: "#contact" },
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
            <a
              href="#home"
              className={cn(
                "flex items-center space-x-2 text-xl font-bold transition-colors duration-300",
                scrolled ? "text-steel-dark" : "text-white"
              )}
            >
              Metallbaumeister Albrecht
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 relative",
                    scrolled
                      ? activeSection === item.href.substring(1)
                        ? "text-steel-dark font-semibold"
                        : "text-steel-dark/80 hover:text-steel-dark"
                      : activeSection === item.href.substring(1)
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  )}
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
                className={cn(
                  "text-lg font-medium py-2 px-4 rounded-md transition-colors duration-200 border-b border-muted",
                  activeSection === item.href.substring(1)
                    ? "bg-steel-DEFAULT/10 text-steel-DEFAULT"
                    : "text-foreground hover:bg-steel-DEFAULT/10 hover:text-steel-DEFAULT"
                )}
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
          "fixed bottom-6 right-6 bg-steel-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-20",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default Header;
