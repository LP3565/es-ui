<template>
  <Teleport to="body">
    <div :class="b()">
      <Transition name="molad">
        <div
          :class="[e('modal'), is('modal', modal)]"
          v-show="modelValue"
          @click="closeHandle"
        ></div>
      </Transition>
      <Transition
        enter-active-class="drawer-enter-active"
        leave-active-class="drawer-enter-active"
        :enter-from-class="drawerStyle.active"
        :leave-to-class="drawerStyle.active"
      >
        <div :class="[e('box'), drawerStyle.class]" v-show="modelValue" :style="drawerStyle.size">
          <slot />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { drawerProps } from './drawer'
import { useNamespace } from '@es-ui/hooks/useNamespace'

const props = defineProps(drawerProps)

const emit = defineEmits(['close'])

const drawerStyle = computed(() => {
  switch (props.direction) {
    case 'top':
      return {
        active: 'drawer-enter-and-leave-from-to-top',
        class: m('top'),
        size: { height: props.size },
      }
    case 'left':
      return {
        active: 'drawer-enter-and-leave-from-to-left',
        class: m('left'),
        size: { width: props.size },
      }
    case 'bottom':
      return {
        active: 'drawer-enter-and-leave-from-to-bottom',
        class: m('bottom'),
        size: { height: props.size },
      }
    default:
      return {
        active: 'drawer-enter-and-leave-from-to-right',
        class: m('right'),
        size: { width: props.size },
      }
  }
})

const { b, e, m, is } = useNamespace('drawer')

const closeHandle = () => {
  emit('close')
}

defineOptions({
  name: 'EsDrawer',
})
</script>
