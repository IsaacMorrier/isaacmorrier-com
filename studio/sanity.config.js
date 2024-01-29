import { defineConfig } from "sanity"
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'
import deskStructure from "./deskStructure"
import { dashboardTool } from "@sanity/dashboard"
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list"
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify"
import { Logo } from './plugins/Logo'


export default defineConfig({
  projectId: "guwsuxij",
  dataset: "production",
  plugins: [
    structureTool({
      structure: deskStructure
    }),
    dashboardTool({
      widgets: [
        documentListWidget({
          title: 'Last edited',
          order: '_updatedAt desc',
          limit: 10,
          types: ['project', 'post']
        }),
        netlifyWidget({
          title: 'Netlify Deploys',
          sites: [
            {
              buildHookId: '618d98cd5982e888179255d1',
              title: 'Sanity Studio',
              name: 'isaacmorrier-com-studio',
              apiId: 'd1596ed1-552e-4f9a-94c3-5e2c5c1c8113'
            },
            {
              buildHookId: '618d98cdd1675e7be4ad4dab',
              title: 'isaacmorrier.com',
              name: 'isaacmorrier-com',
              apiId: 'd82ccc43-710a-4aa4-b82c-c66dc71d425a'
            }
          ]
        })
      ]
    }),
    visionTool()
  ],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
    },
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo
    }
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'siteSettings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'siteSettings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});