<template>
  <div class="container grid grid-cols-12 home-container items-center">
    <div class="col-span-5">
      <div class="items-center row">
        <h1 class="font-bold home-container__title text-4xl xl:text-5xl">
          Desenhamos e lançamos produtos digitais que transformam empresas.
        </h1>
        <link-button class="mt-8" label="Quero trabalhar na Nave" link="#vacancies" />
      </div>
    </div>
    <div class="col-end-13 col-start-7">
      <img alt="NAVE - Seja um Astronauta" class="ml-auto" src="~/assets/img/nave_home.png">
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  height: calc(100vh - 88px);

  &__title {
    line-height: 1.3;
  }
}
</style>
