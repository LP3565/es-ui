import type { App } from 'vue'
import EsButton from './button/button.vue'
import EsCard from './card/card.vue'

const components = [EsButton, EsCard]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export { EsButton, EsCard }

export default {
  install,
}
