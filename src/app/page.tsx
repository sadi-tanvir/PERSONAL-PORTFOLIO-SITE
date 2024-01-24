import AboutMe from "@/components/Home-components/AboutMe";
import Contact from "@/components/Home-components/Contact/Contact";
import Introduction from "@/components/Home-components/Introduction";
import ParticlesBg from "@/components/Home-components/ParticlesBg";
import Projects from "@/components/Home-components/Projects/Projects";
import Skills from "@/components/Home-components/skils/Skills";

export default function Home() {
  return (
    <main className="w-screen">
      <section className={`w-full h-[80vh] bg-[url(/HeaderBG.jpg)] bg-cover bg-fixed bg-no-repeat`}>
        <ParticlesBg></ParticlesBg>
        <Introduction></Introduction>
      </section>

      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  );
}