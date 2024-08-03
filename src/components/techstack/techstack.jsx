"use client";
import Title from "./techstack-title";

export default function Home() {
  const projects = [
    {
      title1: "Programming",
      title2: "Languages",
      src: ["js", "python", "java", "c++", "csharp"],
      name: ["JavaScript", "Python", "Java", "C++", "C#"],
    },
    {
      title1: "Front",
      title2: "End",
      src: [
        "html5",
        "css3",
        "reactjs",
        "nextjs2",
        "vitejs",
        "tailwindcss",
        "bootstrap5",
        "shadcnui",
        "jquery",
      ],
      name: [
        "HTML5",
        "CSS3",
        "ReactJS",
        "NextJS",
        "Vite",
        "Tailwind",
        "Bootstrap",
        "ShadcnUI",
        "jQuery",
      ],
    },
    {
      title1: "Back",
      title2: "End",
      src: ["js", "nodejs"],
      name: ["ExpresJS", "NodeJS"],
    },
    {
      title1: "Data",
      title2: "base",
      src: ["firebase", "mongodb", "appwrite", "mysql"],
      name: ["Firebase", "MongoDB", "AppWrite", "MySQL"],
    },
    {
      title1: "Dev",
      title2: "Tools",
      src: ["vscode", "git", "github", "postman", "figma", "android"],
      name: ["VS Code", "Git", "Github", "Postman", "Figma", "Android Studio"],
    },
  ];

  return (
    <section className="min-h-screen hidden lg:flex flex-col justify-center items-center bg-[#edede5] text-[#5c5b5b] pb-20">
      <div
        className="text-start mt-20 mb-10 w-[80%] text-7xl lg:text-9xl font-bold  font-nunito_sans text-[#5c5b5b]"
        data-aos="zoom-in-right"
        data-aos-duration="1500"
      >
        Tech <span className="text-[#ec4e39]">Stack</span>
      </div>
      <div
        className="w-[80%] h-full md:h-auto font-nunito_sans font-thin"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {projects.map((project, index) => (
          <Title key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
