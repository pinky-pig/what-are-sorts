<script lang="ts" setup>
import { TBox, TNewline, TText } from '@temir/core'
import { computed } from 'vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Catalog from './components/Catalog.vue'
import Detail from './components/Detail.vue'
import { useRouter } from './composables'

const { router } = useRouter()
const activeComponent = computed(() => {
  return {
    Home,
    Catalog,
    Detail,
  }[router.value]
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
