<template>
  <a class="block block cursor-pointer fixed md:hidden nave-floating-button px-6 py-4 shadow-floating w-full z-10" :class="activeFloatingButton" @click="scrollTo('#vacancies')">Quero trabalhar na Nave</a>
</template>

<script>
import scrollTo from '@/mixins/scrollHelper'
import { state } from '@/helpers/active-link'

export default {

  mixins: [scrollTo],
  data () {
    return {
      scrollY: 0,
      windowWidth: 0
    }
  },

  computed: {
    showFloatingButton () {
      return this.windowWidth <= 768 && state.activeLink !== 'vacancies'
    },

    activeFloatingButton () {
      return this.showFloatingButton && 'is-active'
    }
  },

  destroyed () {
    window.removeEventListener('scroll', this.getScrollHeight)
  },

  mounted () {
    window.addEventListener('scroll', this.getScrollHeight)
  },

  methods: {
    getScrollHeight () {
      this.scrollY = window.scrollY
      this.windowWidth = window.innerWidth
    }
  }
}
</script>

<style lang="scss">
.nave-floating-button {
  background: radial-gradient(193.3% 139.39% at 49.97% 0%, #006dd2 0%, #062b55 100%);
  bottom: 0;
  color: #fff;
  left: 50%;
  opacity: 0;
  text-align: center;
  transform: translateX(-50%) translateY(100px);
  transition: all 0.3s ease-in-out;

  &.is-active {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
