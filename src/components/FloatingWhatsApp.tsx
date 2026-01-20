import WhatsAppIcon from "./icons/WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/491713310241"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Kontakt via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsApp;
