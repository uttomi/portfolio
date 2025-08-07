"use client";

import { motion } from "framer-motion";

export default function Splash() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center" style={{ backgroundColor: "#132238" }}>
      <motion.h1
        className="text-6xl text-white font-[--font-baumans] mb-4 md:text-[120px]"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Tomás Ulman
      </motion.h1>
      <motion.h2
        className="text-3xl text-white font-[--font-baumans] md:text-[60px]"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
      >
        Frontend Developer
      </motion.h2>
    </div>
  );
}
