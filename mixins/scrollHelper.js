import scrollToElement from 'scroll-to-element'

export default {
  methods: {
    scrollTo (anchor) {
      const element = document.querySelector(anchor)
      const headerOffset = document.querySelector('.nave-header').offsetHeight

      scrollToElement(element, {
        duration: 100,
        offset: -headerOffset
      })
    }
  }
}
