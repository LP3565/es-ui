import { expect, test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import { EsButton } from '@es-ui/components'

describe('EsButton', () => {
  test('create', async () => {
    const wrapper = mount(EsButton, {
      slots: {
        default: 'default',
      },
    })

    expect(wrapper.text()).toContain('default')
    expect(wrapper.classes()).toContain('es-button')
    await wrapper.trigger('mousedown')
    expect(wrapper.find('.ripple-start').exists()).toBe(true)
    await wrapper.trigger('mouseup')
    await expect(wrapper.find('.end').exists()).toBe(true)
  })

  test('primary', () => {
    const wrapper = mount(EsButton, {
      props: {
        mold: 'primary',
      },
    })

    expect(wrapper.classes()).toContain('es-button--primary')
  })

  test('type', () => {
    const wrapper = mount(EsButton, {
      props: {
        type: 'submit',
      },
    })

    expect(wrapper.attributes('type')).toBe('submit')
  })

  test('size', () => {
    const wrapper = mount(EsButton, {
      props: {
        size: 'small',
      },
    })

    expect(wrapper.classes()).toContain('es-button--small')
  })

  test('circle', () => {
    const wrapper = mount(EsButton, {
      props: {
        circle: true,
      },
    })

    expect(wrapper.classes()).toContain('is-circle')
  })

  test('disabled', async () => {
    const wrapper = mount(EsButton, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('onClick')).toBeUndefined()
  })

  test('click', async () => {
    const wrapper = mount(EsButton)

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('onClick')
  })
})
