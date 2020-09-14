<template>
  <section id="believe" class="container flex flex-col items-center md:flex-row nave-believe py-48">
    <nave-vertical-carousel :phrases="phrases" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      phrases: [
        'Ser apaixonado pelo problema e não pela solução',
        'Dude, where is my car?',
        'Oh my God, we did it again',
        'Hello my fren',
        'It`s me, Charlie!',
        'Hi, how are you?',
        'My dear love, I love you'
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
