<template>
  <button
    ref="_ref"
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
import { ref } from 'vue'
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { buttonProps } from './button'
import { useButton } from './useButton'
import { useRipple } from '@es-ui/hooks/useRipple'

const _ref = ref<HTMLButtonElement>()

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

defineExpose({
  _ref,
  _size,
  _disable: props.disabled,
  _mold,
})
</script>
./useButton
