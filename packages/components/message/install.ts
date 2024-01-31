import { createVNode, render } from 'vue'
import MessageVue from './message.vue'
import { MessageProps } from './message'

let index: number = 1

const EsMessage = (options: MessageProps) => {
  const container = document.querySelector('#es-message-container')
  if (!container) {
    const messageContainer = document.createElement('div')
    messageContainer.id = 'es-message-container'
    document.querySelector('body')?.appendChild(messageContainer)
  }
  const div = document.createElement('div')
  const props = {
    ...options,
    id: 'message-' + index++,
  }
  const vnode = createVNode(MessageVue, props)
  render(vnode, div)
  const vm = vnode.component!
  vm?.exposed!.open()
}

export default EsMessage
