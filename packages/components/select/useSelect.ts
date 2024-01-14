export const useSelect = () => {
  let _this: HTMLDivElement | null = null
  let selectedValue: HTMLSpanElement | null = null
  let arrow: HTMLSpanElement | null = null
  let selectOptions: HTMLDivElement | null = null

  const start = (event: Event) => {
    _this = event.currentTarget as HTMLDivElement
    selectOptions = _this.nextElementSibling as HTMLDivElement
    selectedValue = _this.querySelector<HTMLSpanElement>('.es-select__title')
    arrow = _this.querySelector<HTMLSpanElement>('.es-select__arrow')
    _this.querySelector<HTMLInputElement>('.es-select__tool')?.focus()
  }

  const focus = () => {
    _this!.style.borderColor = 'rgb(158, 119, 237)'
    _this!.style.boxShadow = 'rgb(158, 119, 237) 0px 0px 0px 2px'
    arrow!.style.transform = 'translateY(-50%) rotate(180deg)'
    selectOptions!.style.transform = 'scaleY(1)'
    selectedValue!.style.top = '12px'
    selectedValue!.style.fontSize = '12px'
    selectedValue!.style.color = 'blue'
  }

  const blur = (val: string) => {
    _this!.style.borderColor = '#ccc'
    _this!.style.boxShadow = 'none'
    arrow!.style.transform = 'translateY(-50%) rotate(0deg)'
    selectOptions!.style.transform = 'scaleY(0)'
    selectedValue!.style.color = '#000'
    if (val) {
      return
    }
    selectedValue!.style.top = '50%'
    selectedValue!.style.fontSize = '16px'
  }

  const setBlur = () => {
    _this?.querySelector<HTMLInputElement>('.es-select__tool')?.blur()
  }

  return {
    start,
    focus,
    blur,
    setBlur,
  }
}
