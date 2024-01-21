import AboutMe from "@/components/AboutMe";
import Introduction from "@/components/Introduction";
import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
    <main className="w-screen">
      <section className={`w-full h-[80vh] bg-[url(/HeaderBG.jpg)] bg-cover bg-fixed bg-no-repeat`}>
        <ParticlesBg></ParticlesBg>
        <Introduction></Introduction>
      </section>

      <AboutMe />
    </main>
  );
}