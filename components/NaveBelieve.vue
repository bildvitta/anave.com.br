<template>
  <section id="believe" ref="believe" class="flex flex-col items-center md:flex-row nave-believe py-48">
    <div class="lg:container w-full">
      <nave-vertical-carousel :phrases="phrases" :slide-timer="3000" />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      phrases: [
        { text: 'Ser apaixonado pelo problema e não pela solução', index: 0 },
        { text: 'Dude, where is my car?', index: 1 },
        { text: 'Oh my God, we did it again', index: 2 },
        { text: 'Hello my fren', index: 3 },
        { text: 'It`s me, Charlie!', index: 4 },
        { text: 'Hi, how are you?', index: 5 },
        { text: 'My dear love, I love you', index: 6 }
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
