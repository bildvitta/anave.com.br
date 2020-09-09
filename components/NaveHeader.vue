/* eslint-disable no-console */
<template>
  <div>
    <header class="bg-white fixed header inset py-5 w-full z-10">
      <div class="flex flex-wrap items-center lg:container md:flex-row mx-5">
        <nuxt-link class="md:mb-0" to="/">
          <img
            alt="NAVE - Espaço Nave"
            sizes="(max-width: 1023px) 106px,
                    53px"
            src="~/assets/img/logo@2x.png"
            srcset="~/assets/img/logo@2x.png 106w, ~/assets/img/logo.png 53w"
            @click="moveToTop"
          >
        </nuxt-link>

        <nav class="hidden items-center justify-center lg:flex md:ml-auto">
          <a
            v-for="link in links"
            :key="link.label"
            class="cursor-pointer duration-200 hover:text-nave-purple mr-10 transition"
            :class="activeSection(link.href)"
            :href="link.href"
          >{{ link.label }}</a>
          <link-button label="Vagas" link="#vacancies" />
        </nav>

        <!-- MENU MOBILE BUTTON -->
        <img
          alt="NAVE - Menu mobile"
          class="cursor-pointer lg:hidden ml-auto w-10"
          src="~/assets/icons/menu-outline.svg"
          @click="openMobileMenu"
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
        class="bg-primary fixed h-screen header__mobile-menu inset lg:hidden w-screen z-10"
      >
        <img
          alt="NAVE - Menu mobile"
          class="absolute cursor-pointer header__mobile-close lg:hidden w-10"
          src="~/assets/icons/close-outline.svg"
          @click="hideMobileMenu"
        >
        <div class="align-center flex flex-col h-full mt-20">
          <a
            v-for="link in links"
            :key="link.label"
            class="block cursor-pointer p-3 text-center text-white w-full"
            :href="link.href"
            @click="hideMobileMenu"
          >{{ link.label }}</a>
          <link-button
            bg-color="bg-white"
            class="mt-6 text-center"
            label="Vagas"
            link="#vacancies"
            rounded-none
            text-color="text-primary"
          />
          <nuxt-link to="/">
            <img
              alt="NAVE - Mobile menu logo"
              class="absolute header__mobile-menu-logo mx-auto w-56"
              src="~/assets/img/NAVE-negativo.png"
              @click="moveToTop"
            >
          </nuxt-link>
        </div>
      </nav>
    </transition>
  </div>
</template>
<style>
* {
  scroll-behavior: smooth;
}
</style>
<script>
export default {
  data () {
    return {
      links: [
        {
          label: 'sobre',
          href: '#about'
        },
        {
          label: 'nosso time',
          href: '#Team'
        },
        {
          label: 'acreditamos',
          href: '#believe'
        },
        {
          label: 'espaço nave',
          href: '#spaceship'
        },
        {
          label: 'contato',
          href: '#contact'
        }
      ],
      showMobileMenu: false
    }
  },

  methods: {
    activeSection (elementHref) {
      const hash = this.$route.hash

      return hash === elementHref && 'text-nave-purple'
    },

    openMobileMenu () {
      this.showMobileMenu = true
    },

    hideMobileMenu () {
      this.showMobileMenu = false
    },

    moveToTop () {
      this.hideMobileMenu()
      window.scrollTo({ top: 0 })
    }
  }
}
</script>

<style lang="scss">
.header {
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
