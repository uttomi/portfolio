"use client";
import { Icon } from "@iconify/react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

const icons = [
  "logos:html-5",
  "logos:css-3",
  "logos:javascript",
  "logos:typescript-icon",
  "logos:python",
  "logos:react",
  "logos:nextjs-icon",
  "logos:tailwindcss",
  "logos:bootstrap",
  "logos:figma",
];

export default function Tecnologias() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 0.5 
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 text-center" id="tecnologias">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#132238] mb-12 md:mb-16">
          Tecnologías
          <span className="block w-16 h-1 bg-[#A4BCE5] mx-auto mt-4"></span>
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-10"
        >
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group flex flex-col items-center"
            >
              <div className="p-4 md:p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group-hover:bg-white">
                <Icon 
                  icon={icon} 
                  width="56" 
                  height="56" 
                  className="text-gray-700 group-hover:text-current transition-colors duration-300" 
                />
              </div>
              <span className="mt-3 text-sm font-medium text-gray-500 capitalize">
                {icon.split(':')[1].replace('-icon', '').replace('-', ' ')}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}