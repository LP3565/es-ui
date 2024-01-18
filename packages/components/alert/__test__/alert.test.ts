import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsAlert from '../alert.vue'

describe('EsAlert', () => {
  test('create', () => {
    const wrapper = mount(EsAlert, {
      props: {
        title: 'This is Default Alert',
      },
      slots: {
        default: 'This is Alert description',
      },
    })
    const alert = wrapper.find('.es-alert')
    expect(alert.classes()).toContain('es-alert')
    expect(alert.find('.es-alert__title').text()).toContain('This is Default Alert')
    expect(alert.find('.es-alert__description').text()).toContain('This is Alert description')
    expect(alert.find('.es-alert__icon').exists()).toBe(true)
    expect(alert.find('.es-alert-clear').exists()).toBe(false)
  })
  test('mold', () => {
    const wrapper = mount(EsAlert, {
      props: {
        title: 'This is Info Alert',
        mold: 'info',
      },
    })

    const alert = wrapper.find('.es-alert')
    expect(alert.classes()).toContain('es-alert--info')
  })
  test('variant', () => {
    const wrapper = mount(EsAlert, {
      props: {
        title: 'This is Alert',
        variant: 'filled',
        mold: 'error',
      },
    })

    const alert = wrapper.find<HTMLDivElement>('.es-alert')

    expect(alert.element.style.backgroundColor).toContain('red')
  })
  test('clear', async () => {
    const wrapper = mount(EsAlert, {
      props: {
        title: 'This clear Alert',
        clear: true,
      },
    })

    const alert = wrapper.find('.es-alert')
    const clear = alert.find('.es-alert__clear')
    await clear.trigger('click')
    expect(wrapper.find('.es-alert').exists()).toBe(false)
  })
})
