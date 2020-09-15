import scrollToElement from 'scroll-to-element'

export default {
  methods: {
    scrollTo (anchor) {
      const element = document.querySelector(anchor)

      scrollToElement(element, {
        duration: 100
      })
    }
  }
}
