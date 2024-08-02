"use client";
import React from "react";
import Button from "../../components/button/button";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Magnetic from "../button/magnetic";
export default function Content() {
  return (
    <div className="bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-end">
      <Section1 />
      
      <Section2 />
      <Section3 />
    </div>
  );
}



const Section2 = () => {
  return (
    <div className="flex justify-between ">
      <h1 className="text-[14vw] leading-[0.8] mt-10 font-bodoni_moda text-[#8e6e35]">
        Get in Touch
      </h1>
      <p className="text-[14vw] leading-[0.8] mt-10 font-bodoni_moda text-[#8e6e35]">
        *
      </p>
    </div>
  );
};



const Section1 = () => {
  return (
    <div className="flex shrink-0 gap-10 justify-center flex-wrap mb-10">
      <div className="text-[#8e6e35] text-6xl animate-rightAndLeft font-bodoni_moda hidden md:block ">
        →
      </div>
      <div className="flex flex-col gap-2 text-[#8e6e35]">
        <Button
          className="rounded-full border border-[#8e6e35]  pt-[15px] pr-[60px] pb-[15px] pl-[60px]"
          backgroundColor="#8e6e35"
          onClick={() => window.open(project.link, "_blank")}
        >
          <span className="text-center">Download Resume</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2 text-[#8e6e35]">
        <Button
          className="rounded-full border border-[#8e6e35]  pt-[15px] pr-[60px] pb-[15px] pl-[60px]"
          backgroundColor="#8e6e35"
          onClick={() => window.open(project.link, "_blank")}
        >
          <span>Certificates</span>
        </Button>
      </div>
      <div className="flex flex-col gap-2 text-[#8e6e35]">
        <Button
          className="rounded-full border border-[#8e6e35]  pt-[15px] pr-[40px] pb-[15px] pl-[40px]"
          backgroundColor="#8e6e35"
          onClick={() => window.open(project.link, "_blank")}
        >
          <span>jonloydtalagtag06@gmail.com</span>
        </Button>
      </div>
      <div className="text-[#8e6e35] text-6xl animate-rightAndLeft font-bodoni_moda hidden md:block">
        ←
      </div>
    </div>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="flex gap-4 justify-center items-center mt-16 w-full">
        <Magnetic>
          <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
            <FaGithub className="text-4xl" />
          </span>
        </Magnetic>
        <Magnetic>
          <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
            <FaFacebook className="text-4xl" />
          </span>
        </Magnetic>
        <Magnetic>
          <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
            <FaLinkedin className="text-4xl" />
          </span>
        </Magnetic>
        <Magnetic>
          <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
            <FaGithub className="text-4xl" />
          </span>
        </Magnetic>
      </div>

      <div>
        
      </div>
    </>
  );
};