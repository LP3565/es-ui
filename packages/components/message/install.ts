import { createVNode, render } from 'vue'
import MessageVue from './message.vue'
import { MessageProps } from './message'

let index: number = 1

const EsMessage = (options: MessageProps) => {
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
