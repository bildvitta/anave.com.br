<template>
  <main>
    <section id="home" class="bg-white">
      <home />
    </section>
    <section id="about" class="bg-gray-600 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>Sobre</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
    <section id="team" class="bg-gray-500 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>NossoTime</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
    <section id="believe" class="bg-gray-400 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>Acreditamos</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
    <section id="spaceship" class="bg-gray-300 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>EspaçoNave</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
    <section id="vacancies" class="bg-gray-200 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>Vagas</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
    <section id="vacancies" class="bg-primary py-24">
      <div class="overflow-hidden">
        <nave-slider>
          <nave-card v-for="(vacancie, index) in vacanciesList" :key="index" :vacancie="vacancie" />
        </nave-slider>
      </div>
    </section>
  </main>
</template>

<script>

const vacancies = [
  { title: 'php', resume: 'Pessoa desenvolvedora backend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/PHP-logo.png' },
  { title: 'Rubi on Rails', resume: 'Pessoa desenvolvedora backend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/Ruby_On_Rails_Logo.png' },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/vuejs.png' },
  { title: 'php', resume: 'Pessoa desenvolvedora backend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/PHP-logo.png' },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/vuejs.png' },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/vuejs.png' },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/vuejs.png' },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/vuejs.png' },
  { title: 'VUE.JS', resume: 'Pessoa desenvolvedora Frontend', description: 'é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um.modelos de tipos.', img: '/assets/img/vuejs.png' }
]

export default {
  computed: {
    vacanciesList () {
      return vacancies
    }
  }
}
</script>
