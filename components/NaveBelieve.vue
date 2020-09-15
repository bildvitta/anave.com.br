<template>
  <section id="believe" class="flex flex-col items-center md:flex-row nave-believe py-48">
    <div class="lg:container w-full">
      <nave-vertical-carousel :phrases="phrases" :slide-timer="4000" />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      phrases: [
        { text: 'Entender o core do negócio.', index: 0 },
        { text: 'Ser apaixonado pelo problema e não pela solução.', index: 1 },
        { text: 'Pensar simples.', index: 2 },
        { text: 'Liberdade com responsabilidade.', index: 3 },
        { text: 'Elimine as "burocras" and get the shit done!', index: 4 },
        { text: 'Trabalhe em equipe e lute por ela.', index: 5 },
        { text: 'Superar as expectativas do cliente.', index: 6 }
      ]
    }
  }
}
</script>

<style lang="scss">
.nave-believe {
  background-image: url('../assets/img/nave_premissas.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
