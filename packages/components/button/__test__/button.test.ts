import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import { EsButton } from '@es-ui/components'

test('button', async () => {
  const wrapper = mount(EsButton, {
    slots: {
      default: '按钮',
    },
    props: {
      type: 'button',
    },
  })

  await wrapper.trigger('click')

  expect(wrapper.text()).toContain('2')
  expect(wrapper.text()).toContain('按钮')
})
