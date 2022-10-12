import { ref } from 'vue'

type routeType = ['Home', 'Catalog', 'Detail']
export const ROUTER: routeType = [
  'Home',
  'Catalog',
  'Detail',
]

// 用一个闭包缓存路由
const router = ref('Home')
export function toggleRouter(): any[] {
  function fn(status?: 'Home' | 'Catalog' | 'Detail'): string {
    if (status)
      router.value = status
    return router.value
  }
  return [fn, router]
}

export const CATALOG = {
  排序: [
    { id: 0, name: '冒泡排序', level: '⭐', component: 'Bubble' },
    { id: 1, name: '插入排序', level: '⭐⭐', component: 'Other' },
    { id: 2, name: '快速排序', level: '⭐⭐⭐', component: 'Quick' },
    { id: 3, name: '归并排序', level: '⭐⭐', component: 'Other' },
    { id: 4, name: '堆排序  ', level: '⭐⭐⭐', component: 'Other' },
    { id: 5, name: '选择排序', level: '⭐⭐', component: 'Other' },
  ],
  搜索: [
    { id: 0, name: '广度搜索', level: '⭐', component: 'Other' },
    { id: 1, name: '深度搜索', level: '⭐⭐', component: 'Other' },
    { id: 2, name: '二分搜索', level: '⭐⭐⭐', component: 'Other' },
    { id: 3, name: '线性搜索', level: '⭐⭐', component: 'Other' },
  ],
  数据结构: [
    { id: 0, name: '列表', level: '⭐', component: 'Other' },
    { id: 1, name: '数组', level: '⭐⭐', component: 'Other' },
    { id: 2, name: '栈', level: '⭐⭐⭐', component: 'Other' },
    { id: 3, name: '队列', level: '⭐⭐', component: 'Other' },
    { id: 4, name: '哈希表  ', level: '⭐⭐⭐', component: 'Other' },
    { id: 5, name: '堆', level: '⭐⭐', component: 'Other' },
    { id: 6, name: '二叉查找树', level: '⭐⭐', component: 'Other' },
  ],
}

// 用一个闭包缓存目录
const kindIndex = ref(CATALOG[0])
const rowIndex = ref(0)
export function toggleCatalog(): any[] {
  function kindFn(idx: string): void {
    kindIndex.value = idx
  }
  function rowFn(idx: number): void {
    rowIndex.value = idx
  }
  return [kindFn, kindIndex, rowFn, rowIndex]
}
