<script setup>
  import { ref } from 'vue'
  import Button from '@/components/UI/Button.vue'

  let step = ref(0)
</script>

<template>
  <div class="fixed top-0 left-0 flex flex-col justify-center justify-items-center bg-gray-900 w-full h-full">
    <transition name="stepper" mode="out-in">
      <div class="step" v-if="step == 0">
        <h1 class="text-4xl font-bold font-serif text-center text-white">
          Hi, Welcome to Closet!
        </h1>
        <div class="flex justify-center justify-items-center mt-10">
          <Button class="font-sans" @click="step = 1">Hello!</Button>
        </div>
      </div>
      <div class="step" v-else-if="step == 1">
        <h1 class="text-4xl font-bold font-serif text-center text-white">
          Let's choose your <i>Primary Color</i>!
        </h1>
        <div class="flex flex-col justify-center justify-items-center mt-10">
          <div class="flex justify-center justify-items-center gap-4 flex-wrap p-16">
            <Button class="font-sans rounded-md w-10 h-10 px-10 py-10" :color="color" v-for="color in $store.state.colors" @click="$store.state.color.primary = color, step = 0"></Button>
          </div>
        </div>
        <!-- <div class="flex justify-center justify-items-center mt-10">
          <Button class="font-sans" @click="step = 2">Hello!</Button>
        </div> -->
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
  .step {
    @apply w-full h-full flex flex-col justify-center justify-items-center opacity-100;
  }

  .stepper-enter-active {
    transition: opacity .25s .25s;
  }

  .stepper-leave-active {
    transition: opacity .25s;
  }
  .stepper-enter, .stepper-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>