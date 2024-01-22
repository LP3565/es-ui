// 借鉴 element-plus
const namespace = 'es'
const state_prefix = 'is-'

export const _bem = (block: string, blockSuffix: string, element: string, modifier: string) => {
  let str = `${namespace}-${block}`

  if (blockSuffix) {
    str += `-${blockSuffix}`
  }
  if (element) {
    str += `__${element}`
  }
  if (modifier) {
    str += `--${modifier}`
  }

  return str
}

export const useNamespace = (block: string) => {
  const b = (blockSuffix = '') => _bem(block, blockSuffix, '', '')
  const e = (element?: string) => (element ? _bem(block, '', element, '') : '')
  const m = (modifier?: string) => (modifier ? _bem(block, '', '', modifier) : '')
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? _bem(block, blockSuffix, element, '') : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? _bem(block, blockSuffix, '', modifier) : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(block, '', element, modifier) : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier ? _bem(block, blockSuffix, element, modifier) : ''
  const is: { (name: string, state: boolean | undefined): string; (name: string): string } = (
    name: string,
    state?: boolean,
  ) => {
    return name && state ? `${state_prefix}${name}` : ''
  }

  return {
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is,
  }
}
