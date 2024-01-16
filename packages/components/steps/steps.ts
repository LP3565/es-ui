import { buildProps, definePropType } from '@es-ui/utils/vue/props/runtime'

export interface ItemType {
  title: string
  description?: string
  time?: string
}

const directionValue = ['vertical', 'horizontal'] as const

export const stepsProps = buildProps({
  /**
   * @description Array of step items
   */
  items: {
    type: definePropType<ItemType[]>(Array),
    required: true,
  },
  /**
   * @description Current steps
   */
  current: {
    type: Number,
    required: true,
  },
  /**
   * @description display direction
   */
  direction: {
    type: String,
    values: directionValue,
    default: 'horizontal',
  },
} as const)
