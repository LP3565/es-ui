<template>
  <div :class="b()">
    <div :class="e('input')" @click="start">
      <span :class="e('title')" :style="vital ? style : {}">{{ title }}</span>
      <span :class="e('vital')">{{ vital }}</span>
      <div :class="e('conceal')">
        <input type="text" :class="e('tool')" @focus="focus" @blur="blur(vital)" />
      </div>
      <span :class="[e('arrow'), vital ? is('vital', true) : '']">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="m112 184l144 144l144-144"
          ></path>
        </svg>
      </span>
      <span :class="e('clear')" v-if="vital" @mousedown.stop="clear">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
          ></path>
        </svg>
      </span>
    </div>
    <div :class="e('options')">
      <EsSelectMenu v-if="isClear" :options="options" v-model="childValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeMount, provide } from 'vue'
import { useSelect } from './useSelect'
import EsSelectMenu from './select-menu.vue'
import { selectProps, CascaderOption, CascaderValue, SelectMenuValue } from './select'
import { useNamespace } from '@es-ui/hooks/useNamespace'

const { start, blur, focus, setBlur } = useSelect()

const props = defineProps(selectProps)
const emit = defineEmits(['update:model-value'])

const style = ref({
  top: '12px',
  left: '12px',
  fontSize: '12px',
})

const vital = ref<string>('')

provide('setBlur', setBlur)

const childValue = ref<SelectMenuValue[]>([])

const isClear = ref<boolean>(true)

const { b, e, is } = useNamespace('select')

watch(childValue, () => {
  const newVal = childValue.value.map((item) => item.value)
  const newVital = childValue.value.map((item) => item.label)
  vital.value = newVital.join('/')
  emit('update:model-value', newVal)
})

const transform = (options: CascaderOption[], defaultValue: CascaderValue) => {
  const arr: { label: string; value: string | number }[] = []
  options.forEach((item) => {
    defaultValue.forEach((value) => {
      if (item.value === value) {
        arr.push({ label: item.label, value: item.value })
        if (item.children && item.children.length > 0) {
          arr.push(...transform(item.children, defaultValue))
        }
      }
    })
  })
  return arr
}

const clear = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  new Promise((reslove, _) => {
    vital.value = ''
    childValue.value = []
    emit('update:model-value', [])
    isClear.value = false
    reslove('')
  }).then(() => {
    isClear.value = true
  })
}

onBeforeMount(() => {
  childValue.value = transform(props.options!, props.modelValue!)
})

defineOptions({ name: 'EsSelect' })
</script>
