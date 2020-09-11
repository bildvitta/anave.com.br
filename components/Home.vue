<template>
  <div class="container grid grid-cols-12 home-container items-center">
    <div class="col-span-5 home-container__title-wrapper">
      <div class="items-center row">
        <h1 class="font-bold home-container__title text-4xl xl:text-5xl">
          Desenhamos e lançamos produtos digitais que transformam empresas.
        </h1>
        <link-button class="mt-8" label="Quero trabalhar na Nave" link="#vacancies" />
      </div>
    </div>
    <div class="col-end-13 col-start-7">
      <div class="home-container__image" />
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  height: calc(100vh - 88px);

  @media (width: 1024px) and (height: 1366px) {
    background-image: url('../assets/img/imagem_home_rocket.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .n-link-button {
      background-color: #fff;
      background-image: none;
      color: #110721;
    }
  }

  &__image {
    background-image: url('../assets/img/imagem_home_rocket.jpg');
    background-position: 0 -100px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    width: 100%;

    @media (width: 1024px) and (height: 1366px) {
      display: none;
    }
  }

  &__title {
    font-size: 5rem;
    line-height: 1.3;

    @media (width: 1024px) and (height: 1366px) {
      color: #fff;
    }

    &-wrapper {
      grid-column: none;
    }
  }
}
</style>
