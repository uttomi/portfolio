import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tomás Ulman | Frontend Developer",
  description:
    "Portfolio profesional de Tomás Ulman. Desarrollador Web especializado en React, Next.js, TypeScript y Tailwind CSS.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Tomás Ulman | Frontend Developer",
    description:
      "Desarrollador Web especializado en React, Next.js, TypeScript y Tailwind CSS.",
    url: "https://tomasulman.dev",
    siteName: "Tomás Ulman Portfolio",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-slate-950 text-slate-100 antialiased selection:bg-slate-800 selection:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}