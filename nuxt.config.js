
export default {
  mode: 'universal',

  target: 'static',
  router: {
    base: '/'
  },

  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { 'http-equiv': 'Content-Language', content: 'pt-br' },
      { property: 'og:url', content: 'https://bildvitta.github.io/nave' },
      { property: 'og:title', content: 'Bild Vitta | NAVE' },
      { property: 'og:description', content: 'Desenhamos e lançamos produtos digitais que transformam empresas.' },
      { property: 'og:image', content: 'https://bildvitta.github.io/nave/_nuxt/img/og-image.jpg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'pt-BR' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/scss/base.scss',
    '~/assets/scss/_variables.scss',
    '~/assets/scss/_animations.scss',
    '~/assets/scss/_embed-responsive-aspect-ratio.scss',
    '~/assets/scss/_fonts.scss'
  ],

  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },

  plugins: [
    { src: '~/plugins/components.js' },
    { src: '~/plugins/modernizr-custom.js', mode: 'client' },
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-analytics', {
      id: 'G-W0E4V89RV3'
    }]
  ],

  modules: [
    '@nuxtjs/style-resources'
  ],

  build: {
  }
}
