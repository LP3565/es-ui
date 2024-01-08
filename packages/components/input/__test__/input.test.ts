import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import EsInput from '../input.vue'

describe('EsInput', () => {
  test('default', async () => {
    const wrapper = mount(EsInput, {
      props: {
        placeholder: '123456',
        mold: 'default',
      },
    })

    expect(wrapper.attributes('placeholder')).toBe('123456')
    expect(wrapper.classes()).toContain('es-input')
    const input = wrapper.find<HTMLInputElement>('.es-input')
    await input.setValue('enter input email')
    expect(input.element.value).toContain('enter input email')
  })

  test('filled', async () => {
    const wrapper = mount(EsInput, {
      props: {
        mold: 'filled',
        label: 'Email',
      },
    })

    expect(wrapper.classes()).toContain('es-input-root')
    const label = wrapper.find('.es-input-root__label')
    expect(label.text()).toContain('Email')
    const input = wrapper.find<HTMLInputElement>('.es-input-root__input')
    await input.setValue('enter input email')
    expect(input.element.value).toContain('enter input email')
  })

  test('min and max', () => {
    const wrapper = mount(EsInput, {
      props: {
        min: 6,
        max: 16,
      },
    })

    const input = wrapper.find<HTMLInputElement>('.es-input')
    expect(input.element.min).toContain(6)
    expect(input.element.max).toContain(16)
  })

  test('disabled', () => {
    const wrapper = mount(EsInput, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.classes()).toContain('is-disabled')
    const input = wrapper.find<HTMLInputElement>('.es-input')
    expect(input.element.disabled).toBe(true)
  })
})
