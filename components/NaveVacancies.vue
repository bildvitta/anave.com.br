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
    description: '',
    imgWebp: require('../assets/img/ilustra_backend.webp'),
    imgPng: require('../assets/img/ilustra_backend.png'),
    link: 'https://bild.gupy.io/jobs/506524?jobBoardSource=gupy_public_page'
  },
  {
    title: '',
    resume: 'Pessoa desenvolvedora frontend',
    description: '',
    imgWebp: require('../assets/img/ilustra_frontend.webp'),
    imgPng: require('../assets/img/ilustra_frontend.png'),
    link: 'https://bild.gupy.io/jobs/506525?jobBoardSource=gupy_public_page'
  },
  {
    title: '',
    resume: 'Designer',
    description: '',
    imgWebp: require('../assets/img/ilustra_design.webp'),
    imgPng: require('../assets/img/ilustra_design.png'),
    link: 'https://bild.gupy.io/jobs/575636?jobBoardSource=gupy_public_page'
  },
  {
    title: '',
    resume: 'Product Owner',
    description: '',
    imgWebp: require('../assets/img/ilustra_po.webp'),
    imgPng: require('../assets/img/ilustra_po.png'),
    link: 'https://bild.gupy.io/'
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
