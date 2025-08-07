"use client";
import { motion } from "framer-motion";

export default function Download() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full h-[45vh] md:h-[30vh] bg-[#132238] flex flex-col items-center justify-center text-white text-center px-4"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        ¿Querés conocer más sobre mí?
      </h1>

      <a
        href="/cvTomasUlman.pdf"
        download
        className="bg-white text-[#132238] font-semibold px-6 py-3 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
      >
        Descargar CV
      </a>
    </motion.section>
  );
}
