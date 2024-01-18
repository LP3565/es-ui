import { buildProps } from '@es-ui/utils/vue/props/runtime'

const mold = ['success', 'error', 'info', 'warning'] as const
const variant = ['filled', 'outlined'] as const

export const alertProps = buildProps({
  /**
   * @description Alert style
   */
  mold: {
    type: String,
    values: mold,
    default: 'success',
  },
  /**
   * @description Alert variant
   */
  variant: {
    type: String,
    values: variant,
    default: '',
  },
  /**
   * @description Alert title
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * @description Alert close button
   */
  clear: Boolean,
} as const)
