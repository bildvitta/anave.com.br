<template>
  <footer class="bg-secondary pb-32 pt-12 px-24">
    <div class="container flex flex-col items-center justify-between md:flex-row md:items-end">
      <div class="text-white">
        <section class="md:text-left text-center">
          <!-- logo -->
          <div class="text-4xl">logo nave</div>
          <div class="mb-16 text-2xl">bild | vitta</div>
        </section>
        <section class="md:text-left text-center">
          <div class="font-black text-5xl">Vamos tomar um</div>
          <!-- typed -->
          <div class="flex font-black justify-center md:justify-start space-x-2 text-5xl">
            <vue-typed-js :loop="true" :show-cursor="false" :strings="['Café', 'Capuccino', 'Sorvete']">
              <h1 class="typing" />
            </vue-typed-js>
            <span>?</span>
          </div>
        </section>
        <section class="md:text-left text-center">
          <div class="mt-6 underline">contato@anave.com.br</div>
        </section>
      </div>
      <!-- links -->
      <div>
        <section class="mt-16 text-white w-auto">
          <div class="font-bold mb-5 md:text-left text-2xl text-center">
            Shopping Iguatemi Business
          </div>
          <div class="md:text-left text-center text-xl w-auto">Avenida Luis Eduardo Toledo Prado 800,<br> 3º andar, Ribeirão Preto, São Paulo Brasil</div>
          <div class="flex justify-center md:justify-start mt-8 space-x-2 underline">
            <a href="#">instagram</a>
            <a href="#">linkedin</a>
            <a href="#">Medium</a>
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

export default {

}
</script>
