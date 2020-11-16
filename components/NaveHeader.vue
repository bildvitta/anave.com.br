<template>
  <div>
    <header class="bg-white fixed inset nave-header py-5 shadow-md w-full z-50">
      <div class="flex flex-wrap items-center lg:container md:flex-row mx-5">
        <nuxt-link class="md:mb-0" to="/">
          <img alt="NAVE - Espaço Nave" :sizes="logoSrcsetSizes" src="~/assets/img/logo@2x.png"
               srcset="~/assets/img/logo@2x.png 106w, ~/assets/img/logo.png 53w" @click="scrollToTop"
          >
        </nuxt-link>

        <nav class="hidden items-center justify-center lg:flex md:ml-auto">
          <a v-for="(link, index) in links" :key="index"
             class="cursor-pointer duration-200 hover:text-purple-100 lowercase mr-10 nave-header__desktop-menu-link tracking-widest transition"
             :class="activateLink(link.href)" :href="link.href"
             @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
          <nave-link-button class="lowercase nave-header__desktop-menu-link tracking-widest" label="Vagas" link="#vacancies" />
        </nav>

        <!-- MENU MOBILE BUTTON -->
        <div class="cursor-pointer lg:hidden menu-icon ml-auto" :class="openedMobileMenu" @click="toggleMobileMenu">
          <div class="bg-gray-900 duration-300 ease-linear h-1 menu-icon__bar--1 transition-all w-6" />
          <div class="bg-gray-900 duration-300 ease-linear h-1 menu-icon__bar--2 mt-1 transition-all w-6" />
          <div class="bg-gray-900 duration-300 ease-linear h-1 menu-icon__bar--3 mt-1 transition-all w-6" />
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
             class="block cursor-pointer lowercase p-3 text-center text-white text-xl tracking-widest w-full"
             :href="link.href" @click="toggleMobileMenu(), scrollTo(link.href)"
          >{{ link.label }}</a>
          <nave-link-button bg-color="white" class="lowercase mt-6 mx-auto text-center text-xl tracking-widest w-56"
                            label="Vagas" link="#vacancies" text-color="primary" @click.native="toggleMobileMenu"
          />
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

    logoSrcsetSizes () {
      return '(max-width: 1023px) 50px, 53px'
    },

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
  &__desktop-menu-link {
    &.is-active {
      color: $color-primary;
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
    height: calc(100vh - 58px);
    top: 58px;
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
