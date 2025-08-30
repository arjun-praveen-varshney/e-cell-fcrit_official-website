import { defineField, defineType } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          { title: "Computer Engineering", value: "Computer Engineering" },
          { title: "Information Technology", value: "Information Technology" },
          {
            title: "Electronics & Telecommunication",
            value: "Electronics & Telecommunication",
          },
          {
            title: "Electronics Engineering",
            value: "Electronics Engineering",
          },
          { title: "Mechanical Engineering", value: "Mechanical Engineering" },
          { title: "Civil Engineering", value: "Civil Engineering" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Academic Year",
      type: "string",
      options: {
        list: [
          { title: "First Year", value: "First Year" },
          { title: "Second Year", value: "Second Year" },
          { title: "Third Year", value: "Third Year" },
          { title: "Final Year", value: "Final Year" },
          { title: "Faculty", value: "Faculty" },
          { title: "Alumni", value: "Alumni" },
        ],
      },
    }),
    defineField({
      name: "memberType",
      title: "Member Type",
      type: "string",
      options: {
        list: [
          { title: "Current Team", value: "current" },
          { title: "Past Member", value: "past" },
          { title: "Faculty Advisor", value: "advisor" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "achievements",
      title: "Achievements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "currentRole",
      title: "Current Role (for Alumni)",
      type: "string",
    }),
    defineField({
      name: "tenure",
      title: "Tenure (for Past Members)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to control the order of team members on the website",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "image",
    },
  },
});
