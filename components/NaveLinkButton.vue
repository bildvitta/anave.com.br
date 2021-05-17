<template>
  <a class="inline-block nave-link-button"
     :class="linkButtonClasses"
     :href="link"
     @click="scrollTo(link)"
  >
    <div class="flex flex-row items-center">
      <img v-if="icon" alt="Media icon" class="mr-2 nave-link-button__icon" :src="require(`~/assets/img/${icon}.svg`)">
      {{ label }}
    </div>

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
    },

    small: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: ''
    }
  },

  computed: {
    borderRadius () {
      return this.rounded && 'rounded-lg'
    },

    linkButtonClasses () {
      return [this.backgroundClass, this.borderRadius, this.textClass, this.isSmall]
    },

    backgroundClass () {
      return this.bgGradient ? 'nave-link-button--gradient' : backgroundColors[this.bgColor]
    },

    isSmall () {
      return this.small ? 'px-3 py-1 text-sm' : 'px-12 py-3'
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

    &__icon {
      width: 15px;
    }
  }
</style>
