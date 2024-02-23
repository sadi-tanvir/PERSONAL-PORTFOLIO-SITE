'use client'
import Footer from "@/components/Footer/Footer";
import AboutMe from "@/components/Home-components/AboutMe";
import Contact from "@/components/Home-components/Contact/Contact";
import IntroductionLayout from "@/components/Home-components/Introduction/IntroductionLayout";
import PortfolioLayout from "@/components/Home-components/Portfolio/PortfolioLayout";
import SkillsLayout from "@/components/Home-components/skils/SkillsLayout";
import Progressbar from "@/components/Progressbar/Progressbar";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  return (
    <main ref={mainRef} className="w-screen">
      <Progressbar target={mainRef}></Progressbar>
      <IntroductionLayout></IntroductionLayout>
      <AboutMe></AboutMe>
      <SkillsLayout></SkillsLayout>
      <PortfolioLayout></PortfolioLayout>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}