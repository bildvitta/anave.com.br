<template>
  <a class="inline-block nave-link-button px-12 py-3"
     :class="linkButtonClasses"
     :href="link"
     @click="scrollTo(link)"
  >
    {{ label }}
  </a>
</template>

<script>
import scrollHelper from '../mixins/scrollHelper'

const backgroundColors = {
  secondary: 'bg-secondary-500 hover:bg-secondary-300',
  white: 'bg-white'
}

const textColors = {
  primary: 'text-primary',
  white: 'text-white'
}

export default {
  mixins: [
    scrollHelper
  ],

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
    },

    bgGradient: {
      type: Boolean,
      default: false
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
      return this.bgGradient ? 'nave-link-button--gradient' : backgroundColors[this.bgColor]
    },

    textClass () {
      return textColors[this.textColor]
    }
  }
}
</script>
<style lang="scss">
  .nave-link-button {
    &--gradient {
      background: radial-gradient(193.3% 139.39% at 49.97% 0%, #006dd2 0%, #062b55 100%);

      &:hover {
        background: #1785ec;
      }
    }
  }
</style>
