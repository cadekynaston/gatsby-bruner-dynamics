const theme = {

  colors: {
    white: '#fff',
    black: '#000',
    blue: '#009FE3',
    green: '#99AF21',
    gray: '#8B8F95',
    borderGray: '#CBCDD1',
    legalGray: '#7D8086',
    dark: '#202E39',
    lightGray: '#F6F6F6',
    red: '#CF4520'
  },

  mediaSizes: {
    small: {
      selector: 'max-width',
      values: 640
    },
    medium: {
      selector: 'max-width',
      values: 1023
    },
    mediumUp: {
      selector: 'min-width',
      values: 640
    },
    mediumOnly: {
      values: [640, 1023]
    },
    largeUp: {
      selector: 'min-width',
      values: 1024
    },
  },

  maxWidth: '1032px',
  padding: '20px',
  margin: '20px',

  fonts: {
    MavenPro: 'Maven Pro, sans-serif',
    SourceSansPro: 'Source Sans Pro, sans-serif',
  },

};

export default theme
