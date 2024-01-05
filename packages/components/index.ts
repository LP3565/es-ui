import type { App } from 'vue'
import EsButton from './button/button.vue'

const components = [EsButton]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export { EsButton }

export default {
  install,
}
