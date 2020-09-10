<template>
  <div v-bind="$attrs" class="bg-primary">
    <div class="bg-white mx-8 my-5 pb-8 px-10 rounded-lg shadow-lg">
      <div class="mx-1 py-10 rounded-lg">
        <img alt="Sunset in the mountains" class="w-full" src="@/assets/img/PHP-logo.png">
      </div>
      <div>
        <div class="font-bold mb-2 text-gray-500 text-xl">{{ vacancie.title }}</div>
        <div class="font-bold mb-2 text-md">{{ vacancie.resume }}</div>
      </div>
      <div class="text-gray-700">
        <div class="text-justify whitespace-normal">
          {{ vacancie.description }}
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
    vacancie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
