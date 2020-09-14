<template>
  <div class="flex flex-col-reverse items-center lg:flex-row lg:order-1 nave-vertical-carousel w-full">
    <div class="flex flex-row h-auto justify-between lg:flex-col lg:h-70 lg:mt-0 lg:w-8 mt-20 nave-vertical-carousel__slider-items-wrapper relative sm:w-70 w-64">
      <div v-for="n in phrasesLength" :key="n" class="cursor-pointer flex font-bold h-6 items-center justify-center lg:w-full nave-vertical-carousel__slide-number sm:h-8 sm:w-8 text-black w-6 z-2" :class="activateNumber(n - 1)" @click="changeActiveIndex(n)">{{ n }}</div>
    </div>

    <div class="lg:w-7/12 mx-auto nave-vertical-carousel__text-area w-full">
      <transition animated enter-active-class="animateText" mode="out-in">
        <p v-if="activeIndex === activeText.index" :key="activeIndex" class="font-bold lg:px-0 lg:text-6xl nave-vertical-carousel__text px-4 text-5xl text-center text-white w-full">{{ activeText.text }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
let textTimeInterval

export default {
  props: {
    phrases: {
      type: Array,
      required: true
    },

    slideTimer: {
      type: Number,
      default: 2000
    }
  },

  data () {
    return {
      activeIndex: 0,
      activeText: {}
    }
  },

  computed: {
    phrasesLength () {
      return this.phrases.length
    }
  },

  mounted () {
    this.setActiveText()
    this.activeText = this.phrases[this.activeIndex]
  },

  methods: {
    setActiveText () {
      textTimeInterval = setInterval(() => {
        this.activeIndex++
        this.changeTextIndex()

        return this.activeIndex < this.phrases.length ? this.activateNumber() : this.resetSlide()
      }, this.slideTimer)
    },

    changeTextIndex () {
      this.activeText = this.phrases[this.activeIndex]
    },

    changeActiveIndex (index) {
      this.activeIndex = index - 1
      clearInterval(textTimeInterval)
      this.changeTextIndex()
      this.setActiveText()
    },

    activateNumber (index) {
      return index === this.activeIndex && 'nave-vertical-carousel__slide-number--active'
    },

    resetSlide () {
      this.activeIndex = 0
      this.changeTextIndex()
      this.activateNumber()
    }
  }
}
</script>

<style lang="scss">
.nave-vertical-carousel {
  &__slider-items-wrapper {
    &::after {
      background-color: #fff;
      content: "";
      display: block;
      height: 100%;
      left: 50%;
      position: absolute;
      top: 0;
      transform: translateX(-50%);
      width: 1px;

      @media (max-width: 1024px) {
        height: 1px;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        width: 100%;
      }
    }
  }

  &__slide-number {
    background-color: #fff;
    border-radius: 100%;

    &--active {
      background-color: $color-primary;
      color: #fff;
    }
  }
}
</style>
