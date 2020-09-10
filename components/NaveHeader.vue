<template>
  <div>
    <header class="bg-white fixed inset nave-header py-5 shadow-md w-full z-10">
      <div class="flex flex-wrap items-center lg:container md:flex-row mx-5">
        <nuxt-link class="md:mb-0" to="/">
          <img
            alt="NAVE - Espaço Nave"
            :sizes="logoSrcsetSizes"
            src="~/assets/img/logo@2x.png"
            srcset="~/assets/img/logo@2x.png 106w, ~/assets/img/logo.png 53w"
            @click="moveToTop"
          >
        </nuxt-link>

        <nav class="hidden items-center justify-center lg:flex md:ml-auto">
          <a v-for="(link, index) in links" :key="index"
             class="cursor-pointer duration-200 hover:text-purple-100 lowercase mr-10 transition"
             :href="link.href"
          >
            {{ link.label }}
          </a>
          <link-button class="lowercase" label="Vagas" link="#vacancies" />
        </nav>

        <!-- MENU MOBILE BUTTON -->
        <img
          alt="NAVE - Menu mobile"
          class="cursor-pointer lg:hidden ml-auto w-10"
          src="~/assets/icons/menu-outline.svg"
          @click="toggleMobileMenu"
        >
      </div>
    </header>

    <!-- MENU MOBILE -->
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
      name="fade"
    >
      <nav
        v-if="showMobileMenu"
        class="bg-primary fixed h-screen inset lg:hidden nave-header__mobile-menu w-screen z-10"
      >
        <img
          alt="NAVE - Menu mobile"
          class="absolute cursor-pointer lg:hidden nave-header__mobile-close w-10"
          src="~/assets/icons/close-outline.svg"
          @click="toggleMobileMenu"
        >
        <div class="align-center flex flex-col h-full mt-20">
          <a
            v-for="link in links"
            :key="link.label"
            class="block cursor-pointer lowercase p-3 text-center text-white w-full"
            :href="link.href"
            @click="toggleMobileMenu"
          >{{ link.label }}</a>
          <link-button
            bg-color="white"
            class="lowercase mt-6 text-center"
            label="Vagas"
            link="#vacancies"
            :rounded="false"
            text-color="primary"
          />
          <nuxt-link to="/">
            <img
              alt="NAVE - Mobile menu logo"
              class="absolute mx-auto nave-header__mobile-menu-logo w-56"
              src="~/assets/img/NAVE-negativo.png"
              @click="moveToTop"
            >
          </nuxt-link>
        </div>
      </nav>
    </transition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      links: [
        {
          label: 'Sobre',
          href: '#about'
        },
        {
          label: 'Nosso time',
          href: '#Team'
        },
        {
          label: 'Acreditamos',
          href: '#believe'
        },
        {
          label: 'Espaço nave',
          href: '#spaceship'
        },
        {
          label: 'Contato',
          href: '#contact'
        }
      ],
      showMobileMenu: false
    }
  },

  computed: {
    logoSrcsetSizes () {
      return '(max-width: 1023px) 106px, 53px'
    }
  },

  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },

    moveToTop () {
      this.toggleMobileMenu()
      window.scrollTo({ top: 0 })
    }
  }
}
</script>

<style lang="scss">
.nave-header {
  &__mobile-close {
    right: 10px;
    top: 10px;
  }

  &__mobile-menu-logo {
    bottom: 55px;
    left: calc(50% + 5px);
    transform: translateX(-50%);
  }
}
</style>
