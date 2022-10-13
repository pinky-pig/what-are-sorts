<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { useArea } from '../composables'

const numberList = [3, 5, 6, 1, 9, 8, 7, 4, 2]

const symbolFn = v => Symbol(v)
</script>

<template>
  <TBox
    :width="65"
    :height="30"
    border-style="bold"
    flex-direction="column"
    justify-content="center"
    align-items="center"
  >
    <!-- 面板，底部对齐 -->
    <TBox flex-direction="column" :height="20" justify-content="flex-end">
      <!-- 数字 around 分布 -->
      <TBox
        :width="60"
        border-style="round"
        :padding="2"
        flex-direction="row"
        justify-content="space-around"
      >
        <!-- 每个元素的高度不尽相同 -->

        <TBox
          v-for="(n, x) in numberList"
          :key="x"
          align-items="center"
          justify-content="flex-end"
          flex-direction="column"
        >
          <TText v-for="i in n" :key="symbolFn(i)">
            ██
          </TText>

          <TText>
            {{ n }}
          </TText>
        </TBox>
      </TBox>
    </TBox>
    <!-- 按钮 -->
    <TBox
      :width="65" :height="3"
      flex-direction="row" justify-content="center" align-items="center"
    >
      <TBox
        border-style="round"
        justify-content="center"
        :width="20"
        :margin-right="5"
      >
        <TText>
          {{ '<-' }} 后退
        </TText>
      </TBox>

      <TBox
        border-style="round"
        justify-content="center"
        :width="20"
        border-color="yellow"
      >
        <TText color="yellow">
          前进 {{ '->' }}
        </TText>
      </TBox>
    </TBox>
  </TBox>
</template>
