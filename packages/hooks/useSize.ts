import { buildProp } from '@es-ui/utils/vue/props/runtime'

export const useSizeProp = buildProp({
  type: String,
  values: ['large', 'default', 'small', ''],
  default: '',
} as const)
