import { buildProps, definePropType } from '@es-ui/utils/vue/props/runtime'

export const selectProps = buildProps({
  /**
   * @description select & cascader options
   */
  options: {
    type: definePropType<CascaderOption[]>(Array),
  },
  /**
   * @description select & cascader v-model
   * @prop Array<String, Number>
   */
  modelValue: {
    type: definePropType<CascaderValue>([Number, String, Array]),
  },
  /**
   * @description select title
   */
  title: String,
} as const)

export const selectMenuProps = buildProps({
  options: {
    type: definePropType<CascaderOption[]>(Array),
  },
  modelValue: {
    type: definePropType<SelectMenuValue[]>([Array]),
  },
} as const)

export type CascaderNodeValue = string | number
export type CascaderValue = CascaderNodeValue[]

export type SelectMenuValue = { label: string; value: string | number }

export interface CascaderOption extends Record<string, unknown> {
  label: string
  value: CascaderNodeValue
  children?: CascaderOption[]
}
