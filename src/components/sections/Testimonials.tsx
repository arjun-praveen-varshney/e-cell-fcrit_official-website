"use client";

import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { client, queries, urlFor } from "@/sanity/lib/client";

interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image?: any;
  featured?: boolean;
  order?: number;
}

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonialsData = await client.fetch(queries.getAllTestimonials);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Fallback to empty array if Sanity fetch fails
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Loading testimonials...</p>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              What People Say
            </h2>
            <p className="text-gray-300">
              No testimonials available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from industry experts, successful entrepreneurs, and our alumni
            about their experience with E-Cell FCRIT.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-300" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {[0, 1].map((offset) => {
              const testimonialIndex =
                (currentSlide + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];

              return (
                <div
                  key={testimonial._id}
                  className={`group transition-all duration-500 ${
                    offset === 0
                      ? "transform scale-105"
                      : "transform scale-95 opacity-80"
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-20">
                      <Quote className="w-12 h-12 text-purple-400" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg text-gray-200 leading-relaxed mb-8 relative z-10">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-0.5">
                          {testimonial.image ? (
                            <img
                              src={urlFor(testimonial.image)
                                .width(64)
                                .height(64)
                                .url()}
                              alt={testimonial.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")
                                  .slice(0, 2)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-purple-400 font-medium">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Share Your Success Story?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our community of successful entrepreneurs and innovators.
              Your journey with E-Cell FCRIT could be the next inspiring success
              story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/team")}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Join Our Community
              </button>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
              >
                Share Your Story
              </button>
            </div>
          </div>
        </div>

        {/* Industry Partners Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:from-purple-800/50 hover:to-pink-800/50 transition-all duration-300"
              >
                <span className="text-gray-400 font-semibold">
                  Partner {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
