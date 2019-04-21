const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/cadekynaston/gatsby-bruner-dynamics.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
