import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Process } from "@/components/Process";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <Process />
      <Timeline />
      <Contact />
    </>
  );
}
