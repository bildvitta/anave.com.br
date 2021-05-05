<template>
  <nave-intersect :root-margin="rootMargin" @~enter="onEnter('vacancies')">
    <section id="vacancies" class="bg-gray nave-vacancies py-12">
      <h2 class="font-bold leading-none mb-16 md:text-5xl sm:text-4xl text-3xl">Embarque na 🚀 NAVE°</h2>
      <div v-if="renders.vacancies" class="overflow-hidden">
        <nave-slider>
          <nave-card v-for="(vacancie, index) in vacanciesList" :key="index" class="nave-vacancies__card" classes="w-64 sm:w-350" :content="vacancie" />
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
    title: 'Pessoa desenvolvedora backend',
    img: require('../assets/img/backend.svg')
  },
  {
    title: 'Pessoa desenvolvedora Frontend',
    img: require('../assets/img/frontend.svg')
  },
  {
    title: 'Designer',
    img: require('../assets/img/designer.svg')
  },
  {
    title: 'Product Owner',
    img: require('../assets/img/Product-Owner.svg')
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
    min-height: 420px;

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
