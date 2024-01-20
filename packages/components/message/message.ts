import { buildProps } from '@es-ui/utils/vue/props/runtime'

const mold = ['success', 'error', 'info', 'warning'] as const

export const messageProps = buildProps({
  /**
   * @description message style
   */
  mold: {
    type: String,
    values: mold,
    required: true,
  },
  /**
   * @description message content
   */
  content: {
    type: String,
    required: true,
  },
  /**
   * @description message element id
   */
  id: String,
  /**
   * @description Message closing time
   */
  duration: Number,
  /**
   * @description css z-index
   */
  zIndex: Number,
  /**
   *@description Show off button
   */
  showClose: Boolean,
  /**
   * @description close function
   */
  onClose: Function,
  /**
   * @description open function
   */
  onOpen: Function,
} as const)

export type MessageProps = {
  mold: 'success' | 'error' | 'info' | 'warning'
  content: string
  showClose?: boolean
  zIndex?: number
  duration?: number
  onClose?: () => void
  onOpen?: () => void
}
