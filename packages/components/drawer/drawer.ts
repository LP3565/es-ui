import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const direction = ['top', 'left', 'bottom', 'right'] as const

export const drawerProps = buildProps({
  /**
   * @description Control the display and hiding of drawer
   */
  modelValue: {
    type: Boolean,
    required: true,
  },
  /**
   * @description The direction in which the drawer appears
   */
  direction: {
    type: String,
    values: direction,
    default: 'right',
  },
  /**
   * @description drawer size
   */
  size: {
    type: String,
    default: '28%',
  },
  /**
   * @description Whether to display the modal
   */
  modal: Boolean,
} as const)
