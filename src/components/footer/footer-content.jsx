"use client";
import React from "react";
import Button from "../../components/button/button";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import Magnetic from "../button/magnetic";
import StackIcon from "tech-stack-icons";

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
      <h1 className="text-[14vw] leading-[0.8] mt-10 font-bodoni_moda text-[#8e6e35] text-center ">
        Get in Touch
      </h1>
      <p className="text-[14vw] leading-[0.8] mt-10 font-bodoni_moda text-[#8e6e35] items-center flex justify-center">
        *
      </p>
    </div>
  );
};

const Section1 = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mb-10">
        <h1 className="text-[#8e6e35] font-bisdak text-center">
          Jon Loyd Talagtag
        </h1>
      </div>
      <div className="flex shrink-0 gap-4 justify-center flex-wrap mb-10 items-center">
        <div className="text-[#8e6e35] text-6xl animate-rightAndLeft font-bodoni_moda hidden md:block ">
          →
        </div>
        <div className="flex flex-col gap-2 text-[#8e6e35]">
          <Button
            className="rounded-full border border-[#8e6e35] pt-[15px] pr-[60px] pb-[15px] pl-[60px]"
            backgroundColor="#8e6e35"
            onClick={() => window.open("/JLT Resume.pdf", "_blank")}
          >
            <span className="text-center">Download Resume</span>
          </Button>
        </div>
        <div className="flex flex-col gap-2 text-[#8e6e35]">
          <Button
            className="rounded-full border border-[#8e6e35]  pt-[15px] pr-[60px] pb-[15px] pl-[60px]"
            backgroundColor="#8e6e35"
            onClick={() =>
              window.open(
                "https://drive.google.com/drive/folders/14hsQ9ONn3jeDvGVFtATnCNeRg5SVRK12?usp=sharing",
                "_blank"
              )
            }
          >
            <span>Certificates</span>
          </Button>
        </div>
        <div className="flex flex-col gap-2 text-[#8e6e35]">
          <Button
            className="rounded-full border border-[#8e6e35] pt-[15px] pr-[40px] pb-[15px] pl-[40px]"
            backgroundColor="#8e6e35"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=jonloydtalagtag06@gmail.com",
                "_blank"
              )
            }
          >
            <span>jonloydtalagtag06@gmail.com</span>
          </Button>
        </div>
        <div className="text-[#8e6e35] text-6xl animate-rightAndLeft font-bodoni_moda hidden md:block">
          ←
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="flex mt-16 md:gap-20 items-center md:justify-between justify-center gap-10 flex-wrap  ">
        <div className="flex justify-center items-center">
          <h1 className="text-[#8e6e35] font-nunito_sans font-bold">
            &copy; JLT Dev. 2024.
          </h1>
        </div>

        <div className="flex gap-4 self-center">
          <Magnetic>
            <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
              <FaGithub
                className="text-4xl"
                onClick={() =>
                  window.open("https://github.com/Loydie16", "_blank")
                }
              />
            </span>
          </Magnetic>
          <Magnetic>
            <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
              <FaFacebook
                className="text-4xl"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/johnloydtalagtag16",
                    "_blank"
                  )
                }
              />
            </span>
          </Magnetic>
          <Magnetic>
            <span className="text-[#8e6e35] cursor-pointer flex hover:text-[#ec4e39] transition-all duration-300 ease-linear ">
              <FaLinkedin
                className="text-4xl"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/jonloydtalagtag06/",
                    "_blank"
                  )
                }
              />
            </span>
          </Magnetic>
        </div>

        <div className="flex flex-col text-center gap-2 items-center justify-center ">
          <span className="text-[#8e6e35] font-nunito_sans font-semibold">
            Made with
          </span>
          <div className="flex flex-row gap-1">
            <div className="bg-[#8e6e35] flex p-1 rounded items-cente justify-center">
              <StackIcon className="text-[#8e6e35]  h-8" name="nextjs2" />
            </div>
            <div className="bg-[#8e6e35] flex p-1 rounded items-cente justify-center">
              <StackIcon className="text-[#8e6e35]  h-8" name="tailwindcss" />
            </div>
            <div className="bg-[#8e6e35] flex p-1 rounded items-cente justify-center">
              <StackIcon
                className="text-[#8e6e35]   h-8"
                name="framer"
                backgroundColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
