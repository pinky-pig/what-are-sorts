<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
</script>

<template>
  <TBox
    :width="65"
    :height="30"
    border-style="round"
    flex-direction="column"
    justify-content="center"
    align-items="center"
  >
    <TBox :height="3">
      <TText color="#fff">
        学习
      </TText>
    </TBox>

    <TBox :height="3">
      <TBox
        border-style="round"
        justify-content="center"
        :width="20"
        :margin-right="5"
        border-color="yellow"
      >
        <TText color="yellow">
          Start (Enter)
        </TText>
      </TBox>

      <TBox
        border-style="round"
        justify-content="center"
        :width="20"
      >
        <TText>
          Quit (ESC)
        </TText>
      </TBox>
    </TBox>
  </TBox>
</template>
