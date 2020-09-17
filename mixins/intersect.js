export default {
  data () {
    return {
      renders: {
        youtubeEmbed: false,
        ourTeam: false,
        spaceShip: false,
        vacancies: false,
        believe: false
      }
    }
  },

  methods: {
    onEnter (model) {
      this.renders[model] = true
    }
  }
}
