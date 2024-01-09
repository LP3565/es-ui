import type { ExtractPropTypes } from 'vue'
import { buildProps } from '@es-ui/utils/vue/props/runtime'

const typeValues = ['text', 'password'] as const
const mold = ['default', 'filled'] as const

export const inputProps = buildProps({
  mold: {
    type: String,
    values: mold,
    default: 'default',
  },
  type: {
    type: String,
    values: typeValues,
    default: 'text',
  },
  label: {
    type: String,
    default: 'Label',
  },
  modelValue: String,
  placeholder: String,
  max: Number,
  min: Number,
  disabled: Boolean,
} as const)

export const inputEmit = ['update:model-value', 'change', 'input', 'keydown', 'focus', 'blur']

export type InputProps = ExtractPropTypes<typeof inputProps>
