import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const switchProps = buildProps({
  /**
   * @description switch v-model,
   * @prop Boolean
   */
  modelValue: Boolean,
  /**
   * @description Used to control the status and uniqueness of the switch
   */
  id: {
    type: String,
    required: true,
  },
  /**
   * @description switch name
   */
  name: String,
  /**
   * @description disabled switch
   */
  disabled: Boolean,
} as const)

export const switchEmit = ['update:model-value', 'change']
