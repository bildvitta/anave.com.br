<template>
  <div class="container flex flex-col items-center md:flex-row">
    <nave-vertical-carousel :phrases="phrases" />
  </div>
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
