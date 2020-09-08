<template>
  <header>
    <div class="container flex flex-col flex-wrap items-center md:flex-row">
      <nuxt-link class="flex items-center mb-4 md:mb-0" to="/">
        Logo
      </nuxt-link>

      <nav class="flex items-center justify-center md:ml-auto space-x-4">
        <a data-scroll href="#bazinga">Sobre</a>
        <a data-scroll href="#NossoTime">Nosso time</a>
        <a data-scroll href="#Acreditamos">Acreditamos</a>
        <a data-scroll href="#EspaçoNave">Espaço Nave</a>
        <a data-scroll href="#Contato">Contato</a>
      </nav>
    </div>
  </header>
</template>
<style>
* { scroll-behavior: smooth; }
</style>
<script>
export default {

}
</script>
