import type { GlobalThemeOverrides } from 'naive-ui'
import { computed, watch } from 'vue'
import { darkTheme } from 'naive-ui'
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/store'
import { customTheme } from '@/settings'

export function useTheme() {
  const appStore = useAppStore()

  const isDark = computed(() => {
    return appStore.theme === 'dark'
  })

  const theme = computed(() => {
    return isDark.value ? darkTheme : undefined
  })

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    if (isDark.value) {
      return customTheme.naiveThemeOverridesDark
    }
    return customTheme.naiveThemeOverridesLight
  })

  const tailWindDark = useDark()

  const toggleTailWindDark = useToggle(tailWindDark)

  const toggleDark = () => {
    toggleTailWindDark()
  }

  watch(
    () => isDark.value,
    (_) => {
      toggleDark()
    },
    { immediate: true },
  )

  return { theme, themeOverrides }
}

export function setupTheme() {
  useTheme()
}
