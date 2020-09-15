<template>
  <section id="spaceship" class="container grid grid-cols-12 nave-spaceship py-24">
    <div class="col-end-12 col-start-1 lg:col-end-11 lg:col-start-3 lg:text-center">
      <h2 class="font-bold mb-4 nave-spaceship__title text-4xl">Espaço Nave</h2>
      <p class="block mb-10 mx-auto text-base text-gray-400">
        é simplesmente uma simulação de texto da indústria tipográfica e de
        impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
      </p>
    </div>
    <div class="col-span-12 flex flex-wrap justify-between nave-spaceship__gallery">
      <img v-for="n in 6" :key="n" alt="" class="h-full mb-4 nave-spaceship__gallery-image" src="https://i.ytimg.com/vi/TmTpMxkzHwc/maxresdefault.jpg">
    </div>
  </section>
</template>

<style lang="scss">
.nave-spaceship {
  &__gallery-image {
    border-radius: $default-radius;
    width: calc(33% - 8px);

    @media (max-width: 1023px) {
      width: 100%;
    }
  }
}
</style>
