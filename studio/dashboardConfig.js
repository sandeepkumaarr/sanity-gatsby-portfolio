export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ec612cb11108b8017aeeae7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-pv63ev9t',
                  apiId: '99d7137e-c935-4481-9f2f-d9c9642203f7'
                },
                {
                  buildHookId: '5ec612cc25280ac87393a73b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z4rwee7w',
                  apiId: 'fca9f959-d8e6-4be7-a94e-95e244a63211'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sandeepkumaarr/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z4rwee7w.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
