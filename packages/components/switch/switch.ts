import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const switchProps = buildProps({
  modelValue: Boolean,
  id: {
    type: String,
    required: true,
  },
  name: String,
  disabled: Boolean,
} as const)

export const switchEmit = ['update:model-value', 'change']
