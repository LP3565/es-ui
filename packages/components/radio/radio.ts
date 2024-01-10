import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const radioProps = buildProps({
  label: String,
  name: String,
  checked: Boolean,
  modelValue: String,
  disabled: Boolean,
} as const)

export const radioEmit = ['update:model-value', 'change']
