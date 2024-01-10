import type { App } from 'vue'
import EsButton from './button/button.vue'
import EsCard from './card/card.vue'
import EsInput from './input/input.vue'
import EsTag from './tag/tag.vue'
import EsRadio from './radio/radio.vue'

const components = [EsButton, EsCard, EsInput, EsTag, EsRadio]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export { EsButton, EsCard, EsInput, EsTag, EsRadio }

export default {
  install,
}
