<template>
  <nave-intersect :root-margin="rootMargin" @~enter="onEnter('spaceShip')">
    <section id="spaceship" class="container grid grid-cols-12 nave-spaceship py-12">
      <div class="col-end-12 col-start-1 lg:col-end-11 lg:col-start-3 lg:text-center">
        <h2 class="font-bold mb-4 nave-spaceship__title text-4xl">Espaço Nave</h2>
        <p class="block mb-10 mx-auto text-base text-gray-800">
          é simplesmente uma simulação de texto da indústria tipográfica e de
          impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
        </p>
      </div>
      <div v-if="renders.spaceShip" class="col-span-12 flex flex-wrap justify-between nave-spaceship__gallery">
        <picture v-for="(image, index) in spaceshipImages" :key="index" class="mb-4 nave-spaceship__gallery-picture self-start">
          <source :srcset="image.webp" type="image/webp">
          <img alt="Alt Text!" class="nave-spaceship__gallery-image" :src="image.jpg">
        </picture>
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
  ],
  data () {
    return {
      spaceshipImages: [
        {
          webp: require('~/assets/img/espaco-nave-1.webp'),
          jpg: require('~/assets/img/espaco-nave-1.jpg')
        },
        {
          webp: require('~/assets/img/espaco-nave-2.webp'),
          jpg: require('~/assets/img/espaco-nave-2.jpg')
        },
        {
          webp: require('~/assets/img/espaco-nave-3.webp'),
          jpg: require('~/assets/img/espaco-nave-3.jpg')
        },
        {
          webp: require('~/assets/img/espaco-nave-4.webp'),
          jpg: require('~/assets/img/espaco-nave-4.jpg')
        },
        {
          webp: require('~/assets/img/espaco-nave-5.webp'),
          jpg: require('~/assets/img/espaco-nave-5.jpg')
        },
        {
          webp: require('~/assets/img/espaco-nave-6.webp'),
          jpg: require('~/assets/img/espaco-nave-6.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.nave-spaceship {
  &__gallery-picture {
    width: calc(33% - 8px);

    @media (max-width: 1024px) {
      width: calc(50% - 8px);
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &__gallery-image {
    border-radius: $default-radius;
  }
}
</style>
