<template>
  <div class="navbar bg-[#F3F4F6] shadow-sm justify-between h-28 border-b border-black mb-10">
    <!-- Gauche : bouton Home -->
    <div class="flex-none">
      <NuxtLink to="/" class="btn btn-ghost btn-square text-gray-800 dark:text-gray-800 active:text-gray-800 dark:active:text-gray-800">
        <!-- Icône maison -->
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="h-24 w-24">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h14a1 1 0 001-1V10" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Centre : logo -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <NuxtLink to="/">
        <img src="/Logo.png" alt="Logo" class="h-25" />
      </NuxtLink>
    </div>

    <!-- Droite : bouton info -->
    <div class="flex-none">
      <NuxtLink to="/legal/howItWorks">
          <button class="btn btn-ghost btn-square">
          <!-- Icône info -->
          <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24" 
              stroke-width="1.5" 
              stroke="currentColor" 
              class="h-24 w-24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>


<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>