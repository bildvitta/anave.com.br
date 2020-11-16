<template>
  <nave-intersect :root-margin="rootMargin" @~enter="onEnter('vacancies')">
    <section id="vacancies" class="bg-primary nave-vacancies py-12">
      <h2 class="font-bold leading-none mb-16 md:text-5xl sm:text-4xl text-3xl text-center text-white">Embarque na Nave</h2>
      <div v-if="renders.vacancies" class="overflow-hidden">
        <nave-slider>
          <nave-card v-for="(vacancie, index) in vacanciesList" :key="index" class="nave-vacancies__card" classes="w-auto sm:w-350" :content="vacancie" />
        </nave-slider>
      </div>
    </section>
  </nave-intersect>
</template>

<script>
import intersect from '../mixins/intersect'
import naveIntersect from './NaveIntersect'

const vacancies = [
  {
    title: '',
    resume: 'Pessoa desenvolvedora backend',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.',
    img: require('../assets/img/ilustra_backend_1.webp')
  },
  {
    title: '',
    resume: 'Pessoa desenvolvedora frontend',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.',
    img: require('../assets/img/ilustra_frontend_1.webp')
  },
  {
    title: '',
    resume: 'Product Designer',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.',
    img: require('../assets/img/ilustra_design_1.webp')
  },
  {
    title: '',
    resume: 'Product Owner',
    description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.',
    img: require('../assets/img/ilustra_po_1.webp')
  }
]

export default {
  components: {
    naveIntersect
  },

  mixins: [
    intersect
  ],

  computed: {
    vacanciesList () {
      return vacancies
    }
  }
}
</script>

<style lang="scss">
.nave-vacancies {
  &__card {
    min-height: 366px;

    &:last-child {
      padding-right: 20px;
    }

    & + & {
      margin-left: 90px;
    }
  }

  @media screen and (max-width: 640px) {
    &__card + &__card {
      margin-left: 30px;
    }
  }
}
</style>
