import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const checkboxProps = buildProps({
  /**
   * @description checkbox label
   */
  label: String,
  /**
   * @description checkbox name
   */
  name: String,
  /**
   * @description checkbox v-model
   * @prop Boolean
   */
  modelValue: Boolean,
  /**
   * @description disabled checkbox
   */
  disabled: Boolean,
  /**
   * @description checked checkbox
   */
  checked: Boolean,
} as const)

export const checkboxEmit = ['update:model-value', 'change']
