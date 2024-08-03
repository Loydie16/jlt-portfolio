'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Hero from "../components/hero/hero.jsx";
import About from "../components/about/about.jsx";
import Techstack from "../components/techstack/techstack.jsx";
import TechStackMobile from "../components/techstack/techstack-mobile.jsx";
import Projects from "../components/projects/projects.jsx";
import ProjectsMobile from "../components/projects/projects-mobile.jsx";
import Footer from "@/components/footer/footer.jsx";
import AnimatedCursor from "react-animated-cursor";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/preloader/preloader.jsx";

export default function App() {

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     (async () => {
       /* const LocomotiveScroll = (await import("locomotive-scroll")).default;

       const locomotiveScroll = new LocomotiveScroll(); */

       setTimeout(() => {
         setIsLoading(false);

         document.body.style.cursor = "default";

         window.scrollTo(0, 0);
       }, 3000);
     })();
   }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <About />
      <Projects />
      <ProjectsMobile />
      <Techstack />
      <TechStackMobile />
      <Footer />
      <AnimatedCursor />
    </>
  );
}
