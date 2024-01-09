<template>
  <template v-if="isMold">
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :max="max"
      :min="min"
      v-model="value"
      :class="[dn.b(), dn.is('disabled', disabled)]"
      :disabled="disabled"
      @change="changeHandle"
      @input="inputHandle"
      @keydown="keydownHandle"
      @focus="focusHandle"
      @blur="blurHandle"
    />
  </template>
  <template v-else>
    <div :class="[fn.b(), fn.is('disabled', disabled)]">
      <input
        ref="input"
        :type="type"
        :id="label"
        v-model="value"
        :max="max"
        :min="min"
        :disabled="disabled"
        @change="changeHandle"
        @input="inputHandle"
        @keydown="keydownHandle"
        @focus="focusHandle"
        @blur="blurHandle"
        :class="[fn.e('input'), fn.is('disabled', disabled)]"
      />
      <label :for="label" :class="[fn.e('label'), fn.is('disabled', disabled)]">{{ label }}</label>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { inputProps, inputEmit } from './input'
import { useInput, useFilled } from './useInput'
import { useNamespace } from '@es-ui/hooks/useNamespace'

type TargetElement = HTMLInputElement

const props = defineProps(inputProps)
const emit = defineEmits(inputEmit)

const input = ref<HTMLInputElement>()

const { isMold } = useInput(props)

const dn = useNamespace('input')
const fn = useNamespace('input-root')

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:model-value', val)
  },
})

onMounted(() => {
  useFilled()
})

const changeHandle = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}

const inputHandle = (event: Event) => {
  emit('input', (event.target as TargetElement).value)
}

const keydownHandle = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const focusHandle = (event: Event) => {
  emit('focus', event)
}

const blurHandle = (event: Event) => {
  emit('blur', event)
}

defineOptions({
  name: 'EsInput',
})

defineExpose({
  input,
})
</script>
