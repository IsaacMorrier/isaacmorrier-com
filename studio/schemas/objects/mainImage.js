// import sanityClient from 'part:@sanity/base/client'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: "guwsuxij",
  dataset: "production",
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_SECRET_TOKEN // Must have write access
})

export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "filename",
      type: "slug",
      title: "Filename",
      options: {
          source: async (options) => {
            const parent = options.parent.asset
            const fileName = await client.fetch(`*[_type == 'sanity.imageAsset' && _id == $parentId][0].originalFilename`, { parentId: parent._ref})
            return fileName
        },
        slugify: source => source
      }
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required()
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          {title: 'Front Page Full', value: 'grid-block--fp-full'},
          {title: 'Front Page Half', value: 'grid-block--fp-half'},
          {title: 'Full', value: 'grid-block--full'},
          {title: 'Half', value: 'grid-block--half'},
          {title: 'Half Desktop', value: 'grid-block--half-md'},
          {title: 'Half Offset', value: 'grid-block--half-offset'},
          {title: 'Half Offset desktop', value: 'grid-block--half-offset-md'},
          {title: 'Half Push', value: 'grid-block--half-push'},
          {title: 'Half Push Desktop', value: 'grid-block--half-push-md'},
          {title: 'Half Centered', value: 'grid-block--half-centered'},
          {title: 'Half Centered Desktop', value: 'grid-block--half-centered-md'},
        ],
        layout: 'radio'
      },
      initialValue: 'col-12'

    }
  ],
  preview: {
    select: {
      filename: 'filename.current',
      imageUrl: 'asset.url',
      caption: 'caption',
      alt: 'alt',
      layout: 'layout'
    },
    prepare(selection) {
      const {filename, imageUrl, layout, caption, alt} = selection
      return {
        imageUrl: imageUrl,
        title: caption ? `${filename + ' | ' + layout + ' | ' + caption}` : filename + ' | ' + layout,
        subtitle: alt
      }
    }
  }
}
