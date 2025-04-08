// components/About.tsx
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
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
                I'm a passionate software developer with 5+ years of experience building web applications.
                I specialize in creating responsive, user-friendly interfaces using modern technologies.
              </p>
              
              <p className="text-lg text-gray-600">
                My journey into software development began during my university years, where I fell in love with 
                turning ideas into reality through code. Since then, I've worked with startups and established companies, 
                helping build products that solve real-world problems.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'MongoDB', 'GraphQL', 'AWS', 'Docker', 'Tailwind CSS'].map((skill) => (
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
                  src="/api/placeholder/600/400" 
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