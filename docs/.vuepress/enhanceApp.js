import globalComponents from './components/global'



export default ({ Vue, isServer, router }) => {
  // register components.
  Vue.use(globalComponents)
  // Vue.use(Quasar)
  // if (!isServer) {
  //   Vue.use(Quasar)
  // }
}

// import Vue from 'vue'
// import Quasar from 'quasar'

// Vue.use(Quasar)
// Vue.use(globalComponents)