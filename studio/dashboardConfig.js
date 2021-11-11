export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618d98cd5982e888179255d1',
                  title: 'Sanity Studio',
                  name: 'isaacmorrier-com-studio',
                  apiId: 'd1596ed1-552e-4f9a-94c3-5e2c5c1c8113'
                },
                {
                  buildHookId: '618d98cdd1675e7be4ad4dab',
                  title: 'Blog Website',
                  name: 'isaacmorrier-com',
                  apiId: 'd82ccc43-710a-4aa4-b82c-c66dc71d425a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IsaacMorrier/isaacmorrier.com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://isaacmorrier-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
