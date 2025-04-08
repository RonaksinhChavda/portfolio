// components/Experience.tsx
import React, { useEffect, useRef } from "react";

interface ExperienceItem {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    position: "Software developer- ReactJS",
    company: "Space-O Technologies",
    location:
      "1005, 10th Floor, Abhishree Adroit Mansi Circle, beside Gwalia Sweet, Ahmedabad, Gujarat 380015",
    period: "July 2022 - Present",
    description: [
      "Leading the development and implementation of scalable React.js applications.",
      "Designing and maintaining reusable components and front-end libraries to optimize performance.",
      "Translating designs and wireframes into high-quality, maintainable code.",
      "Optimizing components for maximum performance across various web browsers.",
      "Integrating RESTful APIs and handling modern authentication mechanisms like JWT.",
      "Participating in code reviews to enforce best practices and maintain high code quality.",
      "Utilizing Redux and Redux Toolkit for efficient state management.",
      "Working with Git, GitHub, and GitLab for version control and collaboration.",
      "Staying up-to-date with the latest React.js features, libraries, and industry trends.",
      "Troubleshooting and debugging complex front-end issues to ensure a smooth user experience.",
      "Following agile methodology and collaborating closely with designers and backend developers",
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Next.js"],
  },
  {
    position: "Intern Technology Architectr",
    company: "IT Path SolutionC",
    location:
      "801, 8th floor Binori B Square, I BRTS road, Ambli Rd, Ahmedabad, Gujarat 380058",
    period: "December 2021 - July 2022",
    description: [
      "Developed and implemented UI components using React.js, HTML5, and CSS3.",
      "Collaborated with cross-functional teams to design and deliver new features.",
      "Contributed to building reusable components and improving front-end libraries.",
      "Troubleshooting and debugging issues to enhance user experience.",
      "Participated in code reviews to maintain quality and consistency.",
      "Ensured adherence to best coding practices and performance optimization.",
      "Designed and developed reusable and modular React components to streamline the development process.",
      "Gained experience in RESTful API integration and version control using Git",
    ],
    technologies: ["React", "JavaScript", "CSS3", "RESTful APIs"],
  },
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            Work <span className="text-blue-600">Experience</span>
          </h2>

          <div className="mt-16 space-y-12">
            {experienceData.map((item, index) => (
              <div
                key={index}
                // @ts-ignore
                ref={(el) => (itemRefs.current[index] = el)}
                className="opacity-0 transform translate-y-10 transition-all duration-1000"
              >
                <div className="group">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group-hover:bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200">
                    <div className="md:flex justify-between items-start">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                          {item.position}
                        </h3>
                        <div className="mt-1 flex flex-col sm:flex-row sm:items-center text-gray-600">
                          <span className="font-medium">{item.company}</span>
                          <span className="hidden sm:inline mx-2">•</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium inline-block">
                        {item.period}
                      </div>
                    </div>

                    <div className="mt-6">
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-blue-500">
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </span>
                            <span className="text-gray-600">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
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
      </div>
    </section>
  );
};

export default Experience;
