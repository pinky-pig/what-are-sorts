<script lang="ts" setup>
import { TBox, TNewline, TText } from '@temir/core'
const list = [
  { id: 0, name: '冒泡排序', level: '⭐' },
  { id: 1, name: '插入排序', level: '⭐⭐' },
  { id: 2, name: '快速排序', level: '⭐⭐⭐' },
  { id: 3, name: '归并排序', level: '⭐⭐' },
  { id: 4, name: '堆排序  ', level: '⭐⭐⭐' },
  { id: 5, name: '选择排序', level: '⭐⭐' },
]
</script>

<template>
  <TBox
    flex-direction="column"
    :margin="1"
    :width="30"
    border-style="round"
  >
    <TBox>
      <TBox width="20%">
        <TText>序号</TText>
      </TBox>

      <TBox width="50%">
        <TText>名称</TText>
      </TBox>

      <TBox width="40%">
        <TText>难易</TText>
      </TBox>
    </TBox>

    <TBox v-for="it in list" :key="it.id">
      <TBox width="20%">
        <TText>{{ it.id }}</TText>
      </TBox>

      <TBox width="50%">
        <TText>{{ it.name }}</TText>
      </TBox>

      <TBox width="40%">
        <TText>{{ it.level }}</TText>
      </TBox>
    </TBox>
  </TBox>
</template>
