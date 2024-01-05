import { resolve } from 'path'

/** es-ui */
export const esui = resolve(__dirname, '..', '..', 'packages')

/** 组件打包入口 */
export const esuiInput = resolve(__dirname, '..', '..', 'packages/components/index.ts')

export const dist = resolve(__dirname, '..', 'dist')

export const themeDist = resolve(__dirname, '..', 'dist/theme')
