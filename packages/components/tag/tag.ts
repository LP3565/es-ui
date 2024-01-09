import { buildProps } from '@es-ui/utils/vue/props/runtime'
import { useSizeProp } from '@es-ui/hooks/useSize'

export const tagValues = ['error', 'success', 'info', 'warning'] as const

export const tagProps = buildProps({
  mold: {
    type: String,
    values: tagValues,
    default: '',
  },
  size: useSizeProp,
  clear: Boolean,
} as const)
