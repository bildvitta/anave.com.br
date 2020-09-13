<template>
  <div class="flex flex-wrap nave-flex-gallery w-full">
    <div class="flex flex-wrap justify-between nave-flex-gallery__small-wrapper" :class="[reverseImage, addHorizontalMargin]">
      <img alt="" class="block lg:mb-0 mb-4 nave-flex-gallery__image nave-flex-gallery__image--small" src="https://www.ceara.gov.br/wp-content/uploads/2020/09/Praia_110920.jpg">
      <img alt="" class="block lg:mb-0 mb-4 nave-flex-gallery__image nave-flex-gallery__image--small" src="https://www.ceara.gov.br/wp-content/uploads/2020/09/Praia_110920.jpg">
    </div>
    <div class="nave-flex-gallery__bigger-wrapper">
      <img alt="" class="block lg:mb-0 mb-4 nave-flex-gallery__image nave-flex-gallery__image--big" src="https://www.ceara.gov.br/wp-content/uploads/2020/09/Praia_110920.jpg">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
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

    @media (max-width: 1023px) {
      width: 100%;
    }
  }
}
</style>
