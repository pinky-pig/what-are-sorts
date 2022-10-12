<script lang="ts" setup>
import { TBox, TText } from '@temir/core'
import { toggleRouter } from '../composables'

const [_, r] = toggleRouter()
</script>

<template>
  <TBox
    width="50"
    height="2"
    :padding-x="6"
    :justify-content="
      r === 'Home'
        ? 'space-between'
        : 'center'"
  >
    <TText color="yellow">
      temir sort !!
    </TText>
    <TText v-if="r !== 'Home'">
      <TText color="yellow">
        {{ r }}
      </TText>
    </TText>
  </TBox>
</template>
