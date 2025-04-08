

// components/Hero.tsx
import React, { useEffect, useRef, useState } from "react";
import pic from "../assets/react.svg"

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  // const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState(true);
  const [text, setText] = useState("");
  const fullText =
    "Software Developer specializing in React.js";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);

  // Initial animations
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-fadeIn");
    }

    setTimeout(() => {
      if (imageContainerRef.current) {
        imageContainerRef.current.classList.add("animate-scaleIn");
      }
    }, 300);

    setTimeout(() => {
      setIsTyping(true);
    }, 800);

    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.classList.add("animate-slideUp");
      }
    }, 1500);
  }, []);

  // Parallax effect for particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900"
    >
      {/* Animated background particles with parallax effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const size = Math.random() * 12 + 4;
          const depth = Math.random() * 0.5 + 0.5; // Depth factor for parallax
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(${mousePosition.x * 20 * depth}px, ${
                  mousePosition.y * 20 * depth
                }px)`,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transition: "transform 0.1s ease-out",
              }}
            />
          );
        })}
      </div>

      {/* Glowing circles */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: "9s" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="md:w-1/3">
            <div
              ref={imageContainerRef}
              className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-white shadow-xl opacity-0 transform scale-90"
              style={{
                transition: "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 animate-spin-slow" />
              {/* <p className="h-full flex items-center justify-center text-[100px] font-bold text-white">RC</p> */}
              <img
                src={pic}
                alt="Developer"
                className="relative w-full h-full object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="md:w-2/3 text-left">
            <h1
              ref={titleRef}
              className="text-4xl md:text-6xl font-extrabold text-white opacity-0 transition-opacity duration-1000"
            >
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 animate-gradient-x">
                Hi, I'm
              </span>
              <span className="block text-blue-300 relative">
                Ronaksinh Chavda
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-blue-400 animate-expandWidth" />
              </span>
            </h1>

            <p className="mt-4 text-xl md:text-2xl text-gray-200">
              {text}
              {isTyping && <span className="animate-blink ml-1">|</span>}
            </p>

            {/* <button
              ref={buttonRef}
              className="mt-8 px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 opacity-0 transform translate-y-10 hover:shadow-lg hover:-translate-y-1"
              style={{
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              }}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </button> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white group">
          <svg
            className="h-10 w-10 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <path
            d="M0,0 L100,0 L0,100 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <path
            d="M100,100 L0,100 L100,0 Z"
            fill="rgba(255,255,255,0.1)"
            className="animate-pulse"
            style={{ animationDuration: "8s" }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
