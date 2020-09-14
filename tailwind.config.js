module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1em'
    },

    extend: {
      gradientColorStops: {
        primary: '#7F2BED',
        secondary: '#401677',
        'primary-500': '#8A46EA',
        'secondary-500': '#452375'
      },

      backgroundColor: {
        primary: '#7F2BED',
        secondary: '#1b162d'
      },

      textColor: {
        'purple-100': '#7C34EF',
        'purple-200': '#6d2ed3',
        'purple-300': '#6028ba',
        'purple-400': '#6028ba',
        'purple-500': '#461d87',
        'purple-600': '#38186d',
        'purple-700': '#2b1254',
        'purple-800': '#1e0c3a',
        'purple-900': '#110721'
      },

      letterSpacing: {
        widest: '0.125em'
      },

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
}
