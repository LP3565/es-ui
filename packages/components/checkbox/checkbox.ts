import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const checkboxProps = buildProps({
  label: String,
  name: String,
  modelValue: Boolean,
  disabled: Boolean,
  checked: Boolean,
} as const)

export const checkboxEmit = ['update:model-value', 'change']
