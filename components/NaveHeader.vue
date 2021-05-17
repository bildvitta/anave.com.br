<template>
  <div>
    <header class="bg-white fixed inset nave-header py-5 shadow-md w-full z-50">
      <div class="flex flex-wrap items-center lg:container md:flex-row mx-5">
        <nuxt-link class="flex flex-row md:mb-0" to="/">
          <img alt="NAVE - Espaço Nave" class="w-32" src="~/assets/img/nave-logo.svg" @click="scrollToTop">
          <div v-if="!showMobileMenu" class="bg-gray-400 mx-6 my-1 nave-header__desktop-separator" />
          <img v-if="!showMobileMenu" alt="NAVE - Espaço Nave" src="~/assets/img/bild-vitta-logo.svg" @click="scrollToTop">
        </nuxt-link>

        <nav class="hidden items-center justify-center lg:flex md:ml-auto">
          <a v-for="(link, index) in links" :key="index"
             class="cursor-pointer duration-200 font-medium hover:text-secondary-500 hover:underline lowercase mr-10 nave-header__desktop-menu-link text-black tracking-widest transition"
             :class="activateLink(link.href)" :href="link.href"
             @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
          <nave-link-button bg-color="secondary" class="nave-header__desktop-menu-link tracking-widest" label="Ver vagas" link="#vacancies" />
        </nav>

        <!-- MENU MOBILE BUTTON -->
        <div class="cursor-pointer lg:hidden menu-icon ml-auto" :class="openedMobileMenu" @click="toggleMobileMenu">
          <div class="bg-primary-700 duration-300 ease-linear h-1 menu-icon__bar--1 transition-all w-6" />
          <div class="bg-primary-700 duration-300 ease-linear h-1 menu-icon__bar--2 mt-1 transition-all w-6" />
          <div class="bg-primary-700 duration-300 ease-linear h-1 menu-icon__bar--3 mt-1 transition-all w-6" />
        </div>
      </div>
    </header>

    <!-- MENU MOBILE -->
    <transition
      enter-active-class="animated fade-in-down"
      leave-active-class="animated fade-out-up"
      name="fade"
    >
      <nav v-if="showMobileMenu" class="bg-primary fixed lg:hidden nave-header__mobile-menu w-screen z-40">
        <div class="align-center flex flex-col h-full justify-center">
          <a v-for="link in links" :key="link.label" :ref="link.href"
             class="block cursor-pointer p-3 text-center text-white text-xl tracking-widest w-full"
             :href="link.href" @click="toggleMobileMenu(), scrollTo(link.href)"
          >{{ link.label }}</a>
          <nave-link-button bg-color="secondary" class="mt-6 mx-auto px-14 text-center text-xl tracking-widest w-56" label="Ver vagas" link="#vacancies" @click.native="toggleMobileMenu" />
          <div class="flex flex-col items-center mt-10 opacity-25 text-white">
            <div>Labs de inovação</div>
            <div class="flex flex-row mt-2">
              <img alt="Bild Vitta - NAVE" class="w-16" src="../assets/img/logo-bild-white.svg">
              <div class="bg-gray-400 mx-6 my-4 nave-header__mobile-menu-separator" />
              <img alt="Bild Vitta - NAVE" class="mb-4 w-16" src="../assets/img/logo-vitta-white.svg">
            </div>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>
<script>
import { state } from '@/helpers/active-link'
import scrollHelper from '../mixins/scrollHelper'

export default {
  mixins: [
    scrollHelper
  ],

  data () {
    return {
      links: [
        {
          label: 'Sobre',
          href: '#about'
        },
        //  TODO seção oculta por ora, aguardando conteúdo
        // {
        //   label: 'Nosso time',
        //   href: '#team'
        // },
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
      showMobileMenu: false,
      sectionsYPositions: {}
    }
  },

  computed: {
    activeLink () {
      return state.activeLink
    },

    // logoSrcsetSizes () {
    //   return '(max-width: 1023px) 20px, 23px'
    // },

    openedMobileMenu () {
      return this.showMobileMenu && 'mobile-menu-opened'
    }
  },

  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    },

    scrollToTop () {
      this.showMobileMenu = false
      window.scrollTo({ top: 0 })
    },

    activateLink (href) {
      return `#${this.activeLink}` === href ? 'is-active' : ''
    }
  }
}
</script>

<style lang="scss">
.nave-header {
  &__desktop {
    &-separator {
      width: 2px;
    }

    &-menu-link {
      &.is-active {
        color: #f26e36;
      }
    }
  }

  .mobile-menu-opened {
    .menu-icon__bar--1 {
      transform: translateY(8px) rotate(-45deg);
    }

    .menu-icon__bar--2 {
      opacity: 0;
    }

    .menu-icon__bar--3 {
      transform: translateY(-8px) rotate(45deg);
    }
  }

  &__mobile-menu {
    background: radial-gradient(193.3% 139.39% at 49.97% 0%, #006dd2 0%, #062b55 100%);
    height: calc(100vh - 58px);
    top: 58px;

    &-separator {
      width: 2px;
    }
  }

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
