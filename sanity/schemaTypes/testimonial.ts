import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role/Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Company/Organization",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial Text",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
      options: {
        list: [
          { title: "1 Star", value: 1 },
          { title: "2 Stars", value: 2 },
          { title: "3 Stars", value: 3 },
          { title: "4 Stars", value: 4 },
          { title: "5 Stars", value: 5 },
        ],
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Speaker", value: "speaker" },
          { title: "Alumni", value: "alumni" },
          { title: "Student", value: "student" },
          { title: "Industry Expert", value: "expert" },
          { title: "Mentor", value: "mentor" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Show this testimonial prominently on the homepage",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to control the order of testimonials",
    }),
    defineField({
      name: "eventRelated",
      title: "Related Event",
      type: "reference",
      to: [{ type: "event" }],
      description: "If this testimonial is related to a specific event",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
