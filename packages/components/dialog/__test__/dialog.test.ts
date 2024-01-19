import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsDialog from '../dialog.vue'

describe('EsDialog', () => {
  test('create', async () => {
    const wrapper = mount(EsDialog, {
      props: {
        modelValue: true,
        center: true,
      },
    })

    setTimeout(() => {
      expect(wrapper.find('.es-dialog').exists()).toBe(true)
      expect(wrapper.find('.es-dialog__box').exists()).toBe(true)
      expect(wrapper.find('.es-dialog__header').classes()).toContain('is-center')
      const box = wrapper.find<HTMLDivElement>('.es-dialog__box')
      expect(box.element.style.marginTop).toContain('50vh')
      expect(box.element.style.width).toContain('50%')
    }, 600)
  })
  test('slots', () => {
    const wrapper = mount(EsDialog, {
      props: {
        modelValue: true,
      },
      slots: {
        header: 'Title',
        default: 'This is Text',
        footer: 'this is footer',
      },
    })

    setTimeout(() => {
      expect(wrapper.find('.es-dialog__header').text()).toContain('Title')
      expect(wrapper.find('.es-dialog__content').text()).toContain('This is Text')
      expect(wrapper.find('.es-dialog__footer').text()).toContain('this is footer')
    }, 600)
  })
})
