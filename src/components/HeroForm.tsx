import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const serviceOptions = [
  { value: "", label: "Service wählen" },
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

interface HeroFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  datenschutz: boolean;
}

const HeroForm = () => {
  const [form, setForm] = useState<HeroFormData>({
    name: "",
    email: "",
    phone: "",
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

    const subject = `Schnellanfrage: ${getServiceLabel(form.serviceType)} - ${form.name}`;

    const htmlBody = `
      <h2>Neue Schnellanfrage von Metallbaumeister Albrecht Website</h2>
      <p><strong>Name:</strong> ${form.name}</p>
      <p><strong>E-Mail:</strong> ${form.email}</p>
      <p><strong>Telefon:</strong> ${form.phone || "Nicht angegeben"}</p>
      <p><strong>Serviceart:</strong> ${getServiceLabel(form.serviceType)}</p>
      <h3>Nachricht:</h3>
      <p>${form.message || "Keine Nachricht angegeben"}</p>
    `;

    const textBody = `
Neue Schnellanfrage von Metallbaumeister Albrecht Website

Name: ${form.name}
E-Mail: ${form.email}
Telefon: ${form.phone || "Nicht angegeben"}
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
          subject,
          html: htmlBody,
          text: textBody,
        }),
      });

      if (!response.ok) throw new Error("Email service error");

      setSubmitStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
        datenschutz: false,
      });

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
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">Schnellanfrage</h3>

      {submitStatus === "success" && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-100 text-sm">
          Vielen Dank! Wir melden uns schnellstmöglich.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-400/30 rounded-lg text-red-100 text-sm">
          Fehler beim Senden. Bitte versuchen Sie es erneut.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Ihr Name *"
          className="w-full px-4 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-steel-light focus:border-transparent text-sm"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="E-Mail *"
            className="w-full px-4 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-steel-light focus:border-transparent text-sm"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Telefon"
            className="w-full px-4 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-steel-light focus:border-transparent text-sm"
          />
        </div>

        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white focus:outline-none focus:ring-2 focus:ring-steel-light focus:border-transparent text-sm [&>option]:text-gray-900"
        >
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={2}
          placeholder="Beschreiben Sie kurz Ihr Projekt..."
          className="w-full px-4 py-2.5 rounded-lg bg-white/15 border border-white/25 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-steel-light focus:border-transparent text-sm resize-none"
        />

        <div className="flex items-start">
          <input
            type="checkbox"
            id="hero-datenschutz"
            name="datenschutz"
            checked={form.datenschutz}
            onChange={handleChange}
            required
            className="mt-0.5 h-4 w-4 rounded border-white/25"
          />
          <label htmlFor="hero-datenschutz" className="ml-2 text-xs text-white/80">
            Ich stimme der{" "}
            <Link to="/datenschutz" target="_blank" className="underline hover:text-white">
              Datenschutzerklärung
            </Link>{" "}
            zu. *
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-steel-dark hover:bg-steel-light text-white py-3 rounded-lg font-semibold text-sm transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Anfrage senden
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
