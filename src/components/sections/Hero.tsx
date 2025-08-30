"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Entrepreneurship Cell FCRIT",
      subtitle: "Fostering Innovation Since 2019",
      description:
        "Empowering young minds to transform ideas into successful ventures through mentorship, events, and networking.",
      cta: "Join Our Journey",
      highlight: "6+ Years of Excellence",
    },
    {
      title: "Build. Create. Innovate.",
      subtitle: "Your Startup Journey Starts Here",
      description:
        "From ideation to execution, we provide the complete ecosystem for budding entrepreneurs.",
      cta: "Start Building",
      highlight: "100+ Startups Mentored",
    },
    {
      title: "Events & Workshops",
      subtitle: "Learn from Industry Leaders",
      description:
        "Regular workshops, hackathons, and speaker sessions with successful entrepreneurs and industry experts.",
      cta: "View Events",
      highlight: "50+ Industry Experts",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased to 6 seconds for better readability
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video/Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Highlight Badge */}
          <div
            key={`badge-${currentSlide}`}
            className="inline-flex items-center px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium animate-fade-in-up"
          >
            <Award className="w-4 h-4 mr-2" />
            {slides[currentSlide].highlight}
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {slides[currentSlide].title}
            </h1>
            <h2
              key={`subtitle-${currentSlide}`}
              className="text-xl md:text-2xl lg:text-3xl text-purple-300 font-light animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].subtitle}
            </h2>
          </div>

          {/* Description */}
          <p
            key={`description-${currentSlide}`}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div
            key={`cta-${currentSlide}`}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => (window.location.href = "/events")}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                500+
              </div>
              <div className="text-gray-400">Students Impacted</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">
                50+
              </div>
              <div className="text-gray-400">Events Conducted</div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-white">
                15+
              </div>
              <div className="text-gray-400">Startup Mentorships</div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-purple-500 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
