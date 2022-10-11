<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { ref } from 'vue'
import { useGame } from '../composables'

const { playStatus } = useGame()
</script>

<template>
  <TBox
    width="50"
    height="2"
    :padding-x="6"
    :justify-content="
      playStatus === 'playing'
        ? 'space-between'
        : 'center'"
  >
    <TText>
      Learn Sort
    </TText>
    <TText v-if="playStatus === 'playing'">
      目录
    </TText>
  </TBox>
</template>
