<script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()
  const props = defineProps({
    color: {
      type: String,
    },
  })
</script>

<template>
  <div :class="`text-white rounded-lg text-xl py-4 px-10 inline-flex hover:cursor-pointer transition-all button filled ${color || $store.state.color.primary}`">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>