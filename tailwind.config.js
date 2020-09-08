module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1em'
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
