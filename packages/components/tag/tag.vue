<template>
  <template v-if="clear">
    <Transition name="es-tag">
      <span :class="[b(), m(mold), m(size)]" v-if="isShow">
        <span :class="e('text')">
          <slot />
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          :class="e('clear')"
          @click="isShow = false"
        >
          <path
            fill="currentColor"
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
          ></path>
        </svg>
      </span>
    </Transition>
  </template>

  <template v-else>
    <span :class="[b(), m(mold), m(size)]">
      <span :class="e('text')">
        <slot />
      </span>
    </span>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { tagProps } from './tag'
import { useNamespace } from '@es-ui/hooks/useNamespace'

defineProps(tagProps)

const isShow = ref<boolean>(true)

const { b, e, m } = useNamespace('tag')

defineOptions({
  name: 'EsTag',
})
</script>
