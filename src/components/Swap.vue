<script lang="ts" setup>
import { TBox, TText, useInput } from '@temir/core'
import { onMounted } from 'vue'
import { useBody, useSwap } from '../composables'
const symbolFn = i => Symbol(i)

const { grids, basicX, basicY } = useSwap()

const numberList = [3, 5, 6, 1, 9, 8, 7, 4, 2]
const numBody = numberList.map((item, index) => {
  return Array.from({ length: numberList[index] }, (i, idx) => (380 + index * 2) - basicX * idx)
})
const { bodyL, bodyR, control } = useBody(numBody[0].reverse(), numBody[5].reverse())

function normalizeItem(i: number) {
  if (bodyL.value.includes(Number(i)))
    return 'yellow'
  if (bodyR.value.includes(Number(i)))
    return 'green'
  if (numBody.flat().includes(Number(i)))
    return 'blue'
  else
    return 'white'
}

onMounted(() => {
  control()
})
</script>

<template>
  <TBox
    :width="66"
    :height="30"
    border-style="round"
    flex-direction="column"
    justify-content="flex-end"
  >
    <TBox
      v-for="(_, x) in basicX"
      :key="symbolFn(x)"
      flex-direction="row"
    >
      <TBox
        v-for="(__, y) in basicY"
        :key="symbolFn(y)"
      >
        <TText :color="normalizeItem(grids[x][y])">
          {{ '██' }}
        </TText>
      </TBox>
    </TBox>
  </TBox>
</template>
