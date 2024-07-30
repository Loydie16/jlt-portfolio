"use client";
import styles from "./techstack.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import StackIcon from "tech-stack-icons";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 1, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function Index({ project }) {
  const [isActive, setIsActive] = useState(false);

  const { title1, title2, src, name } = project;

  return (
    <>
      <div
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className={`h-[30%] ${styles.project}`}
      >
        <p className="font-normal">{title1}</p>

        <motion.div
          variants={anim}
          animate={isActive ? "open" : "closed"}
          className={`gap-2 ${styles.imgContainer}`}
        >
          {src.map((imageSrc, index) => (
            <div
              className="flex flex-col gap-1 bg-[#e3dacd] p-3 w-28 items-center  justify-center rounded-xl shadow-sm"
              key={index}
            >
              <StackIcon name={imageSrc} className="w-10" />
              <h1 className="text-md text-center font-medium text-[#2e2e2e]">
                {name[index]}
              </h1>
            </div>
          ))}
        </motion.div>

        <p className="font-normal ">{title2}</p>
      </div>
    </>
  );
}
