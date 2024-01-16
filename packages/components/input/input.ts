import type { ExtractPropTypes } from 'vue'
import { buildProps } from '@es-ui/utils/vue/props/runtime'

const typeValues = ['text', 'password'] as const
const mold = ['default', 'filled'] as const

export const inputProps = buildProps({
  /**
   * @description input style
   */
  mold: {
    type: String,
    values: mold,
    default: 'default',
  },
  /**
   * @description input type
   */
  type: {
    type: String,
    values: typeValues,
    default: 'text',
  },
  /**
   * @description input label
   */
  label: {
    type: String,
    default: 'Label',
  },
  /**
   * @description input v-model
   * @prop String
   */
  modelValue: String,
  /**
   * @description input placeholder
   */
  placeholder: String,
  /**
   * @description Maximum text length
   */
  max: Number,
  /**
   * @description Minimum text length
   */
  min: Number,
  /**
   * @description disabled input
   */
  disabled: Boolean,
} as const)

export const inputEmit = ['update:model-value', 'change', 'input', 'keydown', 'focus', 'blur']

export type InputProps = ExtractPropTypes<typeof inputProps>
