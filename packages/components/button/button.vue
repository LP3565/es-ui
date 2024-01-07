<template>
  <button
    :type="type"
    :mold="mold"
    :class="[
      b(),
      m(_mold),
      m(_size),
      is('disabled', disabled),
      is('round', round),
      is('circle', circle),
    ]"
    :disabled="disabled"
    :round="round"
    :circle="circle"
    @click="clickHandle"
    @mousedown="startRipple"
    @mouseleave="stopRipple"
    @mouseup="stopRipple"
  >
    <slot />
    <span class="ripple-root"></span>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { buttonProps } from './button'
import { useButton } from './use-button'
import { useRipple } from '@es-ui/hooks/useRipple'

const props = defineProps(buttonProps)
const emit = defineEmits(['onClick'])

const clickHandle = () => {
  emit('onClick')
}

const { _mold, _size } = useButton(props)
const { b, m, is } = useNamespace('button')
const { startRipple, stopRipple } = useRipple()

defineOptions({
  name: 'EsButton',
})
</script>
