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
        <h2 class="font-bold text-5xl text-white">O universo é o nosso quintal</h2>
        <p class="mt-4 text-base text-white">
          Estamos crescendo. E através de uma nova cultura de inovação e uma inteligência estratégica, estamos mudando o cenário de desenvolvimento e tecnologia no interior de São Paulo, aprimorando talentos e criando experiências para melhorar milhares de vidas. Tudo isso, porque acreditamos que a verdadeira inovação está nas pessoas e não na tecnologia.
          A NAVE já está em órbita, rumo ao desconhecido e inspirador futuro!
        </p>
        <img alt="Bild Vitta - NAVE" class="mt-6" src="../assets/img/Bild_Vitta.svg">
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
  ]
}
</script>

<style lang="scss">
  .nave-about {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .webp .nave-about {
    background-image: url('../assets/img/nave_tela-proposito_.webp');
  }

  .no-webp .nave-about {
    background-image: url('../assets/img/nave_tela-proposito_.png');
  }
</style>
