import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsScrollBar from '../scrollbar.vue'

describe('EsScrollBar', () => {
  test('create', () => {
    const wrapper = mount(EsScrollBar, {
      props: {
        height: 400,
      },
      slots: {
        default: '1',
      },
    })

    expect(wrapper.classes()).toContain('es-scrollbar')
    expect(wrapper.find('.es-scrollbar__view').text()).toContain('1')
    expect(wrapper.find('.es-scrollbar__horizontal').exists()).toBe(true)
    expect(wrapper.find('.es-scrollbar__thumb').exists()).toBe(true)
    expect(wrapper.find('.is-horizontal').exists()).toBe(true)
    expect(wrapper.find('.es-scrollbar__vertical').exists()).toBe(true)
    expect(wrapper.find('.is-vertical').exists()).toBe(true)
  })
})
