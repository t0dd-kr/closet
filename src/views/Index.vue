<script setup>
import { useMouse, usePreferredDark, useLocalStorage } from '@vueuse/core'

const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage(
  'my-storage', 
  {
    name: 'Apple',
    color: 'red',
  },
)

</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  {{ x }} {{ y }} {{ store.name }}
</template>

<style scoped lang="scss">

</style>