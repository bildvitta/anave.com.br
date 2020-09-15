<template>
  <a class="inline-block nave-link-button px-5 py-3"
     :class="linkButtonClasses"
     :href="link"
     @click="scrollTo(link)"
  >
    {{ label }}
  </a>
</template>

<script>
const backgroundColors = {
  primary: 'bg-gradient-to-r from-primary hover:from-primary-500 hover:to-secondary-500 to-secondary',
  white: 'bg-white'
}

const textColors = {
  primary: 'text-primary',
  white: 'text-white'
}

export default {
  props: {
    label: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    },

    rounded: {
      type: Boolean,
      default: true
    },

    textColor: {
      type: String,
      default: 'white'
    },

    bgColor: {
      type: String,
      default: 'primary'
    }
  },

  computed: {
    borderRadius () {
      return this.rounded && 'rounded-lg'
    },

    linkButtonClasses () {
      return [this.backgroundClass, this.borderRadius, this.textClass]
    },

    backgroundClass () {
      return backgroundColors[this.bgColor]
    },

    textClass () {
      return textColors[this.textColor]
    }
  },

  methods: {
    scrollTo (anchor) {
      const scrollToElement = require('scroll-to-element')

      const element = document.querySelector(anchor)
      scrollToElement(element, {
        duration: 100
      })
    }
  }

}
</script>
