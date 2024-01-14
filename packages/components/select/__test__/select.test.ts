import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsSelect from '../select.vue'

describe('EsSelect', () => {
  test('create', async () => {
    const wrapper = mount(EsSelect, {
      props: {
        options: [
          { label: 'Vue', value: 'vue' },
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'angular' },
        ],
        modelValue: [],
        title: 'subject',
      },
    })

    const select = wrapper.find('.es-select__input')
    const options = wrapper.find('.es-select__options')
    expect(wrapper.classes()).toContain('es-select')
    expect(wrapper.find('.es-select__title').text()).toContain('subject')
    await select.trigger('click')
    expect(options.classes()).toContain('es-select__options')
    expect(options.find('.es-select-menu').exists()).toBe(true)
    expect(options.find('.es-select-menu__ul').exists()).toBe(true)
    expect(options.find('.es-select-menu__label').exists()).toBe(true)
    expect(wrapper.find('.es-select__clear').exists()).toBe(false)
    const label = wrapper.findAll('.es-select-menu__label')
    for (let i = 0; i < label.length; i++) {
      if (i === 0) {
        expect(label[i].text()).toContain('Vue')
        await label[i].trigger('mousedown')
      }
    }
    expect(wrapper.find('.is-active').exists()).toBe(true)
    expect(wrapper.find('.es-select__vital').exists()).toBe(true)
    expect(wrapper.find('.es-select__vital').text()).toContain('Vue')
    expect(wrapper.find('.es-select__clear').exists()).toBe(true)
  })
})
