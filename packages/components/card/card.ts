import type { StyleValue } from 'vue'
import { buildProps, definePropType } from '@es-ui/utils/vue/props/runtime'

export const cardProps = buildProps({
  /**
   * @description card class
   */
  cardClass: String,
  /**
   * @description card style
   */
  cardStyle: {
    type: definePropType<StyleValue>([Object, String, Array]),
    default: '',
  },
} as const)
