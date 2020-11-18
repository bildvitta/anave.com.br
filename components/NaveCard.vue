<template>
  <div v-bind="$attrs" class="bg-primary nave-card">
    <div class="bg-white flex flex-wrap h-full items-stretch justify-center overflow-hidden rounded-lg shadow-lg" :class="classes">
      <div class="bg-gray-100 flex h-40 items-center justify-center w-full">
        <picture>
          <source :srcset="content.imgWebp" type="image/webp">
          <img alt="Alt Text!" class="mx-auto w-32" :src="content.imgPng">
        </picture>
      </div>
      <!-- <div class="font-bold mb-2 mt-6 px-4 sm:px-8 text-gray-500 text-sm uppercase w-full">{{ content.title }}</div> -->
      <div class="font-bold h-16 mb-2 nave-card__resume px-4 sm:px-8 text-xl w-full whitespace-normal">{{ content.resume }}</div>
      <!-- TODO oculto por ora, aguardando conteúdo -->
      <!-- <div class="mb-2 nave-card__description px-8 text-base text-gray-700 text-justify whitespace-normal">{{ content.description }}</div> -->
      <div class="mb-8 px-4 sm:px-8 text-base w-full">
        <nave-link-button class="font-bold tracking-widest" :href="content.link" label="Quero me Candidatar" target="_bank" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    },

    size: {
      type: Number,
      default: 0
    },

    classes: {
      type: [String, Object, Array],
      default: ''
    }
  }
}
</script>

<style lang="scss">
.nave-card {
  &__description {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  &__resume {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
</style>
