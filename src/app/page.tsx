import Footer from "@/components/Footer/Footer";
import AboutMe from "@/components/Home-components/AboutMe";
import Contact from "@/components/Home-components/Contact/Contact";
import IntroductionLayout from "@/components/Home-components/Introduction/IntroductionLayout";
import PortfolioLayout from "@/components/Home-components/Portfolio/PortfolioLayout";
import SkillsLayout from "@/components/Home-components/skils/SkillsLayout";

export default function Home() {
  return (
    <main className="w-screen">
      <IntroductionLayout></IntroductionLayout>
      <AboutMe></AboutMe>
      <SkillsLayout></SkillsLayout>
      <PortfolioLayout></PortfolioLayout>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}