"use client";
import StackIcon from "tech-stack-icons";

export default function Home() {
  const projects = [
    {
      title1: "Programming",
      title2: " Languages",
      src: ["js", "python", "java", "c++", "csharp"],
      name: ["JavaScript", "Python", "Java", "C++", "C#"],
    },
    {
      title1: "Front",
      title2: " End",
      src: [
        "html5",
        "css3",
        "reactjs",
        "nextjs",
        "vitejs",
        "tailwindcss",
        "bootstrap5",
        "shadcnui",
        "jquery",
      ],
      name: [
        "HTML5",
        "CSS3",
        "React JS",
        "Next JS",
        "Vite",
        "Tailwind",
        "Bootstrap",
        "ShadcnUI",
        "jQuery",
      ],
    },
    {
      title1: "Back",
      title2: " End",
      src: ["js", "nodejs"],
      name: ["Express JS", "Node JS"],
    },
    {
      title1: "Data",
      title2: "base",
      src: ["firebase", "mongodb", "appwrite", "mysql"],
      name: ["Firebase", "Mongo DB", "AppWrite", "MySQL"],
    },
    {
      title1: "Dev",
      title2: " Tools",
      src: ["vscode", "git", "github", "postman", "figma", "android"],
      name: ["VS Code", "Git", "Github", "Postman", "Figma", "Android Studio"],
    },
  ];

  return (
    <section className="h-auto lg:hidden flex-col justify-center items-center bg-[#edede5] pb-10 text-[#5c5b5b] pt-20">
      <p className="text-start  w-[80%] text-6xl lg:text-9xl font-extrabold font-nunito_sans m-auto">
        Tech <span className="text-[#ec4e39]">Stack</span>
      </p>
      <div className="w-[80%] h-full md:h-auto font-nunito_sans font-thin flex  flex-col m-auto">
        {projects.map((project, projectIndex) => (
          <div key={projectIndex}>
            <h2 className="text-2xl font-medium mt-6">{`${project.title1}${project.title2}`}</h2>
            <div className="grid grid-cols-3 gap-4 mt-2">
              {project.src.map((iconSrc, iconIndex) => (
                <div
                  className="flex flex-col gap-1 bg-[#fefefc] p-4 w-full items-center justify-center rounded-xl shadow-md"
                  key={iconIndex}
                >
                  <StackIcon name={iconSrc} className="w-8" />
                  <h1 className="text-md text-center font-medium">
                    {project.name[iconIndex]}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
