<template>
  <header>
    <div class="container flex flex-col flex-wrap items-center md:flex-row">
      <nuxt-link class="flex items-center mb-4 md:mb-0" to="/">
        Logo
      </nuxt-link>

      <nav class="flex flex-wrap items-center justify-center md:ml-auto">
        <n-nav-item class="mr-5" label="Sobre" to="/" />
        <n-nav-item class="mr-5" label="Nosso time" to="/" />
        <n-nav-item class="mr-5" label="Acreditamos" to="/" />
        <n-nav-item class="mr-5" label="Espaço Nave" to="/" />
        <n-nav-item class="mr-5" label="Contato" to="/" />
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>
