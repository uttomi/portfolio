export interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
  url: string;
  tasks: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Finket",
    role: "Full Stack Developer",
    period: "Oct. 2025 - Presente",
    logo: "/finket.jpg",
    url: "#",
    tasks: [
      "Desarrollo y mantenimiento de funcionalidades en el backend.",
      "Análisis de requerimientos junto al equipo de análisis funcional para la toma de decisiones técnicas.",
      "Gestión, modelado y optimización de bases de datos relacionales con MySQL.",
      "Configuraciones y soporte básico de servicios en infraestructura Cloud (AWS).",
      "Participación activa en ceremonias ágiles (Scrum): Dailies, Plannings y Reviews.",
    ],
  },
  {
    company: "Uplin",
    role: "Frontend Developer & UX Designer (Pasantía)",
    period: "2025 (3 meses)",
    logo: "/logoUplin.svg",
    url: "https://uplinhr.com/",
    tasks: [
      "Diseño de experiencia de usuario (UX) junto al equipo.",
      "Desarrollo web con TypeScript, React.js, Tailwind CSS y Next.js.",
      "Configuración del entorno de deploy y mantenimiento del sitio.",
      "Coordinación entre los equipos de datos y frontend.",
    ],
  },
];