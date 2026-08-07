"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Proyectos
        </h2>
        <p className="text-slate-400 text-sm mt-1">
          Soluciones web y móviles que he desarrollado.
        </p>
      </div>

      <div className="space-y-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start"
          >
            {project.image && (
              <div className="relative w-full md:w-64 h-44 rounded-xl overflow-hidden bg-slate-950/80 border border-slate-800 flex items-center justify-center flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={
                    project.image.includes("fmwhite")
                      ? "object-contain p-6"
                      : "object-cover"
                  }
                />
              </div>
            )}

            <div className="flex-1 flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors"
                      aria-label="Ver proyecto"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}