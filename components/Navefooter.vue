<template>
  <footer id="contact" class="bg-secondary pb-32 pt-12">
    <div class="flex flex-col items-center lg:container md:flex-row md:items-end md:justify-between mx-5">
      <div class="text-white">
        <section class="md:text-left text-center">
          <!-- logo -->
          <div class="flex justify-center md:justify-start text-4xl">
            <img alt="logo nave" class="w-48" src="@/assets/img/NAVE-negativo.png">
          </div>
          <div class="flex justify-center mb-16 md:justify-start md:ml-2 mr-2">
            <img alt="Bild Vitta - NAVE" class="mt-6 w-32" src="@/assets/img/Bild_Vitta.svg">
          </div>
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
      <!-- info -->
      <div class="md:w-1/3 text-white">
        <section class="flex-row md:flex-col mt-16">
          <div class="font-bold mb-5 md:text-left text-2xl text-center">
            Shopping Iguatemi Business
          </div>
          <div class="md:text-left text-center text-xl">
            Avenida Luis Eduardo Toledo Prado 800, 3º andar, Ribeirão Preto, São Paulo Brasil
          </div>
          <div class="flex justify-center md:justify-start mt-8 space-x-2 underline">
            <div v-for="(media, index) in socialsLinks" :key="index">
              <a :href="media.link">{{ media.name }}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)

const socials = [
  { name: 'instagram', link: '#' },
  { name: 'linkedin', link: '#' },
  { name: 'Medium', link: '#' }
]
export default {
  data () {
    return {
      return: {
      }
    }
  },

  computed: {
    socialsLinks () {
      return socials
    }
  }
}
</script>
