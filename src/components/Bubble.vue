<script lang="ts" setup>
import { TBox, TText ,TNewline} from '@temir/core'
import TSpinner from '@temir/spinner'
import TSelectInput from '@temir/select-input'

const items = [
  { value:'M', label: '冒泡排序', },
  { value:'C', label: '插入排序', },
  { value:'K', label: '快速排序', },
  { value:'G', label: '归并排序', },
  { value:'D', label: '堆排序',   },
  { value:'X', label: '选择排序', },
]
function onSelect(value) {
  console.log('selected', value)
}
</script>

<template>

  <TBox
    :margin="5"
    :width="30"
    :height="5"
    border-style="double"
    justify-content="center"
    align-items="center"
  >
    <TText color="#42b883">
      🌈 Learn Sort !! 
    </TText>
  </TBox>
  
  <TBox 
    flex-direction="column" 
    :margin="1"
    :padding-left="1"
    :width="16" 
    border-style="round"
    >
    <TSelectInput :items="items" :on-select="onSelect" />
  </TBox>

</template>
