import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Contacto = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

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
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("Mensaje enviado correctamente. ¡Gracias por contactarte!");
      } else {
        setStatus("Error al enviar el mensaje. Por favor, inténtalo de nuevo.");
      }
    } catch {
      setStatus(
        "Error de conexión. Revisa tu internet e intenta más tarde."
      );
    }

    setLoading(false);
  };

  return (
    <section className="w-full bg-white py-16 font-[poppins]" id="contacto">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#132238] text-center mb-10">
          Contacto
          <span className="block w-12 h-1 bg-[#A4BCE5] mx-auto mt-3" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-8">
            <motion.div
              className="flex items-center gap-3 p-4 rounded-lg border border-[#A4BCE5] bg-[#a4bce528] shadow-sm hover:shadow-md transition-all"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 rounded-full bg-[#132238] text-white">
                <Icon icon="mdi:map-marker" width={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#132238]">
                  Ubicación
                </h3>
                <p className="text-xs text-gray-600">Santa Fe, Argentina</p>
              </div>
            </motion.div>

            <motion.a
              href="https://www.linkedin.com/in/tomasagustinulman/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-[#A4BCE5] bg-[#a4bce528] shadow-sm hover:shadow-md transition-all"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="p-2 rounded-full bg-[#132238] text-white">
                <Icon icon="mdi:linkedin" width={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#132238]">
                  LinkedIn
                </h3>
                <p className="text-xs text-gray-600">/tomasagustinulman</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/5493496442389"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-[#A4BCE5] bg-[#a4bce528] shadow-sm hover:shadow-md transition-all"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="p-2 rounded-full bg-[#132238] text-white">
                <Icon icon="mdi:whatsapp" width={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#132238]">
                  WhatsApp
                </h3>
                <p className="text-xs text-gray-600">+54 9 3496 442389</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/tomiulman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-[#A4BCE5] bg-[#a4bce528] shadow-sm hover:shadow-md transition-all"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="p-2 rounded-full bg-[#132238] text-white">
                <Icon icon="mdi:instagram" width={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-[#132238]">
                  Instagram
                </h3>
                <p className="text-xs text-gray-600">@tomiulman</p>
              </div>
            </motion.a>
          </div>

          <motion.div
            className="bg-[#f8fafc] p-6 rounded-lg border border-[#A4BCE5]"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-[#132238] mb-4">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Gracias por contactarte conmigo. Te responderé pronto."
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-1.5 text-sm border border-[#A4BCE5] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A4BCE5]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-1.5 text-sm border border-[#A4BCE5] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A4BCE5]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-700 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-3 py-1.5 text-sm border border-[#A4BCE5] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#A4BCE5]"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                className={`bg-[#132238] hover:bg-[#1a2d4a] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors w-44 flex items-center justify-center gap-2 mx-auto md:mx-0 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </motion.button>
            </form>

            {status && (
              <p className="mt-4 text-center text-sm text-[#132238] font-medium">
                {status}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
