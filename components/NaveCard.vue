<template>
  <div v-bind="$attrs" class="bg-gray hover:text-primary-500 nave-card">
    <div class="bg-white flex flex-wrap h-full items-stretch justify-center overflow-hidden rounded-lg shadow-lg" :class="classes">
      <div class="bg-gray-100 flex h-40 items-center justify-center w-full">
        <picture>
          <source :srcset="content.imgWebp" type="image/webp">
          <img alt="Alt Text!" class="mx-auto w-64" :src="content.imgPng">
        </picture>
      </div>
      <!-- <div class="font-bold mb-2 mt-6 px-4 sm:px-8 text-gray-500 text-sm uppercase w-full">{{ content.title }}</div> -->
      <div class="font-bold h-21 mb-2 nave-card__resume px-4 sm:px-8 text-center text-gray-900 text-xl w-full whitespace-normal">{{ content.resume }}</div>
      <!-- TODO oculto por ora, aguardando conteúdo -->
      <!-- <div class="mb-2 nave-card__description px-8 text-base text-gray-700 text-justify whitespace-normal">{{ content.description }}</div> -->
      <div class="mb-8 px-4 self-end sm:px-8 text-base w-full">
        <nave-link-button bg-color="primary" bg-gradient class="font-bold nave-card__button" :href="content.link" label="Quero me Candidatar" link="content.link" target="_bank" />
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
  border: 3px solid transparent;
  border-radius: 0.5rem;
  transition: all 0.2s linear;

  &:hover {
    border: 3px solid #2998ff;
  }

  &__button {
    transition: all 0.2s linear;
  }

  &:hover &__button {
    background: #1785ec;
    color: #fff;
  }

  &__description {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }

  &__resume {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
</style>
