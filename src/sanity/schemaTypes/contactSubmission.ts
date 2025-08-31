import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSubmission",
  title: "Contact Form Submissions",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "email",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Submission Type",
      type: "string",
      options: {
        list: [
          { title: "General Inquiry", value: "general" },
          { title: "Event Registration", value: "event" },
          { title: "Partnership", value: "partnership" },
          { title: "Media Inquiry", value: "media" },
          { title: "Alumni Connect", value: "alumni" },
          { title: "Student Query", value: "student" },
        ],
      },
      initialValue: "general",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "in_progress" },
          { title: "Responded", value: "responded" },
          { title: "Resolved", value: "resolved" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "notes",
      title: "Internal Notes",
      type: "text",
      rows: 3,
      description: "Internal notes for tracking follow-up actions",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      description: "subject",
      submittedAt: "submittedAt",
    },
    prepare(selection) {
      const { title, subtitle, description, submittedAt } = selection;
      const date = new Date(submittedAt).toLocaleDateString();
      return {
        title: `${title} (${subtitle})`,
        subtitle: `${description || "No subject"} • ${date}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "submittedAtAsc",
      by: [{ field: "submittedAt", direction: "asc" }],
    },
    {
      title: "Status",
      name: "statusAsc",
      by: [
        { field: "status", direction: "asc" },
        { field: "submittedAt", direction: "desc" },
      ],
    },
  ],
});
