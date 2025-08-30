import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ queries for fetching data
export const queries = {
  // Team queries
  getAllTeamMembers: `*[_type == "teamMember"] | order(order asc, name asc)`,
  getCurrentTeam: `*[_type == "teamMember" && memberType == "current"] | order(order asc, name asc)`,
  getPastTeam: `*[_type == "teamMember" && memberType == "past"] | order(order asc, name asc)`,
  getAdvisors: `*[_type == "teamMember" && memberType == "advisor"] | order(order asc, name asc)`,

  // Event queries
  getAllEvents: `*[_type == "event"] | order(date desc)`,
  getUpcomingEvents: `*[_type == "event" && status == "upcoming"] | order(date asc)`,
  getPastEvents: `*[_type == "event" && status == "completed"] | order(date desc)`,
  getFeaturedEvents: `*[_type == "event" && featured == true] | order(date desc)[0...3]`,
  getEventBySlug: (slug: string) =>
    `*[_type == "event" && slug.current == "${slug}"][0]`,

  // Blog queries
  getAllBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc)`,
  getFeaturedBlogPosts: `*[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3]`,
  getBlogPostBySlug: (
    slug: string
  ) => `*[_type == "blogPost" && slug.current == "${slug}"][0]{
    ...,
    author->
  }`,

  // Testimonial queries
  getAllTestimonials: `*[_type == "testimonial"] | order(order asc, _createdAt desc)`,
  getFeaturedTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc)[0...6]`,

  // Site settings
  getSiteSettings: `*[_type == "siteSettings"][0]`,
};
