import type { ButtonProps } from './button'

export const useButton = (props: ButtonProps) => {
  const _mold = props.mold === 'default' ? '' : props.mold
  const _size = props.size === 'default' ? '' : props.size
  return {
    _mold,
    _size,
  }
}
