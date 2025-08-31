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
  getAllEvents: `*[_type == "event"] | order(date desc){
    _id,
    title,
    description,
    date,
    endDate,
    location,
    participants,
    category,
    status,
    featured,
    image,
    highlights,
    slug,
    gallery,
    speakers,
    sponsors
  }`,
  getUpcomingEvents: `*[_type == "event" && status == "upcoming"] | order(date asc)`,
  getPastEvents: `*[_type == "event" && status == "completed"] | order(date desc)`,
  getFeaturedEvents: `*[_type == "event" && featured == true] | order(date desc)[0...3]`,
  getEventBySlug: (slug: string) =>
    `*[_type == "event" && slug.current == "${slug}"][0]{
      ...,
      speakers[]-> {
        _id,
        name,
        designation,
        company,
        bio,
        image,
        linkedin,
        twitter,
        expertise[]
      },
      sponsors[]-> {
        _id,
        name,
        logo,
        website,
        category,
        description
      }
    }`,

  // Sponsor queries
  getAllSponsors: `*[_type == "sponsor"] | order(order asc, name asc) {
    _id,
    name,
    logo {
      asset -> {
        _id,
        url
      },
      alt
    },
    category,
    website,
    description,
    yearPartnered,
    active,
    featured,
    order
  }`,
  getFeaturedSponsors: `*[_type == "sponsor" && featured == true] | order(order asc)[0...8] {
    _id,
    name,
    logo {
      asset -> {
        _id,
        url
      },
      alt
    },
    category,
    website,
    description,
    yearPartnered,
    active
  }`,
  getActiveSponsors: `*[_type == "sponsor" && active == true] | order(order asc, name asc) {
    _id,
    name,
    logo {
      asset -> {
        _id,
        url
      },
      alt
    },
    category,
    website,
    description,
    yearPartnered
  }`,
  getSponsorsByCategory: (category: string) =>
    `*[_type == "sponsor" && category == "${category}"] | order(order asc, name asc)`,

  // Speaker queries
  getAllSpeakers: `*[_type == "speaker"] | order(order asc, name asc) {
    _id,
    name,
    role,
    company,
    bio,
    image {
      asset -> {
        _id,
        url
      },
      alt
    },
    socialMedia,
    expertise[],
    achievements[],
    testimonial,
    eventsSpokeAt[]-> {
      _id,
      title,
      slug
    },
    featured,
    order
  }`,
  getFeaturedSpeakers: `*[_type == "speaker" && featured == true] | order(order asc)[0...6] {
    _id,
    name,
    role,
    company,
    bio,
    image {
      asset -> {
        _id,
        url
      },
      alt
    },
    socialMedia,
    expertise[],
    achievements[],
    testimonial,
    eventsSpokeAt[]-> {
      _id,
      title,
      slug
    }
  }`,

  // Site settings
  getSiteSettings: `*[_type == "siteSettings"][0]`,
};
