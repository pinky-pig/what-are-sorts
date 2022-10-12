<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { computed } from 'vue'
import { CATALOG, toggleCatalog } from '../composables'
import Bubble from './Bubble.vue'
import Quick from './Quick.vue'
import Other from './Other.vue'
const [, kindIndex, , rowIndex] = toggleCatalog()

const activeComponent = computed(() => {
  return {
    Bubble,
    Quick,
    Other,
  }[CATALOG[kindIndex.value][rowIndex.value].component]
})
</script>

<template>
  <TBox
    :width="65"
    :height="30"
    flex-direction="column"
    justify-content="center"
    align-items="center"
  >
    <component :is="activeComponent" />
  </TBox>
</template>
