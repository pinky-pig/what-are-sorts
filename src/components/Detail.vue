<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
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
    <TBox>
      <TText>
        Selected Text :
        <TText color="red">
          detail
        </TText>
      </TText>
    </TBox>
  </TBox>
</template>
