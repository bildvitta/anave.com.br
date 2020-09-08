<template>
  <a class="n-link-button px-5 py-3 rounded-lg text-white" :href="link">Link Button</a>
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
    }
  }

}
</script>

<style lang="scss">
.n-link-button {
  background-image: linear-gradient(90deg, #7f2bed 0%, #401677 100%);
}
</style>
