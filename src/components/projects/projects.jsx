"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import DogApp from "../../app/assets/project-imgs/dog-app.png";
import Studev from "../../app/assets/project-imgs/studev.png";
import Quizvia from "../../app/assets/project-imgs/quizvia.png";
import Dianotes from "../../app/assets/project-imgs/dianotes.png";
import NutrikioskMobileApp from "../../app/assets/project-imgs/NutrikioskMobileApp.png";
import AorifyMobileApp from "../../app/assets/project-imgs/AorifyMobileApp.png";
import Button from "../../components/button/button";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Dog Breed App",
    description:
      "This is my first React.js project to practice my React skills. It is a React application that helps users identify and learn about different dog breeds.",
    image: DogApp,
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "The Dog API"],
    link: "https://loydie16.github.io/dog-breed-application/",
    github: "https://github.com/Loydie16/dog-breed-application",
  },
  {
    title: "Pure HTML and CSS E-Commerce Website Design",
    description:
      "This project was created to join a competition in the Facebook community named StuDev. I participated in the pure HTML and CSS e-commerce competition and won 2nd place with this project.",
    image: Studev,
    techStack: ["HTML", "CSS"],
    link: "https://loydie16.github.io/Studev-Quest/",
    github: "https://github.com/Loydie16/Studev-Quest",
  },
  {
    title: "Quizvia",
    description:
      "This project was created to practice my React skills. Quizvia is a web-based quiz application that fetches questions and answers from the Open Trivia Database.",
    image: Quizvia,
    techStack: ["HTML", "Tailwind CSS", "JavaScript", "React", "OpenTDB API"],
    link: "https://quizvia.vercel.app/",
    github: "https://github.com/Loydie16/Quizvia",
  },
  {
    title: "Dianotes",
    description:
      "This project is a CRUD application developed by me to learn and practice the MERN stack. I used Vercel to host the frontend and Render to host the backend.",
    image: Dianotes,
    techStack: [
      "HTML",
      "Tailwind CSS",
      "ShadcnUI",
      "JavaScript",
      "MongoDB",
      "Express JS",
      "React",
      "Node JS",
    ],
    link: "https://dianotes.vercel.app/",
    github: "https://github.com/Loydie16/Dianotes",
  },
  {
    title: "Nutrikiosk Mobile App",
    description:
      "This is the mobile application that I developed for our thesis project. It aims to provide users with nutritional information and help them maintain a healthy lifestyle.",
    image: NutrikioskMobileApp,
    techStack: ["React Native", "Expo", "Nativewind", "Firebase"],
    link: "https://upload-apk.com/en/RJblrQx0W8fBbRN",
    github: "https://github.com/Loydie16/Nutritional-Kiosk-Mobile-App",
  },
  {
    title: "Aorify Mobile App",
    description:
      "This is a clone project from JavaScript Mastery on YouTube to further enhance my skills in mobile development using React Native. Even though this is a clone, I am the one who coded the save video feature.",
    image: AorifyMobileApp,
    techStack: ["React Native", "Expo", "Nativewind", "AppWrite"],
    link: "https://upload-apk.com/en/RJblrQx0W8fBbRN",
    github: "https://upload-apk.com/en/g7x0LSMHo4gpZ9R",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="hidden lg:block z-0 min-h-screen scroll-section-outer overflow-hidden bg-[#0d1117]">
      <div ref={triggerRef} className="relative">
        <div className="absolute ml-20 w-fill">
          <span className="text-[#8e6e35] font-bodoni_moda xl:text-[100px] lg:text-[80px]">
            PERSONAL PROJECTS
          </span>
        </div>
        <div
          ref={sectionRef}
          className="scroll-section-inner h-screen w-[400vw] flex flex-row"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-section h-screen w-screen flex justify-center items-center gap-2"
            >
              <div className="flex flex-col gap-4 justify-end h-[60%]">
                <Button
                  className="bg-[#f5f0ec] text-black py-2 px-4 rounded-3xl hover:text-white"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <HiOutlineArrowUpRight className="font-extrabold z-10 relative transition-colors duration-500 ease-linear" />
                </Button>
                <Button
                  className="bg-[#f5f0ec] py-2 px-4 rounded-3xl hover:text-white "
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <FaGithub className="font-extrabold z-10 relative transition-colors duration-500 ease-linear" />
                </Button>
              </div>
              <div className="relative w-[75%] h-2/3 rounded-xl overflow-hidden bg-[#e3dacd]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 "></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 p-4"
                />
                <div className="absolute bottom-0 left-0 p-6 text-white z-20 font-nunito_sans flex flex-col gap-2">
                  <h3 className="text-4xl font-extrabold text-[#edede5] drop-shadow-[0_1.4px_1.2px_rgba(0,0,0,0.8)]">
                    {project.title}
                  </h3>
                  <p className="text-lg font-semibold text-[#edede5]">
                    {project.description}
                  </p>
                  <div className="mt-2">
                    <div className="flex gap-4">
                      {project.techStack.map((tech, index) => (
                        <span
                          className="bg-[#e3dacd] text-[#3a3a3a] font-semibold px-2 rounded-md"
                          key={index}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
