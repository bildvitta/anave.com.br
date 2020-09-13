<template>
  <main>
    <section id="home" class="bg-white">
      <nave-home />
    </section>
    <section id="about" class="flex items-center nave-about__section py-24">
      <nave-about />
    </section>
    <section id="team" class="nave-our-team__section py-24">
      <nave-our-team />
    </section>
    <section id="believe" class="nave-believe__section py-48">
      <nave-believe />
    </section>
    <section id="spaceship" class="nave-spaceship__section py-24">
      <nave-spaceship />
    </section>
    <section id="vacancies" class="bg-gray-200 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>Vagas</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
    <section id="contact" class="bg-gray-200 py-24">
      <div class="container flex flex-col items-center md:flex-row">
        <h5>Contato</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, delectus eos eum ducimus officia placeat nemo quam necessitatibus nesciunt, id hic, iure odio iusto soluta cum at perspiciatis? Non, necessitatibus?
        </p>
      </div>
    </section>
  </main>
</template>
<script>

export default {

}
</script>

<style lang="scss">
  .nave-about__section {
    background-image: url('../assets/img/nave_tela-proposito_.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .nave-believe__section {
    background-image: url('../assets/img/nave_premissas.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
