module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1em'
    },

    gradientColorStops: theme => ({
      primary: '#7F2BED',
      secondary: '#401677',
      'primary-hover': '#8A46EA',
      'secondary-hover': '#452375'
    }),

    textColor: theme => ({
      white: '#fff',
      'nave-purple': '#7C34EF'
    }),

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }
  },

  variants: {},

  plugins: [],

  purge: {
    enabled: process.env.NODE_ENV === 'production',

    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
