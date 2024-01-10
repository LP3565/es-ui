<template>
  <div :class="[b(), is('disabled', disabled)]">
    <input
      type="checkbox"
      :class="e('type')"
      :id="id"
      :name="name"
      v-model="switchVal"
      @change="changeHandle"
      :disabled="disabled"
    />
    <label :for="id" :class="[e('label'), is('disabled', disabled)]"></label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { switchProps, switchEmit } from './switch'
import { useNamespace } from '@es-ui/hooks/useNamespace'

const props = defineProps(switchProps)

const emit = defineEmits(switchEmit)

const { b, e, is } = useNamespace('switch')

const changeHandle = (event: Event) => {
  emit('change', event)
}

const switchVal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:model-value', val)
  },
})

defineOptions({
  name: 'EsSwitch',
})
</script>
