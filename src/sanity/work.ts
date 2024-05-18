import { defineField, defineType } from 'sanity'

export const workSchema = defineType({
  title: 'Works',
  name: 'work',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      title: 'Is Case Study',
      name: 'isCaseStudy',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      title: 'Quick View URL',
      name: 'quickViewUrL',
      type: 'url',
      hidden: ({ document }) => {
        if (document!.isCaseStudy) {
          return true
        }

        return false
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'thumbnail',
    },
  },
})
