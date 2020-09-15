<template>
  <div>
    <nave-header />
    <Nuxt />
    <nave-footer data-active-link="contact" />
  </div>
</template>

<script>
import { setActiveLink, state } from '../helpers/active-link'

export default {
  computed: {
    activeLink () {
      return state.activeLink
    }
  },

  mounted () {
    setActiveLink('contact')
  }
}
</script>
