<template>
  <div :class="b()">
    <ul :class="e('ul')">
      <li
        :class="[e('label'), item.value === active ? is('active', true) : '']"
        v-for="(item, i) in options"
        :key="i"
        @mousedown.prevent="clickHandle(item)"
      >
        {{ item.label }}
        <span :class="e('next')" v-if="item.children && item.children.length > 0">
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
      </li>
    </ul>
  </div>
  <template v-if="child && child.length > 0 && isShow">
    <EsSelectMenu :options="child" v-model="childValue" />
  </template>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount, onBeforeMount, inject } from 'vue'
import { CascaderOption, selectMenuProps, SelectMenuValue } from './select'
import { useNamespace } from '@es-ui/hooks/useNamespace'

const props = defineProps(selectMenuProps)
const emit = defineEmits(['update:model-value'])

const child = ref<CascaderOption[]>()

const isShow = ref<boolean>(true)

const childValue = ref<SelectMenuValue[]>([])

const active = ref<string | number>('')

const activeValue = ref<{ label: string; value: string | number }[]>([])

const setBlur = inject<() => void>('setBlur')

const { b, e, is } = useNamespace('select-menu')

const clickHandle = (value: CascaderOption) => {
  active.value = value.value
  activeValue.value = [{ label: value.label, value: value.value }]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  new Promise((resolve, _) => {
    isShow.value = false
    if (value.children && value.children.length > 0) {
      child.value = value.children
    } else {
      child.value = []
      setBlur!()
    }
    resolve(isShow.value)
  }).then(() => {
    isShow.value = true
  })
}

watch([activeValue, childValue], () => {
  emit('update:model-value', [...activeValue.value, ...childValue.value])
})

onBeforeMount(() => {
  props.options!.forEach((item) => {
    props.modelValue?.forEach((val) => {
      if (item.value === val.value) {
        if (item.children && item.children.length > 0) {
          child.value = item.children
          childValue.value = props.modelValue!
        }
        activeValue.value = [{ label: val.label, value: val.value }]
        active.value = val.value
      }
    })
  })
})

onBeforeUnmount(() => {
  emit('update:model-value', [])
})

defineOptions({
  name: 'EsSelectMenu',
})
</script>
