export default {
  computed: {
    rootMargin () {
      return `${this.windowSize < 1024 ? '58px' : '88px'} 0px 0px 0px`
    }
  },

  data () {
    return {
      windowSize: 0,
      renders: {
        youtubeEmbed: false,
        ourTeam: false,
        spaceShip: false,
        vacancies: false,
        believe: false
      }
    }
  },

  mounted () {
    window.addEventListener('resize', this.setWindowWidth)
    this.setWindowWidth()
  },

  destroy () {
    window.removeEventListener('resize', this.setWindowWidth)
  },

  methods: {
    setWindowWidth () {
      this.windowSize = window.innerWidth
    },

    onEnter (model) {
      this.renders[model] = true
    }
  }
}
