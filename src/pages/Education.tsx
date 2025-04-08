
// // components/Education.tsx
// import React, { useEffect, useRef } from 'react';

// interface EducationItem {
//   degree: string;
//   institution: string;
//   period: string;
//   description: string;
// }

// const educationData: EducationItem[] = [
//   {
//     degree: 'Master of Computer Science',
//     institution: 'Stanford University',
//     period: '2018 - 2020',
//     description: 'Specialized in Artificial Intelligence and Machine Learning. Completed thesis on "Optimizing Neural Networks for Mobile Applications".'
//   },
//   {
//     degree: 'Bachelor of Science in Computer Engineering',
//     institution: 'MIT',
//     period: '2014 - 2018',
//     description: 'Graduated with honors. Member of the ACM student chapter and participated in multiple hackathons.'
//   },
//   {
//     degree: 'Full Stack Web Development Bootcamp',
//     institution: 'Coding Academy',
//     period: '2013 - 2014',
//     description: 'Intensive 6-month program covering front-end and back-end technologies.'
//   }
// ];

// const Education: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animate-slideRight');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
    
//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }
    
//     itemRefs.current.forEach((item) => {
//       if (item) observer.observe(item);
//     });
    
//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
      
//       itemRefs.current.forEach((item) => {
//         if (item) observer.unobserve(item);
//       });
//     };
//   }, []);

//   return (
//     <section id="education" className="py-20 bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div 
//           ref={sectionRef} 
//           className="opacity-0 transform translate-x-10 transition-all duration-1000"
//         >
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
//             My <span className="text-purple-600">Education</span>
//           </h2>
          
//           <div className="mt-16 relative">
//             {/* Vertical timeline line */}
//             <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
//             <div className="space-y-16">
//               {educationData.map((item, index) => (
//                 <div 
//                   key={index}
//                   ref={(el) => (itemRefs.current[index] = el)}
//                   className={`relative opacity-0 transform ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'} transition-all duration-1000 delay-${index * 200}`}
//                 >
//                   <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
//                     <div className="md:w-1/2 p-4">
//                       <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//                         <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium mb-4">
//                           {item.period}
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
//                         <h4 className="text-lg font-medium text-gray-600 mt-1">{item.institution}</h4>
//                         <p className="mt-3 text-gray-600">{item.description}</p>
//                       </div>
//                     </div>
//                     <div className="md:w-0 flex items-center justify-center">
//                       <div className="h-8 w-8 rounded-full bg-purple-600 border-4 border-white shadow z-10"></div>
//                     </div>
//                     <div className="md:w-1/2"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

// components/Education.tsx
import React, { useEffect, useRef, useState } from 'react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string; // Added icon property
  color: string; // Added color property
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of technology in Computer Engineering',
    institution: 'Sankalchand patel colloge of engineering',
    period: '2018 - 2022',
    description: 'Graduated with honors.learn basics of computer science and programming.',
    icon: '🎓',
    color: 'from-red-500 to-pink-500'
  },
  {
    degree: 'Degree in 12th standard',
    institution: 'Shree Swaminarayan High Secondary School',
    period: '2016 - 2018',
    description: 'Completed 12th standard in shree swaminarayan high secondary school. gandhinagar.',
    icon: '🔬',
    color: 'from-blue-500 to-cyan-500'
  },
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    itemRefs.current.forEach((item, index) => {
      if (item) {
        const itemObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Staggered animation delay
                setTimeout(() => {
                  entry.target.classList.add('animate-slideIn');
                  // Auto-focus on the first visible item
                  if (activeIndex === null) {
                    setActiveIndex(index);
                  }
                }, index * 200);
                itemObserver.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.2 }
        );
        itemObserver.observe(item);
      }
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [activeIndex]);

  // Progress calculation for timeline
  const calculateProgress = () => {
    if (activeIndex === null) return 0;
    return ((activeIndex + 1) / educationData.length) * 100;
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef} 
          className="opacity-0 transform transition-all duration-1000"
        >
          <div className="text-center mb-16">
            {/* <span className="inline-block px-3 py-1 bg-purple-900 bg-opacity-50 rounded-full text-sm font-medium text-purple-300 mb-3">My Journey</span> */}
            <h2 className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Education
            </h2>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-gray-300">My academic journey has equipped me with the knowledge and skills needed to excel in the tech industry.</p>
            </div>
            <div className="mt-3 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="mt-16 relative">
            {/* Vertical timeline with progress indicator */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gray-700 transform -translate-x-1/2"></div>
            <div 
              className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform -translate-x-1/2 transition-all duration-1000 ease-out"
              style={{ height: `${calculateProgress()}%` }}
            ></div>
            
            <div className="space-y-24">
              {educationData.map((item, index) => (
                <div 
                  key={index}
                  // @ts-ignore
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`relative opacity-0 transform transition-all duration-700 cursor-pointer`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-1/2 p-4 transform transition-all duration-500 ${activeIndex === index ? 'md:scale-105 z-10' : 'scale-100'}`}>
                      <div 
                        className={`bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 ${
                          activeIndex === index ? 'bg-opacity-100 border-purple-500' : 'bg-opacity-70 hover:bg-opacity-90'
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} mr-4 shadow-lg transform transition-transform duration-300 hover:rotate-12`}>
                            <span className="text-xl">{item.icon}</span>
                          </div>
                          <div className="inline-block px-4 py-2 bg-purple-900 bg-opacity-50 rounded-full font-medium text-purple-300">
                            {item.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white">
                          <span className="relative">
                            {item.degree}
                            {activeIndex === index && (
                              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 animate-expandWidth"></span>
                            )}
                          </span>
                        </h3>
                        
                        <h4 className="text-lg font-medium text-purple-300 mt-1 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                          </svg>
                          {item.institution}
                        </h4>
                        
                        <div className="mt-3 text-gray-300 relative overflow-hidden">
                          <p className={`transition-all duration-500 ${activeIndex === index ? 'max-h-48' : 'max-h-24 overflow-hidden'}`}>
                            {item.description}
                          </p>
                          {activeIndex !== index && item.description.length > 100 && (
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent"></div>
                          )}
                        </div>
                        
                        {/* {activeIndex === index && (
                          <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white font-medium hover:opacity-90 transition-opacity animate-fadeIn">
                            View Details
                          </button>
                        )} */}
                      </div>
                    </div>
                    
                    <div className="md:w-0 flex items-center justify-center">
                      <div 
                        className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-500 z-20 ${
                          activeIndex === index 
                            ? `bg-gradient-to-r ${item.color} border-4 border-gray-900 shadow-lg scale-125` 
                            : 'bg-gray-700 border-2 border-gray-600'
                        }`}
                      >
                        {activeIndex === index && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        )}
                        <span className="text-xs font-bold">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center opacity-0 animate-fadeIn" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              <p className="text-gray-300 font-medium">Always learning and growing</p>
              <p className="text-purple-300 italic">Continuing education with online courses and certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;