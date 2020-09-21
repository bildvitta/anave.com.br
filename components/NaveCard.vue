<template>
  <div v-bind="$attrs" class="bg-primary nave-card">
    <div class="bg-white content-start flex flex-wrap h-full items-stretch overflow-hidden rounded-lg shadow-lg" :class="classes">
      <div class="bg-gray-300 h-40 py-10 w-full">
        <img alt="Sunset in the mountains" class="h-auto mx-auto w-32" :src="content.img">
      </div>
      <div class="font-bold mb-2 mt-6 px-8 text-gray-500 text-sm uppercase w-full">{{ content.title }}</div>
      <div class="font-bold mb-2 nave-card__resume px-8 text-base whitespace-normal">{{ content.resume }}</div>
      <div class="mb-2 nave-card__description px-8 text-base text-gray-700 text-justify whitespace-normal">{{ content.description }}</div>
      <section class="absolute bottom-0 font-bold left-10 pb-6 px-8 text-base underline">
        <a href="#">Quero me Candidatar</a>
      </section>
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
    -webkit-line-clamp: 5;
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
