import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsCard from '../card.vue'

test('EsCard', () => {
  const wrapper = mount(EsCard, {
    slots: {
      default: `<span>Hello EsCard</span>`,
    },
    props: {
      cardClass: 'test',
    },
  })

  expect(wrapper.find('span').exists()).toBe(true)
  expect(wrapper.classes()).toContain('test')
})
