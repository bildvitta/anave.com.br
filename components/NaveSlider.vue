<template>
  <div v-bind="$attrs" class="nave-slider relative-position" :class="expandedClass">
    <div ref="slider" class="nave-slider__container" :class="expandedContainerClass" v-on="$listeners" @mousedown="mouseDown" @mousemove="mouseMove">
      <div ref="sliderContent" class="nave-slider__content nave-slider__list">
        <slot />
      </div>
    </div>
    <div class="mr-8 nave-slider__button text-right">
      <button ref="arrow" class="h-10" style="border: none; outline: inherit;" @click="next"><img class="w-10" :hidden="hiddenArrow" src="@/assets/img/proximo .png"></button>
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
      hiddenArrow: false,
      position: 0,
      lastCardChild: null
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
    this.getPosition()
    this.lastCardChild = this.$refs.sliderContent.lastChild
    this.element = this.$refs.slider

    window.__forceSmoothScrollPolyfill__ = true
    smoothscroll.polyfill()
    window.addEventListener('mouseup', this.mouseUp)
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
      this.hiddenScrollArrow()
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

    getPosition () {
      this.position = this.$refs.sliderContent.lastChild.offsetLeft
    },

    next () {
      this.element.scroll({
        left: this.element.scrollLeft + this.lastCardChild.offsetWidth,
        behavior: 'smooth'
      })

      this.hiddenScrollArrow()
    },

    hiddenScrollArrow () {
      const hidden = window.innerWidth + this.element.scrollLeft

      this.hiddenArrow = hidden > this.position
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

  &__list {
    margin: 0 20px 0;
  }

  @media screen and (max-width: 1024px) {
    &__button {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    &__list {
      margin: 0  calc((100% - 1024px) / 2) 0;
    }
  }

  @media screen and (min-width: 1280px) {
    &__list {
      margin: 0  calc((100% - 1280px) / 2) 0;
    }
  }
}
</style>
