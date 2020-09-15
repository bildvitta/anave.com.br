import Vue from 'vue'

const state = Vue.observable({ activeLink: '' })

function setActiveLink (previousActive, headerSelector = '.nave-header') {
  const headerElement = document.querySelector(headerSelector)
  const elements = document.querySelectorAll('[data-active-link]')
  const elementList = {}

  window.addEventListener('scroll', call)

  function call () {
    elements.forEach((element) => {
      elementList[element.dataset.activeLink] = {
        from: element.offsetTop,
        to: element.offsetHeight + element.offsetTop
      }
    })

    for (const key in elementList) {
      const currentScroll = window.scrollY + headerElement.offsetHeight + 2
      const { from, to } = elementList[key]

      if (currentScroll >= from && currentScroll <= to) {
        state.activeLink = key
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        state.activeLink = previousActive
      }
    }
  }

  function destroy () {
    window.removeEventListener('scroll', call)
  }

  return {
    destroy
  }
}

export {
  setActiveLink,
  state
}
