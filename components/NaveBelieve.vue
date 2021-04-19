<template>
  <nave-intersect :root-margin="rootMargin" @~enter="onEnter('believe')">
    <section id="believe" class="flex flex-col items-center md:flex-row nave-believe py-12">
      <div v-if="renders.believe" class="lg:container w-full">
        <nave-vertical-carousel :phrases="phrases" :slide-timer="4000" />
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
      phrases: [
        { text: 'Entenda o core do 💼 negócio.', index: 0 },
        { text: 'Ser 🧡 apaixonado pelo problema e não pela solução.', index: 1 },
        { text: 'Pensar💡simples!', index: 2 },
        { text: 'Liberdade 🤝 com responsabilidade.', index: 3 },
        { text: 'Elimine as "burocras" and 🔥 get the shit done!', index: 4 },
        { text: 'Trabalhe em 🖖 equipe e lute por ela.', index: 5 },
        { text: 'Superar as expectativas do 😍 cliente', index: 6 }
      ]
    }
  }
}
</script>

<style lang="scss">
  .nave-believe {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .webp .nave-believe {
    background-image: url('../assets/img/grafismo.svg');
  }

  .no-webp .nave-believe {
    background-image: url('../assets/img/grafismo.svg');
  }
</style>
