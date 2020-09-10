<template>
  <div v-bind="$attrs" class="ml-64 nave-slider relative-position" :class="expandedClass">
    <div :id="sliderSlug" ref="slider" class="nave-slider__container" :class="expandedContainerClass" v-on="$listeners" @mousedown="mouseDown" @mousemove="mouseMove">
      <div ref="sliderContent" class="nave-slider__content">
        <slot />
      </div>
    </div>
    <div class="container text-right">
      <button ref="arrow" style="border: none; outline: inherit;" @click="next"><img class="w-10" :hidden="hiddenArrow" src="@/assets/img/proximo .png"></button>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  props: {
    expanded: {
      type: Boolean
    },

    animationOnScroll: {
      type: Boolean,
      default: true
    },

    sliderSlug: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      start: 1,
      difference: 0,
      drag: false,
      hideBar: false,
      element: null,
      hiddenArrow: false
    }
  },

  computed: {
    expandedClass () {
      return this.expanded ? 'nave-slider--expanded' : 'full-width'
    },

    expandedContainerClass () {
      return this.expanded ? 'nave-slider__container--expanded' : ''
    }
  },

  mounted () {
    this.element = this.$refs.slider
    window.__forceSmoothScrollPolyfill__ = true
    smoothscroll.polyfill()
    window.addEventListener('mouseup', this.mouseUp)
  },

  created () {
    // Polyfill for scrolling
  },

  destroyed () {
    window.removeEventListener('mouseup', this.mouseUp)
  },

  methods: {
    mouseDown (event) {
      if (!event) {
        event = window.event
      }

      event.preventDefault()
      this.start = event.clientX + this.element.scrollLeft
      this.difference = 0
      this.drag = true
    },

    mouseMove (event) {
      if (!this.drag) {
        return null
      }

      if (!event) {
        event = window.event
      }

      event.preventDefault()
      this.difference = this.start - (event.clientX + this.element.scrollLeft)
      this.element.scrollLeft += this.difference
    },

    mouseUp (event) {
      let tick = 1

      if (!event) {
        event = window.event
      }

      event.preventDefault()
      this.drag = false

      const animate = () => {
        const step = Math.sin(tick)

        if (step <= 0) {
          this.difference = 0
          window.cancelAnimationFrame(animate)
        } else {
          this.element.scrollLeft += this.difference * step
          tick -= 0.02
          window.requestAnimationFrame(animate)
        }
      }

      this.animationOnScroll && animate()
    },

    next (event) {
      this.element.scroll({
        left: this.element.scrollLeft + 420,
        behavior: 'smooth'
      })

      // TODO inverter botão e fazer voltar para o inicio
      if (this.element.scrollLeft >= event.clientX) {
        this.$refs.arrow.style.transform = 'rotate(-180deg)'
        this.$refs.arrow.style.transition = 'all 1s'
        this.element.scroll({
          left: this.element.scrollLeft - 2000,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang='scss'>
.nave-slider {
  overflow: hidden;
  overflow-x: auto;
  width: 100%;

  & > * {
    scroll-behavior: initial;
  }

  &__container {
    cursor: grab;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    overflow-x: auto;
    position: relative;
    scrollbar-width: none;
    white-space: nowrap;

    &::-webkit-scrollbar {
      width: 0 !important;
    }

    &--expanded {
      padding: 0 20px;
    }
  }

  &__content {
    display: flex;
    height: auto;
  }

  &--expanded {
    margin-left: -(#{20px});
    margin-right: -(#{20px});
    width: auto;
  }
}
</style>
