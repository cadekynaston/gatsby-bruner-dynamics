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

  // @mixin small-only {
  //   @media screen and (min-width: 0px) and (max-width: 640px) {
  //     @content;
  //   }
  // }

  if (theme.mediaSizes[key].length === 2) {
    all[key] = `@media only screen and (min-width: ${theme.mediaSizes[key][0]}px) and (max-width: ${theme.mediaSizes[key][1]}px)`
  } else {
    all[key] = `@media only screen and (max-width: ${theme.mediaSizes[key]}px)`
  }


  return all
}, {});

export default media;

