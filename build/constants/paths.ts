import { resolve } from 'path'

/** es-ui */
export const esui = resolve(__dirname, '..', '..', 'packages')
/** 组件打包入口 */
export const esuiInput = resolve(__dirname, '..', '..', 'packages/components/index.ts')
/** 最终结果 */
export const dist = resolve(__dirname, '..', 'dist')
/** 样式打包入口 */
export const themeDist = resolve(__dirname, '..', 'dist/theme')
/** 类型文件夹 */
export const typePath = resolve(__dirname, '..', '..', 'typings')
