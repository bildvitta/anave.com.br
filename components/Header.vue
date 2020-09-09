<template>
  <header class="bg-white fixed header inset py-5 w-full z-10">
    <div class="container flex flex-col flex-wrap items-center md:flex-row">
      <nuxt-link class="flex items-center mb-4 md:mb-0" to="/">
        <img alt="NAVE - Espaço Nave"
             sizes="(max-width: 500px) 106px,
                    212px"
             src="~/assets/img/logo@2x.png" srcset="~/assets/img/logo@2x.png 500w,
             ~/assets/img/logo.png 212w"
        >
      </nuxt-link>

      <nav class="flex items-center justify-center md:ml-auto">
        <a class="duration-200 hover:text-nave-purple mr-10 transition" href="#about">sobre</a>
        <a class="duration-200 hover:text-nave-purple mr-10 transition" href="#Team">nosso time</a>
        <a class="duration-200 hover:text-nave-purple mr-10 transition" href="#believe">acreditamos</a>
        <a class="duration-200 hover:text-nave-purple mr-10 transition" href="#spaceship">espaço nave</a>
        <a class="duration-200 hover:text-nave-purple mr-10 transition" href="#contact">contato</a>
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
