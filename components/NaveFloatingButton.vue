<template>
  <a class="block cursor-pointer fixed font-bold lg:hidden nave-floating-button px-6 py-4 shadow-floating z-10" :class="activeFloatingButton" @click="scrollTo('#vacancies')">Quero trabalhar na Nave</a>
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
      return this.windowWidth < 1024 && this.scrollY > 300 && state.activeLink !== 'vacancies'
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
  background-color: $color-primary;
  border-radius: $default-radius;
  bottom: 20px;
  color: #fff;
  left: 50%;
  opacity: 0;
  text-align: center;
  transform: translateX(-50%) translateY(100px);
  transition: all 0.3s ease-in-out;
  width: 300px;

  &.is-active {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
