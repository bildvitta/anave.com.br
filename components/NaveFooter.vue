<template>
  <footer id="contact" class="nave-footer">
    <div class="nave-footer__image py-20">
      <div class="flex flex-col hidden items-center lg:container md:flex md:flex-row md:items-end md:justify-between mx-5">
        <div class="text-white">
          <section class="md:text-left text-center">
            <!-- logo -->
            <div class="flex justify-center mb-12 md:justify-start text-4xl">
              <img alt="logo nave" class="self-start w-48" src="@/assets/img/nave-logo-full.svg" style="max-width: 240px;">
            </div>
            <div>
              Laboratório de inovação e tecnologia do grupo Bild & Vitta
            </div>
          </section>
          <section class="md:text-left text-center">
            <a class="flex flex-row hover:text-primary-500 mt-6 text-primary-200" href="mailto:contato@anave.com.br">
              <email-outline-icon class="mr-2" />
              <div>contato@anave.com.br</div>
            </a>
          </section>
          <div class="flex mt-8 space-x-2">
            <div v-for="(media, index) in socialsLinks" :key="index" class="hidden md:flex">
              <nave-link-button class="bg-transparent border-2 border-white font-bold hover:bg-secondary-500 hover:border-secondary-500" :href="media.link" :icon="media.icon" :label="media.name" link="content.link" small target="_bank" />
            </div>
          </div>
        </div>
        <!-- info -->
        <div class="md:w-5/12 text-white">
          <section class="flex flex-row flex-wrap md:text-left text-center">
            <div class="font-bold mr-2 text-3xl text-left">Vamos tomar um </div>
            <!-- typed -->
            <div class="flex font-bold text-3xl">
              <vue-typed-js :loop="true" :show-cursor="false" :strings="['café', 'capuccino', 'sorvete']">
                <h1 class="typing" />
              </vue-typed-js>
              <span>?</span>
            </div>
          </section>
          <section class="md:flex-col md:mt-16 mt-8">
            <div class="font-bold mb-5 md:text-left text-2xl text-center">
              Shopping Iguatemi Business
            </div>
            <div class="md:text-left text-center text-lg">
              <div>Avenida Luis Eduardo Toledo Prado 800, 3º andar,</div>
              <div>Ribeirão Preto, São Paulo Brasil</div>
            </div>
            <a class="flex flex-row hover:text-primary-500 mt-6 text-primary-200" href="https://bit.ly/3vMYmob">
              <map-marker-outline-icon class="mr-2" />
              Como chegar?
            </a>
          </section>
        </div>
      </div>
      <!-- mobile -->
      <div class="flex flex-col md:hidden">
        <div class="text-white">
          <section class="text-center">
            <section class="font-bold mb-10 text-center">
              <div class="mr-2 text-3xl">Vamos tomar um </div>
              <!-- typed -->
              <div class="flex justify-center text-3xl">
                <vue-typed-js :loop="true" :show-cursor="false" :strings="['café', 'capuccino', 'sorvete']">
                  <h1 class="typing" />
                </vue-typed-js>
                <span>?</span>
              </div>
            </section>
            <div class="bg-gray-400 mx-2 my-10 nave-footer__separator" />
            <!-- logo -->
            <div class="flex justify-center mb-12 md:justify-start text-4xl">
              <img alt="logo nave" class="self-start w-48" src="@/assets/img/nave-logo-full.svg" style="max-width: 240px;">
            </div>
            <div>
              Laboratório de inovação e tecnologia do grupo Bild & Vitta
            </div>
          </section>
          <section class="md:text-left text-center">
            <a class="flex flex-row hover:text-primary-500 justify-center mt-6 text-center text-primary-200" href="mailto:contato@anave.com.br">
              <email-outline-icon class="mr-2" />
              <div>contato@anave.com.br</div>
            </a>
          </section>
          <div class="flex justify-center mt-8 space-x-2">
            <div v-for="(media, index) in socialsLinks" :key="index">
              <nave-link-button class="bg-transparent border-2 border-white" :href="media.link" :icon="media.icon" :label="media.name" link="content.link" small target="_bank" />
            </div>
          </div>
        </div>
        <!-- info -->
        <div class="text-white">
          <section class="md:flex-col md:mt-16 mt-8">
            <div class="font-bold mb-5 md:text-left text-1xl text-center">
              Shopping Iguatemi Business
            </div>
            <div class="md:text-left mx-6 text-1xl text-center">
              <div>Avenida Luis Eduardo Toledo Prado 800, 3º andar,</div>
              <div>Ribeirão Preto, São Paulo Brasil</div>
            </div>
            <a class="flex flex-row hover:text-primary-500 justify-center mt-6 text-primary-200" href="https://bit.ly/3vMYmob" target="_blank">
              <map-marker-outline-icon class="mr-2" />
              Como chegar?
            </a>
          </section>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import MapMarkerOutlineIcon from 'vue-material-design-icons/MapMarkerOutline.vue'
import EmailOutlineIcon from 'vue-material-design-icons/EmailOutline.vue'

Vue.use(VueTypedJs)

const socials = [
  { name: 'Instagram', link: 'https://www.instagram.com/carreirasnave/', icon: 'instagram' },
  { name: 'Linkedin', link: 'https://www.linkedin.com/company/anave', icon: 'Linkedin' },
  { name: 'Medium', link: 'https://medium.com/anave', icon: 'Medium' }
]
export default {
  components: {
    MapMarkerOutlineIcon,
    EmailOutlineIcon
  },

  computed: {
    socialsLinks () {
      return socials
    }
  }
}
</script>
<style lang="scss">
  .nave-footer {
    background: radial-gradient(133.62% 225.56% at 75.1% 0%, #006dd2 0%, #062b55 100%);

    &__image {
      background-image: url('../assets/img/Grafismo-6.png');
    }

    &__separator {
      height: 1px;
    }
  }
</style>
