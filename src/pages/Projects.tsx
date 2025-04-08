// components/Projects.tsx
import React, { useState, useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const projectsData: Project[] = [
  {
    title: "D4E (Dentistry For Everyone)",
    description: `D4E is a dentistry application designed to connect patients with nearby doctors through a mobile app while
    providing an admin panel for administrators, doctors, franchise owners, and other stakeholders. The mobile
    app focuses on patient interactions, whereas the admin panel facilitates efficient management of
    administrative tasks`,
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "Node.js",
      "Html",
      "Css",
      "Redux",
      "Tailwind CSS",
      "Typescript",
      "Git",
      "GitLab",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pomodoro App",
    description: "A pomodoro timer app with a focus mode and a break mode.",
    image: "/api/placeholder/600/400",
    technologies: [
      "React",
      "TypeScript",
      "Html",
      "Tailwind CSS",
      "Git",
      "Github",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A real-time messaging application with private chats, group conversations, and media sharing capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Story Zoo",
    description: `Story Zoo is an engaging reading application designed for children aged 6-12, encouraging them to
develop a love for reading. The platform allows children to read books from the library or log their
own reading. After completing a book, they can take a quiz, earning coins that can be used to
purchase virtual animals in the zoo section, making learning fun and interactive.`,
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Node.js", "Html", "Css", "Tailwind CSS", "Git", "GitLab",'Pinia'],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const Projects: React.FC = () => {
  const [, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-t from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            My <span className="text-purple-600">Projects</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                // @ts-ignore
                ref={(el) => (cardRefs.current[index] = el)}
                className={`opacity-0 border  transform translate-y-10 transition-all duration-1000 delay-${
                  index * 100
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="bg-white rounded-xl overflow-hidden  hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2">
                  <div className="relative overflow-hidden h-[200px]">
                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t  flex items-end">
                      <h3 className="text-purple-600 text-xl font-bold p-4">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="px-6 pb-6 mt-auto">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 text-center rounded-md hover:bg-gray-300 transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
