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
  <div :class="`button text-white rounded-lg text-xl py-4 px-10 inline-flex justify-center justify-items-center hover:cursor-pointer transition-all ${color || $store.state.setting.color.primary} ${$attrs.class}`">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>