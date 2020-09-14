<template>
  <section id="about" class="flex items-center nave-about py-24">
    <div class="grid grid-cols-12 items-center md:container mx-5">
      <div class="col-span-12 lg:col-span-6 lg:col-start-1">
        <nave-embed-ratio class="col-span-6">
          <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="lg:mx-0 mx-auto"
                  frameborder="0" height="378" src="https://www.youtube.com/embed/E48ThA7WqZ4" width="560"
          />
        </nave-embed-ratio>
      </div>

      <div class="col-span-12 lg:col-span-5 lg:col-start-8 lg:mt-0 mt-10 nave-about__text-wrapper">
        <h2 class="font-bold text-5xl text-white">Vamos falar sobre propósito?</h2>
        <p class="mt-4 text-base text-white">
          é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o
          século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.
        </p>
        <img alt="Bild Vitta - NAVE" class="mt-6" src="../assets/img/Bild_Vitta.svg">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .nave-about {
    background-image: url('../assets/img/nave_tela-proposito_.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
