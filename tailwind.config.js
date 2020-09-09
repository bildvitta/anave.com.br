module.exports = {
  theme: {
    container: {
      center: true,
      padding: '2em'
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#1b162d;'
    }),

    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    }

  },

  variants: {
  },

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
