"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="sobre-mi"
      className="relative min-h-screen pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Disponible para proyectos
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hola, soy <span className="text-slate-400">Tomás Ulman</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-300">
            FullStack Developer
          </p>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Desarrollador web enfocado en la creación de interfaces dinámicas,
            escalables y de alto rendimiento. Experiencia en React, Next.js,
            TypeScript y Tailwind CSS, además de conocimientos en C#, C++ y Python.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-900 font-medium hover:bg-white transition-all duration-200 shadow-sm"
            >
              Contactar
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/cvTomasUlman.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 text-slate-200 font-medium hover:bg-slate-800 border border-slate-700/60 transition-all duration-200"
            >
              Descargar CV
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-800/40">
            <Image
              src="/me.jpg"
              alt="Tomás Ulman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}