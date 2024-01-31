<template>
  <Teleport to="body">
    <Transition name="dialog">
      <div :class="b()" v-if="modelValue">
        <div
          :class="[e('modal')]"
          :style="{ zIndex: zIndex ? zIndex : '', backgroundColor: modal ? '' : 'transparent' }"
          @click="hideHandle"
        ></div>

        <div
          :class="e('box')"
          :style="{
            width: width ? width : '',
            marginTop: top ? top : '',
            boxShadow: modal ? '' : '0 0 12px 8px rgba(0, 0, 0, 0.06)',
            zIndex: zIndex ? zIndex + 1 : '',
          }"
        >
          <div :class="[e('header'), is('center', center)]">
            <slot name="header" />

            <div :class="e('close')" @click="hideHandle" v-if="showClose">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
                ></path>
              </svg>
              <span class="ripple-root"></span>
            </div>
          </div>
          <div :class="[e('content'), is('center', center)]">
            <slot />
          </div>
          <div :class="[e('footer'), is('center', center)]">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { dialogProps } from './dialog'
import { useNamespace } from '@es-ui/hooks/useNamespace'

defineProps(dialogProps)

const emit = defineEmits(['close'])

const { b, e, is } = useNamespace('dialog')

const hideHandle = () => {
  emit('close')
}

defineOptions({
  name: 'EsDialog',
})
</script>
