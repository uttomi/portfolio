"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#experiencias", label: "Experiencias" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!isOpen) {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#132238] px-6 py-4 flex items-center justify-between z-50"
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={30} color="white" className="cursor-pointer text-white"/>
        </button>
      </div>

      <div className="flex-shrink-0">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
      </div>

      <div className="hidden md:flex space-x-8 font-poppins text-white text-lg">
        {navLinks.map(({ href, label }) => (
          <motion.a
            key={href}
            href={href}
            whileHover={{ scale: 1.1, color: "#A4BCE5" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            {label}
          </motion.a>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-[80%] bg-[#132238] p-6 z-50 flex flex-col space-y-6 font-poppins text-white text-xl"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-semibold text-lg">Menú</span>
              <button onClick={() => setIsOpen(false)} className="cursor-pointer">
                <X size={28} color="white" className="cursor-pointer text-white" />
              </button>
            </div>

            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#A4BCE5] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
