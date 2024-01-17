import { buildProps } from '@es-ui/utils/vue/props/runtime'

export const scrollBarProps = buildProps({
  /**
   * @description The height of the rolling container
   */
  height: Number,
} as const)
