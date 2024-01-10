<template>
  <label :for="label" :class="[b(), is('disabled', disabled)]">
    <span @mousedown="startRipple" @mouseup="stopRipple" @mouseleave="stopRipple" :class="e('box')">
      <input
        :class="e('type')"
        type="radio"
        :name="name"
        v-model="radioVal"
        @change="changeHandle"
        :id="label"
        :value="label"
        :checked="checked"
        :disabled="disabled"
      />
      <span class="ripple-root"></span>
    </span>
    <span :class="e('label')">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRipple } from '@es-ui/hooks/useRipple'
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { radioProps, radioEmit } from './radio'

const props = defineProps(radioProps)

const emit = defineEmits(radioEmit)

const { startRipple, stopRipple } = useRipple()
const { b, e, is } = useNamespace('radio')

const changeHandle = (event: Event) => {
  emit('change', event)
}

const radioVal = computed({
  get() {
    return props.label
  },
  set(val) {
    emit('update:model-value', val)
  },
})

defineOptions({
  name: 'EsRadio',
})
</script>
