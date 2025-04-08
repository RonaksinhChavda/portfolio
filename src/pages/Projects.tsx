
// components/Projects.tsx
import React, { useState, useEffect, useRef } from 'react';

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
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment integration.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop interface and team collaboration features.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A real-time messaging application with private chats, group conversations, and media sharing capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Personal Finance Dashboard',
    description: 'A dashboard for tracking personal expenses, investments, and financial goals with data visualization.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
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
    <section id="projects" className="py-20 bg-gradient-to-t from-purple-50 to-white">
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
                ref={(el) => (cardRefs.current[index] = el)}
                className={`opacity-0 transform translate-y-10 transition-all duration-1000 delay-${index * 100}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white text-xl font-bold p-4">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-md text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 mt-auto">
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

export default Projects;