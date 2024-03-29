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
import EsAlert from './alert/alert.vue'
import EsDialog from './dialog/dialog.vue'
import EsMessage from './message/install'
import EsDrawer from './drawer/drawer.vue'

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
  EsAlert,
  EsDialog,
  EsDrawer,
]

const install = (app: App) => {
  components.forEach((item) => {
    app.component(item.name, item)
  })
  app.config.globalProperties.$message = EsMessage
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
  EsAlert,
  EsDialog,
  EsMessage,
  EsDrawer,
}

export default {
  install,
}
