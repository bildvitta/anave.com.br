export default {
  abstract: true,

  props: {
    tag: {
      type: String,
      default: 'div'
    },

    keep: {
      default: false,
      type: Boolean
    },

    root: {
      default: () => null,
      type: Object
    },

    rootMargin: {
      default: '',
      type: String
    },

    threshold: {
      default: 0,
      type: [Array, Number]
    }
  },

  data () {
    return {
      isVisible: false
    }
  },

  mounted () {
    this.observer = new IntersectionObserver((entries) => {
      this.$emit(entries[0].isIntersecting ? 'enter' : 'leave', entries[0])
      this.$emit('change', entries[0])
    }, {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    })

    this.$nextTick(() => {
      this.observer.observe(this.$el)
    })
  },

  destroyed () {
    this.$emit('destroyed')

    if (this.observer) {
      this.observer.disconnect()
    }
  },

  render () {
    return this.$slots.default ? this.$slots.default[0] : null
  }
}
