export default {
  name: "linkedinPost",
  title: "LinkedIn Posts",
  type: "document",
  icon: () => "🔗",
  fields: [
    {
      name: "title",
      title: "Post Title",
      type: "string",
      description: "A brief title for this LinkedIn post",
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Brief summary of the post for previews",
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: "content",
      title: "Post Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
      description: "Rich text content with images, links, and formatting",
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      description: "When this post was published",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "engagement",
      title: "Engagement Metrics",
      type: "object",
      fields: [
        {
          name: "likes",
          title: "Likes",
          type: "number",
          initialValue: 0,
        },
        {
          name: "comments",
          title: "Comments",
          type: "number",
          initialValue: 0,
        },
        {
          name: "shares",
          title: "Shares",
          type: "number",
          initialValue: 0,
        },
      ],
    },
    {
      name: "tags",
      title: "Hashtags",
      type: "array",
      of: [{ type: "string" }],
      description: "Add hashtags (without #)",
      validation: (Rule: any) => Rule.max(10),
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Main image for the post",
    },
    {
      name: "linkedinUrl",
      title: "LinkedIn Post URL",
      type: "url",
      description: "Direct link to the LinkedIn post (optional)",
    },
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      description: "Show this post prominently on the website",
      initialValue: false,
    },
    {
      name: "category",
      title: "Post Category",
      type: "string",
      options: {
        list: [
          { title: "Event Update", value: "event" },
          { title: "Achievement", value: "achievement" },
          { title: "Workshop/Training", value: "workshop" },
          { title: "Alumni Success", value: "alumni" },
          { title: "General Update", value: "general" },
          { title: "Competition/Challenge", value: "competition" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, subtitle, media, publishedAt }: any) {
      return {
        title: title,
        subtitle: `${subtitle} • ${new Date(publishedAt).toLocaleDateString()}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date, Old",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
};
