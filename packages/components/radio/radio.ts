import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const radioProps = buildProps({
  /**
   * @description label radio
   */
  label: String,
  /**
   * @description radio name
   */
  name: String,
  /**
   * @description checked radio
   */
  checked: Boolean,
  /**
   * @description radio v-model
   * @prop String
   */
  modelValue: String,
  /**
   * @description disabled radio
   */
  disabled: Boolean,
} as const)

export const radioEmit = ['update:model-value', 'change']
