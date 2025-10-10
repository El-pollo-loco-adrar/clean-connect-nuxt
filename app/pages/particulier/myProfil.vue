<template>
  <div class="flex items-center justify-center">
    <div class="card w-full max-w-sm bg-[#F3F4F6] shadow-xl border pb-12">
      <h1 class="text-2xl font-bold text-center mt-8">Mon profil</h1>
      <hr class="border-t-2 border-black m-8 mx-16" />
      <form @submit.prevent="handleSubmit" action="" method="post"class="flex flex-col mb-4 w-full">

        <!--Nom-->
        <label class="text-center text-xl" for="lastName">Nom</label>
        <input 
          v-model="lastName" 
          class="input border rounded p-2 bg-white text-gray-800 dark:bg-white dark:text-gray-800 mt-2 w-64 mx-auto"
          type="text" 
          id="lastName" 
          name="lastName" 
          required
          placeholder="Dupont"
        >
        <!--Prénom-->
        <label class="text-center text-xl mt-4" for="firstName">Prénom</label>
        <input 
          v-model="firstName" 
          class="input border rounded p-2 bg-white text-gray-800 dark:bg-white dark:text-gray-800 mt-2 w-64 mx-auto"
          type="text" 
          id="firstName" 
          name="firstName" 
          required
          placeholder="Antoine"
        >
        <!--Téléphone-->
        <label class="text-center text-xl mt-4" for="phoneNumber">Numéro de téléphone</label>
        <input 
          v-model="phoneNumber" 
          class="input border rounded p-2 bg-white text-gray-800 dark:bg-white dark:text-gray-800 mt-2 w-64 mx-auto"
          type="tel"
          id="phoneNumber" 
          name="phoneNumber" 
          required
          placeholder="+33 6 12 34 56 78"
        >
        <!--Mot de passe-->
        <label class="text-center text-xl mt-4" for="password">Mon mot de passe</label>
        <input 
          v-model="password" 
          class="input border rounded p-2 bg-white text-gray-800 dark:bg-white dark:text-gray-800 mt-2 w-64 mx-auto"
          type="password"
          id="password" 
          name="password" 
          required
          placeholder="****"
        >
        <!--Confirmation mdp-->
        <label class="text-center text-xl mt-4" for="confirmPassword">Confirmation du mot de passe</label>
        <input 
          v-model="confirmPassword" 
          class="input border rounded p-2 bg-white text-gray-800 dark:bg-white dark:text-gray-800 mt-2 w-64 mx-auto"
          type="password"
          id="confirmPassword" 
          name="confirmPassword" 
          required
          placeholder="****"
        >

        <button 
          type="submit" 
          class="btn bg-[#2563EB]/79 w-fit px-6 mt-8 mx-auto text-white border-2 border-black rounded-4"
          @click.prevent="handleSubmit"
        >Mettre à jour</button>
      </form>

    </div>
  </div>
</template>

<script setup >
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