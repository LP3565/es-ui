import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsRadio from '../radio.vue'

describe('EsRadio', () => {
  test('create', () => {
    const wrapper = mount(EsRadio, {
      props: {
        label: 'man',
        checked: true,
      },
      slots: {
        default: 'test',
      },
    })

    const radio = wrapper.get('.es-radio')
    const radioInput = wrapper.get<HTMLInputElement>('.es-radio__type')

    expect(radio.classes()).toContain('es-radio')
    expect(wrapper.find('.es-radio__label').text()).toContain('test')
    expect(radio.attributes('for')).toContain('man')
    expect(radioInput.attributes('value')).toContain('man')
    expect(radioInput.element.checked).toBe(true)
  })

  test('disabled', () => {
    const wrapper = mount(EsRadio, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.classes()).toContain('is-disabled')
    const radioInput = wrapper.get<HTMLInputElement>('.es-radio__type')
    expect(radioInput.element.disabled).toBe(true)
  })
})
