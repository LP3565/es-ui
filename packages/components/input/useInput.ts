import type { InputProps } from './input'

export const useInput = (props: InputProps) => {
  const isMold = props.mold === 'default' ? true : false
  return {
    isMold,
  }
}

export const useFilled = () => {
  const roots = document.querySelectorAll<HTMLDivElement>('.es-input-root')

  for (let i = 0; i < roots.length; i++) {
    const input = roots[i].querySelector<HTMLInputElement>(':scope > .es-input-root__input')
    const label = roots[i].querySelector<HTMLLabelElement>(':scope > .es-input-root__label')
    let start: string = ''
    let isExistVal = false

    const rootRect = roots[i].getBoundingClientRect()
    const inputRect = input!.getBoundingClientRect()
    const labelRect = label!.getBoundingClientRect()

    start = (rootRect.height - labelRect.height) / 2 + 'px'
    label!.style.top = start
    label!.style.left = inputRect!.left - rootRect!.left + 'px'

    roots[i].addEventListener('click', () => {
      input!.focus()
    })

    input!.addEventListener('focus', () => {
      roots[i].style.borderColor = 'rgb(158, 119, 237)'
      roots[i].style.boxShadow = 'rgb(158, 119, 237) 0px 0px 0px 2px'
      label!.style.color = 'rgb(158, 119, 237)'
      if (isExistVal) {
        return
      }
      label!.style.top = '2px'
      label!.style.fontSize = '13px'
    })

    input!.addEventListener('blur', (event: Event) => {
      roots[i].style.borderColor = 'rgb(229, 231, 235)'
      roots[i].style.boxShadow = 'none'
      label!.style.color = 'rgb(108, 115, 127)'
      if ((event.target as HTMLInputElement).value.length > 0) {
        isExistVal = true
        return
      }
      isExistVal = false
      label!.style.top = start
      label!.style.fontSize = '16px'
    })
  }
}
