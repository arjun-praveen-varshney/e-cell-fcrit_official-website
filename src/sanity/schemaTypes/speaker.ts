import { defineField, defineType } from "sanity";

export default defineType({
  name: "speaker",
  title: "Speakers",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Speaker Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Speaker Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role/Designation",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company/Organization",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "expertise",
      title: "Areas of Expertise",
      type: "array",
      of: [{ type: "string" }],
      description:
        "Add areas of expertise (e.g., Fintech, AI, Startup Funding)",
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "website", type: "url", title: "Personal Website" },
      ],
    }),
    defineField({
      name: "achievements",
      title: "Notable Achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "List notable achievements or awards",
    }),
    defineField({
      name: "eventsSpokeAt",
      title: "Events Spoke At",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "event" }],
        },
      ],
      description: "Events where this speaker has presented",
    }),
    defineField({
      name: "featured",
      title: "Featured Speaker",
      type: "boolean",
      description: "Show this speaker prominently on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Used to control the order of speakers (lower numbers appear first)",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial about E-Cell",
      type: "text",
      rows: 3,
      description: "What the speaker says about E-Cell FCRIT",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
});
