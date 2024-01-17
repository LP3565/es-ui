<template>
  <div
    :class="b()"
    :style="{ height: height ? height + 'px' : '100%' }"
    @mouseover="conatinerMouseoverHandle"
    @mouseout="containerMouseoutHandle"
  >
    <div
      ref="scrollBox"
      :class="[e('container'), m('hidden-default')]"
      :style="{ height: height ? height + 'px' : '100%' }"
      @scroll="scrollHandle"
    >
      <div :class="e('view')">
        <slot />
      </div>
    </div>

    <div
      ref="scrollBarHorizontal"
      :class="e('horizontal')"
      :style="{ display: isHorizontalShow ? 'block' : 'none' }"
    >
      <div
        ref="thumbHorizontal"
        :class="[e('thumb'), is('horizontal', true)]"
        @mousedown.prevent="mousedownHandle($event, 'horizontal')"
      ></div>
    </div>
    <div
      ref="scrollBarVertical"
      :class="e('vertical')"
      :style="{ display: isVerticalShow ? 'block' : 'none' }"
    >
      <div
        ref="thumbVertical"
        :class="[e('thumb'), is('vertical', true)]"
        @mousedown.prevent="mousedownHandle($event, 'vertical')"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { scrollBarProps } from './scrollbar'
import { useNamespace } from '@es-ui/hooks/useNamespace'

type ElementType = HTMLDivElement | null

defineProps(scrollBarProps)
const emit = defineEmits(['scroll'])

const scrollBox = ref<ElementType>(null)
const scrollBarHorizontal = ref<ElementType>(null)
const scrollBarVertical = ref<ElementType>(null)
const thumbHorizontal = ref<ElementType>(null)
const thumbVertical = ref<ElementType>(null)

const isHorizontal = ref<boolean>(false)
const isVertical = ref<boolean>(false)

const isHorizontalShow = ref<boolean>(false)
const isVerticalShow = ref<boolean>(false)

const isHorizontalDown = ref<boolean>(false)
const isVerticalDown = ref<boolean>(false)

const isOut = ref<boolean>(false)

const { b, e, m, is } = useNamespace('scrollbar')

const conatinerMouseoverHandle = () => {
  isOut.value = false
  if (isHorizontal.value) {
    isHorizontalShow.value = true
  }
  if (isVertical.value) {
    isVerticalShow.value = true
  }
}

const containerMouseoutHandle = () => {
  isOut.value = true
  if (!isHorizontalDown.value) {
    isHorizontalShow.value = false
  }
  if (!isVerticalDown.value) {
    isVerticalShow.value = false
  }
}

const scrollHandle = () => {
  const contentHeight = scrollBox.value!.scrollHeight - scrollBox.value!.clientHeight
  const scrollHeight = scrollBarVertical.value!.clientHeight - thumbVertical.value!.clientHeight
  const thumbPosition = (scrollBox.value!.scrollTop / contentHeight) * scrollHeight
  thumbVertical.value!.style.top = thumbPosition + 'px'

  emit('scroll', { top: scrollBox.value!.scrollTop, left: scrollBox.value!.scrollLeft })
}

const mousedownHandle = (event: MouseEvent, type: 'horizontal' | 'vertical') => {
  if (type === 'vertical') {
    const initMousePosition = event.clientY
    const initThumbPosition = thumbVertical.value!.offsetTop

    const mousemoveHandle = (event: MouseEvent) => {
      event.preventDefault()

      isVerticalDown.value = true

      const distance = event.clientY - initMousePosition
      let newInitThumbPositon = initThumbPosition + distance

      const maxThumbPosition =
        scrollBarVertical.value!.clientHeight - thumbVertical.value!.clientHeight
      newInitThumbPositon = Math.max(0, Math.min(maxThumbPosition, newInitThumbPositon))

      const newScrollToP = contentScrollOffset(
        newInitThumbPositon,
        maxThumbPosition,
        scrollBox.value!.scrollHeight - scrollBox.value!.clientHeight,
      )

      thumbVertical.value!.style.top = newInitThumbPositon + 'px'
      scrollBox.value!.scrollTop = newScrollToP

      emit('scroll', { top: newScrollToP, left: scrollBox.value!.scrollLeft })
    }

    const mouseupHandle = () => {
      if (isOut.value) {
        isVerticalShow.value = false
      }
      isVerticalDown.value = false
      document.removeEventListener('mousemove', mousemoveHandle)
      document.removeEventListener('mouseup', mouseupHandle)
    }

    document.addEventListener('mousemove', mousemoveHandle)
    document.addEventListener('mouseup', mouseupHandle)
  } else if (type === 'horizontal') {
    const initMousePosition = event.clientX
    const initThumbPosition = thumbHorizontal.value!.offsetLeft

    const mousemoveHandle = (event: MouseEvent) => {
      event.preventDefault()

      isHorizontalDown.value = true

      const distance = event.clientX - initMousePosition
      let newInitThumbPositon = initThumbPosition + distance

      const maxThumbPosition =
        scrollBarHorizontal.value!.clientWidth - thumbHorizontal.value!.clientWidth
      newInitThumbPositon = Math.max(0, Math.min(maxThumbPosition, newInitThumbPositon))

      const newScrollLeft = contentScrollOffset(
        newInitThumbPositon,
        maxThumbPosition,
        scrollBox.value!.scrollWidth - scrollBox.value!.clientWidth,
      )

      thumbHorizontal.value!.style.left = newInitThumbPositon + 'px'
      scrollBox.value!.scrollLeft = newScrollLeft
      emit('scroll', { top: scrollBox.value!.scrollTop, left: newScrollLeft })
    }

    const mouseupHandle = () => {
      if (isOut.value) {
        isHorizontalShow.value = false
      }
      isHorizontalDown.value = false
      document.removeEventListener('mousemove', mousemoveHandle)
      document.removeEventListener('mouseup', mouseupHandle)
    }

    document.addEventListener('mousemove', mousemoveHandle)
    document.addEventListener('mouseup', mouseupHandle)
  }
}

const contentScrollOffset = (
  initThumbPosition: number,
  maxThumbPosition: number,
  contentHeight: number,
): number => {
  return (initThumbPosition / maxThumbPosition) * contentHeight
}

const watchScrollBox = () => {
  if (scrollBox.value!.scrollHeight > scrollBox.value!.clientHeight) {
    isVertical.value = true
  } else {
    isVertical.value = false
  }
  if (scrollBox.value!.scrollWidth > scrollBox.value!.clientWidth) {
    isHorizontal.value = true
  } else {
    isHorizontal.value = false
  }
}

onMounted(() => {
  watchScrollBox()
})

onUpdated(() => {
  watchScrollBox()
})

defineOptions({
  name: 'EsScrollBar',
})
</script>
