"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowLeft, ExternalLink } from "lucide-react";
import { client, urlFor } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const slug = params.slug as string;
        const fetchedEvent = await client.fetch(
          `*[_type == "event" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            description,
            date,
            endDate,
            location,
            participants,
            category,
            status,
            featured,
            image {
              asset -> {
                _id,
                url
              },
              alt
            },
            highlights,
            content,
            gallery[] {
              asset -> {
                _id,
                url
              },
              alt
            },
            speakers[]-> {
              _id,
              name,
              designation,
              company,
              bio,
              image {
                asset -> {
                  _id,
                  url
                },
                alt
              },
              linkedin,
              twitter,
              expertise[]
            },
            sponsors[]-> {
              _id,
              name,
              logo {
                asset -> {
                  _id,
                  url
                },
                alt
              },
              website,
              category,
              description
            },
            registrationLink
          }`,
          { slug }
        );

        if (fetchedEvent) {
          console.log("Fetched event data:", fetchedEvent);
          setEvent(fetchedEvent);
        } else {
          console.log("No event found for slug:", slug);
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching event:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchEvent();
    }
  }, [params.slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "Date TBD";

    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Date TBD";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Loading Event...
              </span>
            </h1>
            <div className="animate-pulse">
              <div className="w-full h-96 bg-gray-800 rounded-xl mb-8"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-800 rounded w-3/4 mx-auto"></div>
                <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
                <div className="h-32 bg-gray-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !event) {
    return (
      <div className="min-h-screen bg-gray-950">
        <Navbar />
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Event Not Found
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={() => router.push("/events")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Back to Events
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      <div className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative">
          {event.image && event.image.asset && (
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <Image
                src={urlFor(event.image).width(1200).height(600).url()}
                alt={event.title || "Event"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
            </div>
          )}

          <div className="relative max-w-7xl mx-auto px-4 -mt-32 lg:-mt-48">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-wrap gap-3 mb-6">
                {event.category && (
                  <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    {event.category}
                  </span>
                )}
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium border ${
                    event.status === "upcoming"
                      ? "bg-green-500/20 text-green-300 border-green-500/30"
                      : "bg-gray-500/20 text-gray-300 border-gray-500/30"
                  }`}
                >
                  {event.status === "upcoming" ? "Upcoming" : "Completed"}
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {event.title || "Event Title"}
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl">
                {event.description || "Event description coming soon."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {event.date && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Date & Time</div>
                      <div className="text-white font-medium">
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>
                )}

                {event.location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="text-white font-medium">
                        {event.location}
                      </div>
                    </div>
                  </div>
                )}

                {event.participants && (
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm text-gray-400">Participants</div>
                      <div className="text-white font-medium">
                        {event.participants}+
                      </div>
                    </div>
                  </div>
                )}

                {event.registrationLink && event.status === "upcoming" && (
                  <div className="flex items-center">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                    >
                      Register Now
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {event.content && (
                  <div className="prose prose-invert prose-purple max-w-none">
                    <PortableText value={event.content} />
                  </div>
                )}

                {/* Highlights */}
                {event.highlights && event.highlights.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Event Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {event.highlights.map(
                        (highlight: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span className="text-gray-300">{highlight}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {event.gallery && event.gallery.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Event Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {event.gallery.map((image: any, index: number) => {
                        // Skip if image is null or doesn't have asset
                        if (!image || !image.asset) return null;

                        return (
                          <div
                            key={index}
                            className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                          >
                            <Image
                              src={urlFor(image).width(400).height(400).url()}
                              alt={image.alt || `Gallery image ${index + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="text-white text-sm">
                                View Full Size
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Speakers */}
                {event.speakers && event.speakers.length > 0 && (
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6">
                      Featured Speakers
                    </h3>
                    <div className="space-y-4">
                      {event.speakers.map((speaker: any, index: number) => {
                        // Skip if speaker is null or undefined
                        if (!speaker) return null;

                        return (
                          <div key={index} className="flex gap-4">
                            {speaker.image && speaker.image.asset && (
                              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src={urlFor(speaker.image)
                                    .width(80)
                                    .height(80)
                                    .url()}
                                  alt={speaker.name || "Speaker"}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            )}
                            <div>
                              <h4 className="font-semibold text-white">
                                {speaker.name || "Unknown Speaker"}
                              </h4>
                              {speaker.designation && (
                                <p className="text-sm text-purple-400">
                                  {speaker.designation}
                                </p>
                              )}
                              {speaker.company && (
                                <p className="text-sm text-gray-400">
                                  {speaker.company}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Sponsors */}
                {event.sponsors && event.sponsors.length > 0 && (
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6">
                      Event Sponsors
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {event.sponsors.map((sponsor: any, index: number) => {
                        // Skip if sponsor is null or undefined
                        if (!sponsor) return null;

                        return (
                          <div
                            key={index}
                            className="relative aspect-square bg-white rounded-lg p-4 flex items-center justify-center"
                          >
                            {sponsor.logo && sponsor.logo.asset && (
                              <Image
                                src={urlFor(sponsor.logo)
                                  .width(120)
                                  .height(120)
                                  .url()}
                                alt={sponsor.name || "Sponsor"}
                                width={80}
                                height={80}
                                className="object-contain"
                              />
                            )}
                            {(!sponsor.logo || !sponsor.logo.asset) && (
                              <span className="text-gray-500 text-sm text-center">
                                {sponsor.name || "Sponsor"}
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
