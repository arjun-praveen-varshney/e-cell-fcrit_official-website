"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { client, queries, urlFor } from "@/sanity/lib/client";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants?: number;
  category?: string;
  status: "upcoming" | "completed";
  featured?: boolean;
  image?: any;
  highlights?: string[];
  slug?: {
    current: string;
  };
}

export function Events() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: "all", name: "All Events" },
    { id: "summit", name: "E-Summit" },
    { id: "workshop", name: "Workshops" },
    { id: "hackathon", name: "Hackathons" },
    { id: "networking", name: "Networking" },
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await client.fetch(queries.getAllEvents);
        setEvents(eventsData);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Fallback to empty array if Sanity fetch fails
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents =
    activeCategory === "all"
      ? events
      : events.filter((event) => event.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.max(1, filteredEvents.length - 2)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.max(1, filteredEvents.length - 2)) %
        Math.max(1, filteredEvents.length - 2)
    );
  };

  if (loading) {
    return (
      <section
        id="events"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Loading events...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Our Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From flagship summits to intimate workshops, we organize events that
            inspire, educate, and connect the entrepreneurial community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-300"
            disabled={filteredEvents.length <= 3}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-300"
            disabled={filteredEvents.length <= 3}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Events Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {filteredEvents.map((event, index) => (
                <div
                  key={event._id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Event Image */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                      <div className="absolute top-4 right-4 z-20">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.status === "completed"
                              ? "bg-green-500/20 text-green-300 border border-green-500/30"
                              : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          }`}
                        >
                          {event.status === "completed"
                            ? "Completed"
                            : "Upcoming"}
                        </span>
                      </div>
                      {event.image ? (
                        <img
                          src={urlFor(event.image).width(600).height(400).url()}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 group-hover:from-purple-600/50 group-hover:to-pink-600/50 transition-all duration-300"></div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-gray-300 mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        {event.participants && (
                          <div className="flex items-center text-sm text-gray-400">
                            <Users className="w-4 h-4 mr-2" />
                            {event.participants} participants
                          </div>
                        )}
                      </div>

                      {/* Highlights */}
                      {event.highlights && event.highlights.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {event.highlights
                              .slice(0, 2)
                              .map((highlight, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                                >
                                  {highlight}
                                </span>
                              ))}
                            {event.highlights.length > 2 && (
                              <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                                +{event.highlights.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Action Button */}
                      <button
                        onClick={() => {
                          if (event.slug) {
                            window.location.href = `/events/${event.slug.current}`;
                          }
                        }}
                        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 rounded-lg hover:from-purple-600/30 hover:to-pink-600/30 hover:border-purple-500/50 transition-all duration-300 group"
                      >
                        {event.status === "completed"
                          ? "View Gallery"
                          : "Learn More"}
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't Miss Our Upcoming Events
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and be part of the most exciting
            entrepreneurial gatherings in Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/events")}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Register for Events
            </button>
            <button
              onClick={() => (window.location.href = "/events")}
              className="inline-flex items-center px-8 py-4 border border-purple-500/50 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
