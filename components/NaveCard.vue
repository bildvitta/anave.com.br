<template>
  <div v-bind="$attrs" class="bg-primary card">
    <div class="bg-white my-5 pb-8 px-10 rounded-lg shadow-lg">
      <div class="mx-1 py-10 rounded-lg">
        <img alt="Sunset in the mountains" class="w-full" :src="fields.img">
      </div>
      <div>
        <div class="font-bold mb-2 text-gray-500 text-xl">{{ fields.title }}</div>
        <div class="font-bold mb-2 text-md">{{ fields.resume }}</div>
      </div>
      <div class="text-gray-700">
        <div class="text-justify whitespace-normal">
          {{ fields.description }}
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
    fields: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.fields)
  }
}
</script>

<style lang="scss">
  .card {
    & + & {
      margin-left: 90px;
    }

    &:last-child {
      padding-right: 20px;
    }
  }
</style>
