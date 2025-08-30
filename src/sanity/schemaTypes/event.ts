import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'E-Summit', value: 'summit'},
          {title: 'Hackathon', value: 'hackathon'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Competition', value: 'competition'},
          {title: 'Seminar', value: 'seminar'},
          {title: 'Networking', value: 'networking'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Event Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Event Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'highlights',
      title: 'Event Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'participants',
      title: 'Number of Participants',
      type: 'number',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Speaker Name'},
            {name: 'role', type: 'string', title: 'Role/Designation'},
            {name: 'company', type: 'string', title: 'Company'},
            {name: 'image', type: 'image', title: 'Speaker Image'},
            {name: 'bio', type: 'text', title: 'Biography'},
          ],
        },
      ],
    }),
    defineField({
      name: 'sponsors',
      title: 'Event Sponsors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Sponsor Name'},
            {name: 'logo', type: 'image', title: 'Sponsor Logo'},
            {name: 'website', type: 'url', title: 'Website'},
            {name: 'category', type: 'string', title: 'Sponsor Category'},
          ],
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      description: 'Show this event prominently on the homepage',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order of events on the website',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      const date = new Date(subtitle).toLocaleDateString()
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
})
