import type { StyleValue } from 'vue'
import { buildProps, definePropType } from '@es-ui/utils/vue/props/runtime'

export const cardProps = buildProps({
  cardClass: String,
  cardStyle: {
    type: definePropType<StyleValue>([Object, String, Array]),
    default: '',
  },
} as const)
