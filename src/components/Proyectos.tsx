'use client';
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Proyectos() {
  const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 text-center" id="proyectos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#132238] mb-12 md:mb-16">
          Mis Proyectos
          <span className="block w-16 h-1 bg-[#A4BCE5] mx-auto mt-4"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
         
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="w-full max-w-sm bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <div className="w-full">
              <Image
                src="/imgAlFe.png"
                alt="ALULIM-FE Project"
                width={600}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-[#132238]">ALULM-FE</h3>
              <p className="font-semibold text-[#1A325B] mt-1 mb-3">
                Sistema AlulmFe
              </p>
              <p className="text-[#1A325B] mb-4 text-sm leading-relaxed">
                Desarrollé esta herramienta para optimizar el proceso de
                cotización. Permite cargar productos, generar presupuestos
                personalizados, guardarlos e imprimirlos, todo desde una
                interfaz sencilla y funcional. Fue desarrollada utilizando C# y
                HTML5.
              </p>
              <div className="border-t border-gray-200 my-3"></div>
              <motion.a
                href="https://www.linkedin.com/posts/tomasagustinulman_nuevo-proyecto-publicado-sistema-de-presupuestos-activity-7315814299656945665-OuC1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block text-[#1A325B] font-semibold hover:text-[#132238] transition-colors"
                target="_blank"
              >
                Ver proyecto →
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="w-full max-w-sm bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <div className="w-full">
              <Image
                src="/imgSafeStock.png"
                alt="SafeStock Project"
                width={600}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-lg font-bold text-[#132238]">SafeStock</h3>
              <p className="font-semibold text-[#1A325B] mt-1 mb-3">
                Gestión de inventarios
              </p>
              <p className="text-[#1A325B] mb-4 text-sm leading-relaxed">
                SafeStock es una aplicación web desarrollada durante el proyecto
                final del bootcamp de Soy Henry. Su propósito es facilitar la
                gestión de inventario para pequeñas y medianas empresas,
                permitiendo el control de productos, movimientos y alertas por
                bajo stock.
              </p>
              <div className="border-t border-gray-200 my-3"></div>
              <motion.a
                href="https://www.linkedin.com/posts/tomasagustinulman_proyecto-final-durante-el-desaf%C3%ADo-grupal-activity-7336136787758583812-uJPA"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block text-[#1A325B] font-semibold hover:text-[#132238] transition-colors"
                target="_blank"
              >
                Ver proyecto →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
