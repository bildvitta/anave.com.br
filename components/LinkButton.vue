<template>
  <a class="inline-block n-link-button px-5 py-3"
     :class="[bgColor, borderRadius, textColor]"
     :href="link"
  >
    {{ label }}
  </a>
</template>

<script>
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

    roundedNone: {
      type: Boolean
    },

    textColor: {
      type: String,
      default: 'text-white'
    },

    bgColor: {
      type: String,
      default: 'bg-gradient-to-r from-primary hover:from-primary-hover hover:to-secondary-hover to-secondary'
    }
  },

  computed: {
    borderRadius () {
      return this.roundedNone || 'rounded-lg'
    }
  }

}
</script>
