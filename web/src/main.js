// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

// Import image url builder
import urlForImage from './utils/urlForImage'

export default function(Vue, { router, head, isClient, appOptions }) {

  Vue.use(Vuex)
  appOptions.store = new Vuex.Store({
    plugins: [],
    state: {
        page: '/',
        subtitle: '',
    },
    getters: {},
    actions: {},
    mutations: {
        setSubtitle(state, newSubtitle) {
            state.subtitle = newSubtitle;
        },
        setPage(state, newPage) {
          state.page = newPage;
        }
    }
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.prototype.$urlForImage = urlForImage

  router.beforeEach((to, from, next) => {
    appOptions.store.commit('setPage', to.path)
    // window.alert(appOptions.store.state.page)
    next()
  })

  router.options.scrollBehavior = function (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0, behavior: 'smooth' })
      }, 0)
    })
  }

  // Add Adobe Fonts
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/ngl3ecq.css'
  })
}
