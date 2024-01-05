<template>
  <button :type="type" @click="add" :class="[b(), m('primary')]">
    {{ count }}
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNamespace } from '@es-ui/hooks/useNamespace'

defineProps<{ type: 'button' }>()

const count = ref<number>(1)
const add = () => {
  count.value += 1
}

const { b, m } = useNamespace('button')

defineOptions({
  name: 'EsButton',
})
</script>
