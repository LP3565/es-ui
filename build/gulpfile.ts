import gulp from 'gulp'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import alias from '@rollup/plugin-alias'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'
import { deleteAsync } from 'del'
import autoPrefixer from 'gulp-autoprefixer'
import sassDart from 'sass'
import gulpSass from 'gulp-sass'
import csslean from 'gulp-clean-css'
import svg from 'rollup-plugin-svg'

import { esuiInput, dist, themeDist } from './constants/paths'

import { aliasOption, typeOption, babelOption } from './utils/builduiOption'

export const buildUi = async function () {
  try {
    const bundle = await rollup({
      input: esuiInput,
      plugins: [
        nodeResolve(),
        commonjs(),
        alias(aliasOption),
        typescript(typeOption),
        svg(),
        vue(),
        babel(babelOption),
        terser(),
      ],
      external: ['vue'],
    })

    await bundle.write({
      dir: dist,
      format: 'cjs',
      exports: 'named',
      entryFileNames: () => `[name].cjs`,
    })

    await bundle.write({
      dir: dist,
      format: 'es',
      entryFileNames: () => `[name].mjs`,
    })
  } catch (err) {
    console.log(err)
  }
}

export const clearDist = async function () {
  return await deleteAsync([dist])
}

export const buildTheme = function () {
  const sass = gulpSass(sassDart)
  return gulp
    .src('../packages/theme/*.scss')
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(csslean())
    .pipe(gulp.dest(themeDist))
}

// export default gulp.series(clearDist, buildUi, buildTheme)
export default gulp.series(clearDist, buildUi, buildTheme)
