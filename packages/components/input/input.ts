import { buildProps } from '@es-ui/utils/vue/props/runtime'

const typeValues = ['text', 'password'] as const

export const inputProps = buildProps({
  type: {
    type: String,
    values: typeValues,
    default: 'text',
  },
  label: {
    type: String,
    required: true,
  },
} as const)
