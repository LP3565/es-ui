import type { RollupAliasOptions } from '@rollup/plugin-alias'
import type { RPT2Options } from 'rollup-plugin-typescript2'
import type { RollupBabelInputPluginOptions } from '@rollup/plugin-babel'
import { esui, typePath } from '../constants/paths'

export const aliasOption: RollupAliasOptions = {
  entries: [
    {
      find: '@es-ui',
      replacement: esui,
    },
    {
      find: '@type',
      replacement: typePath,
    },
  ],
}

export const typeOption: RPT2Options = {
  check: false,
  exclude: ['node_modules', '__test__'],
}

export const babelOption: RollupBabelInputPluginOptions = {
  extensions: ['.js', '.ts', '.vue'],
  babelHelpers: 'bundled',
  exclude: ['node_modules', '__test__'],
}
