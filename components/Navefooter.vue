<template>
  <footer class="bg-primary pb-32 pt-12 px-24">
    <div class="container flex items-end justify-between sm:flex-col sm:items-center">
      <div class="text-white">
        <section class="sm:text-center">
          <!-- logo -->
          <div class="text-4xl">logo nave</div>
          <div class="mb-16 text-2xl">bild | vitta</div>
        </section>
        <section class="sm:text-center">
          <div class="font-black text-5xl">Vamos tomar um</div>
          <!-- typed -->
          <div class="flex font-black sm:justify-center space-x-2 text-5xl">
            <vue-typed-js :loop="true" :show-cursor="false" :strings="['Café', 'Capuccino', 'Sorvete']">
              <h1 class="typing" />
            </vue-typed-js>
            <span>?</span>
          </div>
        </section>
        <section class="sm:text-center">
          <div class="mt-6 underline">contato@anave.com.br</div>
        </section>
      </div>
      <!-- links -->
      <div>
        <section class="sm:mt-16 sm:w-auto text-white">
          <div class="font-bold mb-5 sm:text-center text-2xl">
            Shopping Iguatemi Business
          </div>
          <div class="sm:text-center sm:w-auto text-xl">Avenida Luis Eduardo Toledo Prado 800,<br> 3º andar, Ribeirão Preto, São Paulo Brasil</div>
          <div class="mt-8 sm:flex sm:justify-center space-x-2 underline">
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
