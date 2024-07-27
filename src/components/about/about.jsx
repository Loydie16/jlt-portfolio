'use client';
import Character from './character';
import { useState } from "react";
import useMousePosition from "../../app/utils/useMousePosition";
import { motion } from "framer-motion";


const paragraph = "Graduate of Computer Engineering adaw awd "
const paragraph1 = "from Colegio De Muntinlupa school at sucat"

export default function About() {

  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 0;

  return (
    <section className="flex-col about-section flex items-center p-4 md:p-10 justify-center bg-[#edede5] font-nunito_sans ">
      <p className="font-extrabold text-xl tracking-[4px] text-start w-full mb-4">
        <span className="text-[#ec4e39]">ABOUT</span> ME
      </p>
      <motion.div
        className="mask z-10 mt-12 px-10"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className=" flex text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold  text-black flex-wrap"
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {paragraph1}
        </p>
      </motion.div>

      <div className="body">
        <Character paragraph={paragraph} />
      </div>
    </section>
  );
}
