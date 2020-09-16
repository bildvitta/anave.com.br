<template>
  <section id="vacancies" class="bg-primary nave-vacancies pb-24 pt-32">
    <div class="overflow-hidden">
      <nave-slider>
        <nave-card v-for="(vacancie, index) in vacanciesList" :key="index" class="nave-vacancies__card" classes="w-64 sm:w-350" :content="vacancie" />
      </nave-slider>
    </div>
  </section>
</template>

<script>
const vacancies = [
  { title: 'php', resume: 'backend ', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'Rubi on Rails', resume: ' backend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/Ruby_On_Rails_Logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/vuejs.png') },
  { title: 'php', resume: ' ', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação .', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: ' Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') }
]

export default {
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
