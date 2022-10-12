import { ref } from 'vue'
import { useInput } from '@temir/core'
import { ROUTER } from '.'

const router = ref('Home')
// 用一个闭包缓存路由
export function toggleRouter(): any[] {
  function fn(status?: 'Home' | 'Catalog' | 'Detail'): string {
    if (status)
      router.value = status
    return router.value
  }
  return [fn, router]
}

export function useRouter() {
  const [toggle] = toggleRouter()

  useInput((input, { escape }) => {
    // 返回主页面
    if (escape)
      toggle('Home')

    // 返回上一级路由页面
    const retryKey = ['r', 'R']
    if (retryKey.includes(input)) {
      const index = ROUTER.findIndex(it => it === router.value)
      toggle(ROUTER[index - 1] || ROUTER[index])
    }

    // 进入下一路由页面
    if (['s', 'S'].includes(input)) {
      const index = ROUTER.findIndex(it => it === router.value)
      toggle(ROUTER[index + 1] || ROUTER[index])
    }
  }, {
    isActive: true,
  })

  return {
    router,
    toggle,
  }
}
