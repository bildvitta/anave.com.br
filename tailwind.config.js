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
    },

    screens: {
      lg: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      md: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      sm: { max: '767px' }
      // => @media (max-width: 639px) { ... }
    }

  },

  variants: {
    display: ['responsive']
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
