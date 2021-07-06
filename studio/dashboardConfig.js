export default {
  widgets: [
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
                  buildHookId: '60e4708de9a94764856fc5eb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-32ua7i1q',
                  apiId: '5ef4746f-1e70-4d8a-8cbd-8d898775e843'
                },
                {
                  buildHookId: '60e4708ef342016726b45619',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s8i6n9qe',
                  apiId: '2c9a2c90-187f-4c6b-acd9-a5d3169baa14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gracjan-op/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s8i6n9qe.netlify.app', category: 'apps'}
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
