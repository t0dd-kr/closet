<script setup>
  import { ref } from 'vue'
  import Button from '@/components/UI/Button.vue'
  import Radio from '@/components/UI/Radio.vue'

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
        <div class="flex justify-center text-white text-xl mt-10">
          <i>Current</i>
        </div>
        <div class="flex justify-center justify-items-center mt-2">
          <Button class="font-sans rounded-md px-0 py-0 w-16 h-16" :color="$store.state.setting.color.primary"></Button>
        </div>
        <div class="flex flex-col justify-center justify-items-center mt-10">
          <div class="flex justify-center justify-items-center gap-4 flex-wrap p-16">
            <Button class="font-sans rounded-md px-0 py-0 w-16 h-16" :color="color" v-for="color in $store.state.colors" @click="$store.state.setting.color.primary = color, step = 2"></Button>
          </div>
        </div>
        <!-- <div class="flex justify-center justify-items-center mt-10">
          <Button class="font-sans" @click="step = 2">Hello!</Button>
        </div> -->
      </div>
      <div class="step" v-else-if="step == 2">
        <h1 class="text-4xl font-bold font-serif text-center text-white">
          Let's choose your <i>Secondary Color</i>!
        </h1>
        <div class="flex justify-center justify-items-center mt-10">
          <Button class="font-sans rounded-md px-0 py-0 w-16 h-16" :color="$store.state.setting.color.secondary"></Button>
        </div>
        <div class="flex flex-col justify-center justify-items-center mt-10">
          <div class="flex justify-center justify-items-center gap-4 flex-wrap p-16">
            <Button class="font-sans rounded-md px-0 py-0 w-16 h-16" :color="color" v-for="color in $store.state.colors" @click="$store.state.setting.color.secondary = color, step = 3"></Button>
          </div>
        </div>
      </div>
      <div class="step" v-else-if="step == 3">
        <h1 class="text-4xl font-bold font-serif text-center text-white">
          Which one do you like?
        </h1>
        <div class="flex flex-col justify-center justify-items-center mt-10 gap-4">
          <div class="flex justify-center justify-items-center gap-4 flex-wrap" v-for="font in ['!font-sans', '!font-serif', '!font-gothic', '!font-mono']" :key="font">
            <Button :class="`${font} ${rounded} w-40`" v-for="rounded in ['!rounded-none', '!rounded-sm', '!rounded-md', '!rounded-lg', '!rounded-xl']" :key="rounded" @click="$store.state.setting.font = font.replace('!', ''), $store.state.setting.rounded = rounded.replace('!', ''), step = 4">Button</Button>
          </div>
        </div>
      </div>
      <div class="step" v-else-if="step == 4">
        <h1 class="text-4xl font-bold font-serif text-center text-white">
          Which one do you like?
        </h1>
        <div class="flex flex-col justify-center justify-items-center mt-10 gap-4">
          <div class="flex justify-center justify-items-center gap-4 flex-wrap">
            <Radio v-model="$store.state.setting.radioType" value="OUTLINE"/>
            <Radio v-model="$store.state.setting.radioType" value="FILL" type="FILL"/>
            <!-- <Radio v-model="radioType" value="CHECK" type="CHECK"/> -->
          </div>
        </div>
        <div class="flex justify-center justify-items-center mt-10">
          <Button class="font-sans" @click="step = 5">This one!</Button>
        </div>
      </div>
      <div class="step" v-else-if="step == 5">
        <h1 class="text-4xl font-bold font-serif text-center text-white">
          Result
        </h1>
        <div class="text-white flex justify-center mt-10">
          <pre :class="`bg-${$store.state.setting.color.primary} !bg-opacity-25 rounded-xl p-10`">{{ $store.state.setting }}</pre>
        </div>
        <div class="flex justify-center justify-items-center mt-10">
          <Button class="font-sans" @click="step = 0">Go Home</Button>
        </div>
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