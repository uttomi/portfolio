"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  Instagram as InstagramIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#132238] text-white w-full py-8 px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <nav className="flex gap-6 overflow-x-auto scrollbar-none text-sm justify-center md:justify-center">
          <Link
            href="#sobre-mi"
            className="hover:underline whitespace-nowrap transition"
          >
            Sobre Mi
          </Link>
          <Link
            href="#tecnologias"
            className="hover:underline whitespace-nowrap transition"
          >
            Tecnologías
          </Link>
          <Link
            href="#experiencias"
            className="hover:underline whitespace-nowrap transition"
          >
            Experiencias
          </Link>
          <Link
            href="#proyectos"
            className="hover:underline whitespace-nowrap transition"
          >
            Proyectos
          </Link>
          <Link
            href="#contacto"
            className="hover:underline whitespace-nowrap transition"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          </div>

          <div className="text-center text-xs md:text-sm">
            © {new Date().getFullYear()} Tomás Ulman. Todos los derechos
            reservados.
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/tomasagustinulman/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="cursor-pointer hover:text-[#A4BCE5] duration-200 hover:scale-110" />
            </a>
            <a
              href="https://github.com/uttomi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon className="cursor-pointer hover:text-[#A4BCE5] duration-200 hover:scale-110" />
            </a>
            <a
              href="https://www.instagram.com/tomiulman"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon className="cursor-pointer hover:text-[#A4BCE5] duration-200 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
