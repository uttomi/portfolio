import type { Metadata } from "next";
import { McLaren, Poppins, Baumans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout"; 

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const mclaren = McLaren({
  variable: "--font-mclaren",
  subsets: ["latin"],
  weight: "400",
});
const baumans = Baumans({
  variable: "--font-baumans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tomás Ulman",
  description: "Portfolio de Tomás Ulman - Desarrollador Web y de Aplicaciones",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${mclaren.variable} ${baumans.variable} antialiased`}
      >
        
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
