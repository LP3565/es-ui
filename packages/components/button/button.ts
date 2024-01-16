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
  /**
   * @description button style
   */
  mold: {
    type: String,
    values: moldTypeValues,
    default: 'default',
  },
  /**
   * @description button native type
   */
  type: {
    type: String,
    values: NativeTypeValues,
    default: 'button',
  },
  /**
   * @description button size
   */
  size: useSizeProp,
  /**
   * @description button disabled attribute
   */
  disabled: Boolean,
  /**
   * @description button oval
   */
  round: Boolean,
  /**
   * @description circle button
   */
  circle: Boolean,
} as const)

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
