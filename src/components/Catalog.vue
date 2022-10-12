<script lang="ts" setup>
import { computed, ref } from 'vue'
import { TBox, TText } from '@temir/core'
import { TTab, TTabs } from '@temir/tab'
import { CATALOG } from '../composables'
// tabs 内容
const tabs = Object.keys(CATALOG)
// 当前选中的tab内容
const activeIndex = ref(0)
const selectedText = computed(() => tabs[activeIndex.value])
// tab下的页面
const list = computed(() => CATALOG[selectedText.value])

const key = ref(0)
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
    <TBox flex-direction="column" :width="45">
      <TBox
        v-for="user in list"
        :key="user.id"
        :border-color="user.id === key ? 'yellow' : 'gray'"
        :border-style="user.id === key ? 'doubleSingle' : 'classic'"
      >
        <TBox width="10%">
          <TText>
            {{ user.id }}
          </TText>
        </TBox>

        <TBox width="50%">
          <TText>
            {{ user.name }}
          </TText>
        </TBox>

        <TBox width="40%">
          <TText>
            {{ user.level }}
          </TText>
        </TBox>
      </TBox>
    </TBox>

    <!--  -->
  </TBox>
</template>
