import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const dialogProps = buildProps({
  /**
   * @description Control the display and hiding of dialog boxes
   */
  modelValue: {
    type: Boolean,
    required: true,
  },
  /**
   * @description text center
   */
  center: Boolean,
  /**
   * @description css z-index
   * @default 9
   */
  zIndex: Number,
  /**
   * @description Show off button
   */
  showClose: Boolean,
  /**
   * @description Distance from the top
   * @default 50vh
   */
  top: String,
  /**
   * @description The width of the dialog box
   * @default 50%
   */
  width: String,
  /**
   * @description Whether to display the cover layer
   */
  modal: {
    type: Boolean,
    default: true,
  },
} as const)
