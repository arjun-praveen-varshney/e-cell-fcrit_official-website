"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client, queries } from "@/sanity/lib/client";
import { Sponsor } from "@/types";
import { ExternalLink, Award, Users, Building } from "lucide-react";

export function Sponsors() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const data = await client.fetch(queries.getFeaturedSponsors);
        setSponsors(data);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "title":
      case "platinum":
        return <Award className="w-5 h-5" />;
      case "knowledge":
        return <Building className="w-5 h-5" />;
      case "community":
        return <Users className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "title":
        return "from-yellow-400 to-orange-500";
      case "platinum":
        return "from-gray-300 to-gray-500";
      case "gold":
        return "from-yellow-300 to-yellow-500";
      case "silver":
        return "from-gray-200 to-gray-400";
      case "bronze":
        return "from-orange-300 to-orange-500";
      case "knowledge":
        return "from-blue-400 to-blue-600";
      case "media":
        return "from-purple-400 to-purple-600";
      case "community":
        return "from-green-400 to-green-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Partners
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-800 rounded-xl p-4 animate-pulse"
                >
                  <div className="w-full h-20 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const groupedSponsors = sponsors.reduce(
    (acc, sponsor) => {
      if (!acc[sponsor.category]) {
        acc[sponsor.category] = [];
      }
      acc[sponsor.category].push(sponsor);
      return acc;
    },
    {} as Record<string, Sponsor[]>
  );

  const categoryOrder = [
    "title",
    "platinum",
    "gold",
    "silver",
    "bronze",
    "knowledge",
    "media",
    "community",
  ];
  const sortedCategories = categoryOrder.filter((cat) => groupedSponsors[cat]);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/5 to-pink-900/5"></div>
        <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Partners
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Proud to collaborate with industry leaders who support innovation
            and entrepreneurship
          </p>
        </div>

        {sponsors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No sponsors to display at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {sortedCategories.map((category) => (
              <div key={category} className="text-center">
                {/* Category Header */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div
                    className={`p-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}
                  >
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-2xl font-bold text-white capitalize">
                    {category === "title"
                      ? "Title Sponsor"
                      : `${category} Partners`}
                  </h3>
                </div>

                {/* Sponsors Grid */}
                <div
                  className={`grid gap-6 ${
                    category === "title"
                      ? "grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                      : category === "platinum"
                        ? "grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto"
                        : "grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
                  }`}
                >
                  {groupedSponsors[category].map((sponsor) => (
                    <div
                      key={sponsor._id}
                      className={`group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 ${
                        category === "title"
                          ? "p-8"
                          : category === "platinum"
                            ? "p-6"
                            : "p-4"
                      }`}
                    >
                      {/* Sponsor Logo */}
                      <div
                        className={`relative mb-4 ${
                          category === "title"
                            ? "h-24"
                            : category === "platinum"
                              ? "h-20"
                              : "h-16"
                        }`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={sponsor.logo.asset.url}
                            alt={sponsor.logo.alt || sponsor.name}
                            fill
                            className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Sponsor Name */}
                      <h4
                        className={`font-semibold text-white mb-2 ${
                          category === "title"
                            ? "text-xl"
                            : category === "platinum"
                              ? "text-lg"
                              : "text-base"
                        }`}
                      >
                        {sponsor.name}
                      </h4>

                      {/* Description */}
                      {sponsor.description &&
                        (category === "title" || category === "platinum") && (
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {sponsor.description}
                          </p>
                        )}

                      {/* Partnership Year */}
                      {sponsor.yearPartnered && (
                        <div className="text-xs text-gray-500 mb-3">
                          Partner since {sponsor.yearPartnered}
                        </div>
                      )}

                      {/* Website Link */}
                      {sponsor.website && (
                        <Link
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm transition-colors"
                        >
                          Visit Website
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Become a Partner CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Become Our Partner
            </h3>
            <p className="text-gray-300 mb-6">
              Join hands with E-Cell FCRIT to support the next generation of
              entrepreneurs and innovators.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
            >
              Partner With Us
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
