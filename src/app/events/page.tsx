import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { client, queries, urlFor } from "@/sanity/lib/client";
import Image from "next/image";
import { Calendar, MapPin, Users, Trophy, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Events | E-Cell FCRIT",
  description:
    "Explore all past and upcoming events organized by E-Cell FCRIT including E-Summit, Ideathon, Agnethon, and workshops.",
  keywords:
    "E-Cell events, FCRIT events, entrepreneurship events, E-Summit, Ideathon, Agnethon, startup events",
};

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

async function getEvents(): Promise<Event[]> {
  try {
    const events = await client.fetch(queries.getAllEvents);
    return events || [];
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export default async function EventsPage() {
  const events = await getEvents();
  const categories = ["all", "summit", "hackathon", "workshop", "competition"];

  const getEventsByCategory = (category: string) => {
    if (category === "all") return events;
    return events.filter((event) => event.category === category);
  };

  const upcomingEvents = events.filter((event) => event.status === "upcoming");
  const pastEvents = events.filter((event) => event.status === "completed");

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
            <Trophy className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Our Events</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Events & Initiatives
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From flagship events like E-Summit to hands-on workshops and
            hackathons, we create platforms for entrepreneurs to learn, connect,
            and innovate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {events.length}+
              </div>
              <div className="text-gray-300">Events Organized</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">5000+</div>
              <div className="text-gray-300">Participants</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-300">Industry Speakers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Upcoming Events
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event._id}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    {event.image ? (
                      <Image
                        src={urlFor(event.image).width(400).height(300).url()}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30"></div>
                    )}
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Upcoming
                    </div>
                  </div>

                  <div className="p-6">
                    {event.category && (
                      <div className="flex items-center gap-2 text-purple-400 text-sm mb-2">
                        <span className="capitalize">{event.category}</span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Calendar className="h-4 w-4 text-purple-400" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <MapPin className="h-4 w-4 text-purple-400" />
                        {event.location}
                      </div>
                      {event.participants && (
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="h-4 w-4 text-purple-400" />
                          {event.participants} participants
                        </div>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2">
                      Register Now
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Past Events
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div
                key={event._id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  {event.image ? (
                    <Image
                      src={urlFor(event.image).width(400).height(300).url()}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30"></div>
                  )}
                  <div className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </div>
                  {event.category && (
                    <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {event.category}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="h-4 w-4 text-purple-400" />
                      {event.location}
                    </div>
                    {event.participants && (
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Users className="h-4 w-4 text-purple-400" />
                        {event.participants} participants
                      </div>
                    )}
                  </div>

                  {event.highlights && event.highlights.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">
                        Highlights:
                      </h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {event.highlights
                          .slice(0, 2)
                          .map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      if (event.slug) {
                        window.location.href = `/events/${event.slug.current}`;
                      }
                    }}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium py-2 px-4 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Events
            </h2>
            <p className="text-gray-300 mb-6">
              Be the first to know about our upcoming events, workshops, and
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Join Our Newsletter
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/fcrit-entrepreneurship-cell/",
                    "_blank"
                  )
                }
                className="border border-purple-500 text-purple-400 font-medium py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300"
              >
                Follow on Social Media
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
