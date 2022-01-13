<script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    type: {
      type: String,
      default: 'OUTLINE',
      validator: v => ['FILL', 'OUTLINE', 'CHECK'].includes(v),
    },
    modelValue: {
      type: [Boolean, String, Number],
      required: true
    },
    value: { },
    disabled: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['update:modelValue'])

  let isActive = computed(() => {
    if(props.value === undefined || props.value === null) {
      return props.modelValue ? true : false
    } else {
      return props.modelValue == props.value ? true : false
    }
  })
  
  function onClick() {
    if(props.value === undefined || props.value === null) {
      emit('update:modelValue', !props.modelValue)
    } else {
      emit('update:modelValue', props.value)
    }
  }
</script>

<template>
  <div 
    :class="[{
      checkbox: true,
      active: isActive,
    }, type]"
    @click="onClick"
  >
    <div class="outer-circle">
      <div class="inner-circle"></div>
    </div>
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
  .checkbox {
    @apply flex justify-center justify-items-center box-border select-none cursor-pointer;
    
    &.OUTLINE {
      & .outer-circle {
        @apply flex justify-center justify-items-center box-border border-2 border-solid border-gray-500 rounded-full mr-2 w-5 h-5 transition-all duration-200 p-1;
        & .inner-circle {
          @apply w-full h-full rounded-full box-border transition-all duration-200; 
        }
      }
      &.active {
        & .outer-circle {
          @apply border-2 border-solid border-amber-500;
          & .inner-circle {
            @apply bg-amber-500;
          }
        }
      }
    }

    &.FILL {
      & .outer-circle {
        @apply flex justify-center justify-items-center box-border border-2 border-solid border-gray-500 rounded-full mr-2 w-5 h-5 p-0 relative;
        & .inner-circle {
          @apply absolute top-0 left-0 w-full h-full rounded-full box-border transition-all duration-200; 
        }
      }
      &.active {
        & .outer-circle {
          @apply border-0 border-amber-500;
          & .inner-circle {
            @apply bg-amber-500 ;
          }
        }
      }
    }

    &.CHECK {
      & .outer-circle {
        @apply flex justify-center justify-items-center box-border border-2 border-solid border-gray-500 rounded-full mr-2 w-5 h-5 transition-all duration-200 p-1;
        & .inner-circle {
          @apply w-full h-full rounded-full box-border transition-all duration-200; 
        }
      }
    }
  }
</style>