import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EsSteps from '../steps.vue'

describe('EsSteps', () => {
  test('create', () => {
    const wrapper = mount(EsSteps, {
      props: {
        current: 1,
        items: [
          {
            title: 'Steps1',
            description: 'Steps1 description',
            time: '2012-05-07 07:04:16',
          },
          {
            title: 'Steps2',
            description: 'Steps2 description',
            time: '2012-05-07 07:04:16',
          },
          {
            title: 'Steps3',
            description: 'Steps3 description',
            time: '2012-05-07 07:04:16',
          },
        ],
        direction: 'horizontal',
      },
    })

    expect(wrapper.classes()).toContain('es-steps-container')
    const steps = wrapper.findAll('.es-steps__item')
    expect(steps.length).toBe(3)
    const describe = steps[0].get('.es-steps__describe')
    expect(describe.get('.es-steps__description').text()).toContain('Steps1')
    const items = wrapper.findAll('.es-steps__count')
    expect(items.length).toBe(3)
    expect(items[0].classes()).toContain('es-steps__accomplish')
    expect(steps[2].get('.es-steps__describe').get('.es-steps__title').classes()).toContain(
      'es-steps__unfinished',
    )
  })
})
