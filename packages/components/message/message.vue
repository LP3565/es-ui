<template>
  <Teleport to="body">
    <Transition name="message">
      <div :id="id" :class="[b(), m(mold)]" v-if="isShow" :style="{ zIndex: zIndex ? zIndex : '' }">
        <div :class="e('icon')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            v-if="mold === 'success'"
          >
            <path
              fill="currentColor"
              d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            v-if="mold === 'error'"
          >
            <path
              fill="currentColor"
              d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-5.5V14h-2V6.5zm-2 9h2.004v2.004H11z"
            ></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            v-if="mold === 'warning'"
          >
            <path
              fill="currentColor"
              d="M12 5.51c.56 0 1.12.35 1.54 1.06l5.91 9.85c.86 1.42.2 2.58-1.45 2.58H6c-1.65 0-2.31-1.16-1.46-2.57l5.91-9.85c.43-.72.99-1.07 1.55-1.07m0-2c-1.3 0-2.48.74-3.26 2.03L2.83 15.4c-.44.74-.66 1.5-.66 2.23c0 .56.14 1.11.42 1.6C3.23 20.35 4.47 21 6 21h12c1.53 0 2.77-.65 3.41-1.77c.29-.51.43-1.07.42-1.65c-.01-.71-.23-1.46-.66-2.18l-5.91-9.85c-.78-1.3-1.96-2.04-3.26-2.04m1.5 13.24s-.71.36-1.07.18c-.36-.18-.43-.54-.23-1.15l.41-1.22c.4-1.22-.12-2.08-1.08-2.13c-1.26-.07-2.02.83-2.02.83s.71-.36 1.07-.18c.36.18.43.54.23 1.15l-.41 1.22c-.4 1.22.12 2.07 1.08 2.13c1.26.06 2.02-.83 2.02-.83"
            ></path>
            <circle cx="12" cy="10" r="1.3" fill="currentColor"></circle>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.88em"
            height="1em"
            viewBox="0 0 14 16"
            v-if="mold === 'info'"
          >
            <path
              fillRule="evenodd"
              d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7c.19-.18.42-.28.7-.28c.28 0 .52.09.7.28c.18.19.28.42.28.7c0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69c-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31c-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69c.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31c.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68c0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7s-7-3.12-7-7s3.14-7 7-7z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div :class="e('content')">{{ content }}</div>
        <div :class="e('close')" v-if="showClose" @click="userClose">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
            ></path>
          </svg>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { messageProps } from './message'

const props = defineProps(messageProps)

const isShow = ref<boolean>(false)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const time = ref<any>(null)

const { b, e, m } = useNamespace('message')

const open = () => {
  props.onOpen && props.onOpen()
  isShow.value = true
}

const userClose = () => {
  time.value && clearTimeout(time.value)
  props.onClose && props.onClose()
  isShow.value = false
}

const close = () => {
  isShow.value = false
}

onMounted(() => {
  if (props.duration! < 0 || props.duration === 0) {
    return
  } else {
    time.value = setTimeout(
      () => {
        props.onClose && props.onClose()
        close()
      },
      props.duration ? props.duration : 3000,
    )
  }
})

onUnmounted(() => {
  clearTimeout(time.value)
})

defineExpose({
  open,
  close,
})

defineOptions({
  name: 'EsMessage',
})
</script>
