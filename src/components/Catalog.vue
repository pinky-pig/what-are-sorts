<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TBox, TText } from '@temir/core'
import { TTab, TTabs } from '@temir/tab'
const tabs = ['Vue', 'React', 'Angular', 'Solid', 'Svelte']
const activeIndex = ref(0)
const selectedText = computed(() => tabs[activeIndex.value])

const users = new Array(10).fill(true).map((_, index) => ({
  id: index,
  name: 'Tom',
  email: '163@qq.com',
}))
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
    <TBox flex-direction="column" :width="55" border-style="round">
      <TBox>
        <TBox width="10%">
          <TText>ID</TText>
        </TBox>

        <TBox width="45%">
          <TText>Name</TText>
        </TBox>

        <TBox width="45%">
          <TText>Email</TText>
        </TBox>
      </TBox>

      <TBox v-for="user in users" :key="user.id">
        <TBox width="10%">
          <TText>{{ user.id }}</TText>
        </TBox>

        <TBox width="45%">
          <TText>{{ user.name }}</TText>
        </TBox>

        <TBox width="45%">
          <TText>{{ user.email }}</TText>
        </TBox>
      </TBox>
    </TBox>

    <!--  -->
  </TBox>
</template>
