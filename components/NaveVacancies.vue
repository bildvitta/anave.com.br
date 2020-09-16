<template>
  <section id="vacancies" class="bg-primary pb-24 pt-32">
    <div class="overflow-hidden">
      <nave-slider>
        <nave-card v-for="(vacancie, index) in vacanciesList" :key="index" :content="vacancie" :size="350" />
      </nave-slider>
    </div>
  </section>
</template>

<script>

const vacancies = [
  { title: 'php', resume: 'Pessoa ', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'Rubi on Rails', resume: 'Pessoa desenvolvedora backend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/Ruby_On_Rails_Logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/vuejs.png') },
  { title: 'php', resume: 'Pessoa desenvolvedora backend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação .', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: require('../assets/img/PHP-logo.png') }
]

export default {
  computed: {
    vacanciesList () {
      return vacancies
    }
  }
}
</script>
