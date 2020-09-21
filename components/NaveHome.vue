<template>
  <section id="home" class="bg-white grid grid-cols-12 items-center lg:container lg:py-0 nave-home py-12">
    <div class="col-span-12 lg:col-span-5 lg:mx-0 mx-5 nave-home__title-wrapper">
      <div class="items-center row">
        <h1 class="font-bold lg:text-4xl nave-home__title text-3xl xl:text-5xl">
          Desenhamos e lançamos produtos digitais que transformam empresas.
        </h1>
        <nave-link-button class="hidden lg:mb-0 mb-10 md:inline-block mt-8" label="Quero trabalhar na Nave" link="#vacancies" />
      </div>
    </div>
    <div class="col-end-13 col-start-1 lg:col-end-13 lg:col-start-7 lg:mx-0 md:mt-0 mt-8 mx-5">
      <div class="nave-home__image" />
    </div>
  </section>
</template>

<style lang="scss">
.nave-home {
  height: calc(100vh - 88px);

  @media (max-width: 1024px) {
    height: auto;
    min-height: calc(100vh - 58px);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .nave-link-button {
      background-color: #fff;
      background-image: none;
      color: #110721;
    }
  }

  &__image {
    background-position: 0 -100px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: $default-radius;
    height: 500px;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      height: 350px;
    }
  }

  &__title {
    line-height: 1.3;

    @media (min-width: 768px) and (max-width: 1024px) {
      color: #fff;
      font-size: 3.5rem;

      &-wrapper {
        grid-column: none;
      }
    }
  }
}

.webp .nave-home__image {
  background-image: url('../assets/img/imagem_home_rocket_small.webp');
}

.no-webp .nave-home__image {
  background-image: url('../assets/img/nave_tela-proposito_.png');
}

@media (min-width: 768px) and (max-width: 1024px) {
  .webp .nave-home {
    background-image: url('../assets/img/imagem_home_rocket_small.webp');
    background-position: 0 -50px;
  }

  .no-webp .nave-home {
    background-image: url('../assets/img/imagem_home_rocket_small.jpg');
  }
}
</style>
