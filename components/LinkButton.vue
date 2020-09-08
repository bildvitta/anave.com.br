<template>
  <a class="bg-gradient-to-r from-primary hover:from-primary-hover hover:to-secondary-hover n-link-button px-5 py-3 rounded-lg text-white to-secondary" :href="link">
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
    }
  }

}
</script>
