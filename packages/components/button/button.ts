import { ExtractPropTypes } from 'vue'
import { buildProps } from '@es-ui/utils/vue/props/runtime'
import { useSizeProp } from '@es-ui/hooks/useSize'

const moldTypeValues = [
  'primary',
  'success',
  'warning',
  'error',
  'info',
  'fab',
  'default',
  '',
] as const
const NativeTypeValues = ['button', 'submit', 'reset'] as const

export const buttonProps = buildProps({
  mold: {
    type: String,
    values: moldTypeValues,
    default: 'default',
  },
  type: {
    type: String,
    values: NativeTypeValues,
    default: 'button',
  },
  size: useSizeProp,
  disabled: Boolean,
  round: Boolean,
  circle: Boolean,
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
