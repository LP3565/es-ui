import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsSwitch from '../switch.vue'

describe('EsSwitch', () => {
  test('create', async () => {
    const wrapper = mount(EsSwitch, {
      props: {
        id: 'test',
        modelValue: true,
      },
    })

    const switchLabel = wrapper.find<HTMLDivElement>('.es-switch__label')
    const switchInput = wrapper.find<HTMLInputElement>('.es-switch__type')

    expect(wrapper.classes()).toContain('es-switch')
    expect(switchLabel.attributes('for')).toContain('test')
    expect(switchInput.element.id).toContain('test')
    expect(switchInput.element.checked).toBe(true)
    await switchLabel.trigger('click')
    expect(switchInput.element.checked).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = mount(EsSwitch, {
      props: {
        disabled: true,
        id: 'test',
        modelValue: false,
      },
    })
    const switchLabel = wrapper.find<HTMLDivElement>('.es-switch__label')
    const switchInput = wrapper.find<HTMLInputElement>('.es-switch__type')

    expect(wrapper.classes()).toContain('is-disabled')
    expect(switchInput.element.checked).toBe(false)
    await switchLabel.trigger('click')
    expect(switchInput.element.checked).toBe(false)
  })
})
