<template>
  <label :class="[b(), is('disabled', disabled)]" :for="label">
    <span :class="e('box')" @mousedown="startRipple" @mouseup="stopRipple" @mouseleave="stopRipple">
      <input
        type="checkbox"
        :class="e('type')"
        :id="label"
        :name="name"
        v-model="checkVal"
        @change="changeHandle"
        :disabled="disabled"
        :checked="checked"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="e('icon')"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          d="M448 71.9c-17.3-13.4-41.5-9.3-54.1 9.1L214 344.2l-99.1-107.3c-14.6-16.6-39.1-17.4-54.7-1.8-15.6 15.5-16.4 41.6-1.7 58.1 0 0 120.4 133.6 137.7 147 17.3 13.4 41.5 9.3 54.1-9.1l206.3-301.7c12.6-18.5 8.7-44.2-8.6-57.5z"
          fill="currentColor"
        ></path>
      </svg>

      <span class="ripple-root"></span>
    </span>
    <span><slot /></span>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRipple } from '@es-ui/hooks/useRipple'
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { checkboxEmit, checkboxProps } from './checkbox'

const prop = defineProps(checkboxProps)

const emit = defineEmits(checkboxEmit)

const { startRipple, stopRipple } = useRipple()
const { b, e, is } = useNamespace('checkbox')

const changeHandle = (event: Event) => {
  emit('change', event)
}

const checkVal = computed({
  get() {
    return prop.modelValue
  },
  set(val) {
    emit('update:model-value', val)
  },
})

defineOptions({
  name: 'EsCheckbox',
})
</script>
