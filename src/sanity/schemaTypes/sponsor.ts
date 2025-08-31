import { defineField, defineType } from "sanity";

export default defineType({
  name: "sponsor",
  title: "Sponsors",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Sponsor Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Sponsor Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "category",
      title: "Sponsor Category",
      type: "string",
      options: {
        list: [
          { title: "Title Sponsor", value: "title" },
          { title: "Platinum Sponsor", value: "platinum" },
          { title: "Gold Sponsor", value: "gold" },
          { title: "Silver Sponsor", value: "silver" },
          { title: "Bronze Sponsor", value: "bronze" },
          { title: "Knowledge Partner", value: "knowledge" },
          { title: "Media Partner", value: "media" },
          { title: "Community Partner", value: "community" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Featured Sponsor",
      type: "boolean",
      description: "Show this sponsor prominently on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Used to control the order of sponsors (lower numbers appear first)",
    }),
    defineField({
      name: "yearPartnered",
      title: "Year Partnered",
      type: "number",
      description: "Year when the sponsorship started",
    }),
    defineField({
      name: "active",
      title: "Currently Active",
      type: "boolean",
      description: "Is this sponsorship currently active?",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "logo",
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle
          ? `${subtitle.charAt(0).toUpperCase() + subtitle.slice(1)} Sponsor`
          : "",
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
      title: "Category",
      name: "categoryAsc",
      by: [
        { field: "category", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
  ],
});
