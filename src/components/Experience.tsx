"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experiencias" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Experiencia Laboral
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Trayectoria profesional y proyectos en los que he colaborado.
        </p>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 p-2 flex-shrink-0 flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </a>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-slate-400">{exp.role}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-slate-800/60 px-3 py-1 rounded-full w-fit">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              {exp.tasks.map((task, i) => (
                <li key={i} className="leading-relaxed">
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}