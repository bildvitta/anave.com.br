<template>
  <div class="grid grid-cols-12 items-center lg:container lg:py-0 nave__home-container py-8">
    <div class="col-span-12 lg:col-span-5 lg:mx-0 mx-5 nave__home-container__title-wrapper">
      <div class="items-center row">
        <h1 class="font-bold lg:text-4xl nave__home-container__title text-3xl xl:text-5xl">
          Desenhamos e lançamos produtos digitais que transformam empresas.
        </h1>
        <link-button class="lg:mb-0 mb-10 mt-8" label="Quero trabalhar na Nave" link="#vacancies" />
      </div>
    </div>
    <div class="col-end-13 col-start-1 lg:col-end-13 lg:col-start-7 lg:mx-0 mx-5">
      <div class="nave__home-container__image" />
    </div>
  </div>
</template>

<style lang="scss">
.nave__home-container {
  height: calc(100vh - 88px);

  @media (max-width: 640px) {
    height: auto;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
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

    @media (min-width: 640px) and (max-width: 1024px) {
      display: none;
    }
  }

  &__title {
    line-height: 1.3;

    @media (min-width: 640px) and (max-width: 1024px) {
      color: #fff;
      font-size: 5rem;

      &-wrapper {
        grid-column: none;
      }
    }
  }
}
</style>
