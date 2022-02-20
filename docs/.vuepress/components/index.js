import Block from './Block'


const components = [
  Block
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  // <API> is the alias of <Block> component.
  Vue.component('API', Block)

  Vue.prototype.$message = Message
}

export default {
  install,
}