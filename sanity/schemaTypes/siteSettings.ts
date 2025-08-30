import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "establishedYear",
      title: "Established Year",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "email",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "youtube", type: "url", title: "YouTube" },
      ],
    }),
    defineField({
      name: "heroSlides",
      title: "Hero Section Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Slide Title" },
            { name: "subtitle", type: "string", title: "Slide Subtitle" },
            { name: "description", type: "text", title: "Description" },
            { name: "image", type: "image", title: "Background Image" },
            { name: "ctaText", type: "string", title: "CTA Button Text" },
            { name: "ctaLink", type: "string", title: "CTA Button Link" },
          ],
        },
      ],
    }),
    defineField({
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        { name: "mission", type: "text", title: "Mission Statement" },
        { name: "vision", type: "text", title: "Vision Statement" },
        {
          name: "values",
          type: "array",
          of: [{ type: "string" }],
          title: "Core Values",
        },
      ],
    }),
    defineField({
      name: "statistics",
      title: "Statistics",
      type: "object",
      fields: [
        {
          name: "studentsImpacted",
          type: "number",
          title: "Students Impacted",
        },
        { name: "eventsOrganized", type: "number", title: "Events Organized" },
        {
          name: "startupsIncubated",
          type: "number",
          title: "Startups Incubated",
        },
        {
          name: "industryPartners",
          type: "number",
          title: "Industry Partners",
        },
        { name: "communityReach", type: "number", title: "Community Reach" },
        {
          name: "fundingFacilitated",
          type: "string",
          title: "Funding Facilitated",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "logo",
    },
  },
});
