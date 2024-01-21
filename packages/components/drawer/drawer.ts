import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const direction = ['top', 'left', 'bottom', 'right'] as const

export const drawerProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  direction: {
    type: String,
    values: direction,
    default: 'right',
  },
  size: {
    type: String,
    default: '28%',
  },
  modal: Boolean,
} as const)
