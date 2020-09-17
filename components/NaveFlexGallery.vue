<template>
  <div class="flex flex-wrap nave-flex-gallery w-full">
    <div class="flex flex-wrap justify-between nave-flex-gallery__small-wrapper" :class="[reverseImage, addHorizontalMargin]">
      <img alt="" class="block lg:h-full lg:mb-0 mb-4 nave-flex-gallery__image nave-flex-gallery__image--small self-start" src="~/assets/img/PHP-logo.png">
      <img alt="" class="block lg:h-full lg:mb-0 mb-4 nave-flex-gallery__image nave-flex-gallery__image--small self-start" src="~/assets/img/PHP-logo.png">
    </div>
    <div class="flex nave-flex-gallery__bigger-wrapper">
      <img alt="" class="block lg:mb-0 mb-4 nave-flex-gallery__image nave-flex-gallery__image--big self-start" src="~/assets/img/PHP-logo.png">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean
    }
  },

  computed: {
    reverseImage () {
      return this.reverse && 'order-1'
    },

    addHorizontalMargin () {
      return this.reverse ? 'lg:mt-4' : 'lg:mb-4'
    }
  }
}
</script>

<style lang="scss">
.nave-flex-gallery {
  &__image--small {
    width: calc(50% - 8px);
  }

  &__image {
    border-radius: $default-radius;

    @media (max-width: 640px) {
      width: 100%;
    }
  }
}
</style>
