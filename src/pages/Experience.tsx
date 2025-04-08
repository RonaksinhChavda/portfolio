
// components/Experience.tsx
import React, { useEffect, useRef } from 'react';

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
    position: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: '2021 - Present',
    description: [
      'Lead a team of 5 developers in developing a customer-facing web application',
      'Implemented CI/CD pipelines that reduced deployment time by 40%',
      'Optimized application performance, improving load times by 35%',
      'Mentored junior developers and conducted code reviews'
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Jest']
  },
  {
    position: 'Frontend Developer',
    company: 'WebSolutions LLC',
    location: 'Boston, MA',
    period: '2019 - 2021',
    description: [
      'Developed responsive user interfaces for multiple client projects',
      'Collaborated with designers and backend developers in an agile environment',
      'Implemented new features and fixed bugs for existing applications',
      'Participated in daily stand-ups and sprint planning'
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'Webpack', 'RESTful APIs']
  },
  {
    position: 'Junior Web Developer',
    company: 'StartUp Ventures',
    location: 'New York, NY',
    period: '2017 - 2019',
    description: [
      'Built and maintained the company website using modern web technologies',
      'Assisted in developing a SaaS product from scratch',
      'Created reusable UI components for the design system',
      'Optimized website for mobile devices and improved SEO'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery']
  }
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                          <span key={tech} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">
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