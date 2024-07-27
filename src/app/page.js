import Image from "next/image";
import Hero from "../components/hero/hero.jsx";
import About from "@/components/about/about.jsx";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <AnimatedCursor />
    </>
  );
}
