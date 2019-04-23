import theme from './theme'

const media = Object.keys(theme.mediaSizes).reduce((all, key) => {

  if (theme.mediaSizes[key].values.length === 2) {
    all[key] = `@media only screen and (min-width: ${theme.mediaSizes[key].values[0]}px) and (max-width: ${theme.mediaSizes[key].values[1]}px)`
  } else {
    all[key] = `@media only screen and (${theme.mediaSizes[key].selector}: ${theme.mediaSizes[key].values}px)`
  }

  return all
}, {});

export default media;

