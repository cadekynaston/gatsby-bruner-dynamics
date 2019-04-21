import theme from './theme'

// const media = Object.keys(theme.mediaSizes).reduce((all, key) => {
//   all[key] = (...styles) => (`
//     @media (max-width: ${theme.mediaSizes[key]}px) {
//       ${styles};
//     }
//   `)
//   return all
// }, {});

const media = Object.keys(theme.mediaSizes).reduce((all, key) => {
  all[key] = `@media (max-width: ${theme.mediaSizes[key]}px)`
  return all
}, {});

export default media;

