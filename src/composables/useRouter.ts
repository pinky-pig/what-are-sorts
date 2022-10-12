import { useInput } from '@temir/core'
import { ROUTER, toggleRouter } from '.'

export function useRouter() {
  const [toggle, router] = toggleRouter()

  useInput((input, keys) => {
    // 返回主页面
    if (keys.escape)
      toggle('Home')

    // 返回上一级路由页面
    const retryKey = ['r', 'R']
    if (retryKey.includes(input)) {
      const index = ROUTER.findIndex(it => it === router.value)
      toggle(ROUTER[index - 1] || ROUTER[index])
    }

    // 进入下一路由页面
    if (keys.return) {
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
