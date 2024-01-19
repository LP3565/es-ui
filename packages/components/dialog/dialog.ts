import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const dialogProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  center: Boolean,
  zIndex: Number,
  showClose: Boolean,
  top: String,
  width: String,
  modal: {
    type: Boolean,
    default: true,
  },
} as const)
