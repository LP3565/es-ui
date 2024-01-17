import type { App } from 'vue'
import EsButton from './button/button.vue'
import EsCard from './card/card.vue'
import EsInput from './input/input.vue'
import EsTag from './tag/tag.vue'
import EsRadio from './radio/radio.vue'
import EsCheckbox from './checkbox/checkbox.vue'
import EsSwitch from './switch/switch.vue'
import EsSelect from './select/select.vue'
import EsSteps from './steps/steps.vue'
import EsScrollBar from './scrollbar/scrollbar.vue'

const components = [
  EsButton,
  EsCard,
  EsInput,
  EsTag,
  EsRadio,
  EsCheckbox,
  EsSwitch,
  EsSelect,
  EsSteps,
  EsScrollBar,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
}

export {
  EsButton,
  EsCard,
  EsInput,
  EsTag,
  EsRadio,
  EsCheckbox,
  EsSwitch,
  EsSelect,
  EsSteps,
  EsScrollBar,
}

export default {
  install,
}
