<template>
  <header class="py-5">
    <div class="container flex flex-col flex-wrap items-center md:flex-row">
      <nuxt-link class="flex items-center mb-4 md:mb-0" to="/">
        Logo
      </nuxt-link>

      <nav class="flex items-center justify-center md:ml-auto space-x-4">
        <a class="duration-200 hover:text-nave-purple transition" href="#about">sobre</a>
        <a class="duration-200 hover:text-nave-purple transition" href="#Team">nosso time</a>
        <a class="duration-200 hover:text-nave-purple transition" href="#believe">acreditamos</a>
        <a class="duration-200 hover:text-nave-purple transition" href="#spaceship">espaço nave</a>
        <a class="duration-200 hover:text-nave-purple transition" href="#contact">contato</a>
        <link-button label="Vagas" link="#vacancies" />
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
