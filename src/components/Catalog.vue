<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { TBox, TText, useInput } from '@temir/core'
import { TTab, TTabs } from '@temir/tab'
import { CATALOG, toggleCatalog, toggleRouter } from '../composables'

// tabs 内容
const tabs = Object.keys(CATALOG)
// 当前选中的tab内容
const kindIndex = ref(0)
const [kindFn,, rowFn] = toggleCatalog()

const selectedText = computed(() => tabs[kindIndex.value])
// 进入这个页面的时候，就将目录信息存入闭包全局变量
watch(() => kindIndex.value, () => {
  kindFn(selectedText.value)
  console.log(selectedText.value)
}, {
  immediate: true,
})

// tab下的页面
const rowIndex = ref(0)
const list = computed(() => CATALOG[selectedText.value])
watch(() => kindIndex.value, () => {
  rowIndex.value = 0
  rowFn(rowIndex.value)
  console.log(rowIndex.value)
}, {
  immediate: true,
})

// 切换下面的 index
useInput(onKeyBoard, { isActive: true })
function onKeyBoard(_, keys) {
  const { upArrow, downArrow } = keys
  if (downArrow) {
    rowIndex.value = rowIndex.value + 1 > list.value.length - 1 ? 0 : rowIndex.value + 1
    rowFn(rowIndex.value)
    return
  }
  if (upArrow) {
    rowIndex.value = rowIndex.value - 1 < 0 ? list.value.length - 1 : rowIndex.value - 1
    rowFn(rowIndex.value)
  }
}
</script>

<template>
  <TBox
    :width="65"
    :height="30"
    border-style="bold"
    flex-direction="column"
    align-items="center"
  >
    <!-- tab -->
    <TBox :margin="2">
      <TTabs :on-change="(index) => kindIndex = +index">
        <TTab v-for="item in tabs" :key="item">
          {{ item }}
        </TTab>
      </TTabs>
    </TBox>

    <!-- table -->
    <TBox flex-direction="column" :width="45">
      <TBox
        v-for="item in list"
        :key="item.id"
        :border-color="item.id === rowIndex ? 'yellow' : 'gray'"
        :border-style="item.id === rowIndex ? 'doubleSingle' : 'classic'"
      >
        <TBox width="10%">
          <TText>
            {{ item.id }}
          </TText>
        </TBox>

        <TBox width="50%">
          <TText>
            {{ item.name }}
          </TText>
        </TBox>

        <TBox width="40%">
          <TText>
            {{ item.level }}
          </TText>
        </TBox>
      </TBox>
    </TBox>

    <!--  -->
  </TBox>
</template>
