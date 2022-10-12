<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { toggleRouter } from '../composables'

const [_, r] = toggleRouter()
</script>

<template>
  <TBox
    width="85"
    height="2"
    :justify-content="
      r === 'Home'
        ? 'center'
        : 'space-between'"
  >
    <TText color="yellow">
      🌈 Learn !!
    </TText>
    <TText v-if="r !== 'Home'" color="yellow">
      {{ r }}
    </TText>
  </TBox>
</template>
