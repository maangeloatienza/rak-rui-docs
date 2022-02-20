import globalComponents from './../components/global'
import Quasar from 'quasar'


export default ({ Vue, isServer, router }) => {
  // register components.
  Vue.use(globalComponents)
  Vue.use(Quasar)
  // if (!isServer) {
  //   Vue.use(Quasar)
  // }
}
