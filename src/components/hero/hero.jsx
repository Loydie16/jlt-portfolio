"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import "./hero.css";
import useMousePosition from "../../app/utils/useMousePosition";
import ReactCurvedText from "react-curved-text";
import scrollDownSVG from "../../app/assets/scroll-down.json";
/* import Lottie from "lottie-react"; */


export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 0;

  // Single handler function for mouse enter and leave
  const handleMouseHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  return (
    <>
      <main className="flex-col min-h-screen w-full bg-[#edede5]  bg-grid-black/[0.05] relative flex items-center justify-center py-1">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#edede5] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>

        {/* For the mask */}
        <motion.div
          className="mask flex flex-col font-bodoni_moda items-center justify-center gap-10 "
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <div
            className="flex flex-col items-center justify-center tracking-tighter leading-[0.76] font-bodoni_moda"
            onMouseEnter={() => handleMouseHover(true)}
            onMouseLeave={() => handleMouseHover(false)}
          >
            <motion.p
              className="text-xs sm:text-lg md:text-2xl font-bisdak mb-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 2 }}
            >
              BUT CAN DO FULLSTACK
            </motion.p>

            <motion.span
              className="text-[10vw]  text-[#8e6e35] font-bodoni_moda"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              FIRST NAME
            </motion.span>
            <motion.span
              className="text-[15vw]"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              LASTNAME
            </motion.span>
            <motion.p
              className="text-xs sm:text-lg md:text-2xl font-bisdak mt-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 2.5 }}
            >
              THIS IS WHERE I LIVE
            </motion.p>
          </div>

          {/* Container for curved text and icon */}
          <div className="relative w-[122px] h-[122px] flex items-center justify-center ">
            <div className="absolute inset-0 flex items-center justify-center"></div>
          </div>
        </motion.div>

        {/* Not masked */}
        <div className="body flex flex-col items-center justify-center gap-10 ">
          <div className="flex flex-col items-center justify-center tracking-tighter leading-[0.76] font-bodoni_moda">
            <motion.p
              className="text-xs sm:text-lg md:text-2xl font-bisdak mb-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 4.5 }}
            >
              FRONT-END DEVELOPER
            </motion.p>

            <motion.span
              className="text-[10vw]  text-[#8e6e35] font-bodoni_moda"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 3.5 }}
            >
              JON LOYD
            </motion.span>
            <motion.span
              className="text-[15vw]"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 3.5}}
            >
              TALAGTAG
            </motion.span>
            <motion.p
              className="text-xs sm:text-lg md:text-2xl font-bisdak mt-10"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 5 }}
            >
              MUNTINLUPA, PH
            </motion.p>
          </div>

          {/* Container for curved text and icon */}
          <motion.div
            className="relative w-[122px] h-[122px] flex items-center justify-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 5 }}
          >
            <ReactCurvedText
              width="122"
              height="120"
              cx="61"
              cy="60"
              rx={60}
              ry={60}
              startOffset={0}
              reversed={false}
              text="SCROLL DOWN TO EXPLORE • SCROLL DOWN TO EXPLORE •"
              textProps={{ style: { fontSize: 12.7 } }}
              textPathProps={null}
              tspanProps={null}
              ellipseProps={null}
              svgProps={{ className: "rotating-text" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Replace the src with your icon's path */}
              {/* <Lottie animationData={scrollDownSVG} loop={true}/> */}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
