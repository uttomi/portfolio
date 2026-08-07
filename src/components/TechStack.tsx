"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const TECHS = [
  { name: "HTML5", icon: "logos:html-5" },
  { name: "CSS3", icon: "logos:css-3" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "skill-icons:expressjs-dark" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "Python", icon: "logos:python" },
  { name: "Bootstrap", icon: "logos:bootstrap" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Git", icon: "logos:git-icon" },
];

export default function TechStack() {
  return (
    <section id="tecnologias" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Tecnologías
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Herramientas, lenguajes y bases de datos que utilizo.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {TECHS.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors duration-200"
          >
            <Icon icon={tech.icon} className="w-7 h-7 flex-shrink-0" />
            <span className="text-sm font-medium text-slate-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}