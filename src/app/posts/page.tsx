"use client";

import { useState, useEffect } from "react";
import { LinkedInService, type LinkedInPost } from "@/lib/linkedin";
import {
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Tag,
  Filter,
} from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/layout/Navbar";

const categories = [
  { title: "All", value: "all" },
  { title: "Events", value: "event" },
  { title: "Achievements", value: "achievement" },
  { title: "Workshops", value: "workshop" },
  { title: "Alumni Success", value: "alumni" },
  { title: "General", value: "general" },
  { title: "Competitions", value: "competition" },
];

export default function PostsPage() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const linkedinService = LinkedInService.getInstance();
        const fetchedPosts = await linkedinService.getCompanyPosts(20); // Get more posts for blog page
        setPosts(fetchedPosts);
        setFilteredPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory, posts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      event: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      achievement: "bg-green-500/20 text-green-300 border-green-500/30",
      workshop: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      alumni: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      general: "bg-gray-500/20 text-gray-300 border-gray-500/30",
      competition: "bg-red-500/20 text-red-300 border-red-500/30",
    };
    return colors[category as keyof typeof colors] || colors.general;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-gray-300 mt-4">Loading posts...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Latest Updates & Posts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest activities, achievements, and insights
            from the E-Cell community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                selectedCategory === category.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-800/50 text-gray-300 border-gray-700 hover:border-blue-500/50"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post._id}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={urlFor(post.featuredImage)
                        .width(400)
                        .height(250)
                        .url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Post Header */}
                  {!post.featuredImage && (
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                  )}

                  {/* Post Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Post Excerpt */}
                  {post.excerpt && (
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Date (if image exists) */}
                  {post.featuredImage && (
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.publishedAt)}
                    </div>
                  )}

                  {/* Hashtags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-blue-400 text-xs flex items-center gap-1"
                        >
                          <Tag className="w-2 h-2" />#{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Engagement Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.engagement.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.engagement.comments}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {post.engagement.shares}
                      </div>
                    </div>
                    <a
                      href={
                        post.linkedinUrl ||
                        "https://www.linkedin.com/company/fcrit-entrepreneurship-cell/posts/"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No posts found
              </h3>
              <p className="text-gray-400 mb-6">
                {selectedCategory === "all"
                  ? "No posts available yet."
                  : `No posts found in the "${categories.find((c) => c.value === selectedCategory)?.title}" category.`}
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All Posts
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Follow us on LinkedIn
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay connected for real-time updates and engage with our community
              on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/company/fcrit-entrepreneurship-cell/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
