<template>
  <section id="about" class="flex items-center nave-about py-24">
    <div class="grid grid-cols-12 items-center md:container mx-5">
      <div class="col-span-12 lg:col-span-6 lg:col-start-1">
        <nave-intersect :root-margin="rootMargin" @~enter="onEnter('youtubeEmbed')">
          <nave-embed-ratio class="col-span-6" ratio="16:9">
            <iframe v-if="renders.youtubeEmbed" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="lg:mx-0 mx-auto w-full"
                    frameborder="0" src="https://www.youtube.com/embed/qzVW_TiSmSY"
            />
          </nave-embed-ratio>
        </nave-intersect>
      </div>

      <div class="col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-0 mt-10 nave-about__text-wrapper">
        <h2 class="font-bold text-5xl">O universo é o nosso quintal</h2>
        <p class="mt-4 text-base">
          Estamos crescendo. E através de uma nova cultura de inovação e uma inteligência estratégica, estamos mudando o cenário de desenvolvimento e tecnologia no interior de São Paulo, aprimorando talentos e criando experiências para melhorar milhares de vidas. Tudo isso, porque acreditamos que a verdadeira inovação está nas pessoas e não na tecnologia.
        </p>
        <p class="font-bold mt-12">A <span class="text-primary-700">NAVE</span><span class="text-secondary-500">°</span> já está em órbita, rumo ao desconhecido e inspirador futuro!</p>
        <div class="flex flex-row mt-6">
          <img alt="Bild Vitta - NAVE" src="../assets/img/logo-bild.svg">
          <div class="bg-gray-400 mx-6 my-6 nave-about__separator" />
          <img alt="Bild Vitta - NAVE" class="mb-4" src="../assets/img/logo-vitta.svg">
        </div>
      </div>
    </div>
  </section>
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
  ],

  mounted () {
    this.$ga.page({
      page: 'Section: About',
      title: 'About',
      location: window.location.href
    })
  }
}
</script>

<style lang="scss">
  .nave-about {
    &__separator {
      width: 2px;
    }
  }
</style>
