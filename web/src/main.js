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

  // Add Favicons and App Icons
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/apple-icon-57x57.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/apple-icon-60x60.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/apple-icon-72x72.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/apple-icon-76x76.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/apple-icon-114x114.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/apple-icon-120x120.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/apple-icon-144x144.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/apple-icon-152x152.png'
  })
  head.link.push({
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-icon-180x180.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/android-icon-192x192.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon-96x96.png'
  })
  head.link.push({
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png'
  })
  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })
  head.meta.push({
    name: 'msapplication-TileColor',
    content: '#ffffff'
  })
  head.meta.push({
    name: 'msapplication-TileImage',
    content: '/ms-icon-144x144.png'
  })
  head.meta.push({
    name: 'theme-color',
    content:' #ffffff'
  })
}
