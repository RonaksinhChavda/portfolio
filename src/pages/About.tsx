// components/About.tsx
import React, { useEffect, useRef } from "react";
import pic from "../assets/pic.png"
const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideUp");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="opacity-0 transform translate-y-10 transition-all duration-1000"
        >
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            About <span className="text-blue-600">Me</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Motivated and detail-oriented ReactJS developer with 3+ years of
                experience in designing and developing scalable, responsive web
                applications. Expertise in modern JavaScript frameworks,
                particularly ReactJS, with strong proficiency in HTML5, CSS3,
                JavaScript, Redux, and state management. Skilled in working with
                RESTful APIs, version control systems (Git), and optimizing
                performance for a seamless user experience
              </p>

              <p className="text-lg text-gray-600">
                Adept at collaborating in agile environments and ensuring clean,
                maintainable code. Seeking to leverage my technical expertise,
                problem-solving abilities, and passion for continuous learning
                to contribute to a forward-thinking development team and deliver
                innovative, high-quality software solutions.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Redux",
                    "HTML",
                    "CSS",
                    "Git",
                    "RESTful APIs",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium hover:bg-purple-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3"></div>
                <img
                  src={pic}
                  alt="Developer working"
                  className="relative rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
