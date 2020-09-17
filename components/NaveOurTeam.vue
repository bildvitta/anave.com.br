<template>
  <nave-intersect root-margin="60px 0px 0px 0px" @~enter="onEnter('ourTeam')">
    <section id="team" class="grid grid-cols-12 items-center md:container md:flex-row mx-5 nave-our-team py-24">
      <div class="col-end-12 col-start-1 lg:col-end-11 lg:col-start-3 lg:text-center nave-our-team__text">
        <h2 class="font-bold mb-4 text-4xl">Inovação é feita de pessoas!</h2>
        <p class="mb-10 text-base text-gray-400">
          é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o
          século XVI, quando um impressor desconhecido pegou uma
        </p>
      </div>
      <div v-if="renders.ourTeam" class="col-span-12 flex grid grid-cols-12 justify-between lg:gap-4">
        <nave-flex-gallery class="col-span-12 lg:col-span-6 nave-our-team__galery" />
        <nave-flex-gallery class="col-span-12 lg:col-span-6 nave-our-team__galery" reverse />
      </div>
    </section>
  </nave-intersect>
</template>

<script>
import intersect from '../mixins/intersect'
import naveIntersect from './NaveIntersect'

export default {
  components: {
    naveIntersect
  },

  mixins: [
    intersect
  ]
}
</script>

<style lang="scss">
.nave-our-team {
  &__gallery {
    width: calc(50% - 8px);
  }
}
</style>
