<template>
  <div>
    <input type="text" :id="label" />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { inputProps } from './input'

defineProps(inputProps)

defineOptions({
  name: 'EsInput',
})
</script>
