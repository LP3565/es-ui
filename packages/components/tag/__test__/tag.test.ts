import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsTag from '../tag.vue'

describe('EsTag', () => {
  test('create', () => {
    const wrapper = mount(EsTag, {
      slots: {
        default: 'default',
      },
    })

    expect(wrapper.classes()).toContain('es-tag')
    const text = wrapper.find('.es-tag__text')
    expect(text.text()).toContain('default')
  })

  test('clear', async () => {
    const wrapper = mount(EsTag, {
      props: {
        clear: true,
      },
      slots: {
        default: 'test',
      },
    })

    expect(wrapper.find('.es-tag__clear').exists()).toBe(true)
    expect(wrapper.find('.es-tag__text').text()).toContain('test')
    await wrapper.find('.es-tag__clear').trigger('click')
    expect(wrapper.find('.es-tag').exists()).toBe(false)
  })

  test('size', () => {
    const wrapper = mount(EsTag, {
      props: {
        size: 'large',
      },
    })

    expect(wrapper.classes()).toContain('es-tag--large')
  })

  test('mold', () => {
    const wrapper = mount(EsTag, {
      props: {
        mold: 'error',
      },
    })

    expect(wrapper.classes()).toContain('es-tag--error')
  })
})
