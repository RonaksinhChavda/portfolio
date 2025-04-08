// App.tsx
import React, { useState, useEffect } from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="text-4xl font-extrabold text-white">
          <span className="inline-block animate-bounce">L</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>o</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>a</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>d</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>n</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>g</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>.</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;





