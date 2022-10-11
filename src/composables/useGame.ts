import { ref } from 'vue'
import { useInput } from '@temir/core'

// 还未开始 . 正在 . 结束 . 退出
const playStatus = ref('unplayed')

export function useGame() {
  function toggle(status: 'unplayed' | 'playing' | 'over' | 'exit') {
    playStatus.value = status
  }

  useInput((input, { escape }) => {
    if (escape) {
      toggle('exit')
      setTimeout(() => {
        process.exit(0)
      }, 0)
    }

    if (playStatus.value === 'playing')
      return

    const retryKey = ['r', 'R']
    if (retryKey.includes(input))
      console.log('重新开始')

    if (['s', 'S', ...retryKey].includes(input))
      toggle('playing')
  }, {
    isActive: true,
  })

  return {
    playStatus,
    toggle,
  }
}
