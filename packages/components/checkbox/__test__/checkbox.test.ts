import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsCheckbox from '../checkbox.vue'

describe('EsCheckbox', () => {
  test('create', async () => {
    const wrapper = mount(EsCheckbox, {
      props: {
        label: 'test',
        name: 'obj',
        checked: false,
      },
      slots: {
        default: 'demo',
      },
    })

    const checkbox = wrapper.get('.es-checkbox')
    const checkboxInput = wrapper.get<HTMLInputElement>('.es-checkbox__type')

    expect(checkbox.classes()).toContain('es-checkbox')
    expect(checkboxInput.classes()).toContain('es-checkbox__type')
    expect(checkbox.text()).toContain('demo')
    expect(checkbox.attributes('for')).toContain('test')
    expect(checkboxInput.element.id).toContain('test')
    expect(checkboxInput.element.name).toContain('obj')
    expect(checkboxInput.element.checked).toBe(false)
    await checkbox.trigger('click')
    expect(checkboxInput.element.checked).toBe(true)
    expect(wrapper.find('.es-checkbox__icon').exists()).toBe(true)
  })

  test('disabled', async () => {
    const wrapper = mount(EsCheckbox, {
      props: {
        disabled: true,
      },
    })

    const checkboxInput = wrapper.find<HTMLInputElement>('.es-checkbox__type')
    const checkbox = wrapper.find('.es-checkbox')

    expect(checkboxInput.element.disabled).toBe(true)
    await checkbox.trigger('click')
    expect(checkboxInput.element.checked).toBe(false)
  })
})
