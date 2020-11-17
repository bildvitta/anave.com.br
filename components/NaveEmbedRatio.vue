<template>
  <div v-bind="$attrs" class="embed-responsive nave-about__video-wrapper" :class="ratioClass">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String,
      default: '16:9'
    }
  },

  computed: {
    ratioClass () {
      return `aspect-ratio-${this.ratio.replace(':', '/')}`
    }
  },

  created () {
    if (this.$slots.default) {
      this.$slots.default[0].data.attrs.class = 'embed-responsive-item'
    }
  }
}
</script>
