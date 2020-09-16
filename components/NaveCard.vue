<template>
  <div v-bind="$attrs" class="bg-primary nave-card">
    <div class="bg-white content-between flex flex-wrap h-full nave-card__size px-8 rounded-lg shadow-lg whitespace-normal">
      <div class="mx-1 py-10 rounded-lg">
        <img alt="Sunset in the mountains" class="h-32 w-full" :src="content.img">
      </div>
      <div class="font-bold mb-2 text-gray-500 text-xl w-full">{{ content.title }}</div>
      <div class="font-bold mb-2 nave-card__resume text-md">{{ content.resume }}</div>
      <div class="nave-card__description text-gray-700 text-justify">{{ content.description }}</div>
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

    &__size {
      width: 300px;
    }

    &__resume {
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    @media screen and (min-width: 1024px) {
      &__size {
        width: 350px;
      }
    }
  }
</style>
