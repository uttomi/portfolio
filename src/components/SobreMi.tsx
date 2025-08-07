import Image from "next/image";
import { motion } from "framer-motion";

export default function SobreMi() {
  return (
    <section className="w-full bg-[#132238] text-white mt-4 px-6 py-12 md:px-12 lg:px-24 xl:px-32 md:min-h-screen flex items-center">
      <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1.5fr] gap-6 md:gap-16 w-full max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:hidden flex flex-col items-center mb-8 space-y-6"
        >
          <div className="flex flex-col items-center space-y-2 text-center">
            <p className="text-xl font-poppins text-[#A4BCE5]">
              Hola, mi nombre es
            </p>
            <h1 className="text-4xl mclaren leading-tight font-bold">
              Tomás Ulman
            </h1>
            <p className="text-xl font-poppins text-[#A4BCE5]">
              Frontend Developer
            </p>
          </div>

          <div className="w-48 h-60 relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/me.jpg"
              alt="Foto de Tomás Ulman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-col items-center md:items-end text-center md:text-right space-y-4"
        >
          <p className="text-xl md:text-2xl font-poppins text-[#A4BCE5]">
            Hola, mi nombre es
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mclaren leading-tight font-bold">
            Tomás <br /> Ulman
          </h1>
          <p className="text-xl md:text-2xl font-poppins text-[#A4BCE5]">
            Frontend Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex justify-center my-8 md:my-0 h-[26rem]"
        >
          <div className="rounded-3xl overflow-hidden w-64 h-full md:w-72 relative shadow-xl">
            <Image
              src="/me.jpg"
              alt="Foto de Tomás Ulman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center md:justify-start md:items-center"
        >
          <div className="bg-[#1a2a42] p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-[#A4BCE5] w-full max-w-md md:max-w-full">
            <p className="text-lg md:text-xl font-poppins leading-relaxed text-center md:text-left break-words">
              Desarrollador web con experiencia en HTML5, CSS3, JavaScript,
              TypeScript y React. Con conocimientos en C++, C# y Python.
              Especializado en la creación de interfaces web, implementación de
              funcionalidades dinámicas y estructuración de código limpio y
              escalable. Manejo control de versiones con Git, metodologías
              ágiles y buenas prácticas de desarrollo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
