import SobreMi from "@/components/SobreMi";
import Tecnologias from "@/components/Tecnologias";
import Experiencias from "@/components/Experiencias";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Download from "@/components/Download";
export default function Portfolio() {
  return (
    <>
     <SobreMi/>
     <Download/>
     <Tecnologias/>
     <Experiencias/>
     <Proyectos/>
     <Contacto/>
    </>
  );
}
