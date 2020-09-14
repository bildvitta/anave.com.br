<template>
  <div class="flex items-center nave-vertical-carousel w-full">
    <div class="flex flex-col h-70 justify-between nave-vertical-carousel__slider-items-wrapper relative w-8">
      <div v-for="n in 7" :key="`number-${n}`" class="flex font-bold h-8 items-center justify-center nave-vertical-carousel__slide-number text-black w-full z-2" :class="activateNumber(n - 1)">{{ n }}</div>
    </div>

    <div class="mx-auto nave-vertical-carousel__text-area w-7/12">
      <p class="font-bold nave-vertical-carousel__text text-6xl text-white w-20">{{ activeText }}</p>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    phrases: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      activeIndex: 0,
      activeText: ''
    }
  },

  mounted () {
    this.setActiveText()
  },

  methods: {

    // TODO: work in progress
    setActiveText () {
      setInterval(() => {
        if (this.activeIndex < this.phrases.length) {
          this.changeTextIndex()
          this.activateNumber()
          this.activeIndex++
        } else {
          this.activeIndex = 0
          this.changeTextIndex()
          this.activateNumber()
        }
      }, 1000)
    },

    changeTextIndex () {
      this.activeText = this.phrases[this.activeIndex]
    },

    activateNumber (index) {
      return index === this.activeIndex && 'nave-vertical-carousel__slide-number--active'
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
