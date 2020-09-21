<template>
  <div class="flex flex-wrap nave-flex-gallery w-full">
    <div class="flex flex-wrap justify-between nave-flex-gallery__small-wrapper" :class="[reverseImage, addHorizontalMargin]">
      <picture class="nave-flex-gallery__image nave-flex-gallery__image--small">
        <source srcset="~/assets/img/PHP-logo.webp" type="image/webp">
        <img alt="Alt Text!" class="block lg:mb-0 mb-4 self-start" src="~/assets/img/PHP-logo.png">
      </picture>
      <picture class="nave-flex-gallery__image nave-flex-gallery__image--small">
        <source srcset="~/assets/img/PHP-logo.webp" type="image/webp">
        <img alt="Alt Text!" class="block lg:mb-0 mb-4 self-start" src="~/assets/img/PHP-logo.png">
      </picture>
    </div>
    <div class="flex nave-flex-gallery__bigger-wrapper">
      <picture class="nave-flex-gallery__image">
        <source srcset="~/assets/img/PHP-logo.webp" type="image/webp">
        <img alt="Alt Text!" class="block lg:mb-0 mb-4 self-start" src="~/assets/img/PHP-logo.png">
      </picture>
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
