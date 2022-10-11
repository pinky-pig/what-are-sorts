<script lang="ts" setup>
import { TBox, TNewline, TText } from '@temir/core'
import { computed } from 'vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import { useGame } from './composables'

const { playStatus } = useGame()
const activeComponent = computed(() => {
  return {
    unplayed: Home,
    playing: Catalog,
  }[playStatus.value]
})
</script>

<template>
  <TBox
    :width="70"
    justify-content="center"
    align-items="center"
    flex-direction="column"
    border-style="double"
  >
    <Header />
    <component :is="activeComponent" />
  </TBox>
</template>
