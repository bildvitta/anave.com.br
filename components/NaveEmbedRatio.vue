<template>
  <div v-bind="$attrs" class="nave-about__video-wrapper nave-flex-embed">
    <div class="nave-flex-embed__ratio" :class="ratioClass" />
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
      return `nave-flex-embed__ratio--${this.ratio.replace(':', 'by')}`
    }
  },

  created () {
    this.$slots.default[0].data.attrs.class = 'nave-flex-embed__content'
  }
}
</script>

<style lang="scss">
.nave-flex-embed {
  display: block;
  overflow: hidden;
  position: relative;

  &__ratio {
    display: block;
    padding-bottom: 100%;
    width: 100%;

    &--16by9 {
      padding-bottom: 56.25%;
    }
  }

  &__content {
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
