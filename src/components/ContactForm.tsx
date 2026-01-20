import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  street: string;
  postalCode: string;
  city: string;
  serviceType: string;
  message: string;
  datenschutz: boolean;
}

const serviceOptions = [
  { value: "", label: "Bitte wählen Sie einen Service" },
  { value: "Geländer", label: "Geländer" },
  { value: "Treppen", label: "Treppen" },
  { value: "Tore", label: "Tore & Zäune" },
  { value: "Edelstahl", label: "Edelstahlarbeiten" },
  { value: "Schweißarbeiten", label: "Schweißarbeiten" },
  { value: "Metallgestaltung", label: "Metallgestaltung" },
  { value: "Blecharbeiten", label: "Blecharbeiten" },
  { value: "Reparatur", label: "Reparaturen" },
  { value: "Sonstiges", label: "Sonstiges" },
];

const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    postalCode: "",
    city: "",
    serviceType: "",
    message: "",
    datenschutz: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getServiceLabel = (value: string) => {
    const option = serviceOptions.find((opt) => opt.value === value);
    return option?.label || "Nicht angegeben";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const subject = `Anfrage: ${getServiceLabel(form.serviceType)} - ${form.firstName} ${form.lastName}`;

    const htmlBody = `
      <h2>Neue Kontaktanfrage von Metallbaumeister Albrecht Website</h2>
      <p><strong>Name:</strong> ${form.firstName} ${form.lastName}</p>
      <p><strong>E-Mail:</strong> ${form.email}</p>
      <p><strong>Telefon:</strong> ${form.phone || "Nicht angegeben"}</p>
      <p><strong>Adresse:</strong> ${form.street || "Nicht angegeben"}, ${form.postalCode} ${form.city}</p>
      <p><strong>Serviceart:</strong> ${getServiceLabel(form.serviceType)}</p>
      <h3>Nachricht:</h3>
      <p>${form.message || "Keine Nachricht angegeben"}</p>
    `;

    const textBody = `
Neue Kontaktanfrage von Metallbaumeister Albrecht Website

Name: ${form.firstName} ${form.lastName}
E-Mail: ${form.email}
Telefon: ${form.phone || "Nicht angegeben"}
Adresse: ${form.street || "Nicht angegeben"}, ${form.postalCode} ${form.city}
Serviceart: ${getServiceLabel(form.serviceType)}

Nachricht:
${form.message || "Keine Nachricht angegeben"}
    `.trim();

    try {
      const response = await fetch("https://joshevski.com/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Form-Key": "pk_OPJHN966FFhxS2MvLiAdlQ",
        },
        body: JSON.stringify({
          to: ["hafen@metallbaumeister-albrecht.de"],
          subject: subject,
          html: htmlBody,
          text: textBody,
        }),
      });

      if (!response.ok) {
        throw new Error("Email service error");
      }

      setSubmitStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        postalCode: "",
        city: "",
        serviceType: "",
        message: "",
        datenschutz: false,
      });

      // Redirect to thank you page after short delay
      setTimeout(() => {
        window.location.href = "/danke";
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-panel p-8">
      <h3 className="text-2xl font-semibold mb-6 text-steel-dark">
        Kontaktformular
      </h3>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei
          Ihnen melden.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie
          es erneut oder kontaktieren Sie uns direkt per Telefon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-steel-dark mb-2"
            >
              Vorname *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Ihr Vorname"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-steel-dark mb-2"
            >
              Nachname *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Ihr Nachname"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-steel-dark mb-2"
          >
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
            placeholder="ihre.email@beispiel.de"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-steel-dark mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
            placeholder="+49 123 456 789"
          />
        </div>

        <div>
          <label
            htmlFor="street"
            className="block text-sm font-medium text-steel-dark mb-2"
          >
            Straße und Hausnummer
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={form.street}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
            placeholder="Musterstraße 123"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-steel-dark mb-2"
            >
              Postleitzahl
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="12345"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-steel-dark mb-2"
            >
              Stadt
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Musterstadt"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-medium text-steel-dark mb-2"
          >
            Serviceart
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900"
          >
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-steel-dark mb-2"
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-steel-dark focus:border-transparent bg-white text-gray-900 placeholder-gray-500 resize-none"
            placeholder="Beschreiben Sie Ihr Projekt..."
          />
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            id="datenschutz"
            name="datenschutz"
            checked={form.datenschutz}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-steel-dark focus:ring-steel-dark border-gray-300 rounded"
          />
          <label
            htmlFor="datenschutz"
            className="ml-3 text-sm text-gray-700"
          >
            Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
            <Link
              to="/datenschutz"
              target="_blank"
              className="text-steel-dark hover:text-steel-light underline"
            >
              Datenschutzerklärung
            </Link>{" "}
            zu. *
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-steel-dark text-white py-4 rounded-lg font-semibold hover:bg-steel-light transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Anfrage senden
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
