import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-slate-800 selection:text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}