<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useArea } from '../composables'

const { grids, backgroundIcon, initArena } = useArea()

function normalizeItem(
  x: number, y: number,
) {
  return backgroundIcon
}
initArena()
</script>

<template>
  <TBox
    :width="65"
    :height="30"
    border-style="bold"
    flex-direction="column"
    justify-content="center"
  >
    <TBox
      v-for="(_, x) in grids"
      :key="x"
      flex-direction="row"
    >
      <TBox
        v-for="(__, y) in _"
        :key="`${x}-${y}`"
      >
        <TText>
          {{ normalizeItem(x, y) }}
        </TText>
      </TBox>
    </TBox>
  </TBox>
</template>
