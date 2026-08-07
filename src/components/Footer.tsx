import Image from "next/image";
import { Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 py-8 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} />
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Tomás Ulman. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://www.linkedin.com/in/tomas-ulman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/uttomi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/tomiulman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}