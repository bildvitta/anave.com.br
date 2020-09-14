<template>
  <div v-bind="$attrs" class="bg-primary nave-card">
    <div class="bg-white h-auto my-5 pb-8 px-10 rounded-lg shadow-lg w-full">
      <div class="mx-1 py-10 rounded-lg">
        <img alt="Sunset in the mountains" class="h-32 w-full" :src="content.img">
      </div>
      <div>
        <div class="font-bold mb-2 text-gray-500 text-xl">{{ content.title }}</div>
        <div class="font-bold mb-2 text-md">{{ content.resume }}</div>
      </div>
      <div class="text-gray-700">
        <div class="nave-card__description text-justify whitespace-normal">
          {{ content.description }}
        </div>
      </div>
      <div class="font-bold pt-5 underline">
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
    }
  }
}
</script>

<style lang="scss">
  .nave-card {
    & + & {
      margin-left: 90px;
    }

    &:last-child {
      padding-right: 20px;
    }

    &__description {
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
</style>
