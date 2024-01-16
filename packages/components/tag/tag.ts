import { buildProps } from '@es-ui/utils/vue/props/runtime'
import { useSizeProp } from '@es-ui/hooks/useSize'

export const tagValues = ['error', 'success', 'info', 'warning'] as const

export const tagProps = buildProps({
  /**
   * @description tag style
   */
  mold: {
    type: String,
    values: tagValues,
    default: '',
  },
  /**
   * @description tag size
   */
  size: useSizeProp,
  /**
   * @description Display the delete icon to delete the tag
   */
  clear: Boolean,
} as const)
