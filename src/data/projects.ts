export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "fly-manager",
    title: "Fly Manager",
    subtitle: "Sistema de Gestión Aeroportuaria",
    description:
      "Plataforma integral para aeródromos. Incluye gestión de clientes, socios, alumnos y proveedores. Integra facturación electrónica vía API ARCA, módulo contable con cuenta corriente y procesamiento automático de facturas/tickets mediante IA. Generación y exportación de reportes y comprobantes en PDF y Excel, junto con gestión avanzada de roles y permisos.",
    image: "/iconFMWHITE.svg",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "ARCA API",
      "AI OCR",
    ],
    link: "https://www.linkedin.com/posts/tomas-ulman_hace-mucho-no-publico-por-ac%C3%A1-hoy-vuelvo-activity-7462629849300410368-2EPb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXkflUB1KLK1BlkvbtS8HDrTkf6MC6qCqI",
  },
  {
    id: "alulm-fe-v2",
    title: "ALULM-FE v2",
    subtitle: "Sistema Móvil de Presupuestos",
    description:
      "Evolución del sistema de cotizaciones. Permite la generación, almacenamiento y edición de presupuestos para compartir con clientes. Diseñado con un enfoque 'Mobile First' para facilitar el uso desde dispositivos móviles en campo.",
    image: "/imgAlFe.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Mobile First"],
  },
  {
    id: "alulm-fe",
    title: "ALULM-FE v1",
    subtitle: "Sistema de Cotización",
    description:
      "Herramienta desktop para optimizar el proceso de cotización. Permite cargar productos, generar presupuestos personalizados, guardarlos e imprimirlos.",
    image: "/imgAlFe.png",
    tags: ["C#", "HTML5", "CSS3", "JavaScript"],
    link: "https://www.linkedin.com/posts/tomasagustinulman_nuevo-proyecto-publicado-sistema-de-presupuestos-activity-7315814299656945665-OuC1",
  },
  {
    id: "safestock",
    title: "SafeStock",
    subtitle: "Gestión de Inventarios",
    description:
      "Aplicación web desarrollada durante el bootcamp de Soy Henry para la gestión de inventario en PyMEs, control de stock y alertas de reposición.",
    image: "/imgSafeStock.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "https://www.linkedin.com/posts/tomasagustinulman_proyecto-final-durante-el-desaf%C3%ADo-grupal-activity-7336136787758583812-uJPA",
  },
];