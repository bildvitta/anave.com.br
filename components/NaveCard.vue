<template>
  <div v-bind="$attrs" class="bg-primary nave-card">
    <div class="bg-white content-between flex flex-wrap h-full px-8 rounded-lg shadow-lg" :class="classes">
      <div class="mx-1 py-10 rounded-lg">
        <img alt="Sunset in the mountains" class="h-32 w-full" :src="content.img">
      </div>
      <div class="font-bold mb-2 text-gray-500 text-xl w-full">{{ content.title }}</div>
      <div class="font-bold mb-2 nave-card__resume text-md whitespace-normal">{{ content.resume }}</div>
      <div class="nave-card__description text-gray-700 text-justify whitespace-normal">{{ content.description }}</div>
      <div class="font-bold py-5 underline">
        <a href="#">Quero me Candidatar</a>
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
    -webkit-line-clamp: 3;
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
