'use client';
import Character from './character';
import { useState } from "react";
import useMousePosition from "../../app/utils/useMousePosition";
import { motion } from "framer-motion";


const paragraph =
  "A 22-year-old Computer Engineering graduate who is passionate about creating user-friendly and visually appealing websites, focusing on innovative design.";
const paragraph1 =
  "With experience as a web developer intern, I’ve gained valuable skills in web design and development. Check my resume for more details.";

export default function About() {

  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  const size = isHovered ? 400 : 0;

  return (
    <section className="md:min-h-screen  flex-col flex items-center p-4 md:p-20 xl:px-40 justify-center bg-[#edede5] font-nunito_sans">
      <p className="font-extrabold text-xl tracking-[4px] text-start w-full mb-4 text-[#5c5b5b]">
        <span className="text-[#ec4e39]">ABOUT</span> ME
      </p>
      <motion.div
        className="mask z-10 mt-12 px-6"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,

          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <p
          className=" flex text-4xl sm:text-5xl lg:text-6xl xl:text-8xl md:m-20 xl:mx-32 font-bold   flex-wrap  "
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

      <div className="body ">
        <Character paragraph={paragraph} />
      </div>
    </section>
  );
}
