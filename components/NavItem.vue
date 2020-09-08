<template>
  <nuxt-link :to="to">
    <slot>{{ label }}</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },

    to: {
      required: true,
      type: String
    }
  }
}
</script>
