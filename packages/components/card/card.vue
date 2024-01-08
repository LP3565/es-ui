<template>
  <div :class="[b(), cardClass]" :style="cardStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { cardProps } from './card'

defineProps(cardProps)

const { b } = useNamespace('card')

defineOptions({
  name: 'EsCard',
})
</script>
