module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1em'
    },

    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },

    extend: {
      gradientColorStops: {
        primary: '#006DD2',
        secondary: '#062B55',
        'primary-400': '#1785EC',
        'primary-500': '#8A46EA',
        'secondary-500': '#F26E36',
        orange: '#D95720',
        'orange-400': '#F58B5E'
      },

      backgroundColor: {
        primary: '#006DD2',
        'primary-100': '#CCE6FF',
        'primary-400': '#1785EC',
        'primary-700': '#004392',
        secondary: '#1b162d',
        'secondary-300': '#F7A886',
        'secondary-500': '#F26E36',
        gray: '#F1F4F6',
        'gray-400': '#C4C4C4',
        'orange-700': '#D95721'
      },

      boxShadow: {
        floating: '0 2px 20px 10px rgba(124, 52, 239, .2)'
      },

      textColor: {
        primary: '#006DD2',
        'primary-200': '#66B5FF',
        'primary-300': '#2998FF',
        'primary-500': '#006DD2',
        'primary-700': '#004392',
        'primary-800': '#01336C',
        'purple-100': '#7C34EF',
        'purple-200': '#6d2ed3',
        'purple-300': '#6028ba',
        'purple-400': '#6028ba',
        'purple-500': '#461d87',
        'purple-600': '#38186d',
        'purple-700': '#2b1254',
        'purple-800': '#1e0c3a',
        'purple-900': '#110721',
        'secondary-500': '#F26E36'
      },

      borderColor: {
        'secondary-500': '#F26E36'
      },

      letterSpacing: {
        widest: '0.125em'
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },

      zIndex: {
        2: 2
      },

      height: {
        70: '21rem'
      },

      width: {
        70: '21rem',
        350: '350px'
      }
    }
  },

  variants: {
    aspectRatio: ['responsive']
  },

  plugins: [
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio')
  ],

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
