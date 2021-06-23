<template>
  <nave-intersect :root-margin="rootMargin" @~enter="onEnter('vacancies')">
    <section id="vacancies" class="bg-gray nave-vacancies py-12">
      <h2 class="font-bold leading-none mb-16 md:px-24 md:text-5xl px-8 sm:text-4xl text-3xl text-gray-900">Embarque na 🚀 NAVE°</h2>
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
    resume: 'Pessoa desenvolvedora Backend',
    description: '',
    imgWebp: require('../assets/img/ilustra_backend.png'),
    imgPng: require('../assets/img/ilustra_backend.png'),
    link: 'https://bild.gupy.io/jobs/656048'
  },
  {
    title: '',
    resume: 'Pessoa desenvolvedora Frontend',
    description: '',
    imgWebp: require('../assets/img/ilustra_frontend.png'),
    imgPng: require('../assets/img/ilustra_frontend.png'),
    link: 'https://bild.gupy.io/jobs/689054'
  },
  {
    title: '',
    resume: 'Designer',
    description: '',
    imgWebp: require('../assets/img/ilustra_design.png'),
    imgPng: require('../assets/img/ilustra_design.png'),
    link: 'https://bild.gupy.io/jobs/575636?jobBoardSource=gupy_public_page'
  },
  {
    title: '',
    resume: 'Product Owner',
    description: '',
    imgWebp: require('../assets/img/ilustra_po.png'),
    imgPng: require('../assets/img/ilustra_po.png'),
    link: 'https://bild.gupy.io/'
  },
  {
    title: '',
    resume: 'Pessoa desenvolvedora backend',
    description: '',
    imgWebp: require('../assets/img/ilustra_backend.png'),
    imgPng: require('../assets/img/ilustra_backend.png'),
    link: 'https://bild.gupy.io/jobs/656048'
  },
  {
    title: '',
    resume: 'Pessoa desenvolvedora frontend',
    description: '',
    imgWebp: require('../assets/img/ilustra_frontend.png'),
    imgPng: require('../assets/img/ilustra_frontend.png'),
    link: 'https://bild.gupy.io/jobs/689054'
  },
  {
    title: '',
    resume: 'Designer',
    description: '',
    imgWebp: require('../assets/img/ilustra_design.png'),
    imgPng: require('../assets/img/ilustra_design.png'),
    link: 'https://bild.gupy.io/jobs/575636?jobBoardSource=gupy_public_page'
  },
  {
    title: '',
    resume: 'Product Owner',
    description: '',
    imgWebp: require('../assets/img/ilustra_po.png'),
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
  },

  mounted () {
    this.$ga.screenview('Vacancies')
    this.$ga.page({
      page: 'Section: Vacancies',
      title: 'Vacancies',
      location: window.location.href
    })
  }
}
</script>

<style lang="scss">
.nave-vacancies {
  &__card {
    min-height: 366px;

    &:last-child {
      margin-right: 20px;
    }

    & + & {
      margin-left: 24px;
    }
  }
}
</style>
