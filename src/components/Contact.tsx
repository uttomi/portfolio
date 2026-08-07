"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, MapPin, Linkedin, MessageCircle, Instagram, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/tomiiulman@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setStatus("Mensaje enviado correctamente. ¡Gracias por contactarte!");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch {
      setStatus("Error de conexión. Inténtalo más tarde.");
    }

    setLoading(false);
  };

  return (
    <section id="contacto" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Contacto
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Hablemos sobre tu próximo proyecto o propuesta laboral.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-4">
            <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Ubicación</p>
              <p className="text-sm font-medium text-white">Santa Fe, Argentina</p>
            </div>
          </div>

          <a
            href="https://www.linkedin.com/in/tomas-ulman/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">LinkedIn</p>
              <p className="text-sm font-medium text-white">/tomasagustinulman</p>
            </div>
          </a>

          <a
            href="https://wa.me/5493496442389"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">WhatsApp</p>
              <p className="text-sm font-medium text-white">+54 9 3496 442389</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/tomiulman"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors"
          >
            <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
              <Instagram className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Instagram</p>
              <p className="text-sm font-medium text-white">@tomiulman</p>
            </div>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <div>
              <label htmlFor="name" className="block text-xs text-slate-400 mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-slate-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-slate-400 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-white text-sm focus:outline-none focus:border-slate-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-900 font-medium hover:bg-white transition-all disabled:opacity-50 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensaje
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-xs text-slate-300 font-medium text-center sm:text-left">
              {status}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}