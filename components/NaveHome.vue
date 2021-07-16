<template>
  <section id="home" class="bg-gray grid grid-cols-12 items-center lg:px-32 md:px-12 nave-home py-12">
    <div class="col-span-12 lg:col-span-5 lg:mx-0 mx-5 nave-home__title-wrapper">
      <div class="items-center row">
        <h1 class="font-bold lg:text-4xl mb-8 md:text-left nave-home__title text-2xl text-center text-primary-800 xl:text-5xl">
          Desenhamos e lançamos produtos digitais que transformam empresas.
        </h1>
        <nave-link-button bg-color="primary" bg-gradient class="hidden lg:mb-0 mb-10 md:inline-block mt-8" label="Quero trabalhar na Nave" link="#vacancies" />
      </div>
    </div>
    <div class="col-end-13 col-start-1 lg:col-end-13 lg:col-start-7 lg:mx-0 md:mt-0 mt-8 mx-5">
      <div class="nave-home__image rounded-lg" />
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
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      height: 350px;
    }

    &:hover {
      background-size: 125%;
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
  background-image: url('../assets/img/img-header1.png');
}

.no-webp .nave-home__image {
  background-image: url('../assets/img/img-header1.png');
}

@media (min-width: 768px) and (max-width: 1024px) {
  .webp .nave-home {
    background-image: url('../assets/img/img-header.svg');
    background-position: 0 -50px;
  }

  .no-webp .nave-home {
    background-image: url('../assets/img/img-header.svg');
  }
}
</style>
