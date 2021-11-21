import sanityClient from 'part:@sanity/base/client'
const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

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
          isHighlighted: true,
          source: async (docs, options) => {
            const parent = options.parent.asset
            const fileName = await client.fetch(`*[_type == 'sanity.imageAsset' && _id == $parentId][0].originalFilename`, { parentId: parent._ref})
            return fileName
        },
        slugify: source => source
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          {title: 'Front Page Full-width', value: 'col-10'},
          {title: 'Front Page Half-width', value: 'col-5'},
          {title: 'Full-width', value: 'col-12'},
          {title: 'Half-width', value: 'col-6'},
          {title: 'Half-width desktop, full-width mobile', value: 'col-12 col-md-6'},
          {title: 'Half-width offset', value: 'col-6 col-offset-6'},
          {title: 'Half-width offset desktop, full-width mobile', value: 'col-12 col-md-6 col-md-offset-6'},
          {title: 'Half-width centered', value: 'col-6 col-offset-3'},
          {title: 'Half-width centered desktop, full-width mobile', value: 'col-12 col-md-6 col-md-offset-3'},
        ],
        layout: 'radio',
        isHighlighted: true
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
