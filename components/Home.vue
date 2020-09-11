<template>
  <div class="container grid grid-cols-12 home-container items-center lg:py-0 py-8">
    <div class="col-span-12 home-container__title-wrapper lg:col-span-5">
      <div class="items-center row">
        <h1 class="font-bold home-container__title lg:text-4xl text-3xl xl:text-5xl">
          Desenhamos e lançamos produtos digitais que transformam empresas.
        </h1>
        <link-button class="lg:mb-0 mb-10 mt-8" label="Quero trabalhar na Nave" link="#vacancies" />
      </div>
    </div>
    <div class="col-end-13 col-start-1 lg:col-end-13 lg:col-start-7">
      <div class="home-container__image" />
    </div>
  </div>
</template>

<style lang="scss">
.home-container {
  height: calc(100vh - 88px);

  @media (max-width: 1023px) {
    height: auto;
  }

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

    @media (max-width: 1023px) {
      height: 300px;
    }

    @media (width: 1024px) and (height: 1366px) {
      display: none;
    }

    @media (width: 768px) and (height: 1024px) {
      background-position: 0 -220px;
    }
  }

  &__title {
    line-height: 1.3;

    @media (width: 1024px) and (height: 1366px) {
      color: #fff;
      font-size: 5rem;

      &-wrapper {
        grid-column: none;
      }
    }
  }
}
</style>
