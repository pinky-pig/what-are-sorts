<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TBox, TText } from '@temir/core'
import { TTab, TTabs } from '@temir/tab'
const tabs = ['Vue', 'React', 'Angular', 'Solid', 'Svelte']
const activeIndex = ref(0)
const selectedText = computed(() => tabs[activeIndex.value])

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
    :width="65"
    :height="30"
    border-style="bold"
    flex-direction="column"
    justify-content="center"
    align-items="center"
  >
    <!-- 选择的内容 -->
    <TBox>
      <TText>
        Selected Text :
        <TText color="red">
          {{ selectedText }}
        </TText>
      </TText>
    </TBox>

    <!-- tab -->
    <TBox>
      <TTabs :on-change="(index) => activeIndex = +index">
        <TTab v-for="item in tabs" :key="item">
          {{ item }}
        </TTab>
      </TTabs>
    </TBox>

    <!-- table -->
    <TBox flex-direction="column" :width="45" border-style="round">
      <TBox>
        <TBox width="10%">
          <TText>ID</TText>
        </TBox>

        <TBox width="50%">
          <TText>Name</TText>
        </TBox>

        <TBox width="40%">
          <TText>Email</TText>
        </TBox>
      </TBox>

      <TBox v-for="user in list" :key="user.id">
        <TBox width="10%">
          <TText>{{ user.id }}</TText>
        </TBox>

        <TBox width="50%">
          <TText>{{ user.name }}</TText>
        </TBox>

        <TBox width="40%">
          <TText>{{ user.level }}</TText>
        </TBox>
      </TBox>
    </TBox>

    <!--  -->
  </TBox>
</template>
