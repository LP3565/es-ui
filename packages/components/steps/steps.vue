<template>
  <div :class="[b('container'), b(direction === 'vertical' ? 'vertical-container' : '')]">
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="[
        e('item'),
        e(i === items.length - 1 && direction === 'horizontal' ? 'horizontal-step-last' : ''),
        e(direction === 'horizontal' ? 'left-retract' : ''),
      ]"
    >
      <div
        :class="[
          e('count'),
          e(i < current ? 'accomplish' : ''),
          e(i !== items.length - 1 && direction === 'vertical' ? 'vertical-line' : ''),
          e(
            i < current && i !== items.length - 1 && direction === 'vertical'
              ? 'vertical-accomplish-line'
              : '',
          ),
        ]"
      >
        <span v-if="i >= current">{{ i + 1 }}</span>
        <span v-if="i < current" :class="e('accomplish-icon')">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="m10 24l10 10l20-20"
            ></path>
          </svg>
        </span>
      </div>
      <div :class="e('describe')">
        <div
          :class="[
            e('title'),
            e(i !== items.length - 1 && direction === 'horizontal' ? 'horizontal-line' : ''),
            e(
              i < current && i !== items.length - 1 && direction === 'horizontal'
                ? 'horizontal-accomplish-line'
                : '',
            ),
            e(i > current ? 'unfinished' : ''),
          ]"
        >
          {{ item.title }}
        </div>
        <div
          :class="[e('description'), e(i > current ? 'unfinished' : '')]"
          v-if="item.description"
        >
          {{ item.description }}
        </div>
        <div :class="[e('time'), e(i > current ? 'unfinished' : '')]" v-if="item.time">
          {{ item.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@es-ui/hooks/useNamespace'
import { stepsProps } from './steps'

defineProps(stepsProps)

const { b, e } = useNamespace('steps')

defineOptions({
  name: 'EsSteps',
})
</script>
