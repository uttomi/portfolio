'use client'
import { motion } from "framer-motion";
import Image from "next/image";
export default function Experiencias() {
  const experiences = [
    {
      logo: "/logoUplin.svg",
      company: "Uplin",
      url: "https://uplinhr.com/",
      description: [
        "• Diseño de experiencia de usuario (UX) junto al equipo.",
        "• Desarrollo web con TypeScript, React.js, Tailwind CSS y Next.js.",
        "• Configuración del entorno de deploy y mantenimiento del sitio.",
        "• Coordinación entre los equipos de datos y frontend.",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-[poppins]" id="experiencias">
      <div className="max-w-5xl mx-auto px-4 hover:">
        <h2 className="text-3xl md:text-4xl font-bold text-[#132238] text-center mb-14">
          Experiencias
          <span className="block w-16 h-1 bg-[#A4BCE5] mx-auto mt-4" />
        </h2>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-start gap-6">
                <a href={exp.url} target="_blank" rel="noopener noreferrer">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border border-[#A4BCE5] bg-[#a4bce528] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative w-8 h-8">
                      <Image
                        src={exp.logo}
                        alt={`Logo ${exp.company}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </a>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#132238] mb-4">
                    {exp.company}
                  </h3>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        whileHover={{ x: 5 }}
                        className="text-[#1A325B] text-sm md:text-base leading-relaxed"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
